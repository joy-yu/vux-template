// common通用方法
export default {
  msg: 'message from @/assets/js/common.js',
  pullupConfig: {
    content: '上拉刷新',
    downContent: '松开刷新',
    upContent: '上拉刷新',
    loadingContent: '加载中...'
  },
  logout: function () {
    this.$http({
      url: '/api/v1/logout'
    })
    .then((res) => {
      if (res.data.code === 0) {
        window.location.href = '/wxe'
      }
    })
  },
  getLoginUserInfo: function () {
    return this.$http({
      url: '/api/v1/user/log_status'
    })
  }
}
