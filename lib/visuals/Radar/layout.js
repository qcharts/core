import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

/**
 * 根据给定角度和长度获取极坐标值
 * @param {Number} radian 角度
 * @param {Number} length 长度
 * @returns {Array} [x,y]
 */
var getPointCoordinate = function getPointCoordinate(radian, length) {
  var x = Math.cos(radian) * length;
  var y = Math.sin(radian) * length;
  return [x, y];
};
/**
 * 获取数组中最大数除以层级后的整数
 * @param {Array} data
 * @param {Number} splitNumber
 * @returns {Number}
 */


var getMax = function getMax(data, splitNumber) {
  var indicatorMax = Math.max.apply(Math, _toConsumableArray(data));

  if (indicatorMax < splitNumber * 10) {
    return Math.ceil(indicatorMax / splitNumber) * splitNumber;
  } else {
    return Math.ceil(indicatorMax / 10 / splitNumber) * 10 * splitNumber;
  }
};
/**
 * 根据给定的数据，返回绘制雷达图所需要的数据
 * @param {Array} dataset 数据集
 * @param {Number} radius 雷达图半径
 * @param {Number} splitNumber  雷达图背景层级
 * @param {Number} startAngle 雷达图起始轴角度
 * @param {Number} labelOffset 雷达图文字偏移值
 * @param {Array} colors 雷达图主题颜色
 * @returns {Object} { sectionAttrs, borderAttrs, axisAttrs, gridAttrs }
 */


export default function layout(data, radius, splitNumber, startAngle, labelOffset, colors) {
  var bgPoints = []; // 最外层背景多边形

  var gridAttrs = []; // 蜘蛛网图背景

  var axisAttrs = []; // 坐标轴

  var sectionAttrs = []; // 多边形数据

  if (data.some(function (d) {
    return d.length === 0;
  })) {
    return {
      sectionAttrs: sectionAttrs,
      axisAttrs: axisAttrs,
      gridAttrs: gridAttrs
    };
  }

  var allDataValue = data.reduce(function (t, row) {
    return t.concat(row.map(function (cell) {
      return cell.value;
    }));
  }, []);
  var max = getMax(allDataValue, splitNumber); // 每个类别的弧度

  var dimension = data[0].length;
  var perRadian = Math.PI * 2 / dimension; // 起始角度->转弧度

  var startRadian = Math.PI / 180 * startAngle;

  for (var i = 0; i < dimension; i++) {
    // 根据角度和半径，计算对应的坐标
    var currentRadian = i * perRadian + startRadian;
    var point = getPointCoordinate(currentRadian, radius);
    bgPoints.push({
      point: point,
      radian: currentRadian
    }); // 类别指示坐标

    var labelPos = getPointCoordinate(currentRadian, radius + labelOffset);
    var label = data[0][i].text; // 坐标轴属性

    axisAttrs.push({
      points: [[0, 0], point],
      lineWidth: 1,
      lineDash: [3, 2],
      strokeColor: '#DDE0E5',
      label: label,
      labelPos: labelPos,
      radian: currentRadian,
      maxScale: max,
      splitNumber: splitNumber
    });
  }

  data.forEach(function (row, index) {
    var categoryPoints = row.map(function (d, i) {
      var value = d.value;
      var radian = bgPoints[i].radian;
      return getPointCoordinate(radian, value / max * radius);
    });
    sectionAttrs.push({
      index: index,
      name: row.name,
      dataOrigin: row.data,
      lineWidth: 1,
      points: categoryPoints,
      state: row.state,
      close: true,
      strokeColor: colors[index],
      fillColor: colors[index]
    });
  }); // 背景网格多边形坐标

  var gridPoints = bgPoints.map(function (p) {
    return p.point;
  });

  for (var _i = 0; _i < splitNumber; _i++) {
    var scale = 1 - _i / splitNumber;
    gridAttrs.push({
      scale: scale,
      radius: radius,
      points: gridPoints,
      index: _i,
      close: true,
      lineWidth: 1,
      strokeColor: '#DDE0E5',
      anchor: [0.5, 0.5]
    });
  }

  return {
    sectionAttrs: sectionAttrs,
    axisAttrs: axisAttrs,
    gridAttrs: gridAttrs
  };
}