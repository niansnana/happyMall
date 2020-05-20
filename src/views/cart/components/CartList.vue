<!--
 * @author niansnana
 * @Description 购物车列表
 * 卧槽，才发现Vant有全选的组件，mmp，这部分代码极有可能重构了（已重构，比想象顺利点
 * @Start_Writing_Date 2020-05-09 14:32:02
 * @Last_Modified_Date 2020-05-09 14:32:02
-->
<template>
  <div id="cartList">
    <van-checkbox-group v-model="listData" ref="checkboxGroup" v-show="collectCartData.length">
      <van-list v-for="(list, index) in collectCartData" :key="index">
        <van-cell class="topVanCell" :title="list.store.title" value="领劵" />
        <van-swipe-cell>
          <div class="get">
            <van-checkbox :name="list" shape="square" />
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
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="removeTheCarts(collectCart = '0', list.id)"
            />
            <van-button square text="收藏" type="primary" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-list>
    </van-checkbox-group>
    <van-divider v-show="!collectCartData.length">暂无数据哦</van-divider>
    <!-- 加载动画跟无数据提示有冲突，暂时想不到优解，待解决 -->
    <!-- <Loading v-show="!collectCartData.length" /> -->
  </div>
</template>

<script>
import bus from '@/utils/bus'
import { mapGetters, mapMutations, mapActions } from 'vuex'
// import Loading from 'components/loading/Loading'
export default {
  // components: { Loading },
  data () {
    return {
      listData: [],
      collectCartData: [],
      isCheckedAll: false,
      totalNum: 0,
      totalPrice: 0
    }
  },
  mounted () {
    bus.$on('allChecked', value => {
      this.isCheckedAll = value
    })
  },
  computed: {
    ...mapGetters([
      'userName'
    ])
  },
  created () {
    this.getCollectCart(this.userName)
  },
  watch: {
    isCheckedAll () {
      this.$refs.checkboxGroup.toggleAll(this.isCheckedAll)
    },
    listData: {
      handler (curval, oldval) {
        this.totalNum = this.totalPrice = 0
        curval.forEach(item => {
          this.totalNum += item.num
          this.totalPrice += (item.num * item.price) * 100 // 针对Vant算数求最终值
          this.changeTotalPrice({
            num: this.totalNum,
            price: this.totalPrice
          })
        })
        // 当购物车为空时，移出价格总数
        if (!curval.length) {
          this.changeTotalPrice({
            num: 0,
            price: 0
          })
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions([
      'changeTotalPrice'
    ]),
    ...mapMutations({
      setCurUserCartsNum: 'SET_CUR_USER_CARTS_NUM'
    }),
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
          this.setCurUserCartsNum(res.data.length)
        }
      })
    },
    removeTheCarts (collectCart, id) {
      // 删除选中购物车
      this.$api.cartsAddFn({ collectCart, id }).then(res => {
        if (res.code === 200) {
          this.$toast.success('删除成功')
          this.getCollectCart(this.userName)
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
  .van-checkbox-group
    margin 0 auto
    padding 10px 15px
    box-sizing border-box
    .topVanCell
      border-radius 15px 15px 0px 0px
    .van-swipe-cell
      border-radius 0px 0px 15px 15px
      margin-bottom 15px
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
  .van-divider
    color #999
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -100%)
</style>
