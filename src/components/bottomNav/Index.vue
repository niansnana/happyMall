<!--
 * @author niansnana
 * @Description 导航
 * @Start_Writing_Date 2020-05-08 17:47:54
 * @Last_Modified_Date 2020-05-08 17:47:54
-->
<template>
  <div class="fix">
    <van-tabbar
      v-show="bottomNav"
      v-model="active"
      @change="onChange"
      active-color="#ff6200"
      inactive-color="#000"
    >
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      navData: [
        { id: 0, title: '首页', icon: 'home-o', badge: '', path: '/home' },
        { id: 1, title: '消息', icon: 'chat-o', badge: '10', path: '/news' },
        { id: 2, title: '购物车', icon: 'apps-o', badge: '20', path: '/cart' },
        { id: 3, title: '我的', icon: 'manager-o', badge: '', path: '/profile' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'bottomNav'
    ])
  },
  methods: {
    onChange (index) {
      this.active = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.fix
  height 50px
</style>
