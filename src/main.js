import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import { AjaxPlugin, ToastPlugin, querystring } from 'vux'

Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)
FastClick.attach(document.body)

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

Vue.http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
Vue.http.interceptors.request.use(config => {
  config.data = querystring.stringify(config.data)
  return config
})

// 响应拦截
Vue.http.interceptors.response.use(res => {
  if (res.data.code !== 0) {
    app.$vux.toast.show({
      text: res.data.msg,
      isShowMask: true
    })
  }
  return res
}, err => {
  if (err.response) {
    switch (err.response.status) {
      case 401:
        router.replace({name: 'login', query: {redirect: router.currentRoute.fullPath}})
    }
  }
  return Promise.reject(err)
})

Vue.config.productionTip = false
