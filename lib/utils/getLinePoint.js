import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/**
 * 获取直线上到point1距离为d的点坐标
 * @param {*} point1 直线开始坐标
 * @param {*} point2 直线结束坐标
 * @param {*} distance 直线上一点到point1点的距离
 */
function getPointByDistance(point1, point2, distance) {
  var _point = _slicedToArray(point1, 2),
      x1 = _point[0],
      y1 = _point[1];

  var _point2 = _slicedToArray(point2, 2),
      x2 = _point2[0],
      y2 = _point2[1];

  var r = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  var x = distance * (x2 - x1) / r + x1;
  var y = distance * (y2 - y1) / r + y1;
  return [x, y];
}

export default getPointByDistance;