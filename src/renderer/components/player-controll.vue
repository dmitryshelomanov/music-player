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
import { Analyser } from '@/utils/analyser'
import { getMusicBuffer } from '@/utils/get-music-buffer'


export default {
  data: () => ({
    analyser: new Analyser(),
  }),
  computed: {
    ...mapGetters([
      'getIsPlayState',
      'getPlayerReady',
    ]),
  },
  methods: {
    ...mapActions({
      togglePlayState: 'PLAY_TRACK',
    }),
    play() {
      this.togglePlayState(true)
      this.analyser.play()
    },
    pause() {
      this.togglePlayState(false)
      this.analyser.stop()
    },
  },
  async mounted() {
    try {
      this.analyser.decodeAudioData(
        await getMusicBuffer('/home/userbq201/Music/Anton_Rothschild_-_03_-_Its_Not_Vegas.mp3')
      )
    }
    catch (error) {
      console.warn(error)
    }
  },
}
</script>
