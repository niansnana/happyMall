<!--
 * @author niansnana
 * @Description 商品详情介绍
 * 本来不想反复调用接口的，可是它偏偏特立独行，气的
 * @Start_Writing_Date 2020-05-09 09:38:31
 * @Last_Modified_Date 2020-05-09 09:38:56
-->
<template>
  <div id="store_main">
    <!-- 店家介绍 -->
    <div class="store">
      <div class="store_top">
        <div class="top_left">
          <van-image width="50px" height="50px" :src="storeData.thumb" />
          <p class="pofletf">
            {{storeData.title}}
            <span class="thisSpan">{{storeData.description}}</span>
          </p>
        </div>
        <div class="top_right">
          <van-button type="default">全部宝贝</van-button>
          <van-button type="default">进店逛逛</van-button>
        </div>
      </div>
      <van-row type="flex" justify="space-between">
        <van-col span="6">
          宝贝描述
          <span>{{storeData.productScore}} 高</span>
        </van-col>
        <van-col span="6">
          卖家服务
          <span>{{storeData.serviceScore}} 高</span>
        </van-col>
        <van-col span="6">
          物流服务
          <span>{{storeData.postScore}} 平</span>
        </van-col>
      </van-row>
    </div>
    <!-- 商品额外介绍 -->
    <div class="detail">
      <van-divider>详情</van-divider>
      <van-image
        src="https://img.alicdn.com/imgextra/i4/12844594/O1CN01DVNcZe1jo65cOGgKo_!!12844594.jpg"
      />
      <van-image
        src="http://img.alicdn.com/imgextra/i2/12844594/O1CN019wMWfu1jo65avgCjo_!!12844594.jpg"
      />
      <van-image
        src="https://img.alicdn.com/imgextra/i4/12844594/O1CN014vfJsr1jo65aAwGyV_!!12844594.jpg"
      />
      <van-image
        src="https://img.alicdn.com/imgextra/i2/12844594/O1CN013G9eE31jo65edpZuE_!!12844594.jpg"
      />
      <van-image
        src="https://img.alicdn.com/imgextra/i3/12844594/O1CN01CP3nSH1jo65auBUmi_!!12844594.jpg"
      />
      <van-image
        src="https://img.alicdn.com/imgextra/i2/12844594/O1CN01Zx4QqH1jo65avg4Qk_!!12844594.jpg"
      />
      <van-image
        src="https://gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      storeData: {}
    }
  },
  created () {
    this.getGoodsDetail(this.$route.params.id)
  },
  methods: {
    getGoodsDetail (id) {
      this.$api.goodsDetailFn({ id }).then(res => {
        if (res.code === 200) {
          this.storeData = res.data.store
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#store_main
  padding 10px
  box-sizing border-box
  .store, .pofletf
    display flex
    flex-direction column
  .store
    background-color #fff
    padding 15px 0px
    box-sizing border-box
    .store_top, .top_left
      display flex
      align-items center
      .thisSpan
        color #999
        font-size 12px
    .store_top
      justify-content space-between
      p
        font-size 14px
        margin-left 10px
        small
          font-size 10px
      .top_right
        display flex
        .van-button
          margin 0 2px
          border-radius 25px
    .van-row
      font-size 12px
      margin-top 10px
      .van-col
        white-space nowrap
        span
          color #ff7314
  .van-divider
    margin 10px 0px
  .van-image
    width 100%
</style>
