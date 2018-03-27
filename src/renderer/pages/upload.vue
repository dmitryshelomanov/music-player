<template>
  <div class="upload">
    <drop-zone />
  </div>
</template>

<style scoped>
  .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>

<script>
import DropZone from '@/components/dropzone'


export default {
  components: {
    'drop-zone': DropZone,
  },
}
</script>
