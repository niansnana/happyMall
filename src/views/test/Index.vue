<!--
* @author niansnana
* @Description 专门用来测试接口返回情况
* @WordOfHope:希望一切顺利
* @UpdateTime 2020-05-19 16:53:55
-->
<template>
  <div>
    <h1>测试接口专处</h1>
    <van-button type="danger" @click="getGoods(sort)">点击测试</van-button>
    <p>{{this.sort}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sort: 1
    }
  },
  methods: {
    getGoods (sort) {
      this.$api.goodsListFn({ sort }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
