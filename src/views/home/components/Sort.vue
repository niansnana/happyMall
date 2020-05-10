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
    <div id="sort">
      <van-tabs v-model="active">
        <van-tab v-for="(sort, index) in sortsData" :key="index">
          <template #title>
            <van-icon :name="sort.icon" />
            {{sort.title}}
          </template>
          <van-grid :gutter="8" :border="false" :column-num="2">
            <van-grid-item v-for="(item, i) in sort.content" :key="i" @click="getDetail(item.id)">
              <van-image :src="item.thum" />
              <span>{{item.title}}</span>
              <p>
                ￥{{item.price}}
                <span>{{item.payNum}}人已购买</span>
              </p>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      active: '',
      sortsData: []
    }
  },
  created () {
    this.getGoodsData()
  },
  methods: {
    ...mapMutations({
      setBottomNav: 'SET_BOTTOM_NAV'
    }),
    getGoodsData () {
      // 获取商品数据
      this.$api.get('/api/goods').then(res => {
        if (res.data.status === 200) {
          this.sortsData = res.data.data.goods
        }
      })
    },
    getDetail (id) {
      this.$router.push({
        path: `/detail/${id}`
      })
      this.setBottomNav(false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend
  width 100%
  text-align center
  padding 12px 0px
  transform scale(0.5)
#sort
  .van-grid
    margin-top 5px
    >>> .van-grid-item__content
      padding 0
      .van-image
        width 100%
        height 100%
      span
        width 100%
        font-size 14px
        color #333333
        padding 0 8px
        box-sizing border-box
        text-align left
        margin 5px 0px
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
</style>
