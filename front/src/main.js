import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import router from './router'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  IconsPlugin,
  NavbarPlugin,
  BFormInvalidFeedback,
  BFormValidFeedback,
  BNavbar,
  BTable
} from 'bootstrap-vue'


import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NavbarPlugin)
Vue.component('b-navbar', BNavbar)
Vue.component('b-valid-feedback', BFormValidFeedback)
Vue.component('b-invalid-feedback', BFormInvalidFeedback)
Vue.component('b-table', BTable)

Vue.filter("moment", date => {
  moment.locale('fr')
  return moment(date).fromNow()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
