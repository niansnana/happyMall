<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="个人中心">
      <template #right>
        <van-icon name="setting-o" size="18" color="#0f0f0f" @click="toSetting" />
      </template>
    </van-nav-bar>
    <div class="userInfo">
      <div class="inner">
        <div class="portrait">
          <img src="https://pic2.zhimg.com/80/v2-3f71bc3a7c067ccca02edeadc0059936_720w.jpg" />
        </div>
        <div class="nickname">
          <span>养你致富hhh</span>
        </div>
      </div>
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
    <van-cell title="分享给好友" @click="showShare = true" is-link />
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
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
  methods: {
    ...mapMutations({
      setBottomNav: 'SET_BOTTOM_NAV'
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
    }
  }
}
</script>

<style lang="stylus" scoped>
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
