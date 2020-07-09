// merge style
import { deepObjectMerge, jsType } from '@qcharts/utils'
/**
 * chart:当前的图表
 * key:当前的样式名称
 * defaultstyle:为数组或者对象，表示默认的样式
 * args:调用style方法的时候，style以后的参数
 */
export function getStyle(chart, key, defaultStyle, args) {
  //合并样式
  let oStyle = defaultStyle
  let oArgs = args
  if (jsType(defaultStyle) === 'array') {
    oStyle = deepObjectMerge.apply(this, defaultStyle)
  }
  if (jsType(args) !== 'array') {
    oArgs = [args]
  }
  let cusStyle = chart.style(key)(oStyle, [...oArgs])
  if (cusStyle === false) {
    return false
  }
  return deepObjectMerge({}, oStyle, cusStyle)
}
