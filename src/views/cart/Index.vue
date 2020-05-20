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
        <p>购物车({{curUserCartsNum || 0}})</p>
        <span>共{{curUserCartsNum || 0}}件宝贝</span>
      </van-col>
      <van-col span="6">管理</van-col>
    </van-row>
    <ColorNav>
      <slot>购物车</slot>
    </ColorNav>
    <!-- 购物车 -->
    <CartList v-show="token" class="list" />
    <!-- 提交订单 -->
    <CartComit v-show="token" />
    <Index />
  </div>
</template>

<script>
import ColorNav from '@/components/navBar/ColorNav'
import CartList from './components/CartList'
import CartComit from './components/CartComit'
import Index from 'components/notLogged/Index'
import { mapGetters } from 'vuex'
export default {
  components: { ColorNav, CartList, CartComit, Index },
  data () {
    return {
      cartsNum: null
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'curUserCartsNum'
    ])
  }
}
</script>

<style lang="stylus" scoped>
#cart-main
  width 100%
  height 100%
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
</style>
