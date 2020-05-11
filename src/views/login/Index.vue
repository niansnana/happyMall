<!--
 * @author niansnana
 * @Description 登录
 * @Start_Writing_Date 2020-05-11 09:53:00
 * @Last_Modified_Date 2020-05-11 09:53:00
-->
<template>
  <div>
    <Nav>
      <slot>帮助</slot>
    </Nav>
    <div class="logo">
      <van-image width="100" round src="http://image.niansnana.com/20200511104737.png" />
    </div>
    <van-form validate-first>
      <van-field
        v-model="username"
        clearable
        placeholder="手机号/邮箱/会员名"
        left-icon="contact"
        right-icon="question-o"
        @click-right-icon="$toast('用户名必须是手机号')"
      />
      <van-field
        v-model="password"
        clearable
        :type="passwordType"
        placeholder="请输入登录密码"
        :left-icon="isShowPassword"
        @click-left-icon="showPass"
        @click-right-icon="$toast('密码必须是数字、字母、下划线')"
        right-icon="question-o"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          :type="isLogin"
          :disabled="this.username === '' ? true : false"
          native-type="submit"
          @click="login"
        >登录</van-button>
      </div>
    </van-form>
    <p>免费注册</p>
  </div>
</template>

<script>
import Nav from 'components/navBar/Nav'
import { mapMutations } from 'vuex'
export default {
  components: { Nav },
  data () {
    return {
      username: '',
      password: '',
      passwordType: 'password',
      isShowPass: false,
      userInfo: [
        { id: 1, username: 'admin', password: 'admin' },
        { id: 2, username: 'nian', password: 'nian' }
      ],
      status: null
    }
  },
  computed: {
    isLogin () {
      return this.username === '' ? 'default' : 'danger'
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
    login () {
      this.userInfo.forEach(value => {
        if (this.username === value.username && this.password === value.password) {
          this.status = 200
          const token = new Date().getTime()
          this.setToken(token)
          this.$router.push({
            path: '/home'
          })
          this.setBottomNav(true)
        }
        if (this.status !== 200) {
          this.$toast.fail('用户名或密码错误')
        }
      })
    },
    showPass () {
      // eye-o
      if (this.isShowPass === false) {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
      this.isShowPass = !this.isShowPass
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  text-align center
  margin 15px 0px
p
  text-align right
  padding-right 20px
  color #999
  cursor pointer
  &:hover
    color #ff5000
</style>
