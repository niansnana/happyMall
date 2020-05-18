<template>
  <div>
    <ColorNav v-show="token">
      <slot>个人中心</slot>
    </ColorNav>
    <div class="userInfo" v-show="token">
      <div class="inner">
        <div class="portrait" @click="toSetting">
          <img :src="this.userData.avatar" />
        </div>
        <div class="nickname">
          <span>{{this.userData.nickName}}</span>
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
    <Loading v-show="!Object.keys(this.userData).length && this.token" />
  </div>
</template>

<script>
import ColorNav from 'components/navBar/ColorNav'
import Loading from 'components/loading/Loading'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { ColorNav, Loading },
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
      ],
      userData: {}
    }
  },
  created () {
    this.getCurUserInfo(this.userName)
  },
  computed: {
    ...mapGetters([
      'userName',
      'token'
    ])
  },
  methods: {
    ...mapActions([
      'getUserNameAndToken'
    ]),
    getCurUserInfo (userName) {
      if (this.token) {
        this.$api.detailFn({ userName }).then(res => {
          if (res.code === 200 && res.data) {
            this.userData = res.data
          }
        })
      }
    },
    onSelect (option) {
      this.$toast(option.name)
      this.showShare = false
    },
    toSetting () {
      this.$router.push({
        path: '/user/setting'
      })
    },
    goLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    logout () {
      this.$api.logoutFn().then(res => {
        if (res.data.code === 200) {
          localStorage.removeItem('token')
          this.getUserNameAndToken({
            userName: '',
            token: ''
          })
          this.$router.push({
            path: '/login'
          })
        }
      })
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
  background-image url('http://ku.90sjimg.com/back_pic/05/03/08/9359565bf290660.jpg%21/watermark/text/OTDorr7orqE=/font/simkai/align/southeast/opacity/20/size/50')
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
