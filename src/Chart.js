import Base from './base/Base'
import { jsType, emptyObject } from './util'
import platform from './base/platform'
import BaseVisual from './base/BaseVisual'
import BasePlugin from './base/BasePlugin'
import { Scene } from 'spritejs'
import { throttle } from './util'
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
    this.checkRender = throttle(_ => {
      let children = [].concat(this.visuals).concat(this.plugins)
      children.forEach(child => {
        child.created()
      })
      this.dispatchEvent('updated', emptyObject())
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
