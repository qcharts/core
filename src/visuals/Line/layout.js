import { scaleLinear } from '../../utils/scaleLinear'
import { axis } from '../../utils/axis'
export default function layout(arr, attrs) {
  let lines = []
  const { stack, splitNumber, clientRect } = attrs
  const { width, height } = clientRect
  let scales = axis({ dataSet: arr, stack, splitNumber })
  let maxVal = Math.max.apply(this, scales)
  let minVal = Math.min.apply(this, scales)
  console.log(maxVal, minVal)
  arr.forEach(row => {
    let line = { points: [] }
    row.forEach((cell, i) => {
      let val = cell.value
      let dx = width / (row.length - 1)
      let scaleFY = scaleLinear()
        .domain([0, 120])
        .range([0, height])
      line.points.push([dx * i, height - scaleFY(val)])
    })
    lines.push(line)
  })
  return lines
}
