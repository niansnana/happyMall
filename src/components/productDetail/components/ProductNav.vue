<!--
 * @author niansnana
 * @Description 添加商品导航
 * @Start_Writing_Date 2020-05-09 13:05:59
 * @Last_Modified_Date 2020-05-09 13:05:59
-->
<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" dot />
    <van-goods-action-icon icon="cart-o" text="购物车" :badge="curUserCartsNum" />
    <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
    <van-goods-action-button type="warning" text="加入购物车" @click="addShop" />
    <van-goods-action-button type="danger" text="立即购买" @click="onBuy" />
  </van-goods-action>
</template>

<script>
import bus from '@/utils/bus'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'curUserCartsNum'
    ])
  },
  methods: {
    addShop () {
      // 添加到购物车
      bus.$emit('changeSpecificationStatus', true)
    },
    onBuy () {
      this.$router.push({
        path: `/goods/pay/${this.$route.params.id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-goods-action
  padding 5px 0px
</style>
