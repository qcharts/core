import { scaleLinear } from '../../utils/scaleLinear'
import { axis } from '../../utils/axis'
export default function layout(arr, attrs) {
  let type = this.type
  let lines = []
  const { stack, splitNumber, clientRect } = attrs
  const { width, height } = clientRect
  let scales = axis({ dataSet: arr, stack, splitNumber })
  let maxVal = Math.max.apply(this, scales)
  let minVal = Math.min.apply(this, scales)
  let scaleFY = scaleLinear()
    .domain([minVal, maxVal])
    .range([0, height])
  arr.forEach((row, ind) => {
    let line = { points: [], areaPoints: [], smoothRange: [], state: row.state }
    row.forEach((cell, i) => {
      let val = cell.value
      let dx = width / (row.length - 1)
      let curPos = [dx * i, height - scaleFY(val)]
      if (ind > 0 && stack) {
        curPos = [dx * i, height - scaleFY(val + arr[ind - 1][i].value)]
      }
      line.points.push(curPos)
    })
    line.axisPoints = [
      [line.points[0][0], height - scaleFY(0)],
      [line.points[line.points.length - 1][0], height - scaleFY(0)]
    ]
    lines.push(line)
  })
  if (type === 'area') {
    lines.forEach((line, ind) => {
      let nextPoints = [
        [line.points[line.points.length - 1][0], height],
        [line.points[0][0], height]
      ]
      if (ind > 0 && attrs.stack) {
        nextPoints = [].concat(lines[ind - 1].points).reverse()
      }
      let res = transAreaPoint(line.points, nextPoints)
      line.areaPoints = res.areaPoints
      line.smoothRange = res.smoothRange
    })
  }
  return lines
}
function transAreaPoint(startPoints, endPoints) {
  let res = {
    areaPoints: [],
    smoothRange: []
  }
  res.areaPoints = []
    .concat([startPoints[0]])
    .concat(startPoints)
    .concat([startPoints[startPoints.length - 1]])
    .concat([endPoints[0]])
    .concat(endPoints)
    .concat([endPoints[endPoints.length - 1]])
  res.smoothRange = [1, startPoints.length, startPoints.length + 3, startPoints.length + endPoints.length + 2]
  return res
}
