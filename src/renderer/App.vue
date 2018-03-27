<template>
  <div id="app">
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'music-player'
  }
</script>
