import { axis } from '../../utils/axis';
export default function layout(arr, attrs) {
  // 输入
  var data = arr;
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect;
  var width = clientRect.width,
      height = clientRect.height;
  var barSize = [width, height];
  var transpose = attrs.transpose || false;
  var groupGap = attrs.groupGap || 0;
  var stackGap = attrs.stackGap || 0;
  var barWidth = attrs.barWidth || 0; // 输出

  var barData = [];
  var groupData = [];
  var textData = []; // const bgPillarAttr = { opacity: 0.01, bgcolor: "#000" }

  var valueAxis = axis.call(this, {
    dataSet: data,
    stack: stack,
    splitNumber: splitNumber
  });

  if (!valueAxis || !valueAxis.length) {
    return {
      barData: barData,
      groupData: groupData,
      textData: textData
    };
  }

  var tableSize = transpose ? {
    label: barSize[1],
    value: barSize[0]
  } : {
    label: barSize[0],
    value: barSize[1]
  };
  var axisValueMax = Math.max.apply(this, valueAxis);
  var axisValueMin = Math.min.apply(this, valueAxis);
  var POSITIVE_RATIO = axisValueMax / (axisValueMax - axisValueMin); // 正负柱子高度比例

  var GROUP_BAR_NUM = computerLegend(data); // 图例显示个数

  var GROUP_NUM = data[0].length;
  var gap = 0; // 柱子宽度，根据数据绘制类型计算，是否分组，是否旋转

  if (barWidth === 0) {
    barWidth = stack ? tableSize.label * 0.5 / GROUP_NUM : tableSize.label * 0.5 / (GROUP_NUM * GROUP_BAR_NUM);
    gap = stack ? barWidth : barWidth * GROUP_BAR_NUM;
  } else {
    gap = stack ? (tableSize.label - barWidth * GROUP_NUM) / GROUP_NUM : (tableSize.label - barWidth * GROUP_BAR_NUM * GROUP_NUM - groupGap * (GROUP_BAR_NUM - 1) * GROUP_NUM) / GROUP_NUM;
  }

  var BAR_HEIGHT_FACTOR = tableSize.value / (axisValueMax - axisValueMin);

  if (!stack) {
    // 分组柱状图
    for (var i = 0, len = GROUP_NUM; i < len; i++) {
      var flag = 0; // 计算当前柱子前面有几根被隐藏

      var value = 0;
      var rawValue = 0;
      var gpData = {
        rects: []
      }; // 计算单根柱子

      for (var j = 0, lenj = data.length; j < lenj; j++) {
        // if (data[j][i].state !== "disabled") {
        //   data[j][i].state = "default";
        // }
        rawValue = data[j][i].value;
        value = data[j][i].layoutScaleValue();
        var barHeight = BAR_HEIGHT_FACTOR * Math.abs(value);
        var pos = transpose ? [tableSize.value * (1 - POSITIVE_RATIO), gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * (GROUP_NUM - i - 1)] : [gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * i, tableSize.value * POSITIVE_RATIO];
        var size = transpose ? [barHeight, barWidth - 1] : [barWidth - 1, barHeight];
        var anchor = [transpose && value < 0 ? 1 : 0, transpose || value < 0 ? 0 : 1]; // const point1 = [gap / 2 + barWidth]

        var rect = {
          anchor: anchor,
          size: size,
          pos: pos
        };
        rect.points = getPoints({
          pos: pos,
          size: size,
          anchor: anchor,
          transpose: transpose
        });
        delete rect.pos;

        if (data[j][i].state === 'disabled') {
          getDisabledPoints({
            value: value,
            points: rect.points,
            transpose: transpose
          });
          flag++;
        } else {
          gpData.rects.push(rect);
        }

        var label = {
          opacity: data[j][i].state !== 'disabled' ? 1 : 0,
          text: rawValue.toString(),
          anchor: [transpose && value < 0 ? 1 : 0, 0.5],
          pos: transpose ? [tableSize.value * (1 - POSITIVE_RATIO), gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * (GROUP_NUM - i - 1) + barWidth * 0.5] : [gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * i + barWidth * 0.5, tableSize.value * POSITIVE_RATIO],
          rotate: transpose ? 0 : value < 0 ? 90 : 270,
          paddingLeft: 8
        };
        barData.push(rect);
        textData.push(label);
      }

      var groupPos = transpose ? [0, (gap + barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1)) * (GROUP_NUM - i - 1)] : [(gap + barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1)) * i, 0];
      var groupSize = transpose ? [tableSize.value, barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap] : [barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap, tableSize.value]; // 柱子整体属性

      gpData = Object.assign(gpData, {
        // title: data[0][i]['_x'],
        pos: groupPos,
        size: groupSize // ...bgPillarAttr,

      });
      gpData.points = getPoints({
        pos: groupPos,
        size: groupSize,
        anchor: [0, 0],
        transpose: transpose,
        value: value,
        stillSprite: true
      });
      delete gpData.pos;
      groupData.push(gpData);
    }
  } else {
    // 堆叠柱状图
    for (var _i = 0, _len = GROUP_NUM; _i < _len; _i++) {
      var heightSumUp = 0;
      var heightSumDown = 0;
      var _value = 0;
      var _gpData = {
        rects: []
      }; // 计算单根柱子

      for (var _j = 0, _lenj = data.length; _j < _lenj; _j++) {
        var stackGapTemp = stackGap; // if (data[j][i].state !== "disabled") {
        //   data[j][i].state = "default";
        // }

        _value = data[_j][_i].layoutScaleValue();

        var _barHeight = BAR_HEIGHT_FACTOR * Math.abs(_value);

        if (_barHeight === 0) {
          stackGapTemp = 0;
        }

        var posY = _value < 0 ? tableSize.value * POSITIVE_RATIO + heightSumDown : tableSize.value * POSITIVE_RATIO - heightSumUp;
        var posX = _value < 0 ? tableSize.value * (1 - POSITIVE_RATIO) - heightSumDown : tableSize.value * (1 - POSITIVE_RATIO) + heightSumUp;
        var posLabelY = _value < 0 ? tableSize.value * POSITIVE_RATIO + heightSumDown + _barHeight : tableSize.value * POSITIVE_RATIO - heightSumUp;

        var _pos = transpose ? [posX, gap / 2 + (barWidth + gap) * (GROUP_NUM - _i - 1)] : [gap / 2 + (barWidth + gap) * _i, posY];

        var _size = transpose ? [_barHeight - stackGapTemp, barWidth] : [barWidth, _barHeight - stackGapTemp];

        var _anchor = [transpose && _value < 0 ? 1 : 0, transpose || _value < 0 ? 0 : 1];
        var _rect = {
          anchor: _anchor,
          size: _size,
          pos: _pos,
          index: _j
        };
        _rect.points = getPoints({
          pos: _pos,
          size: _size,
          anchor: _anchor,
          transpose: transpose
        });
        delete _rect.pos;
        var paddingAttrs = transpose ? 'paddingLeft' : 'paddingBottom';
        var _label = {
          opacity: data[_j][_i].state !== 'disabled' ? 1 : 0,
          text: _value.toString(),
          anchor: transpose ? _value < 0 ? [1, 0.5] : [0, 0.5] : [0.5, 1],
          pos: transpose ? [posX, +(gap + barWidth) / 2 + (barWidth + gap) * (GROUP_NUM - _i - 1)] : [(gap + barWidth) / 2 + (barWidth + gap) * _i, posLabelY]
        };
        _label[paddingAttrs] = 8;

        if (data[_j][_i].state === 'disabled') {
          getDisabledPoints({
            value: _value,
            points: _rect.points,
            transpose: transpose
          });
        } else {
          _value < 0 ? heightSumDown = heightSumDown + _barHeight : heightSumUp = heightSumUp + _barHeight;

          _gpData.rects.push(_rect);
        }

        textData.push(_label);
        barData.push(_rect);
      }

      var _groupPos = transpose ? [0, (gap + barWidth) * (GROUP_NUM - _i - 1)] : [(gap + barWidth) * _i, 0];

      var _groupSize = transpose ? [tableSize.value, barWidth + gap] : [barWidth + gap, tableSize.value]; // 柱子整体属性


      _gpData = Object.assign(_gpData, {
        pos: _groupPos,
        size: _groupSize // ...bgPillarAttr,

      });
      _gpData.points = getPoints({
        pos: _groupPos,
        size: _groupSize,
        anchor: [0, 0],
        transpose: transpose
      });
      delete _gpData.pos;
      groupData.push(_gpData);
    }
  }

  return {
    textData: textData,
    barData: barData,
    groupData: groupData
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

function getPoints(params) {
  var pos = params.pos,
      size = params.size,
      anchor = params.anchor,
      transpose = params.transpose;
  return transpose ? [[pos[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]], [pos[0] + size[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]], [pos[0] + size[0] - anchor[0] * size[0], pos[1] + size[1] - anchor[1] * size[1]], [pos[0] - anchor[0] * size[0], pos[1] + size[1] - anchor[1] * size[1]]] : [[pos[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]], [pos[0] + size[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]], [pos[0] + size[0] - anchor[0] * size[0], pos[1] + size[1] - anchor[1] * size[1]], [pos[0] - anchor[0] * size[0], pos[1] + size[1] - anchor[1] * size[1]]];
}

function getDisabledPoints(params) {
  var points = params.points,
      value = params.value,
      transpose = params.transpose;

  if (transpose) {
    if (value < 0) {
      points[0][0] = points[1][0];
      points[3][0] = points[2][0];
    } else {
      points[1][0] = points[0][0];
      points[2][0] = points[3][0];
    }
  } else {
    if (value < 0) {
      points[2][1] = points[1][1];
      points[3][1] = points[0][1];
    } else {
      points[1][1] = points[2][1];
      points[0][1] = points[3][1];
    }
  }

  return points;
}