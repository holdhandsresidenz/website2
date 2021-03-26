import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import browserDetect from "vue-browser-detect-plugin"
import store from "@/pages/public/store";
Vue.config.productionTip = false
Vue.use(browserDetect);
Vue.use(PortalVue)


new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
