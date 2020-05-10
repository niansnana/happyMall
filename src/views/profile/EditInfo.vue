<template>
  <div>
    <!-- 头部 -->
    <NavBar>
      <slot>编辑资料</slot>
    </NavBar>
    <div class="portrait">
      <div>
        <img src="https://pic2.zhimg.com/80/v2-3f71bc3a7c067ccca02edeadc0059936_720w.jpg" />
      </div>
    </div>
    <van-form>
      <van-field name="用户名" label="用户名" placeholder="hg_sdfddfd" />
      <van-field name="昵称" label="昵称" placeholder="养你致富hhh" />
      <van-field name="性别" label="性别" :value="value" placeholder="男" @click="showPicker = true" />
      <van-field name="出生日期" label="出生日期" placeholder="2000-9-18" />
      <van-field name="手机号码" label="手机号码" placeholder="15256832969" />
    </van-form>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
export default {
  components: { NavBar },
  data () {
    return {
      value: '',
      columns: ['男', '女'],
      showPicker: false
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.portrait
  height 100px
  margin-top 10px
  div
    width 88px
    height 88px
    margin 0 auto
    img
      width 100%
      height 100%
      border-radius 50%
</style>
