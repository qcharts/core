import { Sprite, Path, Ellipse, Rect, Triangle, Parallel, Regular, Star, Group } from 'spritejs'
import { jsType } from '@qcharts/utils'

const allPoint = {
  sprite: Sprite,
  path: Path,
  ellipse: Ellipse,
  rect: Rect,
  triangle: Triangle,
  parallel: Parallel,
  regular: Regular,
  star: Star
}
class Point extends Group {
  constructor(attrs = {}) {
    super()
    this.pointType = null
    this.$sprite = null
    this.attr({ pointType: 'ellipse', ...attrs })
  }
  attr(name, val) {
    let attrs = name
    if (jsType(name) !== 'object') {
      attrs = {}
      attrs[name] = val
    }
    this.renderSymbol(attrs)
  }
  renderSymbol(attrs) {
    const { pointType, pos, ...renderAttr } = attrs

    if (pointType && pointType !== this.pointType) {
      if (!Object.keys(allPoint).includes(pointType)) {
        throw new Error(
          `pointType should be one of 'sprite','path','ellipse','rect','triangle','parallel','regular','star' but it is ${pointType}`
        )
      }
      this.$sprite && this.$sprite.remove()
      this.$sprite = new allPoint[pointType](renderAttr)
      this.append(this.$sprite)
    } else {
      this.$sprite.attr(renderAttr)
    }
    if (pos && pos.length) {
      super.attr('pos', pos)
    }

    this.pointType = pointType
  }
}
export default Point
