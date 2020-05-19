<!--
 * @author niansnana
 * @Description 商品分类
 * @Start_Writing_Date 2020-05-08 18:54:48
 * @Last_Modified_Date 2020-05-08 18:54:48
-->
<template>
  <div>
    <!-- tip -->
    <div class="recommend">
      <van-image src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" />
    </div>
    <!-- 分类展示商品 -->
    <div id="sort" v-show="this.sortsData.length">
      <van-tabs v-model="active">
        <van-tab v-for="(sort, index) in sortsData" :key="index">
          <template #title>
            <span @click="getCurSortData(sort.sort)">
              <van-icon :name="sort.icon" />
              {{sort.title}}
            </span>
          </template>
          <van-grid :gutter="8" :border="false" :column-num="2">
            <van-grid-item v-for="(item, i) in goodsData" :key="i" @click="getDetail(item.id)">
              <van-image :src="item.thumb" />
              <span>{{item.title}}</span>
              <p>
                ￥{{item.price}}
                <span>{{item.sales}}人已购买</span>
              </p>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
    <Loading v-show="!goodsData.length" />
  </div>
</template>

<script>
import Loading from 'components/loading/Loading'
export default {
  components: { Loading },
  data () {
    return {
      active: '',
      sortsData: [
        { title: '全部', icon: 'more-0', sort: 0 },
        { title: '直播', icon: 'more-0', sort: 1 },
        { title: '全球', icon: 'more-0', sort: 2 },
        { title: '时尚', icon: 'more-0', sort: 3 },
        { title: '生活', icon: 'more-0', sort: 4 },
        { title: '母婴', icon: 'more-0', sort: 5 }
      ],
      goodsData: []
    }
  },
  created () {
    this.getGoodsData()
  },
  methods: {
    getGoodsData () {
      this.$api.goodsListFn().then(res => {
        if (res.code === 200 && res.data) {
          this.goodsData = res.data
        }
      })
    },
    getCurSortData (sort) {
      if (sort !== 0) {
        this.$api.goodsListFn({ sort }).then(res => {
          if (res.code === 200 && res.data) {
            this.goodsData = res.data
          }
        })
      } else {
        this.getGoodsData()
      }
    },
    getDetail (id) {
      this.$router.push({
        path: `/goods/detail/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl'
.recommend
  width 100%
  text-align center
  padding 12px 0px
  transform scale(0.5)
#sort
  .van-grid
    margin-top 5px
    >>> .van-grid-item__content
      border-radius 10px
      padding 0
      .van-image
        width 100%
        height 100%
      span
        width 100%
        height 100%
        font-size 14px
        color #333333
        padding 0 8px
        box-sizing border-box
        text-align left
        margin 5px 0px
        setLineEllipsis(2)
      p
        text-align left
        width 100%
        margin 0
        color red
        box-sizing border-box
        padding 0px 8px 16px 8px
        span
          font-size 11px
          color #999999
          padding 0
#loading
  position static
  transform translate(0%, 100%)
</style>
