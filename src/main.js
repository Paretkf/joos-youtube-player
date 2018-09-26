import Vue from 'vue'
import App from './App'
import router from './router'
import VueYoutube from 'vue-youtube'
import store from './store'
import 'begeta/css/begeta.min.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueSweetalert2 from 'vue-sweetalert2'
import SvgFiller from 'vue-svg-filler'

Vue.use(Buefy)
Vue.use(VueYoutube)
Vue.use(VueSweetalert2)
Vue.component('svg-filler', SvgFiller)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
