/**
* @author niansnana
* @Description vuex-mutations 修改状态
* @Start_Writing_Date 2020-05-09 08:02:22
* @Last_Modified_Date 2020-05-10 10:04:16
*/
import * as types from './mutations-types'

const mutations = {
  [types.SET_BOTTOM_NAV] (state, flag) {
    state.bottomNav = flag
  },
  [types.SET_TOTAL_PRICE] (state, total) {
    state.totalPrice = total
  },
  [types.SET_TOTAL_NUM] (state, num) {
    state.totalNum = num
  },
  [types.SET_CHECKED] (state, flag) {
    state.isChecked = flag
  }
}

export default mutations
