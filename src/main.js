import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入vant
import 'plugin/vant.js'
// 像素转换
import 'lib-flexible'
// 引入工具函数-置顶问题
import 'utils/backTop.js'
// 300 延迟问题
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 配置axios
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.prototype.$api = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
