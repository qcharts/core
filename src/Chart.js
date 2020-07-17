import Base from './base/Base'
import { jsType, emptyObject, throttle } from '@qcharts/utils'
import platform from './base/platform'
import BaseVisual from './base/BaseVisual'
import BasePlugin from './base/BasePlugin'
import { Scene } from 'spritejs'
import { Wave } from './index'
class Chart extends Base {
  constructor(attr) {
    super()
    let { container } = attr
    if (jsType(container) === 'string') {
      container = document.querySelector(container)
    }
    this.$el = container
    this.visuals = []
    this.plugins = []
    this.children = []
    this.scene = new Scene({ container, displayRatio: platform.devicePixelRatio })
    this.scene.addEventListener('resize', _ => {
      //舞台变化的时候
      this.checkUpdate()
    })
    this.checkUpdate = throttle(_ => {
      this.children.forEach(node => {
        node.update()
      })
    }, 300)
    this.checkRender = throttle(_ => {
      this.children.forEach(child => {
        child.created()
        this.dataset.addDep(child)
      })
      this.__store.__isCreated__ = true
      this.dispatchEvent('updated', emptyObject())
    })
  }
  update() {
    //图表发生更新，触发图表内组件更新
    this.checkUpdate()
  }
  append(node) {
    if (node instanceof Wave) {
      //补齐dataset，wave中不用dataset
      this.source([], {})
    } else if (!this.dataset) {
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
    this.children.push(node)
    node.chart = this
    node.scene = this.scene
    this.checkRender()
  }
  getDataURL() {
    return this.scene.snapshot().toDataURL()
  }
}

export default Chart
