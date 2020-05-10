<!--
 * @author niansnana
 * @Description 添加功能
 * @Start_Writing_Date 2020-05-09 13:48:37
 * @Last_Modified_Date 2020-05-09 13:48:37
-->
<template>
  <div id="cart-main">
    <!-- 背景色 -->
    <van-row type="flex" justify="space-between">
      <van-col span="6">
        <p>购物车(2)</p>
        <span>共2件宝贝</span>
      </van-col>
      <van-col span="6">管理</van-col>
    </van-row>
    <div class="header" :style="opacityStyle" v-show="showNav">购物车</div>
    <!-- 购物车 -->
    <CartList class="list" />
    <!-- 提交订单 -->
    <CartComit />
  </div>
</template>

<script>
import CartList from './components/CartList'
import CartComit from './components/CartComit'
export default {
  components: { CartList, CartComit },
  data () {
    return {
      showNav: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 0) {
        let opacity = top / 200
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#cart-main
  width 100%
  height 100%
  background-color #f2f2f2
  .van-row
    height 18vh
    color #fff
    padding 10px
    box-sizing border-box
    position relative
    background-image linear-gradient(-90deg, #FF5000 0%, #FF8400 100%)
    .van-col
      p
        font-weight 700
        line-height 22px
        font-size 20px
        white-space nowrap
      &:nth-child(2)
        padding-top 15px
        text-align right
  .header
    width 100%
    height 50px
    background-image linear-gradient(-90deg, #FF5000 0%, #FF8400 100%)
    position fixed
    top 0
    left 0
    z-index 10000
    text-align center
    line-height 50px
    color #fff
    font-size 20px
</style>
