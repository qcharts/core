import Vue from 'vue'
import router from './router'
import App from './App.vue'
import BlockDemo from './components/BlockDemo.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'highlight.js/styles/xcode.css'

Vue.config.productionTip = false

Vue.component('block-demo', BlockDemo)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
