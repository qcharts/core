export default function layout(arr, attrs) {
  var rings = [];
  var arrVal = arr.map(function (row) {
    return row.reduce(function (val, item) {
      return row.state !== 'disabled' ? val + item.value : val;
    }, 0);
  }); //当totalVal为0的时候，会造成分母为0 如果totalVal为0 处理成1

  var totalVal = arrVal.reduce(function (val, item) {
    return val + item;
  }, 0) || 1;
  var startAngle = attrs.startAngle,
      endAngle = attrs.endAngle,
      activeOffset = attrs.activeOffset;
  var minAngle = Math.min(startAngle, endAngle);
  var maxAngle = Math.max(startAngle, endAngle);

  if (maxAngle > minAngle + 360) {
    maxAngle = minAngle + 360;
  }

  var totalAngle = maxAngle - minAngle;
  arrVal.forEach(function (num, ind) {
    var curPercent = num / totalVal;
    var perAngle = curPercent * totalAngle; //默认中心坐标偏移量0

    var offsetPos = [0, 0];
    var curObj = {
      startAngle: minAngle,
      endAngle: minAngle + perAngle,
      offsetPos: offsetPos
    };

    if (ind !== 0) {
      var prevRing = rings[ind - 1];
      curObj = {
        startAngle: prevRing.endAngle,
        endAngle: prevRing.endAngle + perAngle,
        offsetPos: offsetPos
      };
    }

    var curAngle = (curObj.startAngle + curObj.endAngle) / 2 % 360;
    curObj.bisectorAngle = curAngle;
    curObj.bisectorRadian = transRadius(curAngle);

    if (arr[ind].state === 'hover') {
      //角平分,角度转弧度,默认是顺时针，角度为相反
      curObj.offsetPos = [activeOffset * Math.cos(curObj.bisectorRadian), activeOffset * Math.sin(curObj.bisectorRadian)]; //选中状态
    }

    rings.push(curObj);
  });
  return rings;
}
export function transRadius(angle) {
  return angle / 180 * Math.PI;
}
export function computeLinePos(startAngle, endAngle, center, radius, disRadius) {
  var points = [];
  var centerAn = (startAngle + endAngle) / 2 % 360;
  var centerAngle = transRadius(centerAn);
  var labelAnchor = [0, 0];
  var startPoint = [radius * Math.cos(centerAngle), radius * Math.sin(centerAngle)];
  var endPoint = [(radius + disRadius) * Math.cos(centerAngle), (radius + disRadius) * Math.sin(centerAngle)];
  var labelPos = [(radius + disRadius) * Math.cos(centerAngle), (radius + disRadius + 5) * Math.sin(centerAngle)];
  labelPos = [center[0] + labelPos[0], center[1] + labelPos[1]];
  points.push([center[0] + startPoint[0], center[1] + startPoint[1]]);
  points.push([center[0] + endPoint[0], center[1] + endPoint[1]]);
  labelAnchor = [Math.sin(centerAngle / 2), 1 - Math.cos(centerAngle / 4)];
  return {
    points: points,
    labelAnchor: labelAnchor,
    labelPos: labelPos
  };
}