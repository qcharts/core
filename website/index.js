// import Vue from 'vue'
// import router from './router'
// // import App from './App.vue'
// // import BlockDemo from './components/BlockDemo.vue'
// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'highlight.js/styles/xcode.css'

// // Vue.config.productionTip = false

// // Vue.component('block-demo', BlockDemo)

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
