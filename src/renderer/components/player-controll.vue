<template>
  <div class="controll">
    <div
      class="controll__btn"
      v-if="getPlayerReady"
    >
      <v-icon
        name="chevron-left"
        width="40"
        class="controll__icon"
        :color="!showPrevArrow ? 'rgba(0, 0, 0, .5)' : 'black'"
      />
      <v-icon
        :name="getIsPlayState ? 'pause' : 'play'"
        width="45"
        class="controll__icon"
        @click.native="getIsPlayState ? pause() : play()"
      />
      <v-icon
        name="chevron-right"
        width="40"
        class="controll__icon"
        :color="!showNextArrow ? 'rgba(0, 0, 0, .5)' : 'black'"
      />
    </div>
  </div>
</template>

<style scoped>
  .controll {
    display: flex;
    width: 100%;
  }
  .controll__btn {
    display: flex;
    width: 100%;
    padding: 15px;
    justify-content: space-around;
    align-items: center;
  }
  .controll__icon {
    cursor: pointer;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import analyser from '@/utils/analyser'
import { EventBus } from '@/utils/event-bus'


export default {
  computed: {
    ...mapGetters([
      'getIsPlayState',
      'getPlayerReady',
      'getTracks',
      'getActiveTrack',
      'showNextArrow',
      'showPrevArrow',
    ]),
  },
  methods: {
    ...mapActions({
      togglePlayState: 'PLAY_TRACK',
      setActiveTrack: 'SET_ACTIVE_TRACK',
    }),
    play() {
      this.togglePlayState(true)
      analyser.play()
    },
    pause() {
      this.togglePlayState(false)
      analyser.pause()
    },
  },
  mounted() {
    analyser.audioSetSource(this.getTracks[this.getActiveTrack])
    EventBus.$on('audioEnded', () => {
      if (!this.showNextArrow) {
        this.togglePlayState(false)
        return
      }
      this.setActiveTrack(this.getActiveTrack + 1)
      analyser.play(
        this.getTracks[this.getActiveTrack],
        true,
      )
    })
  },
  destroyed() {
    this.pause()
  }
}
</script>
