/**
* @author niansnana
* @Description api 接口地址
* @Start_Writing_Date 2020-05-10 14:01:56
* @Last_Modified_Date 2020-05-16 10:30:07
*/
// 接口地址
const api = process.env.NODE_ENV === 'development' ? '/dev/' : '/prod/'

// 登录 && 注册
export const register = api + 'user/register' // 用户注册
export const isExist = api + 'user/isExist' // 用户名是否存在
export const login = api + 'user/login' // 用户登录
// 用户信息
export const detail = api + 'user/detail' // 用户详情
export const changeCurUserInfo = api + 'user/changeInfo' // 修改当前用户信息
export const logout = api + 'user/logout' // 退出登录
// 商品数据
export const goodsList = api + 'goods/list' // 商品数据
export const goodsDetail = api + 'goods/detail' // 商品数据
export const cartsAdd = api + 'goods/update' // 添加到购物车
export const searchGoods = api + 'goods/search' // 商品搜索
