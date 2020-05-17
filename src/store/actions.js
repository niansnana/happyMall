/**
* @author niansnana
* @Description vuex-actions 异步操作
* @Start_Writing_Date 2020-05-10 10:04:16
* @Last_Modified_Date 2020-05-10 10:04:16
*/
import * as types from './mutations-types'

export const changeTotalPrice = function ({ commit }, { num, isChecked, price }) {
  commit(types.SET_TOTAL_NUM, num)
  commit(types.SET_CHECKED, isChecked)
  commit(types.SET_TOTAL_PRICE, price)
}

export const getUserNameAndToken = function ({ commit }, { userName, token }) {
  commit(types.SET_USER_NAME, userName)
  commit(types.SET_TOKEN, token)
}
