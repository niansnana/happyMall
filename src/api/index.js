/**
* @author niansnana
* @Description api 接口方法（等待后续正式的接口）
* @Start_Writing_Date 2020-05-10 14:02:16
* @Last_Modified_Date 2020-05-10 14:02:16
*/
import axios from 'axios'
import qs from 'qs'
import {
  register,
  login
} from './config'

// 请求超时时间
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default {
  /**
   * 新用户注册
   * @param {String} userName 用户名
   * @param {String} password 密码
   * @param {String} phone 手机号
   */
  registerFn (params) {
    return new Promise((resolve, reject) => {
      axios.post(register, qs.stringify(params)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 登录验证
   * @param {String} userName 用户名
   * @param {String} password 密码
   */
  loginFn (params) {
    return new Promise((resolve, reject) => {
      axios.post(login, qs.stringify(params)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
