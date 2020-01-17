import { Node, Group } from 'spritejs'
import { lifeCycle, mixin } from './mixin'
import { emptyObject, deepObjectMerge, jsType, getDistancePx } from '@qcharts/utils'
import { patch, diff } from '@qcharts/vnode'
import filterClone from 'filter-clone'
import Dataset from '@qcharts/dataset'
class Base extends Node {
  constructor(attrs) {
    super()
    this.dispatchEvent(lifeCycle.beforeCreate)
    mixin(this)
    this['__store'] = emptyObject()
    let store = this['__store']
    store.__attrs = emptyObject()
    store.__vnode__ = null
    store.__isCreated__ = false
    store.__refs = emptyObject()
    store.dataset = null
    this.attr(attrs)
    //渲染时的数据
  }
  get store() {
    return this['__store']
  }
  get layer() {
    return this.scene.layer(this.attr('layer') || 'default')
  }
  get $refs() {
    return this['__store'].__refs
  }
  get renderAttrs() {
    //attrs转换
    let attrs = filterClone(deepObjectMerge(this.baseAttrs(), this.defaultAttrs(), this.attr()))
    let { animation, clientRect } = attrs
    //动画数据转换
    if (jsType(animation) === 'boolean') {
      animation = { use: animation ? true : false }
    }
    //处理layer支持多layer
    let { width, height } = this.layer.canvas.getBoundingClientRect()
    //计算布局数据
    for (let key in clientRect) {
      if (['left', 'right', 'width'].indexOf(key) !== -1) {
        clientRect[key] = getDistancePx(clientRect[key], width)
      } else if (['top', 'bottom', 'height'].indexOf(key) !== -1) {
        clientRect[key] = getDistancePx(clientRect[key], height)
      }
    }
    if (clientRect.width === undefined) {
      clientRect.width = width - clientRect.left - clientRect.right
    } else {
      clientRect.right = width - clientRect.left - clientRect.width
    }
    if (clientRect.height === undefined) {
      clientRect.height = height - clientRect.top - clientRect.bottom
    } else {
      clientRect.bottom = height - clientRect.top - clientRect.height
    }
    attrs.colors = this.theme.colors
    return attrs
  }
  get dataset() {
    return this['__store'].dataset || (this.chart && this.chart.dataset)
  }
  source(data, options) {
    let dataset = data
    let store = this['__store']
    if (!(data instanceof Dataset)) {
      let opts = options
      if (store.dataset) {
        opts = deepObjectMerge({}, store.dataset.option, options)
      }
      dataset = new Dataset(data, opts)
    }
    if (store.dataset && store.__isCreated__) {
      //如果以前存在，则更新
      this.update()
    }
    store.dataset = dataset
    return this
  }
  created() {
    //初始化创建的时候执行
    let store = this['__store']
    this.dispatchEvent(lifeCycle.created)
    store.__vnode__ = this.render(this.beforeRender())
    const patches = diff(null, store.__vnode__)
    this.dispatchEvent(lifeCycle.beforeRender)
    patch.bind(this)(this.parent || this.layer, patches)
    this.dispatchEvent(lifeCycle.rendered)
    this.rendered()
  }
  beforeRender() {
    //图表初始化准备数据
    return this.renderAttrs
  }
  render() {
    console.warn('this function must be rewrited')
  }
  beforeUpdate() {
    return this.renderAttrs
  }
  update() {
    //图表更新准备数据
    let store = this['__store']
    this.dispatchEvent(lifeCycle.beforeUpdate)
    let vnode = this.render(this.beforeUpdate())
    const patches = diff(store.__vnode__, vnode)
    patch.bind(this)(this.parent || this.layer, patches)
    store.__vnode__ = vnode
    this.dispatchEvent(lifeCycle.updated)
  }
  updated() {}
  dispatchEvent(event, obj = emptyObject()) {
    super.dispatchEvent(event, obj)
  }
  defaultAttrs() {}
  baseAttrs() {
    let attrs = {
      //动画类型
      animation: {
        use: true,
        duration: 300,
        useTween: true,
        easing: 'linear'
      },
      //位置布局信息
      clientRect: {
        left: '10%',
        top: '10%',
        right: '10%',
        bottom: '10%',
        width: undefined,
        height: undefined
      },
      //透明度
      opacity: 1,
      layer: 'default',
      layoutBy: 'rows' //按照哪个数据布局 ['rows','cols']
    }
    return attrs
  }
  attr(name, val) {
    //属性设置
    let store = this['__store']
    if (jsType(name) === 'object') {
      for (let key in name) {
        this.attr(key, name[key])
      }
    } else if (val === undefined) {
      //获取属性
      return store.__attrs[name]
    } else if (name !== undefined) {
      store.__attrs[name] = val
    } else if (name === undefined) {
      return store.__attrs
    }
  }
  addRef(ref, el) {
    this['__store'].__refs[ref] = el
    //在vnode中调用，存储到this.__refs中
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
