<!--
 * @author niansnana
 * @Description 地址信息
 * @Start_Writing_Date 2020-05-10 15:49:19
 * @Last_Modified_Date 2020-05-10 15:49:19
-->
<template>
  <div id="address">
    <van-icon name="location-o" size="20" />
    <div class="right">
      <p>
        收货人：年悔悔
        <span>13000000000</span>
      </p>
      <p>收货地址：青青草原青青河北岸大肥羊村</p>
      <small>(收货不便时,可选择暂存服务)</small>
    </div>
    <van-icon name="arrow" size="20" color="#999" />
  </div>
</template>

<style lang="stylus" scoped>
#address
  width 100%
  display flex
  align-items center
  font-size 15px
  padding 10px 15px
  box-sizing border-box
  justify-content space-around
  position relative
  &::before
    position absolute
    right 0
    bottom 0
    left 0
    height 2px
    background repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%)
    background-size 80px
    content ''
  .right
    display flex
    flex-direction column
    line-height 25px
    p
      display flex
      justify-content space-between
      margin 0
      span
        color #999
    small
      color #eab243
</style>
