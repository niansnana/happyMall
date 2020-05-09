<!--
 * @author niansnana
 * @Description 商品详情（先静态统一）
 * @Start_Writing_Date 2020-05-08 20:20:09
 * @Last_Modified_Date 2020-05-08 20:20:09
-->
<template>
  <div class="goods-detail">
    <!-- 商品轮播 -->
    <ProductSwipe />
    <!-- 商品信息 -->
    <ProductInfo />
    <!-- 商品评价 -->
    <ProductComment />
    <!-- 商品详情介绍 -->
    <ProductDetail />
  </div>
</template>

<script>
import ProductSwipe from './components/ProductSwipe'
import ProductInfo from './components/ProductInfo'
import ProductComment from './components/ProductComment'
import ProductDetail from './components/ProductDetail'
export default {
  components: { ProductSwipe, ProductInfo, ProductComment, ProductDetail }
}
</script>

<style lang="stylus" scoped>
.goods-detail
  width 100%
  height 100%
  background-color #f2f2f2
</style>
