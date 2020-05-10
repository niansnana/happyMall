<!--
 * @author niansnana
 * @Description 首页轮播组件
 * @Start_Writing_Date 2020-05-08 16:57:46
 * @Last_Modified_Date 2020-05-08 16:57:46
-->
<template>
  <van-swipe :autoplay="3000" indicator-color="#fd5103">
    <van-swipe-item v-for="(image, index) in imagesData" :key="index">
      <img :src='image' width="100%" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data () {
    return {
      imagesData: [
        'https://img.alicdn.com/simba/img/TB1M8s2CWL7gK0jSZFBSutZZpXa.jpg',
        'https://img.alicdn.com/simba/img/TB1FktWFaL7gK0jSZFBSutZZpXa.jpg',
        'https://img.alicdn.com/simba/img/TB1iht1Fxn1gK0jSZKPSutvUXXa.jpg'
      ]
    }
  }
}
</script>
