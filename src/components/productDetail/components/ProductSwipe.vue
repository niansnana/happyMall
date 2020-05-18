<!--
 * @author niansnana
 * @Description 添加功能
 * @Start_Writing_Date 2020-05-09 09:02:56
 * @Last_Modified_Date 2020-05-09 09:02:56
-->
<template>
  <div>
    <div class="topContr">
      <van-icon name="arrow-left" size="20" @click.native="backHome" />
      <van-icon name="plus" size="20" />
    </div>
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(thum, index) in thumData" :key="index">
        <img :src="thum.thum" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{thumData.length}}</div>
      </template>
    </van-swipe>
    <!-- <p>此商品id：{{id}}</p> -->
    <van-notice-bar :text="'此商品ID：' + id" left-icon="volume-o" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      current: 0,
      thumData: [
        { id: '1', thum: 'https://img.alicdn.com/imgextra/i3/12844594/TB2GJ3RduOSBuNjy0FdXXbDnVXa_!!12844594.jpg' },
        { id: '2', thum: 'https://img.alicdn.com/imgextra/i4/12844594/O1CN011jo5ypdzUfFzjG7_!!12844594.jpg' }
      ]
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  methods: {
    backHome () {
      this.$router.push({
        path: '/home'
      })
    },
    onChange (index) {
      this.current = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.topContr
  width 100%
  position absolute
  top 20px
  z-index 1
  .van-icon
    position absolute
    text-align center
    border-radius 50%
    padding 5px
    box-sizing border-box
    color #fff
    background-color rgba(0, 0, 0, 0.4)
    &:nth-child(1)
      left 10px
    &:nth-child(2)
      right 10px
.van-swipe
  width 100%
  height 30%
  .van-swipe-item
    width 100%
    height 100%
    img
      width 100%
      height auto
  .custom-indicator
    position absolute
    right 5px
    bottom 5px
    padding 2px 5px
    font-size 12px
    background rgba(0, 0, 0, 0.1)
</style>
