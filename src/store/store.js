import Vue from 'vue'
import Vuex from 'vuex'
import Days from './modules/days'
import City from './modules/city'
import Mini from './modules/mini'
import Mini2 from './modules/mini2'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {City,Days,Mini,Mini2}  
})
