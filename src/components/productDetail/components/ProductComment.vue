<!--
 * @author niansnana
 * @Description 商品评价
 * @Start_Writing_Date 2020-05-09 09:38:31
 * @Last_Modified_Date 2020-05-09 09:38:56
-->
<template>
  <div id="productComment">
    <div class="item">
      <van-list>
        <van-cell title="宝贝评价(109)" value="查看全部" is-link to="#" />
        <div class="user_comm">
          <div class="user_info">
            <van-image
              width="30px"
              height="30px"
              fit="contain"
              round
              src="https://wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vGNuOHcWv88YXF-HPmvbM0gSMF*IMH8WvHlzX8QSM8Z-PGPIPG-zPm8bv8kbv0*I&width=40&height=40&type=sns"
            />
            <span>测试人员9627</span>
          </div>
          <p>虽然等了近2个月，但到货相当满意的</p>
        </div>
      </van-list>
      <van-list>
        <van-cell title="洋淘买家秀" value="查看全部" is-link to="#" />
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </van-grid-item>
        </van-grid>
      </van-list>
      <van-list>
        <van-cell title="问大家" value="查看全部" is-link to="#" />
      </van-list>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#productComment
  background-color #fff
  margin-bottom 10px
  .item
    .van-list
      .van-cell
        >>> .van-cell__value
          font-size 13px
          color rgb(255, 80, 0)
        >>> i
          color rgb(255, 80, 0)
      .user_comm
        display flex
        flex-direction column
        padding 10px
        .user_info
          display flex
          align-items center
          span
            color #999
            font-size 12px
            margin-left 10px
        p
          font-size 13px
          margin 0
          margin-top 16px
</style>
