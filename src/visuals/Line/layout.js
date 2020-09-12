import { scaleLinear } from '../../utils/scaleLinear'
import { axis } from '../../utils/axis'
export default function layout(arr, attrs) {
  let type = this.type
  let lines = []
  const { stack, splitNumber, clientRect, axisGap, layoutX, layoutY, sectionX, sectionY } = attrs
  const { width, height } = clientRect
  const { text: textField, value: valueField } = this.dataset.option
  let scaleFX = getScaleFun(arr, layoutX, [0, width], { stack, splitNumber, sectionX, axisGap, field: textField })
  let scaleFY = getScaleFun(arr, layoutY, [0, height], { stack, splitNumber, sectionY, axisGap, field: valueField })

  //存储stack数据
  let prevScaleValues = []
  arr.forEach(row => {
    let line = {
      points: [],
      areaPoints: [],
      smoothRange: [],
      state: row.state
    }
    row.forEach((cell, i) => {
      let val = cell.layoutScaleValue()

      if (cell.value !== undefined) {
        //如果为undefined 不渲染
        let curX
        if (layoutX === 'value') {
          curX = scaleFX(cell.layoutScaleValue(textField))
        } else {
          curX = scaleFX(i)
        }
        let curPos = [curX, height - scaleFY(val)]
        if (stack && prevScaleValues.length) {
          //如果是堆叠并且前一个row存在，则叠加
          curPos = [curX, height - scaleFY(val + prevScaleValues[i])]
        }
        line.points.push(curPos)
      }
    })
    line.axisPoints = [
      [line.points[0][0], height - scaleFY(0)],
      [line.points[line.points.length - 1][0], height - scaleFY(0)]
    ]
    if (stack && row.state !== 'disabled') {
      if (!prevScaleValues.length) {
        prevScaleValues = row.map(cell => cell.layoutScaleValue())
      } else {
        prevScaleValues = row.map((cell, ind) => cell.layoutScaleValue() + prevScaleValues[ind])
      }
    }
    lines.push(line)
  })
  if (type === 'area') {
    let curLine = null
    lines.forEach((line, ind) => {
      let nextPoints = []
        .concat(line.points)
        .reverse()
        .map(point => [point[0], height])
      if (curLine && attrs.stack) {
        let prevLine = curLine
        for (let i = ind - 1; i >= 0; i--) {
          if (lines[i].state !== 'disabled') {
            prevLine = lines[i]
            break
          }
        }
        nextPoints = [].concat(prevLine.points).reverse()
      }
      let res = transAreaPoint(line.points, nextPoints)
      line.areaPoints = res.areaPoints
      line.smoothRange = res.smoothRange
      if (line.state !== 'disabled') {
        curLine = line
      }
    })
  }
  return lines
}
function getScaleFun(arr, type, rangePixs, attrs) {
  let res = null
  if (type === 'value') {
    let scales = axis.call(this, { dataSet: arr, ...attrs })
    let maxVal = Math.max.apply(this, scales)
    let minVal = Math.min.apply(this, scales)
    let scaleFun = scaleLinear()
      .domain([minVal, maxVal])
      .range(rangePixs)
    res = scaleFun
  } else {
    // 获取最大长度
    let length = Math.max.apply(
      this,
      arr.map(row => row.length)
    )
    let width = rangePixs[1]
    let dx = width / (length - 1)
    let offsetX = 0
    let axisGap = attrs.axisGap
    if (axisGap) {
      dx = width / length
      offsetX = dx / 2
    }
    res = function(val) {
      return dx * val + offsetX
    }
  }
  return res
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
