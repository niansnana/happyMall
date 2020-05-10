<!--
* @author niansnana
* @Description 订单最终的信息
* @Start_Writing_Date 2020-05-10 16:38:42
* @Last_Modified_Date 2020-05-10 16:38:42
-->
<template>
  <div id="payment">
    <div class="store">
      <p>庆波食品专营店</p>
      <div>
        <van-image
          width="100"
          fit="contain"
          src="https://img.alicdn.com/bao/uploaded/i2/2200787329732/O1CN01FDS4S32LlJ6tbHpmh_!!0-item_pic.jpg_190x190q90_.webp"
        />
        <p>
          零食大礼包一箱整小吃休闲食品女小充饥夜宵儿童散装自选薯片网红
          <span>￥69.90</span>
        </p>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell value="成交后卖家将捐赠0.02元给公益宝贝计划" is-link>
        <template #title>
          <span class="custom-title">公益宝贝</span>
        </template>
      </van-cell>
      <van-cell title="配送方式" value="快递免邮" is-link to="#" />
      <van-cell title="配送时间" value="16:00前付款，预计5月12日送达" />
      <van-cell title="运行费" value="卖家赠送可赔" is-link to="#" />
      <van-cell title="发票" value="本次不开具发票" is-link to="#" />
      <van-field v-model="message" label="买家留言" placeholder="选填，请先和商家协商一致" />
    </van-cell-group>
    <van-cell-group>
      <van-cell center title="朋友代付">
        <template #right-icon>
          <van-switch v-model="checkedFriend" size="24" active-color="#07c160" />
        </template>
      </van-cell>
      <van-cell center title="匿名购买">
        <template #right-icon>
          <van-switch v-model="checkedHideName" size="24" active-color="#07c160" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      checkedFriend: false,
      checkedHideName: true
    }
  }
}
</script>

<style lang="stylus" scoped>
#payment
  .store, .store div p
    display flex
    flex-direction column
  .store
    padding 10px
    box-sizing border-box
    div
      display flex
  .van-cell-group
    margin-top 15px
    .van-cell
      >>> .van-cell__value
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
</style>
