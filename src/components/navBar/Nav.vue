<!--
 * @author niansnana
 * @Description 编写公共插槽式组件2
 * @Start_Writing_Date 2020-05-11 15:52:18
 * @Last_Modified_Date 2020-05-11 15:52:18
-->
<template>
  <div id="navBar">
    <van-nav-bar left-arrow @click-left="backPre">
      <template #right>
        <slot></slot>
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
    .van-nav-bar__left i, .van-nav-bar__left span, .van-nav-bar__title
      color #000
</style>
