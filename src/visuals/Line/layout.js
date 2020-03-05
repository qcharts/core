import { scaleLinear } from '../../utils/scaleLinear'
import { axis } from '../../utils/axis'
export default function layout(arr, attrs) {
  let lines = []
  const { stack, splitNumber, clientRect } = attrs
  const { width, height } = clientRect
  let scales = axis({ dataSet: arr, stack, splitNumber })
  let maxVal = Math.max.apply(this, scales)
  let minVal = Math.min.apply(this, scales)
  let scaleFY = scaleLinear()
    .domain([minVal, maxVal])
    .range([0, height])
  arr.forEach(row => {
    let line = { points: [], state: row.state }
    row.forEach((cell, i) => {
      let val = cell.value
      let dx = width / (row.length - 1)
      line.points.push([dx * i, height - scaleFY(val)])
    })
    line.axisPoints = [
      [line.points[0][0], height - scaleFY(0)],
      [line.points[line.points.length - 1][0], height - scaleFY(0)]
    ]
    lines.push(line)
  })
  return lines
}
