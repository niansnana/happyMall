<!--
 * @author niansnana
 * @Description 购物车列表
 * @Start_Writing_Date 2020-05-09 14:32:02
 * @Last_Modified_Date 2020-05-09 14:32:02
-->
<template>
  <div id="cartList">
    <van-list v-for="(list, index) in listData" :key="index">
      <van-cell :title="list.title" :value="list.value" />
      <van-swipe-cell>
        <van-card
          :num="list.num"
          :price="list.price"
          desc="描述信息"
          :title="list.goodsName"
          class="goods-card"
          :thumb="list.thumb"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
          <van-button square text="收藏" type="primary" class="delete-button" />
        </template>
      </van-swipe-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: [
        {
          title: '型凝姿女装旗舰店',
          value: '领券',
          num: '2',
          price: '2.00',
          goodsName: '2020夏装韩版宽松bf风百搭简约字母半袖ins潮短袖T恤女学生装上衣',
          thumb: 'https://img.alicdn.com/bao/uploaded/i4/3938319326/O1CN01d5cwbE2IlMESjxZf5_!!3938319326.jpg_190x190q90_.webp'
        },
        {
          title: '型凝姿女装旗舰店',
          value: '领券',
          num: '2',
          price: '2.00',
          goodsName: '2020夏装韩版宽松bf风百搭简约字母半袖ins潮短袖T恤女学生装上衣',
          thumb: 'https://img.alicdn.com/bao/uploaded/i4/3938319326/O1CN01d5cwbE2IlMESjxZf5_!!3938319326.jpg_190x190q90_.webp'
        },
        {
          title: '型凝姿女装旗舰店',
          value: '领券',
          num: '2',
          price: '2.00',
          goodsName: '2020夏装韩版宽松bf风百搭简约字母半袖ins潮短袖T恤女学生装上衣',
          thumb: 'https://img.alicdn.com/bao/uploaded/i4/3938319326/O1CN01d5cwbE2IlMESjxZf5_!!3938319326.jpg_190x190q90_.webp'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#cartList
  width 100%
  margin-top -10%
  .van-list
    margin 0 auto
    padding 10px 15px
    box-sizing border-box
    .van-cell
      border-radius 15px 15px 0px 0px
    .van-swipe-cell
      border-radius 0px 0px 15px 15px
      .goods-card
        margin 0
        background-color #fff
      .delete-button
        height 100%
</style>
