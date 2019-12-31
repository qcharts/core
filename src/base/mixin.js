const lifeCycle = {
  beforeCreate: 'beforeCreate', // 图表创建前
  created: 'created', // 图表创建
  beforeRender: 'beforeRender', // 图表渲染前
  rendered: 'rendered', // 图表渲染
  beforeUpdate: 'beforeUpdate', // 图表更新前
  updated: 'updated', // 图表更新
  beforeDestroy: 'beforeDestroy', // 图表卸载前
  destroyed: 'destroyed' // 图表卸载
}
function eventsMixin(component) {}

export { lifeCycle, eventsMixin }
