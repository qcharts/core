import Base from './base/Base'
import { jsType, emptyObject, throttle } from '@qcharts/utils'
import platform from './base/platform'
import BaseVisual from './base/BaseVisual'
import BasePlugin from './base/BasePlugin'
import { Scene } from 'spritejs'
class Chart extends Base {
  constructor(attr) {
    super()
    let { container } = attr
    if (jsType(container) === 'string') {
      container = document.querySelector(container)
    }
    this.visuals = []
    this.plugins = []
    this.scene = new Scene({ container, displayRatio: platform.devicePixelRatio })
    this.scene.addEventListener('resize', _ => {
      //舞台变化的时候
      this.update()
    })
    this.checkRender = throttle(_ => {
      let children = [].concat(this.visuals).concat(this.plugins)
      children.forEach(child => {
        child.created()
        this.dataset.addDep(child)
      })
      this.__store.__isCreated__ = true
      this.dispatchEvent('updated', emptyObject())
    })
  }
  update() {
    //图表发生更新，触发图表内组件更新
    let nodes = [].concat(this.plugins).concat(this.visuals)
    nodes.forEach(node => {
      node.update()
    })
  }
  append(node) {
    if (!this.dataset) {
      console.error('Chart should set data before append some graphs')
      return
    }
    if (jsType(node) === 'array') {
      node.forEach(item => {
        this.append(item)
      })
      return
    } else if (node instanceof BaseVisual) {
      this.visuals.push(node)
    } else if (node instanceof BasePlugin) {
      this.plugins.push(node)
    }
    node.chart = this
    node.scene = this.scene
    this.checkRender()
  }
  renderChild() {}
}

export default Chart
