// common通用方法

export default {
  checkMobile: mobile => /^1[0-9]{10}$/.test(mobile),
  checkPassword: pwd => /^[a-zA-Z0-9]{6,20}$/.test(pwd),
}
