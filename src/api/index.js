/**
* @author niansnana
* @Description api 接口方法
* @Start_Writing_Date 2020-05-10 14:02:16
* @Last_Modified_Date 2020-05-16 10:30:07
*/
import axios from 'axios'
import {
  register,
  login,
  changeCurUserInfo,
  detail,
  logout,
  isExist
} from './config'

import { get, post, patch } from './method'

import { Toast } from 'vant'
// 请求超时时间
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// axios 请求拦截
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// axios 响应拦截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      const { status } = error.response
      // 如果401或405则到登录页
      if (status === 401 || status === 405) {
        Toast({
          message: '未知错误',
          duration: 1000,
          forbidClick: true
        })
      }
    }
    return Promise.reject(error)
  }
)

export default {
  /**
   * 新用户注册
   * @param {String} userName 用户名
   * @param {String} password 密码
   * @param {String} phone 手机号
   */
  registerFn (params) {
    return post(register, params)
  },
  isExistFn () {
    return post(isExist)
  },
  /**
   * 登录验证
   * @param {String} userName 用户名
   * @param {String} password 密码
   */
  loginFn (params) {
    return post(login, params)
  },
  detailFn (userName) {
    return get(detail, userName)
  },
  // 修改用户信息
  changeCurUserInfoFn (userName) {
    return patch(changeCurUserInfo, userName)
  },
  // 退出登录
  logoutFn () {
    return post(logout)
  }
}
