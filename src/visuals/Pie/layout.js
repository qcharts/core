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
    if (arr[ind].state === 'hover') {
      //角平分,角度转弧度,默认是顺时针，角度为相反
      let curAngle = ((curObj.startAngle + curObj.endAngle) / 2) % 360
      curAngle = (curAngle / 180) * Math.PI
      curObj.offsetPos = [activeOffset * Math.cos(curAngle), activeOffset * Math.sin(curAngle)]
      //选中状态
    }
    rings.push(curObj)
  })
  return rings
}
