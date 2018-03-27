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
    box-shadow: 0px 0px 15px 0px rgba(230, 126, 126, 0.5);
    transition: all .2s;
    border-radius: 5px;
  }
  .side:hover {
    transform: scale(1.05);
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
