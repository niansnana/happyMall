<!--
* @author niansnana
* @Description 添加功能
* @UpdateTime 2020-05-20 16:35:09
-->
<template>
  <div id="search_result">
    <NavBar />
    <List />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import List from './components/List'
export default {
  components: { NavBar, List }
}
</script>
