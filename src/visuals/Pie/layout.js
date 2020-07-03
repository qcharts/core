export default function layout(arr, attrs) {
  let rings = []
  let arrVal = arr.map(row => row.reduce((val, item) => (row.state !== 'disabled' ? val + item.value : val), 0))
  let totalVal = arrVal.reduce((val, item) => val + item, 0)
  let { startAngle, endAngle, activeOffset } = attrs
  let minAngle = Math.min(startAngle, endAngle)
  let maxAngle = Math.max(startAngle, endAngle)
  if (maxAngle > minAngle + 360) {
    maxAngle = minAngle + 360
  }
  let totalAngle = maxAngle - minAngle
  arrVal.forEach((num, ind) => {
    let curPercent = num / totalVal
    let perAngle = curPercent * totalAngle
    //默认中心坐标偏移量0
    let offsetPos = [0, 0]

    let curObj = { startAngle: minAngle, endAngle: minAngle + perAngle, offsetPos }
    if (ind !== 0) {
      let prevRing = rings[ind - 1]
      curObj = { startAngle: prevRing.endAngle, endAngle: prevRing.endAngle + perAngle, offsetPos }
    }
    let curAngle = ((curObj.startAngle + curObj.endAngle) / 2) % 360
    curObj.bisectorAngle = curAngle
    curObj.bisectorRadian = transRadius(curAngle)
    if (arr[ind].state === 'hover') {
      //角平分,角度转弧度,默认是顺时针，角度为相反
      curObj.offsetPos = [activeOffset * Math.cos(curObj.bisectorRadian), activeOffset * Math.sin(curObj.bisectorRadian)]
      //选中状态
    }
    rings.push(curObj)
  })
  return rings
}
export function transRadius(angle) {
  return (angle / 180) * Math.PI
}
export function computeLinePos(startAngle, endAngle, center, radius, disRadius) {
  let points = []
  let centerAn = ((startAngle + endAngle) / 2) % 360
  let centerAngle = transRadius(centerAn)
  let labelAnchor = [0, 0]
  let startPoint = [radius * Math.cos(centerAngle), radius * Math.sin(centerAngle)]
  let endPoint = [(radius + disRadius) * Math.cos(centerAngle), (radius + disRadius) * Math.sin(centerAngle)]
  points.push([center[0] + startPoint[0], center[1] + startPoint[1]])
  points.push([center[0] + endPoint[0], center[1] + endPoint[1]])
  labelAnchor = [Math.sin(centerAngle / 2), 1 - Math.cos(centerAngle / 4)]
  return { points, labelAnchor }
}
