import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
    

 
Vue.use(VueAxios, axios, moment)

Vue.config.productionTip = false,
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD-MMM-YYYY', 'es')
  }
})
Vue.filter('formatHour', function(value) {
  if (value) {
    return moment(String(value)).format('HH:mm A', 'es')
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

