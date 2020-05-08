<!--
 * @author niansnana
 * @Description 导航
 * @Start_Writing_Date 2020-05-08 16:41:54
 * @Last_Modified_Date 2020-05-08 16:41:54
-->
<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in navData"
        :key="index"
        :icon="item.icon"
        :badge="item.badge"
        replace
        :to="item.path"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'home',
      navData: [
        { title: '首页', name: 'home', icon: 'home-o', badge: '', path: '/home' },
        { title: '消息', name: 'news', icon: 'chat-o', badge: '10', path: '/news' },
        { title: '购物车', name: 'cart', icon: 'apps-o', badge: '20', path: '/cart' },
        { title: '我的', name: 'profile', icon: 'manager-o', badge: '', path: '/profile' }
      ]
    }
  }
}
</script>
