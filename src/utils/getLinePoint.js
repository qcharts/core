/**
 * 获取直线上到point1距离为d的点坐标
 * @param {*} point1 直线开始坐标
 * @param {*} point2 直线结束坐标
 * @param {*} distance 直线上一点到point1点的距离
 */
function getPointByDistance(point1, point2, distance) {
  const [x1, y1] = point1
  const [x2, y2] = point2
  const r = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
  const x = (distance * (x2 - x1)) / r + x1
  const y = (distance * (y2 - y1)) / r + y1
  return [x, y]
}
export default getPointByDistance
