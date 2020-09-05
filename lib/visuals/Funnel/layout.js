import { axis } from "../../utils/axis";
export default function layout(arr, attrs) {
  // 输入
  var data = arr;
  var align = attrs.align,
      pyramid = attrs.pyramid,
      clientRect = attrs.clientRect,
      formatter = attrs.formatter;
  var width = clientRect.width,
      height = clientRect.height; // 输出

  var polygons = [];
  var labels = [];
  var guideLines = [];
  var guideTexts = [];
  var max = arr[0][0].value;
  var widthFactory = width / max;
  var POLYGON_NUM = computerLegend(data); // 图例显示个数

  var flag = 0; // 计算当前polygon前面有几个被隐藏

  var right = align !== "right";

  for (var i = 0, len = data.length; i < len; i++) {
    var polygon = {
      colse: true,
      lineWidth: 3,
      points: []
    };
    var cell = data[i][0];
    var value = cell.value;
    var offset = 0;
    var textAnchor = [0, 0.5];

    if (align === "center") {
      textAnchor = [0.5, 0.5];
      offset = 0.5;
    } else if (!right) {
      offset = 1;
      textAnchor = [1, 0.5];
    }

    polygon.points.push((max - value) * offset * widthFactory, height * (i - flag) / POLYGON_NUM);
    polygon.points.push((max * offset + value * (1 - offset)) * widthFactory, height * (i - flag) / POLYGON_NUM);

    if (i - flag + 1 < POLYGON_NUM) {
      var counter = 1;

      while (data[i + counter][0].state === "disabled") {
        counter++;
      }

      var nextValue = data[i + counter][0].value;
      polygon.points.push((max * offset + nextValue * (1 - offset)) * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
      polygon.points.push((max - nextValue) * offset * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
    } else {
      if (pyramid) {
        polygon.points.push(offset * width, height);
      } else {
        polygon.points.push((max * offset + value * (1 - offset)) * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
        polygon.points.push((max - value) * offset * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
      }
    }

    polygon.opacity = 1;

    if (cell.state === "disabled") {
      polygon.points[6] = polygon.points[0];
      polygon.points[7] = polygon.points[1];
      polygon.points[4] = polygon.points[2];
      polygon.points[5] = polygon.points[3];
      polygon.opacity = 0;
      flag++;
    }

    var labelAttrs = {
      opacity: cell.state === "disabled" ? 0 : 1,
      text: Math.round(100 * value / max) + "%",
      anchor: textAnchor,
      pos: [width * offset + (0.5 - offset) * 10, (i - flag + 0.5) * height / POLYGON_NUM],
      fillColor: "#FFF",
      fontSize: "12px"
    };
    var linePoints = getLinePoints(polygon.points, right);
    var guideLine = {
      points: linePoints.points,
      strokeColor: "#000"
    };
    var guideText = {
      fillColor: "#000",
      fontSize: "12px",
      text: formatter(cell.data) || cell.text + cell.value,
      pos: [guideLine.points[2] + (right ? 10 : -10), guideLine.points[3]],
      anchor: [right ? 0 : 1, 0.5]
    };
    guideLines.push(guideLine);
    guideTexts.push(guideText);
    polygons.push(polygon);
    labels.push(labelAttrs);
  }

  return {
    polygons: polygons,
    labels: labels,
    guideLines: guideLines,
    guideTexts: guideTexts
  };
}

function computerLegend(data) {
  var flag = 0;

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].state !== "disabled") {
      flag++;
    }
  }

  if (flag === 0) {
    console.warn("data invalid!");
  }

  return flag || 1;
}

function getLinePoints(points, right, length) {
  // const { points } = attrs
  // 起点
  var x, y;

  if (right) {
    ;
    x = (points[2] + points[4]) / 2 + 10;
    y = (points[3] + points[5]) / 2;
  } else {
    ;
    x = (points[0] + (points.length === 6 ? points[4] : points[6])) / 2 - 10;
    y = (points[1] + (points.length === 6 ? points[5] : points[7])) / 2;
  } // 终点


  var cX = right ? x + (length || 40) : x - (length || 40),
      cY = y;
  return {
    points: [x, y, cX, cY]
  };
}