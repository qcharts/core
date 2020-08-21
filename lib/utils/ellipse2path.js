//通过圆生成path
function ellipse2path(cx, cy, rx, ry) {
  //非数值单位计算，如当宽度像100%则移除
  if (isNaN(cx - cy + rx - ry)) return;
  var path = 'M' + (cx - rx) + ' ' + cy + 'a' + rx + ' ' + ry + ' 0 1 0 ' + 2 * rx + ' 0' + 'a' + rx + ' ' + ry + ' 0 1 0 ' + -2 * rx + ' 0' + 'z';
  return path;
}

export default ellipse2path;