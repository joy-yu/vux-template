import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: '', history 模式下应用的基路径。如访问http://127.0.0.1/wxe，base 为 wxe
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
