<template>
  <div class="social">
    <v-icon
      name="github"
      width="20"
      class="social__icon"
    />
    <v-icon
      name="facebook"
      width="20"
      class="social__icon"
    />
  </div>
</template>

<style scoped>
  .social {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    margin: 15px;
    justify-content: center;
    align-items: center;
  }
  .social__icon {
    margin-left: 15px;
    cursor: pointer;
  }
</style>
