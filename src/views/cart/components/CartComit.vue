<!--
 * @author niansnana
 * @Description 提交订单
 * @Start_Writing_Date 2020-05-09 15:23:18
 * @Last_Modified_Date 2020-05-09 15:23:18
-->
<template>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
    <template #tip>
      你的收货地址不支持同城送,
      <span @click="onClickEditAddress">修改地址</span>
    </template>
  </van-submit-bar>
</template>

<script>
export default {
  data () {
    return {
      checked: ''
    }
  },
  methods: {
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
.van-submit-bar
  bottom 50px
</style>
