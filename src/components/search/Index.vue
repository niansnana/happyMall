<!--
* @author niansnana
* @Description 搜索界面
* @UpdateTime 2020-05-20 15:13:03
-->
<template>
  <div id="search-main">
    <!-- 搜索框 -->
    <div class="searchBar">
      <form action="/">
        <van-search
          v-model="keywords"
          show-action
          clearable
          autofocus
          placeholder="搜你喜欢，乐享商城"
          @search="onSearch(keywords)"
          @cancel="onCancel"
        />
      </form>
    </div>
    <!-- 搜索建议 -->
    <div class="searchHistory">
      <ul v-show="suggestData">
        <li v-show="keywords" class="tag">搜索“{{keywords}}”</li>
        <li v-for="(key, index) in suggestData" :key="index" @click="onSearch(key.title)">
          <van-icon name="search" />
          <span>{{key.title}}</span>
        </li>
      </ul>
      <p v-show="!searchCount && keywords">暂无数据</p>
    </div>
    <!-- 历史搜索 -->
    <div class="hot" v-show="!keywords">
      <p>历史搜索</p>
      <div class="hot-tag">
        <span>钢铁侠3</span>
        <span>钢铁侠3</span>
        <span>钢铁侠3</span>
        <span>钢铁侠3</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '',
      suggestData: [],
      searchCount: null
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
  methods: {
    onSuggest (keywords) {
      this.$api.searchGoodsFn({ keywords }).then(res => {
        if (res.code === 200) {
          this.suggestData = res.data.data
          this.searchCount = res.data.count
        }
      })
    },
    onSearch (keywords) {
      this.$router.push({
        path: `/goods/search/${keywords}`
      })
    },
    onCancel () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl'
.searchHistory
  ul
    padding 0px 10px 10px 10px
    box-sizing border-box
    li.tag
      color #6480a7
      letter-spacing 1px
      font-size 15px
    li
      height 40px
      line-height 40px
      border-bottom 1px solid #f2f2f2
      setLineEllipsis(1)
      .van-icon
        vertical-align middle
        margin-right 5px
      span
        font-size 16px
  p
    margin 0
    color #2e3030
    font-size 13px
    text-align center
    padding 5px 0
.hot
  padding 0 10px
  box-sizing border-box
  p
    margin 0
    padding 0 5px
    height 30px
    line-height 30px
    font-size 15px
    color #000
  .hot-tag
    margin 0
    span
      display inline-block
      padding 5px 10px
      margin 4px
      border 0.8px solid #c7c7c7
      border-radius 5px
      line-height 20px
      color #2e3030
      font-size 14px
      border-radius 15px
      cursor pointer
</style>
