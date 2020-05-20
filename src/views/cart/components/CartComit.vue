<!--
 * @author niansnana
 * @Description 提交订单
 * @Start_Writing_Date 2020-05-09 15:23:18
 * @Last_Modified_Date 2020-05-09 15:23:18
-->
<template>
  <div class="fix">
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checkedAll" @click="allChecked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import bus from '@/utils/bus'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      checkedAll: false
    }
  },
  computed: {
    ...mapGetters([
      'totalPrice'
    ])
  },
  methods: {
    ...mapActions([
      'changeTotalPrice'
    ]),
    // 全选
    allChecked () {
      if (this.checkedAll === false) {
        this.changeTotalPrice({
          num: 0,
          price: 0
        })
      }
      bus.$emit('allChecked', this.checkedAll)
    },
    onSubmit () {
      this.$toast('不要催')
    },
    onClickEditAddress () {
      this.$toast('在写了在写了')
    }
  }
}
</script>

<style lang="stylus" scoped>
.fix
  height 84px
  .van-submit-bar
    bottom 50px
</style>
