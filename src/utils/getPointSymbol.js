import { Sprite, Path, Ellipse, Rect, Triangle, Parallel, Regular, Star } from 'spritejs'
/**
 * 根据pointType返回对应的TargetName，pointType可选值为：'sprite','path','ellipse','rect','triangle','parallel','regular','star'
 * @param {Object} style {pointType:'ellipse'} 
 */
export default function getPointSymbol(style) {
  // 默认椭圆
  let targetName = Ellipse
  if (style && style.pointType) {
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

    if (!Object.keys(allSymbol).includes(style.pointType)) {
      throw new Error(
        `pointType should be one of 'sprite','path','ellipse','rect','triangle','parallel','regular','star' but it is ${style.pointType}`
      )
    }
    targetName = allSymbol[style.pointType]
  }
  return targetName
}
