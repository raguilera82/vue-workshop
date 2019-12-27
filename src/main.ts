import { applyPolyfills, defineCustomElements } from 'radh-ui/dist/loader'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/radh-\w*/, /cjs-\w*/, /index-\w*/]

applyPolyfills().then(() => {
  defineCustomElements(window)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
