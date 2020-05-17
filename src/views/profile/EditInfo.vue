<template>
  <div>
    <NavBar>
      <slot>编辑资料</slot>
    </NavBar>
    <div class="showUserInfo" v-show="Object.keys(this.userData).length">
      <van-cell class="align_cell" title="头像" is-link>
        <template #default>
          <van-uploader>
            <van-image
              width="60"
              round
              fit="contain"
              :src="userData.avatar"
              @click="changeCurUserAvatar"
            />
          </van-uploader>
        </template>
      </van-cell>
      <van-cell title="会员名" :value="userData.userName" @click="showTipAtUserName" />
      <van-cell title="UID" :value="userData.id" />
      <van-cell title="昵称" is-link :value="userData.nickName" @click="showChangeNickName = true" />
      <van-cell title="性别" is-link :value="getGender" @click="showPicker = true" />
      <van-cell title="注册时间" :value="userData.createdAt | dataFilter(userData.createdAt)" />
      <van-divider :style="{ color: '#999', borderColor: '#c8c8c8', padding: '0 16px' }">退出登录移至设置里啦</van-divider>
    </div>
    <!-- 修改昵称 -->
    <van-popup id="changeNickNameID" v-model="showChangeNickName" position="right">
      <van-nav-bar left-text="返回" left-arrow @click-left="showChangeNickName = false">
        <template #title>
          <slot>修改昵称</slot>
        </template>
      </van-nav-bar>
      <div class="cnn_content">
        <van-field v-model="nickName" :placeholder="userData.nickName" clearable />
        <span>注意：一旦修改，则默认承认管理员很酷</span>
        <van-button block @click="changeNickName(nickName, userData.userName)">保存</van-button>
      </div>
    </van-popup>
    <!-- 修改性别 -->
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <Loading v-show="!Object.keys(this.userData).length" />
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
import Loading from 'components/loading/Loading'
import { mapGetters } from 'vuex'
export default {
  components: { NavBar, Loading },
  data () {
    return {
      userData: {},
      showChangeNickName: false,
      nickName: '',
      showPicker: false,
      columns: [
        { key: 1, text: '男' },
        { key: 2, text: '女' },
        { key: 3, text: '保密' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'userName'
    ]),
    getGender () {
      return parseInt(this.userData.gender) === 3 ? '保密' : parseInt(this.userData.gender) === 1 ? '男' : '女'
    }
  },
  created () {
    this.getUserInfo(this.userName)
  },
  methods: {
    getUserInfo (userName) {
      this.$api.detailFn({ userName }).then(res => {
        if (res.code === 200 && res.data) {
          this.userData = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    changeCurUserAvatar () {
      console.log('修改头像')
    },
    showTipAtUserName () {
      this.$toast('用户名作为登录名，不可以修改哦~')
    },
    changeNickName (nickName, userName) {
      this.$api.changeCurUserInfoFn({ nickName, userName }).then(res => {
        if (res.code === 200) {
          this.$toast.success('修改成功')
          this.getUserInfo(userName)
          setTimeout(() => {
            this.$router.go(-1)
          }, 500)
        }
      })
    },
    onConfirm (value, index) {
      const gender = value.key
      // const curText = value.text
      const userName = this.userData.userName
      this.$api.changeCurUserGenderFn({ gender, userName }).then(res => {
        if (res.code === 200) {
          this.$toast.success('修改成功')
          this.getUserInfo(userName)
        }
      })
      this.showPicker = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.align_cell
  display flex
  align-items center
#changeNickNameID
  width 100%
  height 100%
  background-color #f5f5f5
  >>> .van-nav-bar
    background-color #b1daba
    .van-nav-bar__left i, .van-nav-bar__left span, .van-nav-bar__title
      color #fff
  .cnn_content
    padding 15px
    box-sizing border-box
    .van-field
      border-radius 5px
    span
      color #999
      display block
      margin 10px 0px
    .van-button
      background-color #ff5001
      border-radius 5px
      cursor pointer
      >>> span
        color #fff
</style>
