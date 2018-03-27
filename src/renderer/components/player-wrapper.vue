<template>
  <div class="wrapper">
    <back-side
      :isFrontSide="isFrontSide"
      :sideUpdate="sideUpdate"
    />
    <front-side
      :isFrontSide="isFrontSide"
      :sideUpdate="sideUpdate"
    />
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center
  }
</style>

<script>
import BackSide from '@/components/back-side'
import FrontSide from '@/components/front-side'


export default {
  components: {
    'back-side': BackSide,
    'front-side': FrontSide,
  },
  data: () => ({
    isFrontSide: true,
  }),
  methods: {
    sideUpdate() {
      this.isFrontSide = !this.isFrontSide
    }
  },
}
</script>
