<template>
  <div
    :class="{ 'dropzone': true, 'dropzone__error': error }"
    ref="dropzone"
    @dragleave="dragLeave"
    @dragenter.prevent.stop="dragEnter"
    @drop.prevent.stop="handleDrop"
    @dragover.prevent.stop
  >
    <p>
      {{ placeholder }}
    </p>
  </div>
</template>

<style>
  .dropzone {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 480px;
    width: 100%;
    height: 125px;
    border:  2px dashed rgba(121, 183, 125, 1);
    color: rgb(121, 183, 125);
    transition: .5s;
    opacity: .5;
  }
  .dropzone__enter {
    opacity: 1;
    transform: scale(1.1)
  }
  .dropzone__error {
    border-color: red;
    color: red;
  }
</style>

<script>
import { mapActions } from 'vuex'


export default {
  data: () => ({
    error: false,
    placeholder: 'drag & drop music list',
    validTypes: [
      'audio/mp3',
    ],
  }),
  methods: {
    handleDrop(e) {
      this.checkAudioType(e.dataTransfer.files)
    },
    dragLeave() {
      this.$refs.dropzone.classList.remove('dropzone__enter')
    },
    dragEnter() {
      this.$refs.dropzone.classList.add('dropzone__enter')
    },
    checkAudioType(files) {
      for (let i = 0; i < files.length; i++) {
        if (this.validTypes.indexOf(files[i].type) === -1) {
          this.error = true
          this.placeholder = 'invalid type files'
          return
        }
      }
      this.setTracks(files)
      this.$router.push({ name: 'player' })
    },
    ...mapActions({
      setTracks: 'SET_TRACKS',
    }),
  },
}
</script>
