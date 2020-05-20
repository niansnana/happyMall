<!--
 * @author niansnana
 * @Description 导航
 * @Start_Writing_Date 2020-05-08 17:47:54
 * @Last_Modified_Date 2020-05-08 17:47:54
 * @BUG 数组里存放不了state，哭:(，不会又来改写这部分代码了吧。。。
-->
<template>
  <div class="fix">
    <van-tabbar
      :value="routerLinkActive"
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
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
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
      'routerLinkActive',
      'curUserCartsNum'
    ])
  },
  methods: {
    ...mapMutations({
      setRouterLinkActive: 'SET_ROUTER_LINK_ACTIVE'
    }),
    onChange (index) {
      this.setRouterLinkActive(index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.fix
  height 50px
</style>
