import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import browserDetect from "vue-browser-detect-plugin"
import store from "@/pages/public/store";
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false
Vue.use(browserDetect);
Vue.use(PortalVue)

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
