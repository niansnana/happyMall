<!--
 * @author niansnana
 * @Description 购物车列表
 * 卧槽，才发现Vant有全选的组件，mmp，这部分代码极有可能重构了
 * @Start_Writing_Date 2020-05-09 14:32:02
 * @Last_Modified_Date 2020-05-09 14:32:02
-->
<template>
  <div id="cartList">
    <van-list v-for="(list, index) in collectCartData" :key="index">
      <van-cell class="topVanCell" :title="list.store.title" value="领劵" />
      <van-swipe-cell>
        <div class="get">
          <van-checkbox v-model="isChecked" :name="list.id" shape="square" />
          <van-card
            :price="list.price"
            :desc="list.description"
            :title="list.title"
            :thumb="list.thumb"
          />
        </div>
        <van-field name="stepper">
          <template #input>
            <van-stepper v-model="list.num" @plus="addNum(list.num)" @minus="subNum(list.num)" />
          </template>
        </van-field>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
          <van-button square text="收藏" type="primary" class="delete-button" />
        </template>
      </van-swipe-cell>
    </van-list>
    <Loading v-show="!collectCartData.length" />
  </div>
</template>

<script>
import bus from '@/utils/bus'
import { mapActions } from 'vuex'
import Loading from 'components/loading/Loading'
export default {
  components: { Loading },
  data () {
    return {
      listData: [
        {
          id: 1,
          title: '型凝姿女装旗舰店',
          num: 1,
          value: '领券',
          price: '2.00',
          goodsName: '2020夏装韩版宽松bf风百搭简约字母半袖ins潮短袖T恤女学生装上衣',
          thumb: 'https://img.alicdn.com/bao/uploaded/i4/3938319326/O1CN01d5cwbE2IlMESjxZf5_!!3938319326.jpg',
          isChecked: false
        },
        {
          id: 2,
          title: '型凝姿女装旗舰店',
          num: 2,
          value: '领券',
          price: '3.00',
          goodsName: '2020夏装韩版宽松bf风百搭简约字母半袖ins潮短袖T恤女学生装上衣',
          thumb: 'https://img.alicdn.com/bao/uploaded/i4/3938319326/O1CN01d5cwbE2IlMESjxZf5_!!3938319326.jpg',
          isChecked: false
        },
        {
          id: 3,
          title: '型凝姿女装旗舰店',
          num: 9,
          value: '领券',
          price: '10.00',
          goodsName: '2020夏装韩版宽松bf风百搭简约字母半袖ins潮短袖T恤女学生装上衣',
          thumb: 'https://img.alicdn.com/bao/uploaded/i4/3938319326/O1CN01d5cwbE2IlMESjxZf5_!!3938319326.jpg',
          isChecked: false
        },
        {
          id: 4,
          title: '型凝姿女装旗舰店',
          num: 4,
          value: '领券',
          price: '1.00',
          goodsName: '2020夏装韩版宽松bf风百搭简约字母半袖ins潮短袖T恤女学生装上衣',
          thumb: 'https://img.alicdn.com/bao/uploaded/i4/3938319326/O1CN01d5cwbE2IlMESjxZf5_!!3938319326.jpg',
          isChecked: false
        }
      ],
      isChecked: false,
      totalNum: 0,
      totalPrice: 0,
      userId: 1,
      collectCartData: []
    }
  },
  mounted () {
    bus.$on('allChecked', value => {
      for (const list in this.listData) {
        this.listData[list].isChecked = value
      }
    })
  },
  watch: {
    listData: {
      handler (curval, oldval) {
        this.totalNum = this.totalPrice = 0
        curval.forEach(item => {
          this.totalNum += item.num
          this.totalPrice += (item.num * item.price) * 100
          if (item.isChecked === true) {
            this.changeTotalPrice({
              num: this.totalNum,
              isChecked: item.isChecked,
              price: this.totalPrice
            })
          }
        })
      },
      deep: true
    }
  },
  created () {
    this.getCollectCart(this.userId)
  },
  methods: {
    ...mapActions([
      'changeTotalPrice'
    ]),
    addNum (num) {
      num++
    },
    subNum (num) {
      num--
    },
    getCollectCart (collectCart) {
      this.$api.goodsListFn({ collectCart }).then(res => {
        if (res.code === 200) {
          this.collectCartData = res.data
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#cartList
  width 100%
  margin-top -5vh
  .van-list
    margin 0 auto
    padding 10px 15px
    box-sizing border-box
    .topVanCell
      border-radius 15px 15px 0px 0px
    .van-swipe-cell
      border-radius 0px 0px 15px 15px
      >>> .van-swipe-cell__wrapper, >>> .van-cell.van-field
        border-radius 0px 0px 15px 15px
      .get
        width 100%
        display flex
        align-items center
        background-color #fff
        padding-left 16px
        box-sizing border-box
        .van-checkbox
          width 10%
          >>> .van-checkbox__icon
            margin 0 auto
        .van-card
          margin 0
          background-color #fff
      .delete-button
        height 100%
      .van-field
        position relative
        .van-stepper
          text-align right
          position absolute
          right 0px
</style>
