<!--
 * @author niansnana
 * @Description 导航
 * @Start_Writing_Date 2020-05-08 16:41:54
 * @Last_Modified_Date 2020-05-08 16:41:54
-->
<template>
  <div id="app">
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
