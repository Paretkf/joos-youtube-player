import Vue from 'vue'
import App from './App'
import router from './router'
import VueYoutube from 'vue-youtube'
import store from './store'
import 'begeta/css/begeta.min.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueYoutube)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
