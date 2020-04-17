import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import {BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  axios
}).$mount('#app')
