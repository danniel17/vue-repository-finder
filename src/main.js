
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import vueResource from 'vue-resource'
import 'materialize-loader'

Vue.use(vueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render:h => h(App),
  components: { App }
})
