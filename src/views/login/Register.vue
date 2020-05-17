<!--
 * @author niansnana
 * @Description 注册
 * @Start_Writing_Date 2020-05-12 15:33:02
 * @Last_Modified_Date 2020-05-12 15:33:02
-->
<template>
  <div>
    <Nav />
    <div class="logo">
      <van-image width="100" round src="http://image.niansnana.com/20200511104737.png" />
    </div>
    <van-form validate-first>
      <van-field
        v-model="userInfo.userName"
        clearable
        placeholder="手机号/邮箱/会员名"
        left-icon="contact"
        right-icon="question-o"
        @click-right-icon="$toast('用户名大于两位')"
        @input="userNameIsExist(userInfo.userName)"
      />
      <van-notice-bar :scrollable="false" v-show="showIsExist">用户名已存在</van-notice-bar>
      <van-field
        v-model="userInfo.password"
        clearable
        :type="passwordType"
        placeholder="请输入登录密码"
        :left-icon="isShowPassword"
        @click-left-icon="showPass"
        @click-right-icon="$toast('密码必须是数字、字母、下划线')"
        right-icon="question-o"
      />
      <van-field
        v-model="userInfo.phone"
        clearable
        type="text"
        placeholder="请输入手机号"
        left-icon="phone-o"
        @click-right-icon="$toast('霸王条约')"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          :type="isLogin"
          :disabled="this.userInfo.userName === '' ? true : false"
          native-type="submit"
          @click="_register(userInfo.userName, userInfo.password, userInfo.phone)"
        >注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Nav from 'components/navBar/Nav'
import { mapMutations } from 'vuex'
export default {
  components: { Nav },
  data () {
    return {
      userInfo: {
        userName: '',
        password: '',
        phone: ''
      },
      passwordType: 'password',
      isShowPass: false,
      showIsExist: false
    }
  },
  computed: {
    isLogin () {
      return this.userName === '' ? 'default' : 'danger'
    },
    isShowPassword () {
      return this.passwordType === 'password' ? 'closed-eye' : 'eye-o'
    }
  },
  methods: {
    ...mapMutations({
      setBottomNav: 'SET_BOTTOM_NAV',
      setToken: 'SET_TOKEN'
    }),
    showPass () {
      // eye-o
      if (this.isShowPass === false) {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
      this.isShowPass = !this.isShowPass
    },
    _register () {
      this.$api.registerFn(this.userInfo).then(res => {
        if (res.data.code === 200) {
          this.$router.push({
            path: '/login'
          })
        } else {
          this.$toast.fail('格式不合法')
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    userNameIsExist (userName) {
      this.$api.isExistFn({ userName }).then(res => {
        if (res.data.code === 200) {
          this.showIsExist = !this.showIsExist
        }
        if (userName === '') {
          this.showIsExist = false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  text-align center
  margin 15px 0px
</style>
