<!--
 * @author niansnana
 * @Description 商城首页
 * @Start_Writing_Date 2020-05-08 18:21:13
 * @Last_Modified_Date 2020-05-08 18:21:13
-->
<template>
  <div class="home-main">
    <!-- 搜索框组件 -->
    <van-search placeholder="请输入搜索关键词" @click="goGoodsSearch" />
    <!-- 轮播组件 -->
    <Swipe />
    <!-- 导航分类 -->
    <Menus />
    <!-- 热门推荐 -->
    <!-- 分类商品 -->
    <Sort />
  </div>
</template>

<script>
import Swipe from './components/Swipe'
import Menus from './components/Menus'
import Sort from './components/Sort'
export default {
  components: { Swipe, Menus, Sort },
  methods: {
    goGoodsSearch () {
      this.$router.push({
        path: '/goods/search'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-main
  background-color #f2f2f2
</style>
