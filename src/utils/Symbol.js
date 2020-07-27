import { Sprite, Path, Ellipse, Rect, Triangle, Parallel, Regular, Star, Group } from 'spritejs'
import { jsType } from '@qcharts/utils'
import filterClone from 'filter-clone'
const allSymbol = {
  sprite: Sprite,
  path: Path,
  ellipse: Ellipse,
  rect: Rect,
  triangle: Triangle,
  parallel: Parallel,
  regular: Regular,
  star: Star
}
class Symbol extends Group {
  constructor(attrs = {}) {
    super()
    this._attrs = attrs
    if (attrs && attrs.pointType) {
      this.TagName = allSymbol[attrs.pointType]
    } else {
      this.TagName = Ellipse
    }
    let renderAttr = filterClone(attrs, [], ['pos'])
    this.$sprite = new this.TagName(renderAttr)
    this.append(this.$sprite)
    if (attrs.pos && attrs.pos.length) {
      this.attr('pos', attrs.pos)
    }
  }
  attr(name, val) {
    //属性设置
    if (jsType(name) === 'object') {
      if (name.pointType) {
        // 如果存在pointType，优先进行替换操作，否则会有属性赋值不上
        this.attr('pointType', name.pointType)
      }
      for (let key in name) {
        if (key !== 'pointType') {
          this.attr(key, name[key])
        }
      }
    }
    // 如果是pos，设置为父级
    if (name === 'pos') {
      super.attr('pos', val)
    } else if (name === 'pointType') {
      // 如果存在替换操作
      this.$sprite.remove()
      this.$sprite = new allSymbol[val]()
      this.append(this.$sprite)
    } else {
      this.$sprite.attr(name, val)
    }
  }
}
export default Symbol
