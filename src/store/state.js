/**
* @author niansnana
* @Description vuex-state 定义常量
* @Start_Writing_Date 2020-05-09 08:02:22
* @Last_Modified_Date 2020-05-10 10:04:16
*/
const state = {
  bottomNav: true, // 底部导航（默认显示）
  totalNum: 0, // 购物车购买的总数
  isChecked: false, // 购物车商品默认未选中
  totalPrice: 0, // 购物车最终所需要支付的金额,
  shoppingCart: [] // 存储的购物车数组
}

export default state
