<template>
  <div class="visualize">
    <svg
      height="500"
      :width="width"
      ref="svgRender"
    />
  </div>
</template>

<style scoped>
  .visualize {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    display: flex;
    align-items: flex-end;
  }
</style>

<script>
import { mapGetters } from 'vuex'
import analyser from '@/utils/analyser'


export default {
  data: () => ({
    width: window.innerWidth,
    barPadding: 1,
  }),
  computed: {
    ...mapGetters([
      'getIsPlayState',
    ]),
  },
  methods: {
    resized() {
      this.width = window.innerWidth
    },
    initial() {
      this.$d3.select(this.$refs.svgRender)
        .selectAll('rect')
        .data(analyser.dataArray)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 4)
        .attr('width', 4)
    },
    registerAnimation() {
      requestAnimationFrame(this.registerAnimation)
      if (!this.getIsPlayState) {
        return
      }
      analyser.updateByteData()
      this.$d3.select(this.$refs.svgRender)
        .selectAll('rect')
        .data(analyser.dataArray)
        .attr('y', (d) => 500 - d)
        .attr('height', (d) => d)
        .attr('fill', (d) => `rgba(244, 138, ${d}, .9)`)
    }
  },
  mounted() {
    window.addEventListener('resize', this.resized)
    this.initial()
    this.registerAnimation()
  },
  destroyed() {
    window.removeEventListener('resize', this.resized)
  }
}
</script>
