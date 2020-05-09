import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant
import '@/plugin/vant.js'
// 移动端响应式，像素自动转换
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
