<!--
 * @author niansnana
 * @Description 格子菜单导航
 * @Start_Writing_Date 2020-05-08 18:23:25
 * @Last_Modified_Date 2020-05-08 18:23:25
-->
<template>
  <div id="gridMenu">
    <van-grid :gutter="10" :border="false" :column-num="8" icon-size="20px">
      <van-grid-item v-for="(menu, index) in menus" :key="index">
        <van-image :src="menu.thum" />
        <p>{{menu.title}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { title: '天猫新品', thum: 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1', path: '#' },
        { title: '今日爆款', thum: 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1', path: '#' },
        { title: '天猫国际', thum: 'https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1 ', path: '#' },
        { title: '饿了么', thum: 'https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1', path: '#' },
        { title: '天猫超市', thum: 'https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1', path: '#' },
        { title: '充值中心', thum: 'https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1', path: '#' },
        { title: '机票酒店', thum: 'https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1', path: '#' },
        { title: '淘宝吃货', thum: 'https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1', path: '#' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#gridMenu
  background-color #fff
  padding-bottom 15px
  .van-grid-item
    white-space nowrap
    cursor pointer
    >>> .van-grid-item__content
      padding-bottom 0
    >>> .van-image
      width 61px
      height 48px
    p
      margin 0
</style>
