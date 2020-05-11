/**
* @author niansnana
* @Description 切换路由，自动回到顶部
* @Start_Writing_Date 2020-05-11 09:19:12
* @Last_Modified_Date 2020-05-11 09:19:12
*/
import router from '../router'

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
