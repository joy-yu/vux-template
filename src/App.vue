<template>
  <div id="app">
    <router-view></router-view>
    <loading :show="loading_show" :text="loading_text"></loading>
    <toast :value="toast_show" :text="toast_text" type="text" width="15rem" :is-show-mask="true" position="middle"></toast>

  </div>
</template>

<script>
import { Loading, Toast } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Loading,
    Toast
  },
  computed: {
    ...mapState({
      loading_show: state => state.vux.loading_show,
      loading_text: state => state.vux.loading_text,
      toast_show: state => state.vux.toast_show,
      toast_text: state => state.vux.toast_text,
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

html, body, #app {
  background-color: @bg;
  height: 100%;
}
*{
  box-sizing: border-box;
}
ul,ol{
  list-style: none;
}
a{
  color: inherit;
  text-decoration: none;
}
img{
  max-width: 100%;
  max-height: 100%;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix:after{
  overflow: hidden;
  display: block;
  clear: both;
  height: 0;
  content: '';
}
.clearfix {
  zoom: 1;
}
i{
  display: inline-block;
  background-size: 100% 100%;
  vertical-align: middle;
  background-repeat: no-repeat;
  position: relative;
  top: -2px;
}
.strong{
  font-weight: 500;
  font-size: 1.07rem;
}
.sub{
  color: @gray;
  font-size: .93rem;
}
</style>
