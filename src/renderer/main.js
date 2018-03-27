import Vue from 'vue'
import axios from 'axios'
import feather from 'vue-icon'
import VueD3 from 'vue-d3'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/main.css'
import 'animate.css/animate.css'

Vue.use(feather, 'v-icon')
Vue.use(VueD3)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
