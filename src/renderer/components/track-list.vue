<template>
  <ul class="list-wrapper">
    <li
      v-for="(item, index) in getTracks"
      @click="play(index)"
      :class="{
        'list-wrapper__items': true, 
        'list-wrapper__items_active': getActiveTrack == index,
      }"
      :key="index"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped>
  .list-wrapper {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .list-wrapper__items {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    flex-direction: column;
    cursor: pointer;
    transition: .1s;
    padding: 25px 15px;
    font-size: 12px;
    font-weight: 300;
    border-bottom: 1px solid #e6e6e6;
  }
  .list-wrapper__items:hover {
    background: #EB2045;
    color: #fff;
  }
  .list-wrapper__items_active {
    background: #EB2045;
    color: #fff;
  }
  hr {
    width: 100%;
    margin: 0;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import analyser from '@/utils/analyser'


export default {
  computed: {
    ...mapGetters([
      'getTracks',
      'getIsPlayState',
      'getActiveTrack',
    ]),
  },
  methods: {
    ...mapActions({
      togglePlayState: 'PLAY_TRACK',
      setActiveTrack: 'SET_ACTIVE_TRACK',
    }),
    play(index) {
      this.setActiveTrack(index)
      this.togglePlayState(true)
      analyser.play(
        this.getTracks[this.getActiveTrack],
        true,
      )
    },
  },
}
</script>
