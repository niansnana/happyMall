<!--
* @author niansnana
* @Description 搜索列表
* @UpdateTime 2020-05-21 08:13:49
-->
<template>
  <div id="search_list">
    <div class="ad">
      <van-button type="default" plain>筛选520告白季商品</van-button>
    </div>
    <van-list v-for="(item, index) in suggestData" :key="index" v-show="suggestData.length">
      <div class="img" @click="getGoodsDetail(item.id)">
        <van-image fit="contain" :src="item.thumb" />
      </div>
      <div class="goods_info">
        <h2 @click="getGoodsDetail(item.id)">{{item.title}}</h2>
        <h6>
          <span>{{item.description}}</span>
        </h6>
        <p>
          <span>￥</span>
          {{item.price}}
          <small>{{item.sales}}人付款 {{item.address}}</small>
        </p>
        <span>
          {{item.store.title}}
          <small>进店></small>
        </span>
      </div>
    </van-list>
    <!-- 骨架屏 -->
    <van-skeleton title :row="3" v-show="!suggestData.length" v-for="(v, i) in skeleton" :key="i" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      suggestData: [],
      skeleton: [
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ]
    }
  },
  created () {
    this.getSearchResultList(this.$route.params.keywords)
  },
  methods: {
    getSearchResultList (keywords) {
      this.$api.searchGoodsFn({ keywords }).then(res => {
        if (res.code === 200) {
          this.suggestData = res.data.data
        }
      })
    },
    getGoodsDetail (id) {
      this.$router.push({
        path: `/goods/detail/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl'
#search_list
  .ad
    width 100%
    text-align center
    margin 10px 0px
    .van-button
      width 80%
      color rgb(245, 94, 130)
      border-color rgb(245, 94, 130)
      border-radius 20px
  .van-list
    padding 5px
    box-sizing border-box
    display flex
    align-items center
    background-color #fff
    margin-bottom 15px
    .img
      width 200px
    .goods_info
      display flex
      flex-direction column
      margin-left 15px
      h2
        setLineEllipsis(2)
        font-size 15px
        margin 0
      h6
        margin 0
        color #aeafaf
        span
          background-color #f7f7f7
      p
        margin 5px 0
        font-size 16px
        color #ff6200
        font-weight 600
        span
          font-size 10px
        small
          color #999
          font-weight normal
      span
        font-size 12px
        color #999
        small
          color #000
          font-size 15px
  .van-skeleton
    margin-top 15px
</style>
