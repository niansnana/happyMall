<template>
  <div>
    <NavBar>
      <slot>设置</slot>
    </NavBar>
    <van-card
      :desc="this.userData.userName"
      :title="this.userData.nickName"
      :thumb="this.userData.avatar"
      @click="toEditInfo"
    >
      <template #tags>
        <van-tag plain type="danger">编辑</van-tag>
      </template>
    </van-card>
    <van-cell title="我的收货地址" is-link to="/user/address" />
    <van-cell title="账号与安全" is-link />
    <van-cell title="支付设置" is-link />
    <van-cell title="清除缓存" is-link />
    <van-cell title="通用" is-link />
    <van-cell title="问题反馈" is-link />
    <Loading v-show="!Object.keys(this.userData).length" />
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
import Loading from 'components/loading/Loading'
import { mapGetters } from 'vuex'
export default {
  components: { NavBar, Loading },
  data () {
    return {
      userData: {}
    }
  },
  created () {
    this.getCurUserInfo(this.userName)
  },
  computed: {
    ...mapGetters([
      'userName'
    ])
  },
  methods: {
    getCurUserInfo (userName) {
      this.$api.detailFn({ userName }).then(res => {
        if (res.code === 200 && res.data) {
          this.userData = res.data
        }
      })
    },
    toEditInfo () {
      this.$router.push({
        path: '/user/editinfo'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-card
  margin 0
  background #fff
  height 75px
  border-bottom 1px solid #f0f0f0
.van-card__header, .van-card__content
  height 65px
.van-card__thumb
  height 60px
  width 60px
/deep/ .van-card__thumb img
  border-radius 40px
.van-card__content
  min-height 60px
.van-card__title
  font-size 15px
  margin-top 15px
  color #d0671f
.van-card__desc
  color #8e8c8a
  margin-top 5px
.van-tag
  border-radius 1.2em
  position absolute
  right 0
  bottom 50%
</style>
