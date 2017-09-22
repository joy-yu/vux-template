<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>VUX</h1>
    </div>
    <group title="group demo">
      <cell title="VUX cell" :value="msg" is-link @click.native="updateUser"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import common from '@/assets/js/common.js'
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },

  methods: {
    getUser () {
      const params = {
        id: 12345
      }
      this.$http.get('/api/v1/user', {params: params})
      .then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    },

    updateUser () {
      const params = {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
      this.$http.post('/api/v1/user', params)
      .then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    }
  },

  mounted () {
    console.log(common.msg)
    this.getUser()
  }
}
</script>

<style lang="less">
.vux-demo {
  text-align: center;
  color: @blue;

  .logo {
    width: 100px;
    height: 100px
  }
}

</style>
