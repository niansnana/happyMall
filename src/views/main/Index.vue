<!--
 * @author niansnana
 * @Description 还是不用store的方式了，底部导航在部分逻辑混乱时会闪现，改用子路由
 * @Update 2020-05-18 16:28:10
-->
<template>
  <div id="main">
    <router-view />
    <bottomNav />
  </div>
</template>

<script>
import bottomNav from '@/components/bottomNav/Index'
export default {
  components: { bottomNav }
}
</script>
