import { Node, Group } from 'spritejs'
import { lifeCycle, eventsMixin } from 'mixin'
import { emptyObject, deepObjectMerge, jsType } from '../util'
class Base extends Node {
  constructor(attrs = {}) {
    eventsMixin(this)
    let defaultAttrs = this.getDefaultAttrs()
    this.attr(deepObjectMerge(emptyObject(), defaultAttrs, attrs))
    this.dispatchEvent(lifeCycle.beforeCreate, emptyObject())
    this.$group = new Group()
    this.__data__ = null
    this.__vnode__ = null
    this.__isRendered__ = false
    this.dispatchEvent(lifeCycle.beforeCreate, emptyObject())
    this._colors = []
    this.$refs = emptyObject()
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
    super.attr(...args)
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
