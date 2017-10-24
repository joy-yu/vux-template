import Vue from 'vue'

const login = {
  logout          : params => Vue.http.get(`/api/v1/logout`, { params: params }),
  getLoginUser: params => Vue.http.get(`/api/v1/user/log_status`, { params: params }),

  login           : params => Vue.http.post(`/api/v1/login`, params),

  sendMSN         : params => Vue.http.post(`/api/v1/register_send_sms`, params),
  checkMSN        : params => Vue.http.post(`/api/v1/check_sms`, params),
  register        : params => Vue.http.post(`/api/v1/register`, params),

  resetSendMSN    : params => Vue.http.post(`/api/v1/reset_pwd_send_sms`, params),
  resetCheckMSN   : params => Vue.http.post(`/api/v1/reset_pwd_check_sms`, params),
  reset           : params => Vue.http.post(`/api/v1/reset_pwd`, params),
}

export default login
