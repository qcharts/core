import { Node } from 'spritejs'
import { lifeCycle, mixin } from './mixin'
import { emptyObject, deepObjectMerge, jsType, getDistancePx, throttle } from '@qcharts/utils'
import { patch, diff } from '@qcharts/vnode'
import Dataset from '@qcharts/dataset'
import { isWeiXin } from './platform'
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
    // 微信中不支持多图层
    const layerSetting = isWeiXin() ? { layer: 'default' } : {}
    this.attr({ ...attrs, ...layerSetting })
    this.__update = throttle(args => {
      if (store.__isCreated__) {
        this.update(args)
      }
    })
  }
  get constructorName() {
    let curName = this.defaultAttrs().layer.replace(/^\w/, str => str.toLocaleUpperCase())
    return curName
    //return this.constructor.toString().match(/function (.+)\(/)[1]
  }
  get store() {
    return this['__store']
  }
  get layer() {
    let { layer: layerName, zIndex = 0 } = deepObjectMerge({}, this.baseAttrs(), this.defaultAttrs(), this.theme.attrs, this.attr())
    if (isWeiXin()) {
      return this.scene.layer(layerName)
    }
    return this.scene.layer(layerName).attr({ zIndex })
  }
  get $refs() {
    return this['__store'].__refs
  }
  get renderStyles() {
    let styles = deepObjectMerge({}, this.defaultStyles(), this.theme.styles)
    return styles
  }
  get renderAttrs() {
    //attrs转换
    let attrs = deepObjectMerge({}, this.baseAttrs(), this.defaultAttrs(), this.theme.attrs, this.attr())
    let { animation, clientRect } = attrs
    //动画数据转换
    if (jsType(animation) === 'boolean') {
      animation = { use: animation ? true : false }
    }
    //处理layer支持多layer
    const rect = isWeiXin() ? this.layer.canvas : this.layer.canvas.getBoundingClientRect()
    const { width, height } = rect

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
    let store = this['__store']
    if (!(data instanceof Dataset)) {
      let opts = options
      if (store.dataset) {
        opts = deepObjectMerge({}, store.dataset.option, options)
      }
      store.dataset = new Dataset(data, opts)
    } else {
      store.dataset = data
    }
    if (store.dataset && store.__isCreated__) {
      store.dataset.on('change', _ => {
        this.__update({ type: 'state' })
      })
      //如果以前存在，则更新
      this.__update({ type: 'source' })
    }
    return this
  }
  created() {
    //初始化创建的时候执行
    let store = this['__store']
    this.dispatchEvent(lifeCycle.created)
    store.__vnode__ = this.render(this.beforeRender({ type: 'create' }))
    const patches = diff(null, store.__vnode__)
    this.dispatchEvent(lifeCycle.beforeRender)
    patch.bind(this)(this.$el || this.layer, patches, 1)
    this.dispatchEvent(lifeCycle.rendered)
    this.rendered()
    store.__isCreated__ = true
    this.dataset.on('change', _ => {
      this.__update({ type: 'state' })
    })
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
  update(params) {
    //图表更新准备数据
    let store = this['__store']
    this.dispatchEvent(lifeCycle.beforeUpdate)
    let vnode = this.render(this.beforeUpdate(params))
    const patches = diff(store.__vnode__, vnode)
    patch.bind(this)(this.$el || this.layer, patches)
    store.__vnode__ = vnode
    this.dispatchEvent(lifeCycle.updated)
    this.updated()
  }
  updated() {}
  dispatchEvent(event, obj = emptyObject()) {
    super.dispatchEvent(event, obj)
  }
  defaultAttrs() {
    return emptyObject()
  }
  defaultStyles() {
    return emptyObject()
  }
  baseAttrs() {
    let attrs = {
      //动画类型
      animation: {
        use: true,
        duration: 700,
        useTween: true,
        easing: 'bounceOut'
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
    } else if (name === undefined) {
      let res = emptyObject()
      for (let key in store.__attrs) {
        //过滤style属性
        if (key.indexOf('style@') !== 0) {
          res[key] = store.__attrs[key]
        }
      }
      return res
    } else if (val === undefined) {
      //获取属性
      return store.__attrs[name]
    } else if (name !== undefined) {
      store.__attrs[name] = val
      store.__isCreated__ && this.__update({ type: 'attr' })
    }
  }
  addRef(ref, el) {
    this['__store'].__refs[ref] = el
    //在vnode中调用，存储到this.__refs中
  }
  style(type, style) {
    //样式设置，样式用attr逻辑存储，添加@符号
    if (jsType(type) === 'object') {
      //多样式赋值
      for (let key in type) {
        this.style(key, type[key])
      }
    } else if (type !== undefined && style === undefined) {
      //获取样式，统一返回成函数
      const style = this.attr('style@' + type)
      return (...args) => {
        if (jsType(style) === 'function') {
          return style.apply(this, args)
        } else {
          return style
        }
      }
    } else if (type !== undefined && style !== undefined) {
      //赋值
      this.attr('style@' + type, style)
      return this
    } else if (type === undefined && style === undefined) {
      //获取全部样式
      let res = emptyObject()
      let attrs = this['__store'].__attrs
      for (let key in attrs) {
        if (key.indexOf('style@') === 0) {
          let styleKey = key.substr(6)
          res[styleKey] = this.style(styleKey)
        }
      }
      return res
    }
  }
}
export default Base
