import { Node, Group } from 'spritejs'
import { lifeCycle, mixin } from './mixin'
import { emptyObject, deepObjectMerge, jsType, getDistancePx } from '../util'
import filterClone from 'filter-clone'
import Dataset from '@qcharts/dataset'
class Base extends Node {
  constructor(attrs = {}) {
    super()
    mixin(this)
    let defaultAttrs = this.getDefaultAttrs()
    this.attr(deepObjectMerge(emptyObject(), defaultAttrs, attrs))
    this.dispatchEvent(lifeCycle.beforeCreate, emptyObject())
    this.container = new Group()
    this.__data__ = null
    this.__vnode__ = null
    this.__isCreated__ = false
    this.dispatchEvent(lifeCycle.beforeCreate, emptyObject())
    this.__colors = []
    //渲染时的数据
    this.renderAttrs = emptyObject()
    this.$refs = emptyObject()
  }
  source(data, options) {
    let dataset = data
    if (!data instanceof Dataset) {
      dataset = new Dataset(data, options)
    }
    this.dataset = dataset
    return this
  }
  created() {
    let dataset = this.dataset || this.chart.dataset
    if (dataset) {
      this.transProps()
      let renderData = this.beforeRender()
      this.render(renderData)
    }
  }
  beforeRender() {
    this.transProps()
  }
  beforeUpdate() {}
  render() {}
  update() {}
  rendered() {}
  transProps() {
    //部分原始属性需要在实际绘图的时候需要转换，在此处处理
    let attrs = filterClone(this.attr())
    let { animation, clientRect, layer = 'default' } = attrs
    //动画数据转换
    if (jsType(animation) === 'boolean') {
      animation = { use: animation ? true : false }
    }
    //处理layer支持多layer
    layer = this.scene.layer(layer)
    layer.append(this.container)
    let { width, height } = layer.canvas.getBoundingClientRect()
    //计算布局数据
    clientRect = filterClone(clientRect, ['left', 'top', 'right', 'bottom', 'width', 'height'])
    for (let key in clientRect) {
      if (['left', 'right', 'width'].indexOf(key) !== -1) {
        clientRect[key] = getDistancePx(clientRect[key], width)
      } else {
        clientRect[key] = getDistancePx(clientRect[key], height)
      }
    }
    this.renderAttrs = deepObjectMerge(this.getDefaultAttrs(), { animation, clientRect })
    return this.renderAttrs
  }
  getDefaultAttrs() {
    let attrs = {
      //动画类型
      animation: {
        use: true,
        duration: 300,
        easing: 'line'
      },
      //位置布局信息
      clientRect: {
        left: '10%',
        top: '10%',
        right: '10%',
        bottom: '10%',
        width: '80%',
        height: '80%'
      },
      //透明度
      opacity: 1,
      //数据布局排列
      layoutBy: 'row'
    }
    return attrs
  }
  attr(...args) {
    //属性设置
    return super.attr(...args)
  }
  style(type, style) {
    //样式设置，样式用attr逻辑存储，添加@符号
    if (jsType(type) === 'object') {
      for (let key in type) {
        this.style(key, type[key])
      }
    } else if (type !== undefined && style === undefined) {
      const style = this.attr('style@' + type)
      return (...args) => {
        if (isFunction(style)) {
          return style.apply(this, args)
        } else {
          return style
        }
      }
    } else if (type !== undefined) {
      this.attr('style@' + type, style)
      return this
    }
  }
}
export default Base
