<!--
* @author niansnana
* @Description 商品支付成功，关注项目
* @UpdateTime 2020-05-21 13:04:18
-->
<template>
  <div id="project">
    <h1>支付成功</h1>
    <h4>
      持续关注项目：
      <a href="https://github.com/niansnana/happyMall" target="_black">Github</a>
    </h4>
    <van-button type="primary" @click="back">返回上一页</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
#project
  padding 0 15px
  box-sizing border-box
</style>
