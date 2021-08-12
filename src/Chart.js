import Base from './base/Base'
import { jsType, emptyObject, throttle } from '@qcharts/utils'
import { h } from '@qcharts/vnode'
import { getGlobal, isWeiXin } from './base/platform'
import BaseVisual from './base/BaseVisual'
import BasePlugin from './base/BasePlugin'
import { Scene } from 'spritejs'
import { Wave, Gauge } from './index'
class Chart extends Base {
  constructor(attr) {
    super()
    // 预先将jsx 解析函数挂载到全局
    const global = getGlobal()
    if (!global.qcharts || (global.qcharts && !global.qcharts.h)) {
      global.qcharts = { h }
    }
    let { container, contextType = '2d', displayRatio } = attr
    if (jsType(container) === 'string') {
      container = document.querySelector(container)
    }
    this.$el = container
    this.visuals = []
    this.plugins = []
    this.children = []
    if (isWeiXin()) {
      const { pixelUnit = 'rpx', size } = attr
      let displayRatio = 1
      if (pixelUnit === 'rpx') {
        const { windowWidth } = wx.getSystemInfoSync()
        displayRatio = windowWidth / 750
      }
      this.scene = new Scene({
        width: size[0] / displayRatio,
        height: size[1] / displayRatio,
        extra: this,
        contextType,
        displayRatio
      })
    } else {
      this.scene = new Scene({ container, contextType, displayRatio: displayRatio || getGlobal().devicePixelRatio })
    }
    this.scene.addEventListener('resize', _ => {
      //舞台变化的时候
      this.checkUpdate({ type: 'resize' })
    })
    this.checkUpdate = throttle(args => {
      this.children.forEach(node => {
        node.update(args)
      })
    }, 300)
    this.checkRender = throttle(_ => {
      this.children.forEach(child => {
        child.created()
        console.log('abc')
        this.dataset.addDep(child)
      })
      this.__store.__isCreated__ = true
      this.dispatchEvent('updated', emptyObject())
    })
  }
  update(args) {
    //图表发生更新，触发图表内组件更新
    this.checkUpdate(args)
  }
  append(node) {
    const notNeedDataSetList = [Wave, Gauge]
    if (notNeedDataSetList.some(Target => node instanceof Target)) {
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
