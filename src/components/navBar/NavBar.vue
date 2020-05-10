<!--
 * @author niansnana
 * @Description 编写公共插槽式组件
 * @Start_Writing_Date 2020-05-10 15:52:18
 * @Last_Modified_Date 2020-05-10 15:52:18
-->
<template>
  <div id="navBar">
    <van-nav-bar left-text="返回" left-arrow @click-left="backPre">
      <template #title>
        <slot>navBar</slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    backPre () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
#navBar
  >>> .van-nav-bar
    background-color #b1daba
    .van-nav-bar__left i, .van-nav-bar__left span, .van-nav-bar__title
      color #fff
</style>
