import Vue from 'vue'

// common通用方法
export default {

  pullupConfig: {
    content: '上拉刷新',
    downContent: '松开刷新',
    upContent: '上拉刷新',
    loadingContent: '加载中...'
  },
  logout () {
    Vue.http.get('/api/v1/logout')
    .then((res) => {
      if (res.data.code === 0) {
        this.$route.push({path: '/'})
      }
    })
  },
  getLoginUserInfo () {
    return Vue.http.get('/api/v1/user/log_status')
  }
}
