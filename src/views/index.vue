<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>VUX</h1>
    </div>

    <group title="group demo">
      <cell title="VUX cell" :value="msg" is-link @click.native="getLoginUserInfo"></cell>
    </group>

    <toast v-model="info_show" :text="info" type="text" position="middle" is-show-mask></toast>
  </div>
</template>

<script>
import { Group, Cell, Toast } from 'vux'
import common from '@/assets/js/common.js'
export default {
  components: {
    Group,
    Cell,
    Toast
  },
  data () {
    return {
      msg: 'Hello World!',
      userInfo: {},
      info: '',
      info_show: false
    }
  },

  methods: {
    updateUser () {
      const params = {
        id: 12345
      }
      this.$http.post('/api/v1/user', params)
          .then(res => {})
    },

    getLoginUserInfo () {
      common.getLoginUserInfo()
            .then((res) => {
              this.userInfo = res.data
            })
            .catch(e => {
              this.info = 'error from!'
              this.info_show = true
            })
    }
  },

  mounted () {
    this.updateUser()
  }
}
</script>

<style lang="less">
.vux-demo {
  text-align: center;
  color: @blue;

  .logo {
    width: 100px;
    height: 100px;
  }
}

</style>
