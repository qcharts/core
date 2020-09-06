import { scaleLinear } from '../../utils/scaleLinear';
import { axis } from '../../utils/axis';
export default function layout(arr, attrs) {
  var type = this.type;
  var lines = [];
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect,
      axisGap = attrs.axisGap;
  var width = clientRect.width,
      height = clientRect.height;
  var scales = axis.call(this, {
    dataSet: arr,
    stack: stack,
    splitNumber: splitNumber
  });
  var maxVal = Math.max.apply(this, scales);
  var minVal = Math.min.apply(this, scales);
  var scaleFY = scaleLinear().domain([minVal, maxVal]).range([0, height]); //存储stack数据

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
        var dx = width / (row.length - 1);
        var offsetX = 0;

        if (axisGap) {
          dx = width / row.length;
          offsetX = dx / 2;
        }

        var curPos = [dx * i + offsetX, height - scaleFY(val)];

        if (stack && prevScaleValues.length) {
          //如果是堆叠并且前一个row存在，则叠加
          curPos = [dx * i + offsetX, height - scaleFY(val + prevScaleValues[i])];
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

function transAreaPoint(startPoints, endPoints) {
  var res = {
    areaPoints: [],
    smoothRange: []
  };
  res.areaPoints = [].concat([startPoints[0]]).concat(startPoints).concat([startPoints[startPoints.length - 1]]).concat([endPoints[0]]).concat(endPoints).concat([endPoints[endPoints.length - 1]]);
  res.smoothRange = [1, startPoints.length, startPoints.length + 3, startPoints.length + endPoints.length + 2];
  return res;
}