import Base from './base/Base'
import { jsType } from './util'
import platform from './base/platform'
import BaseVisual from './base/BaseVisual'
import BasePlugin from './base/BasePlugin'
import { Scene } from 'spritejs'
class Chart extends Base {
  constructor(attr) {
    super()
    let { container } = attr
    console.log(attr)
    if (jsType(container) === 'string') {
      container = document.querySelector(container)
    }
    this.visuals = []
    this.plugins = []
    this.scene = new Scene({ container, displayRatio: platform.devicePixelRatio })
  }
  append(node) {
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
  }
}
export default Chart
