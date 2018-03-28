<template>
  <transition
    :enter-active-class="`animated ${enter}`"
    :leave-active-class="`animated ${leave}`"
  >
    <div class="side">
      <slot />
    </div>
  </transition>
</template>

<style scoped>
  .side {
    width: 320px;
    height: 510px;
    background: #fff;
    position: absolute;
    border-radius: 5px;
  }
</style>

<script>
export default {
  props: {
    enter: {
      type: String,
      default: 'rotateInUpLeft',
    },
    leave: {
      type: String,
      default: 'rotateOutUpLeft',
    },
  },
}
</script>
