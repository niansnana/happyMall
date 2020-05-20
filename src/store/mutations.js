/**
* @author niansnana
* @Description vuex-mutations 修改状态
* @Start_Writing_Date 2020-05-09 08:02:22
* @Last_Modified_Date 2020-05-10 10:04:16
*/
import * as types from './mutations-types'

const mutations = {
  [types.SET_ROUTER_LINK_ACTIVE] (state, num) {
    state.routerLinkActive = num
  },
  [types.SET_TOTAL_PRICE] (state, total) {
    state.totalPrice = total
  },
  [types.SET_TOTAL_NUM] (state, num) {
    state.totalNum = num
  },
  [types.SET_SHOPPING_CART] (state, paylod) {
    state.shoppingCart = paylod
  },
  [types.SET_CUR_USER_CARTS_NUM] (state, num) {
    state.curUserCartsNum = num
  },
  [types.SET_TOKEN] (state, key) {
    state.token = key
  },
  [types.SET_USER_NAME] (state, data) {
    state.userName = data
  }
}

export default mutations
