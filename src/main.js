import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import { AjaxPlugin, querystring } from 'vux'

Vue.use(Vuex)
Vue.use(AjaxPlugin)
FastClick.attach(document.body)

const store = new Vuex.Store({})

store.registerModule('vux', {
  state: {
    loading_show: false,
    loading_text: '',
    toast_show: false,
    toast_text: ''
  },
  mutations: {
    hideLoading (state, payload) {
      state.loading_show = false
    },
    hideToast (state, payload) {
      state.toast_show = false
    },
    showLoading (state, payload) {
      state.loading_show = true
      state.loading_text = payload.text || ''
    },
    showToast (state, payload) {
      state.toast_show = true
      state.toast_text = payload.text || ''
      setTimeout(() => {
        store.commit('hideToast')
      }, 1500)
    }
  }
})

Vue.http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.http.defaults.timeout = 10000

// 请求拦截
Vue.http.interceptors.request.use(config => {
  config.data = querystring.stringify(config.data)
  return config
})

// 响应拦截
Vue.http.interceptors.response.use(res => {
  console.log('响应:', res.config.url, res)
  store.commit('hideLoading')
  return res
}, err => {
  console.log('请求:', err.config.url, err.config)
  store.commit('hideLoading')
  if (err.code === 'ECONNABORTED') {
    store.commit('showToast', { text: '请求超时！请重试！' })
  }
  if (err.response) {
    switch (err.response.status) {
      case 401:
        store.commit('showToast', { text: '登录后才可以操作' })
      /*
      setTimeout(()=>{
        router.replace({name: 'login', query: {redirect: router.currentRoute.fullPath}})
      }, 2000)
      */
    }
  }
  return Promise.reject(err)
})

Vue.config.productionTip = false

/* 微信 JSSDK 相关
router.afterEach((to, from) => {
  Promise.resolve().then(() => {
    Vue.http.get('/api/v1/JSSDK', {
      params: {
        url: window.location.href
      }
    }).then(function (res) {
      let config = res.data
      config.debug = false
      config.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'chooseImage', 'uploadImage']
      wx.config(config)
    })
  })
})
*/

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
