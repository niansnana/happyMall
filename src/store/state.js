/**
* @author niansnana
* @Description vuex-state 定义常量
* @Start_Writing_Date 2020-05-09 08:02:22
* @Last_Modified_Date 2020-05-10 10:04:16
*/
const state = {
  routerLinkActive: null,
  totalNum: 0, // 购物车购买的总数 （存在安全性问题
  isChecked: false, // 购物车商品默认未选中 （存在安全性问题
  totalPrice: 0, // 购物车最终所需要支付的金额（存在安全性问题
  shoppingCart: [], // 当前用户存储的购物车数组（存在安全性问题，等待后续接口，再来实现该功能）
  token: '', // token 令牌
  userName: '' // 当前用户名
}

export default state
