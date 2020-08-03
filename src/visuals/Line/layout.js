import { scaleLinear } from "../../utils/scaleLinear";
import { axis } from "../../utils/axis";
export default function layout(arr, attrs) {
  let type = this.type;
  let lines = [];
  const { stack, splitNumber, clientRect, axisGap } = attrs;
  const { width, height } = clientRect;
  let scales = axis.call(this, { dataSet: arr, stack, splitNumber });
  let maxVal = Math.max.apply(this, scales);
  let minVal = Math.min.apply(this, scales);
  let scaleFY = scaleLinear()
    .domain([minVal, maxVal])
    .range([0, height]);
  let prevRow = null;
  arr.forEach((row) => {
    let line = {
      points: [],
      areaPoints: [],
      smoothRange: [],
      state: row.state,
    };
    row.forEach((cell, i) => {
      let val = cell.layoutScaleValue;
      if (cell.value !== undefined) {
        //如果为undefined 不渲染
        let dx = width / (row.length - 1);
        let offsetX = 0;
        if (axisGap) {
          dx = width / row.length;
          offsetX = dx / 2;
        }
        let curPos = [dx * i + offsetX, height - scaleFY(val)];
        if (stack && prevRow) {
          //如果是堆叠并且前一个row存在，则叠加
          curPos = [
            dx * i + offsetX,
            height - scaleFY(val + prevRow[i].layoutScaleValue),
          ];
        }
        line.points.push(curPos);
      }
    });
    line.axisPoints = [
      [line.points[0][0], height - scaleFY(0)],
      [line.points[line.points.length - 1][0], height - scaleFY(0)],
    ];
    if (line.state !== "disabled") {
      prevRow = row;
    }
    lines.push(line);
  });
  if (type === "area") {
    let curLine = null;
    lines.forEach((line, ind) => {
      let nextPoints = []
        .concat(line.points)
        .reverse()
        .map((point) => [point[0], height]);
      if (curLine && attrs.stack) {
        nextPoints = [].concat(lines[ind - 1].points).reverse();
      }
      let res = transAreaPoint(line.points, nextPoints);
      line.areaPoints = res.areaPoints;
      line.smoothRange = res.smoothRange;
      if (line.state !== "disabled") {
        curLine = line;
      }
    });
  }
  return lines;
}
function transAreaPoint(startPoints, endPoints) {
  let res = {
    areaPoints: [],
    smoothRange: [],
  };
  res.areaPoints = []
    .concat([startPoints[0]])
    .concat(startPoints)
    .concat([startPoints[startPoints.length - 1]])
    .concat([endPoints[0]])
    .concat(endPoints)
    .concat([endPoints[endPoints.length - 1]]);
  res.smoothRange = [
    1,
    startPoints.length,
    startPoints.length + 3,
    startPoints.length + endPoints.length + 2,
  ];
  return res;
}
