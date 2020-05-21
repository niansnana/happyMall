<!--
* @author niansnana
* @Description 添加功能
* @UpdateTime 2020-05-20 16:35:09
-->
<template>
  <form action="/">
    <van-search v-model="keywords" show-action clearable @click="onSearch" @cancel="onCancel" />
    <!-- <van-button type="danger">{{this.$route.params.keywords}}</van-button> -->
  </form>
</template>

<script>
export default {
  data () {
    return {
      keywords: ''
    }
  },
  created () {
    this.keywords = this.$route.params.keywords
  },
  methods: {
    onSearch () {
      this.$router.push({
        path: '/goods/search'
      })
    },
    onCancel () {
      this.$router.go(-1)
    }
  }
}
</script>
