<template>
  <player-side
    v-show="isFrontSide"
    class="side"
  >
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/345377/thousand-thursday%402x.jpg"
    />
    <player-controll
      :sideUpdate="sideUpdate"
    />
  </player-side>
</template>

<style scoped>
  .side img {
    width: 100%;
    height: auto;
    max-height: 320px;
    border-radius: 2px;
  }
</style>

<script>
import { mapGetters } from 'vuex'
import PlayerSide from '@/components/player-side'
import PlyerControll from '@/components/player-controll'


export default {
  components: {
    'player-side': PlayerSide,
    'player-controll': PlyerControll,
  },
  props: {
    isFrontSide: {
      type: Boolean,
      default: false,
    },
    sideUpdate: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
      'getTracks',
    ]),
  },
}
</script>
