import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
// merge style
import { deepObjectMerge, jsType } from '@qcharts/utils';
/**
 * chart:当前的图表
 * key:当前的样式名称
 * defaultstyle:为数组或者对象，表示默认的样式
 * args:调用style方法的时候，style以后的参数,如 line.style('line',function(...args){})
 */

export function getStyle(chart, key, defaultStyle, args) {
  //合并样式
  var oStyle = defaultStyle;
  var arrStyle = defaultStyle;
  var oArgs = args;

  if (jsType(defaultStyle) === 'array') {
    //oStyle = deepObjectMerge.apply(this, defaultStyle)
    oStyle = deepObjectMerge.call.apply(deepObjectMerge, [this, {}].concat(_toConsumableArray(defaultStyle)));
  } else {
    arrStyle = [defaultStyle];
  }

  if (jsType(args) !== 'array') {
    oArgs = [args];
  }

  var cusStyle = chart.style(key).apply(void 0, [oStyle].concat(_toConsumableArray(oArgs)));

  if (cusStyle === false) {
    return false;
  } else if (arrStyle.includes(false) && cusStyle === undefined) {
    return false;
  } else if (cusStyle !== undefined) {
    //如果返回的cusStyle不是false或者undefined，需要把default样式进行重写叠加
    var curStyle = defaultStyle;

    if (jsType(defaultStyle) !== 'array') {
      curStyle = [defaultStyle];
    } //获取default样式


    var oDefaultStyle = chart.defaultStyles()[key];
    oStyle = deepObjectMerge({}, oDefaultStyle, curStyle.filter(Boolean)[0], oStyle);
  }

  var resStyle = deepObjectMerge({}, oStyle, cusStyle);
  return resStyle;
}