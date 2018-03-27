<template>
  <player-side
    v-show="!isFrontSide"
    class="side"
  >
    <div class="side__header">
      <v-icon
        name="chevron-left"
        width="24"
        class="side__icon"
        @click.native="sideUpdate"
      />
      <h3>Up Next</h3>
    </div>
    <track-list />
  </player-side>
</template>

<style scoped>
  .side img {
    width: 100%;
    height: auto;
    max-height: 320px;
    border-radius: 2px;
  }
  .side__header {
    width: 100%;
    padding: 1px 15px;
    background: rgba(11, 11, 11, 0.1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
  }
  .side__icon {
    cursor: pointer;
  }
  .side__header h3 {
    margin-left: 15px;
    font-size: 16px;
  }
</style>

<script>
import PlayerSide from '@/components/player-side'
import TrackList from '@/components/track-list'


export default {
  components: {
    'player-side': PlayerSide,
    'track-list': TrackList,
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
}
</script>
