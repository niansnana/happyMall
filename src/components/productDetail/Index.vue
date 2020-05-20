<!--
 * @author niansnana
 * @Description 商品详情（先静态统一）
 * @Start_Writing_Date 2020-05-08 20:20:09
 * @Last_Modified_Date 2020-05-08 20:20:09
-->
<template>
  <div class="goods-detail">
    <!-- 商品轮播 -->
    <ProductSwipe :goodsDetail="goodsDetailData" />
    <!-- 商品信息 -->
    <ProductInfo :goodsDetail="goodsDetailData" />
    <!-- 商品评价 -->
    <ProductComment />
    <!-- 商品详情介绍 -->
    <ProductDetail />
    <!-- 商品导航 -->
    <ProductNav />
  </div>
</template>

<script>
import ProductSwipe from './components/ProductSwipe'
import ProductInfo from './components/ProductInfo'
import ProductComment from './components/ProductComment'
import ProductDetail from './components/ProductDetail'
import ProductNav from './components/ProductNav'
export default {
  components: { ProductSwipe, ProductInfo, ProductComment, ProductDetail, ProductNav },
  data () {
    return {
      showspecification: false,
      goodsDetailData: {}
    }
  },
  created () {
    this.getGoodsDetail(this.$route.params.id)
  },
  methods: {
    getGoodsDetail (id) {
      this.$api.goodsDetailFn({ id }).then(res => {
        if (res.code === 200) {
          this.goodsDetailData = res.data
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods-detail
  width 100%
  height 100%
  background-color #f2f2f2
</style>
