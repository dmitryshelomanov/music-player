<template>
  <div class="controll">
    <div
      class="controll__btn"
      v-if="getPlayerReady"
    >
      <v-icon
        name="chevron-left"
        width="20"
        class="controll__icon"
        :color="!showPrevArrow ? 'rgba(0, 0, 0, .5)' : 'black'"
      />
      <v-icon
        :name="getIsPlayState ? 'pause' : 'play'"
        width="30"
        class="controll__icon"
        @click.native="getIsPlayState ? pause() : play()"
      />
      <v-icon
        name="chevron-right"
        width="20"
        class="controll__icon"
        :color="!showNextArrow ? 'rgba(0, 0, 0, .5)' : 'black'"
      />
    </div>
    <div class="controll__info">
      <h3>{{ getTracks[getActiveTrack].name }}</h3>
    </div>
    <div class="controll__helper-btn">
      <v-icon
        name="list"
        width="20"
        class="controll__icon"
        @click.native="sideUpdate"
      />
    </div>
  </div>
</template>

<style scoped>
  .controll {
    display: flex;
    width: 100%;
    height: 185px;
    flex-direction: column;
    justify-content: space-between;
  }
  .controll__btn {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
  }
  .controll__icon {
    cursor: pointer;
  }
  h3 {
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
  }
  .controll__helper-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    background: #ed1a42;
    border-radius: 0 0 05px 5px;
    box-shadow: 0px -1px 2px #e0d5d5;
    color: white;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import analyser from '@/utils/analyser'
import { EventBus } from '@/utils/event-bus'


export default {
    props: {
    sideUpdate: {
      type: Function,
      required: true,
    },
  },
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
  },
}
</script>
