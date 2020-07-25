import { Sprite, Path, Ellipse, Rect, Triangle, Parallel, Regular, Star, Node } from 'spritejs'
import { jsType } from '@qcharts/utils'
// import Base from '../base/Base'
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
class Symbol {
  constructor(attrs) {
    this.theme = {}
    this._attrs = attrs
    if (attrs && attrs.pointType) {
      this.TagName = allSymbol[attrs.pointType]
    } else {
      this.TagName = Ellipse
    }
    this.$sprite = new this.TagName(attrs)
    return this.$sprite
  }
  attr(name, val) {
    //属性设置
    let _name = name
    let _val = val
    if (jsType(name) === 'object' && name[pointType] !== this._attrs.pointType) {
      _name = 'pointType'
      _val = name.pointType
    }
    //替换dom
    if (_name === 'pointType' && _val !== this._attrs.pointType) {
      const $newSprite = new allSymbol[_val]()
      this.$sprite.replaceWith($newSprite)
      this.$sprite = $newSprite
    }
    this.$sprite.attr(name, val)
  }
}
export default Symbol
