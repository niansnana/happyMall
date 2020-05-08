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
            <van-grid-item v-for="(item, i) in sort.content" :key="i" :to="'/detail/' + item.id">
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
export default {
  data () {
    return {
      active: '',
      sortsData: [
        {
          title: '全部',
          icon: 'more-o',
          content: [
            { id: '1', title: 'MUMO木墨 多层架 实木置物架卧室书架落地客厅木头架子红橡木书架', thum: 'http://gw.alicdn.com/bao/uploaded/i3/23739472/TB2amDXaBAOyuJjy0FlXXcaxFXa_!!23739472.jpg_500x500q90.jpg', price: '2498', payNum: '82' },
            { id: '2', title: '日式窑变酒店家用陶瓷餐具拉面碗沙拉碗家用实用出口汤碗', thum: 'http://gw.alicdn.com/bao/uploaded/i4/129663914/O1CN01Pn4wCh1emenEOatIn_!!129663914.jpg_500x500q90.jpg', price: '29', payNum: '356' },
            { id: '3', title: '可折叠便携式微花园实木庭院阳台户外休闲桌露野营靠背折叠茶餐桌', thum: 'http://gw.alicdn.com/bao/uploaded/i1/2063663501/TB2nDAMlFXXXXcZXXXXXXXXXXXX_!!2063663501.jpg_500x500q90.jpg', price: '65', payNum: '44' },
            { id: '4', title: '欧式复古做旧实木茶几小圆桌方桌美式木餐桌酒店咖啡厅桌椅组合', thum: 'http://gw.alicdn.com/bao/uploaded/i3/902158164/TB2ilQ9bVzqK1RjSZFoXXbfcXXa_!!902158164.jpg_500x500q90.jpg', price: '385', payNum: '11' }
          ]
        },
        {
          title: '直播',
          icon: 'more-o',
          content: [
            {
              id: '5',
              title: '欧式复古做旧实木茶几小圆桌方桌美式木餐桌酒店咖啡厅桌椅组合',
              thum: 'http://gw.alicdn.com/bao/uploaded/i3/902158164/TB2ilQ9bVzqK1RjSZFoXXbfcXXa_!!902158164.jpg_500x500q90.jpg',
              price: '385',
              payNum: '11'
            }
          ]
        },
        {
          title: '全球',
          icon: 'more-o',
          content: [
            {
              id: '6',
              title: '欧式复古做旧实木茶几小圆桌方桌美式木餐桌酒店咖啡厅桌椅组合',
              thum: 'http://gw.alicdn.com/bao/uploaded/i1/2063663501/TB2nDAMlFXXXXcZXXXXXXXXXXXX_!!2063663501.jpg_500x500q90.jpg',
              price: '385',
              payNum: '11'
            }
          ]
        },
        {
          title: '时尚',
          icon: 'more-o',
          content: [
            {
              id: '7',
              title: '欧式复古做旧实木茶几小圆桌方桌美式木餐桌酒店咖啡厅桌椅组合',
              thum: 'http://gw.alicdn.com/bao/uploaded/i3/902158164/TB2ilQ9bVzqK1RjSZFoXXbfcXXa_!!902158164.jpg_500x500q90.jpg',
              price: '385',
              payNum: '11'
            }
          ]
        },
        {
          title: '生活',
          icon: 'more-o',
          content: [
            {
              id: '8',
              title: '欧式复古做旧实木茶几小圆桌方桌美式木餐桌酒店咖啡厅桌椅组合',
              thum: 'http://gw.alicdn.com/bao/uploaded/i1/2063663501/TB2nDAMlFXXXXcZXXXXXXXXXXXX_!!2063663501.jpg_500x500q90.jpg',
              price: '385',
              payNum: '11'
            }
          ]
        },
        {
          title: '母婴',
          icon: 'more-o',
          content: [
            {
              id: '9',
              title: '欧式复古做旧实木茶几小圆桌方桌美式木餐桌酒店咖啡厅桌椅组合',
              thum: 'http://gw.alicdn.com/bao/uploaded/i3/902158164/TB2ilQ9bVzqK1RjSZFoXXbfcXXa_!!902158164.jpg_500x500q90.jpg',
              price: '385',
              payNum: '11'
            }
          ]
        }
      ]
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
      >>> .van-image
        width 100%
        height 100%
      span
        font-size 14px
        color #333333
        padding 0 8px
        box-sizing border-box
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
