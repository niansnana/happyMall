import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api'
// 引入vant
import 'plugin/vant.js'
// 像素转换
import 'lib-flexible'
// 引入工具函数-置顶问题
import 'utils/backTop.js'
import * as filters from 'utils/filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
