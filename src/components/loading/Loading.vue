<!--
* @author niansnana
* @Description 编写加载动画
* @Update 2020-05-17 10:36:05
-->
<template>
  <div id="loading">
    <van-loading size="24px" vertical color="#ff6200">加载中...</van-loading>
  </div>
</template>

<style lang="stylus" scoped>
#loading
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -100%)
  >>> span
    color #ff6200
</style>
