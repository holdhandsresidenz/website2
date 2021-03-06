import Vue from 'vue'
import App from './App.vue'
import browserDetect from "vue-browser-detect-plugin"
import VueRouter from 'vue-router'
import routes from "@/pages/private/router/routes";
import store from "@/pages/private/store";

import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
Vue.config.productionTip = false
Vue.use(browserDetect);
Vue.use(VueRouter)
const router = new VueRouter({routes});




new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
