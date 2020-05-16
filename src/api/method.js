/**
* @author niansnana
* @Description 封装请求方法
* @Start_Writing_Date 2020-05-15 12:23:28
* @Last_Modified_Date 2020-05-15 12:23:28
*/
import axios from 'axios'
import qs from 'qs'
/**
 * 封装 get 方法
 * @param {String} url 请求地址
 * @param {String} params 请求参数
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
/**
 * 封装 post 方法
 * @param {String} url 请求地址
 * @param {String} data 请求参数
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data)).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * 封装 patch 方法（修改局部）
 * @param {String} url 请求地址
 * @param {String} data 请求参数
 */
export function patch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
