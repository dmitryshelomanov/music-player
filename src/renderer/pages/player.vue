<template>
  <div class="main">
    <div class="filter"></div>
    <v-icon
      name="chevrons-left"
      width="24"
      class="main-icon"
      @click.native="goBack"
    />
    <PlayerWrapper />
  </div>
</template>

<style scoped>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
  }

  .main:before, .main:after, div.filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main div.filter {
    filter: blur(2px);
    background: #fff url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/345377/thousand-thursday%402x.jpg') center center / cover;
  }

  .main-icon {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    margin: 24px;
    cursor: pointer;
    transition: .5s;
  }
  
  .main-icon:hover {
    transform: scale(1.3)
  }
</style>


<script>
import { mapActions } from 'vuex'
import PlayerWrapper from '@/components/player-wrapper'

export default {
  components: {
    PlayerWrapper,
  },
  methods: {
    goBack() {
      this.clearState()
      this.$router.push({ name: 'upload' })
    },
    ...mapActions({
      clearState: 'CLEAR_STATE',
    })
  },
}
</script>
