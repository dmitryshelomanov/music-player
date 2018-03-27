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
      />
      <v-icon
        :name="getIsPlayState ? 'pause' : 'play'"
        width="50"
        class="controll__icon"
        @click.native="getIsPlayState ? pause() : play()"
      />
      <v-icon
        name="chevron-right"
        width="40"
        class="controll__icon"
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
import { getMusicBuffer } from '@/utils/get-music-buffer'
import audio from '@/utils/audio'
import { setTimeout } from 'timers';


export default {
  computed: {
    ...mapGetters([
      'getIsPlayState',
      'getPlayerReady',
      'getTracks',
    ]),
  },
  methods: {
    ...mapActions({
      togglePlayState: 'PLAY_TRACK',
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
    analyser.audioSetSource(this.getTracks[0])
  },
  destroyed() {
    this.pause()
  }
}
</script>
