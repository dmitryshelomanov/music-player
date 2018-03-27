<template>
  <ul class="list-wrapper">
    <li
      class="list-wrapper__items"
      v-for="(item, index) in getTracks"
      :key="index"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped>
  .list-wrapper {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .list-wrapper__items {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    flex-direction: column;
    cursor: pointer;
    transition: .5s;
    padding: 25px 15px;
    font-size: 12px;
    font-weight: 300;
    border-bottom: 1px solid #e6e6e6;
  }
  .list-wrapper__items:hover {
    background: #EB2045;
    color: #fff;
  }
  hr {
    width: 100%;
    margin: 0;
  }
</style>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'getTracks',
    ]),
  },
}
</script>
