<template>
  <div>
    <ColorNav v-show="token">
      <slot>个人中心</slot>
    </ColorNav>
    <div class="userInfo" v-show="token">
      <div class="inner">
        <div class="portrait" @click="toSetting">
          <img src="https://pic2.zhimg.com/80/v2-3f71bc3a7c067ccca02edeadc0059936_720w.jpg" />
        </div>
        <div class="nickname">
          <span>养你致富hhh</span>
        </div>
      </div>
    </div>
    <div class="noLogger" v-show="!token">
      <van-button type="default" @click="goLogin">立即登录</van-button>
    </div>
    <van-tabbar v-model="active" :fixed="false" inactive-color="orange">
      <van-tabbar-item icon="like">收藏</van-tabbar-item>
      <van-tabbar-item icon="star">关注</van-tabbar-item>
      <van-tabbar-item icon="coupon">卡券</van-tabbar-item>
    </van-tabbar>
    <van-tabbar v-model="active" :fixed="false" inactive-color="orange">
      <van-tabbar-item icon="card">待付款</van-tabbar-item>
      <van-tabbar-item icon="send-gift">待收货</van-tabbar-item>
      <van-tabbar-item icon="smile-comment">评价</van-tabbar-item>
    </van-tabbar>
    <van-cell title="全部订单" is-link />
    <van-cell title="领券中心" is-link />
    <van-cell title="我的客服" is-link />
    <van-cell title="关于本APP" is-link />
    <van-cell title="设置" is-link @click="toSetting" />
    <van-cell title="分享给好友" @click="showShare = true" is-link />
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    <van-cell title="退出登录" v-show="token" is-link @click="logout" />
  </div>
</template>

<script>
import ColorNav from 'components/navBar/ColorNav'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: { ColorNav },
  data () {
    return {
      active: -1,
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' }
      ]
    }
  },
  created () {
    this.setBottomNav(true)
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  methods: {
    ...mapMutations({
      setBottomNav: 'SET_BOTTOM_NAV',
      setToken: 'SET_TOKEN'
    }),
    onSelect (option) {
      this.$toast(option.name)
      this.showShare = false
    },
    toSetting () {
      // this.$router.replace('/setting')
      this.$router.push({
        path: '/setting'
      })
      this.setBottomNav(false)
    },
    // toLogin () {
    //   this.$router.push({
    //     path: '/login'
    //   })
    //   this.setBottomNav(false)
    // },
    goLogin () {
      this.$router.push({
        path: '/login'
      })
      this.setBottomNav(false)
    },
    logout () {
      this.setToken()
      this.$router.push({
        path: '/login'
      })
      this.setBottomNav(false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.noLogger
  background-color #fff
  text-align center
  font-size 14px
  margin 15px 0px
  .van-button
    width 80%
    border-radius 20px
    margin-bottom 15px
.userInfo
  text-align center
  background-image url('http://ku.90sjimg.com/back_pic/05/03/08/9359565bf290660.jpg%21/watermark/text/OTDorr7orqE=/font/simkai/align/southeast/opacity/20/size/50') // ku.90sjimg.com/back_pic/05/03/08/9359565bf290660.jpg%21/watermark/text/OTDorr7orqE=/font/simkai/align/southeast/opacity/20/size/50)
  background-size 334%
  position relative
  height 210px
  width 100%
  .inner
    position absolute
    left 38%
    top 40%
    .portrait
      width 60px
      height 60px
      margin 0 auto
      border-radius 50%
      padding 5px
      border 1px solid bisque
      img
        width 100%
        height 100%
        border-radius 50%
    .nickname
      margin-top 10px
      span
        display inline-block
        font-weight bold
        letter-spacing 2px
        color #ffffff
.van-tabbar
  border-radius 15px 15px 0 0
  top -10px
  background #ffff
  height 80px
</style>
