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
  isExist,
  goodsList
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
  // 用户注册
  registerFn (params) {
    return post(register, params)
  },
  // 用户名查重
  isExistFn (userName) {
    return post(isExist, userName)
  },
  // 登录验证
  loginFn (params) {
    return post(login, params)
  },
  // 用户详情
  detailFn (userName) {
    return get(detail, userName)
  },
  // 修改用户昵称
  changeCurUserInfoFn (userName) {
    return patch(changeCurUserInfo, userName)
  },
  // 修改用户性别（存在冗余，待完善）
  changeCurUserGenderFn (gender) {
    return patch(changeCurUserInfo, gender)
  },
  // 退出登录
  logoutFn () {
    return post(logout)
  },
  // 商品数据
  goodsListFn (keywords) {
    return get(goodsList, keywords)
  }
}
