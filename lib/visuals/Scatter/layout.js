import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { axis } from '../../utils/axis';
import { scaleLinear } from '../../utils/scaleLinear';
import { jsType } from '@qcharts/utils';

var getDataRange = function getDataRange(data) {
  if (data.length === 0) {
    return [0, 1];
  }

  var min = Math.min.apply(Math, _toConsumableArray(data));
  var max = Math.max.apply(Math, _toConsumableArray(data));
  return [min, max];
};

var getBigRange = function getBigRange(data) {
  if (data.length === 0) {
    return [0, 1];
  }

  var _getDataRange = getDataRange(data),
      _getDataRange2 = _slicedToArray(_getDataRange, 2),
      min = _getDataRange2[0],
      max = _getDataRange2[1];

  var n = Math.round(min / 10) - 1;
  var m = Math.round(max / 10) + 1;
  return [n * 10, m * 10];
};

var updateSectionVal = function updateSectionVal(section, newSection) {
  var min = newSection.min,
      max = newSection.max;

  if (jsType(min) === 'number') {
    section[0] = min;
  }

  if (jsType(max) === 'number') {
    section[1] = max;
  }
};

export default function layout(dataSet, attrs) {
  var size = attrs.size,
      layoutWay = attrs.layoutWay,
      axisGap = attrs.axisGap,
      sectionX = attrs.sectionX,
      sectionY = attrs.sectionY;

  var _size = _slicedToArray(size, 2),
      width = _size[0],
      height = _size[1];

  var _dataSet$option = dataSet.option,
      textField = _dataSet$option.text,
      valueField = _dataSet$option.value;

  var allData = _toConsumableArray(dataSet); // 如果X轴是文本框，则进行均分


  var maxLen = getDataRange(dataSet.rows.map(function (d) {
    return d.length;
  }))[1];
  var xDomain = [0, maxLen - 1];
  var xOffset = 0;

  if (axisGap) {
    xDomain = [0, maxLen];
    xOffset = width / maxLen / 2;
  }

  var xSection = [0, maxLen - 1];
  var xIsTextData = allData.some(function (d) {
    return jsType(d.text) === 'string';
  });

  if (!xIsTextData) {
    xSection = getBigRange(allData.map(function (d) {
      return d.text;
    }));
    var xScales = axis.call(this, {
      dataSet: dataSet.rows,
      stack: false,
      field: textField,
      section: sectionX // section: xSection

    });
    xDomain = getDataRange(xScales);
  }

  var yIsTextData = allData.some(function (d) {
    return jsType(d.value) === 'string';
  });

  if (yIsTextData) {
    throw new Error("Scatter's value category data should be Number!");
  }

  var ySection = getBigRange(allData.map(function (d) {
    return d.layoutScaleValue();
  }));
  var yScales = axis.call(this, {
    dataSet: dataSet.rows,
    stack: false,
    field: valueField,
    section: sectionY // section: ySection

  });
  var yDomain = getDataRange(yScales);

  if (layoutWay) {
    if (layoutWay[textField]) {
      updateSectionVal(xSection, layoutWay[textField]);
    }

    if (layoutWay[valueField]) {
      updateSectionVal(ySection, layoutWay[valueField]);
    }
  }

  var newLayoutWay = {};
  newLayoutWay[textField] = {
    min: xSection[0],
    max: xSection[1]
  };
  newLayoutWay[valueField] = {
    min: ySection[0],
    max: ySection[1]
  };
  var xLinear = scaleLinear().domain(xDomain).range([0, width]);
  var yLinear = scaleLinear().domain(yDomain).range([0, height]);
  var resultData = dataSet.rows.map(function (dArry) {
    var attrs = dArry.map(function (d, i) {
      var x = xIsTextData ? i : d.text;
      var y = d.layoutScaleValue();
      var pos = [xLinear(x) + xOffset, height - yLinear(y)];
      return {
        pos: pos,
        radius: 5,
        anchor: [1, 1],
        dataOrigin: _objectSpread({}, d.data),
        state: d.state,
        name: dArry.name,
        col: d.col,
        row: d.row
      };
    });
    return {
      name: dArry.name,
      state: dArry.state,
      attrs: attrs
    };
  });
  return {
    data: resultData,
    layoutWay: newLayoutWay
  };
}