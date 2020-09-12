import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { scaleLinear } from '../../utils/scaleLinear';
import { axis } from '../../utils/axis';
export default function layout(arr, attrs) {
  var type = this.type;
  var lines = [];
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect,
      axisGap = attrs.axisGap,
      layoutX = attrs.layoutX,
      layoutY = attrs.layoutY,
      sectionX = attrs.sectionX,
      sectionY = attrs.sectionY;
  var width = clientRect.width,
      height = clientRect.height;
  var _this$dataset$option = this.dataset.option,
      textField = _this$dataset$option.text,
      valueField = _this$dataset$option.value;
  var scaleFX = getScaleFun(arr, layoutX, [0, width], {
    stack: stack,
    splitNumber: splitNumber,
    sectionX: sectionX,
    axisGap: axisGap,
    field: textField
  });
  var scaleFY = getScaleFun(arr, layoutY, [0, height], {
    stack: stack,
    splitNumber: splitNumber,
    sectionY: sectionY,
    axisGap: axisGap,
    field: valueField
  }); //存储stack数据

  var prevScaleValues = [];
  arr.forEach(function (row) {
    var line = {
      points: [],
      areaPoints: [],
      smoothRange: [],
      state: row.state
    };
    row.forEach(function (cell, i) {
      var val = cell.layoutScaleValue();

      if (cell.value !== undefined) {
        //如果为undefined 不渲染
        var curX;

        if (layoutX === 'value') {
          curX = scaleFX(cell.layoutScaleValue(textField));
        } else {
          curX = scaleFX(i);
        }

        var curPos = [curX, height - scaleFY(val)];

        if (stack && prevScaleValues.length) {
          //如果是堆叠并且前一个row存在，则叠加
          curPos = [curX, height - scaleFY(val + prevScaleValues[i])];
        }

        line.points.push(curPos);
      }
    });
    line.axisPoints = [[line.points[0][0], height - scaleFY(0)], [line.points[line.points.length - 1][0], height - scaleFY(0)]];

    if (stack && row.state !== 'disabled') {
      if (!prevScaleValues.length) {
        prevScaleValues = row.map(function (cell) {
          return cell.layoutScaleValue();
        });
      } else {
        prevScaleValues = row.map(function (cell, ind) {
          return cell.layoutScaleValue() + prevScaleValues[ind];
        });
      }
    }

    lines.push(line);
  });

  if (type === 'area') {
    var curLine = null;
    lines.forEach(function (line, ind) {
      var nextPoints = [].concat(line.points).reverse().map(function (point) {
        return [point[0], height];
      });

      if (curLine && attrs.stack) {
        var prevLine = curLine;

        for (var i = ind - 1; i >= 0; i--) {
          if (lines[i].state !== 'disabled') {
            prevLine = lines[i];
            break;
          }
        }

        nextPoints = [].concat(prevLine.points).reverse();
      }

      var res = transAreaPoint(line.points, nextPoints);
      line.areaPoints = res.areaPoints;
      line.smoothRange = res.smoothRange;

      if (line.state !== 'disabled') {
        curLine = line;
      }
    });
  }

  return lines;
}

function getScaleFun(arr, type, rangePixs, attrs) {
  var res = null;

  if (type === 'value') {
    var scales = axis.call(this, _objectSpread({
      dataSet: arr
    }, attrs));
    var maxVal = Math.max.apply(this, scales);
    var minVal = Math.min.apply(this, scales);
    var scaleFun = scaleLinear().domain([minVal, maxVal]).range(rangePixs);
    res = scaleFun;
  } else {
    // 获取最大长度
    var length = Math.max.apply(this, arr.map(function (row) {
      return row.length;
    }));
    var width = rangePixs[1];
    var dx = width / (length - 1);
    var offsetX = 0;
    var axisGap = attrs.axisGap;

    if (axisGap) {
      dx = width / length;
      offsetX = dx / 2;
    }

    res = function res(val) {
      return dx * val + offsetX;
    };
  }

  return res;
}

function transAreaPoint(startPoints, endPoints) {
  var res = {
    areaPoints: [],
    smoothRange: []
  };
  res.areaPoints = [].concat([startPoints[0]]).concat(startPoints).concat([startPoints[startPoints.length - 1]]).concat([endPoints[0]]).concat(endPoints).concat([endPoints[endPoints.length - 1]]);
  res.smoothRange = [1, startPoints.length, startPoints.length + 3, startPoints.length + endPoints.length + 2];
  return res;
}