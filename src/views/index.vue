<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/images/vux_logo.png">
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
import {loginModel} from '@/api'
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
    getLoginUserInfo () {
      this.$store.commit('showLoading', {text:'加载中...'})
      loginModel.getLoginUser().then(res => {
        this.$store.commit('hideLoading')
      })
    }
  },

  mounted () {
    this.getLoginUserInfo()
  }
}
</script>

<style lang="less">
.vux-demo {
  text-align: center;
  color: #6cf;

  .logo {
    width: 100px;
    height: 100px;
  }
}

</style>
