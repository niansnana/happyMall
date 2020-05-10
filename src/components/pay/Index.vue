<!--
 * @author niansnana
 * @Description 公共支付组件
 * @Start_Writing_Date 2020-05-10 14:38:25
 * @Last_Modified_Date 2020-05-10 14:38:25
-->
<template>
  <div>
    <NavBar>
      <slot>确认订单</slot>
    </NavBar>
    <Address />
    <PayMent />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
import Address from './components/Address'
import PayMent from './components/PayMent'
export default {
  components: { NavBar, Address, PayMent },
  methods: {
    onSubmit () {
      this.$toast('loading')
    }
  }
}
</script>
