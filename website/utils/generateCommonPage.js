import Vue from 'vue'

export default function(prefix, routes) {
  return Vue.component(
    prefix.replace(/(\/)\w+/g, m => m.toUpperCase()).replace(/\//g, ''),
    {
      data() {
        return { prefix, routes }
      },
      render(h) {
        return h('router-view')
      }
    }
  )
}
