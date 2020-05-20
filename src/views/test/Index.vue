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
    <h1>测试Vant复选框</h1>
    <div>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox
          v-for="(list, index) in listData"
          :key="index"
          :name="list"
          @change="getChange"
        >{{list.title}}</van-checkbox>
      </van-checkbox-group>
      <van-button type="primary" @click="checkAll(result)">全选</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sort: 1,
      listData: [
        { id: 1, title: '测试一号鸭' },
        { id: 2, title: '测试二号鸭' },
        { id: 3, title: '测试三号鸭' }
      ],
      result: []
    }
  },
  methods: {
    getGoods (sort) {
      this.$api.goodsListFn({ sort }).then(res => {
        console.log(res)
      })
    },
    checkAll (result) {
      this.$refs.checkboxGroup.toggleAll()
      console.log(result)
    },
    getChange () {
      console.log('isChange')
    }
  }
}
</script>
