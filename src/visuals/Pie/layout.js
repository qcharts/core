export default function layout(arr, attrs) {
  let rings = []
  let arrVal = arr.map(row => row.reduce((val, item) => val + item.value, 0))
  let totalVal = arrVal.reduce((val, item) => val + item, 0)
  let { startAngle, endAngle } = attrs
  let minAngle = Math.min(startAngle, endAngle)
  let maxAngle = Math.max(startAngle, endAngle)
  if (maxAngle > minAngle + 360) {
    maxAngle = minAngle + 360
  }
  let totalAngle = maxAngle - minAngle
  arrVal.forEach((num, ind) => {
    let curPercent = num / totalVal
    let perAngle = curPercent * totalAngle
    if (ind === 0) {
      rings.push({ startAngle: minAngle, endAngle: minAngle + perAngle })
    } else {
      let prevRing = rings[ind - 1]
      rings.push({ startAngle: prevRing.endAngle, endAngle: prevRing.endAngle + perAngle })
    }
  })
  return rings
}
