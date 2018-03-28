<template>
  <div class="upload">
    <h1>Simple Music Player</h1>
    <drop-zone />
    <social-link />
  </div>
</template>

<style scoped>
  .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
  }
</style>

<script>
import DropZone from '@/components/dropzone'
import SocialLink from '@/components/social'


export default {
  components: {
    'drop-zone': DropZone,
    'social-link': SocialLink,
  },
}
</script>
