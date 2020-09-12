import { axis } from '../../utils/axis';
export default function layout(arr, attrs) {
  // 输入
  var data = arr;
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect,
      groupPadAngle = attrs.groupPadAngle,
      activeOffset = attrs.activeOffset;
  var width = clientRect.width,
      height = clientRect.height;
  var barSize = [width, height];
  var groupGap = groupPadAngle || 0;
  var stackGap = attrs.stackGap || 0;
  var radius = attrs.radius || 1;
  var barInnerRadius = attrs.innerRadius || 0;
  var padAngle = attrs.padAngle; // 输出

  var barData = [];
  var bgPillarAttr = {
    opacity: 0.01,
    fillColor: '#FF0000'
  }; // const valueAxis = getAxis(stack, data)

  var valueAxis = axis.call(this, {
    dataSet: data,
    stack: stack,
    splitNumber: splitNumber
  });

  if (!valueAxis || !valueAxis.length) {
    return {
      barData: barData
    };
  }

  var tableSize = Math.min(barSize[0], barSize[1]);
  var axisValueMax = Math.max.apply(this, valueAxis);
  var axisValueMin = Math.min.apply(this, valueAxis);
  var POSITIVE_RATIO = axisValueMax / (axisValueMax - axisValueMin); // 正负柱子高度比例

  var GROUP_BAR_NUM = computerLegend(data); // 图例显示个数

  var GROUP_NUM = data[0].length;
  var BAR_MAX_HEIGHT = 0.5 * radius * tableSize;
  var BAR_HEIGHT_FACTOR = BAR_MAX_HEIGHT / (axisValueMax - axisValueMin);

  if (!stack) {
    // 分组柱状图
    for (var i = 0, len = GROUP_NUM; i < len; i++) {
      var flag = 0; // 计算当前柱子前面有几根被隐藏

      var value = 0;
      var gpData = {
        rects: []
      };
      var groupAngle = (360 - GROUP_NUM * groupGap) / GROUP_NUM; // 计算单根柱子

      for (var j = 0, lenj = data.length; j < lenj; j++) {
        // if (data[j][i].disabled !== true) {
        //   data[j][i].disabled = false;
        // }
        var barAngle = groupAngle / GROUP_BAR_NUM;
        var startAngle = (groupAngle + groupGap) * i + barAngle * (j - flag) - 90;
        value = data[j][i].layoutScaleValue();
        var barHeight = BAR_HEIGHT_FACTOR * value;
        var innerRadius = BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) + barInnerRadius * tableSize * 0.5; //默认中心坐标偏移量0

        var offsetPos = [0, 0];
        var rect = {
          innerRadius: innerRadius,
          outerRadius: value === 0 ? innerRadius + 1 : innerRadius + barHeight,
          startAngle: startAngle,
          endAngle: startAngle + barAngle,
          value: data[j][i].value,
          text: data[j][i].text,
          state: data[j][i].state,
          data: data[j][i].data,
          id: i * lenj + j,
          offsetPos: offsetPos,
          opacity: value === 0 ? 0 : 1
        };

        if (rect.state === 'hover') {
          var curAngle = (rect.startAngle + rect.endAngle) / 2 % 360;
          rect.bisectorRadian = transRadius(curAngle); //角平分,角度转弧度,默认是顺时针，角度为相反

          rect.offsetPos = [activeOffset * Math.cos(rect.bisectorRadian), activeOffset * Math.sin(rect.bisectorRadian)]; //选中状态
        }

        if (rect.state === 'disabled') {
          rect.endAngle = rect.startAngle;
          rect.radius = 0;
          rect.opacity = 0;
          flag++;
        } else {
          // rect.opacity = 1
          gpData.rects.push(rect);
        }

        if (GROUP_NUM < 2) {
          delete rect.startAngle;
          delete rect.endAngle;
        }

        barData.push(rect);
      }
    }
  } else {
    // 堆叠柱状图
    for (var _i = 0, _len = GROUP_NUM; _i < _len; _i++) {
      var heightSumUp = 0;
      var heightSumDown = 0;
      var _value = 0;
      var _gpData = {
        rects: []
      };

      var _groupAngle = (360 - GROUP_NUM * groupGap) / GROUP_NUM; // 计算单根柱子


      for (var _j = 0, _lenj = data.length; _j < _lenj; _j++) {
        // if (data[j][i].disabled !== true) {
        //   data[j][i].disabled = false;
        // }
        var _startAngle = (_groupAngle + groupGap) * _i - 90;

        _value = data[_j][_i].value;

        var _barHeight = BAR_HEIGHT_FACTOR * _value;

        var _innerRadius = _value < 0 ? BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) - heightSumDown : BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) + heightSumUp;

        _innerRadius = _innerRadius + barInnerRadius * tableSize * 0.5;
        var _offsetPos = [0, 0];
        var _rect = {
          innerRadius: _innerRadius,
          outerRadius: _value === 0 ? _innerRadius + 1 : _innerRadius + _barHeight - stackGap,
          startAngle: _startAngle,
          endAngle: _startAngle + _groupAngle,
          value: data[_j][_i].value,
          text: data[_j][_i].text,
          state: data[_j][_i].state,
          data: data[_j][_i].data,
          offsetPos: _offsetPos,
          opacity: _value === 0 ? 0 : 1
        };

        if (_rect.state === 'hover') {
          _rect.strokeColor = '#F00';
        } else {
          delete _rect.strokeColor;
        }

        if (_rect.state === 'disabled') {
          _rect.opacity = 0;
        } else {
          // rect.opacity = 1
          _value < 0 ? heightSumDown = heightSumDown - _barHeight : heightSumUp = heightSumUp + _barHeight;

          _gpData.rects.push(_rect);
        }

        barData.push(_rect);
      }
    }
  }

  attachPadAngleOfArr(barData, padAngle);
  return {
    barData: barData
  };
}

function computerLegend(data) {
  var flag = 0;

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].state !== 'disabled') {
      flag++;
    }
  }

  if (flag === 0) {// console.warn('data invalid!')
  }

  return flag || 1;
}

export function transRadius(angle) {
  return angle / 180 * Math.PI;
}

function attachPadAngleOfArr(arr) {
  var padAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // 设置 padAngle
  var maxPadAngle = Math.min.apply(null, arr.filter(function (d) {
    return !d.disabled;
  }).map(function (a) {
    return a.endAngle - a.startAngle;
  }));

  if (padAngle >= 0) {
    padAngle = padAngle > maxPadAngle ? maxPadAngle / 2 : padAngle;
    arr.filter(function (d) {
      return !d.disabled;
    }).forEach(function (a) {
      if (a.endAngle - a.startAngle > padAngle * 2) {
        a.padAngle = padAngle;
        a.startAngle += padAngle;
        a.endAngle -= padAngle;
      }
    });
  }
}