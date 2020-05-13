/**
* @author niansnana
* @Description api 接口地址（等待后续正式的接口）
* @Start_Writing_Date 2020-05-10 14:01:56
* @Last_Modified_Date 2020-05-10 14:01:56
*/
// 接口地址
const api = process.env.NODE_ENV === 'development' ? '/dev/' : '/prod/'

// 登录 && 注册
export const register = api + 'user/register' // 注册
export const login = api + 'user/login' // 登录
