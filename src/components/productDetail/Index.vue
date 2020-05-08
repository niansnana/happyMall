<!--
 * @author niansnana
 * @Description 添加功能
 * @Start_Writing_Date 2020-05-08 20:20:09
 * @Last_Modified_Date 2020-05-08 20:20:09
-->
<template>
  <div>
    <router-link to="/home">返回</router-link>
    <p>这是商品详情介绍</p>
    <p>此商品id：{{id}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>
