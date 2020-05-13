<!--
 * @author niansnana
 * @Description 逐渐暴躁
 * @Start_Writing_Date 2020-05-11 13:29:44
 * @Last_Modified_Date 2020-05-11 13:29:44
--->
<template>
  <div id="noLogger" v-show="!token">
    <div class="logo">
      <van-image width="100" round src="http://image.niansnana.com/20200511104737.png" />
    </div>
    <div class="info">
      <h1>您还未登录</h1>
      <p>(请先登录/注册再进行此操作)</p>
    </div>
    <div class="control">
      <van-button round block type="danger" @click="login">登录</van-button>
      <p>
        <span @click="register">还未注册？</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  methods: {
    ...mapMutations({
      setBottomNav: 'SET_BOTTOM_NAV'
    }),
    login () {
      this.$router.push({
        path: '/login'
      })
      this.setBottomNav(false)
    },
    register () {
      this.$router.push({
        path: '/register'
      })
      this.setBottomNav(false)
    }
  }
}
</script>

<style lang="stylus" scoped>
#noLogger
  width 100%
  height 100%
  padding 20px 0px
  box-sizing border-box
  background-color #fff
  .logo
    text-align center
    margin 15px 0px
  .info
    text-align center
    h1
      color #7c7c83
    p
      color #999
  .control
    width 90%
    text-align center
    margin 0 auto
    .van-button
      color #fff
    p
      color #4fb2f2
      cursor pointer
      span
        border-bottom 1px solid #4fb2f2
</style>
