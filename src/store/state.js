/**
* @author niansnana
* @Description vuex-state 定义常量
* @Start_Writing_Date 2020-05-09 08:02:22
* @Last_Modified_Date 2020-05-10 10:04:16
*/
const state = {
  routerLinkActive: 0, // 默认导航激活状态序列
  totalNum: 0, // 购物车购买的总数
  totalPrice: 0, // 购物车最终所需要支付的金额
  curUserCartsNum: 0, // 当前用户的购物车数量
  token: '', // token 令牌
  userName: '' // 当前用户名,
}

export default state
