<!--
* @author niansnana
* @Description 添加功能
* @UpdateTime 2020-05-20 16:35:09
-->
<template>
  <div id="search_result">
    <div class="searchBar">
      <form action="/">
        <van-search
          v-model="keywords"
          show-action
          clearable
          placeholder="搜你喜欢，乐享商城"
          @search="onSearch(keywords)"
          @cancel="onCancel"
        />
      </form>
    </div>
    <van-button type="danger">{{this.searchKey}}</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '',
      suggestData: [],
      searchCount: null,
      searchKey: ''
    }
  },
  watch: {
    keywords () {
      if (this.keywords !== '') {
        this.onSuggest(this.keywords)
      } else {
        this.suggestData = []
      }
    }
  },
  created () {
    this.searchKey = this.$route.params.keywords
  },
  methods: {
    onSuggest (keywords) {
      this.$api.searchGoodsFn({ keywords }).then(res => {
        if (res.code === 200) {
          this.suggestData = res.data.data
          this.searchCount = res.data.count
        }
      })
    },
    onSearch () {
      this.$router.push({
        path: `/search/${this.keywords}`
      })
    },
    onCancel () {
      this.$router.go(-1)
    }
  }
}
</script>
