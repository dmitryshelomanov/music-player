import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'upload',
      component: require('@/pages/upload').default,
    },
    {
      path: '/play',
      name: 'player',
      component: require('@/pages/player').default,
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
