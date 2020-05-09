/**
* @author niansnana
* @Description Vuex
* @Start_Writing_Date 2020-05-09 08:02:11
* @Last_Modified_Date 2020-05-09 08:02:11
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// debug测试查看
const debug = process.env.NODE_ENV !== 'production'
// vuex持久化
const createPersisted = persistedState({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})
