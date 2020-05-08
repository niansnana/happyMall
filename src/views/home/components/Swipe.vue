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
        'https://img.alicdn.com/tfs/TB1hNYOEVT7gK0jSZFpXXaTkpXa-520-280.jpg_q90_.webp',
        'https://img.alicdn.com/simba/img/TB1FktWFaL7gK0jSZFBSutZZpXa.jpg',
        'https://img.alicdn.com/tps/i4/TB1CtFgFkL0gK0jSZFtSutQCXXa.jpg_q90_.webp'
      ]
    }
  }
}
</script>
