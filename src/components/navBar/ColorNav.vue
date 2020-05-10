<!--
 * @author niansnana
 * @Description 渐隐导航
 * @Start_Writing_Date 2020-05-10 15:58:50
 * @Last_Modified_Date 2020-05-10 15:58:50
-->
<template>
  <div class="header" :style="opacityStyle" v-show="showNav">
    <slot>happy</slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 0) {
        let opacity = top / 200
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 50px
  background-image linear-gradient(-90deg, #FF5000 0%, #FF8400 100%)
  position fixed
  top 0
  left 0
  z-index 10000
  text-align center
  line-height 50px
  color #fff
  font-size 20px
</style>
