import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { scaleLinear } from '../../utils/scaleLinear';
import { axis } from '../../utils/axis';
import { emptyObject } from '@qcharts/utils';
export default function layout(arr, attrs) {
  var res = {
    scales: [],
    labels: [],
    grids: [],
    axisPoints: [],
    orient: attrs.orient
  };
  var defaultAttrs = {
    top: {
      label: {
        anchor: [0.5, 1],
        padding: [0, 0, 6, 0],
        textAlign: 'center'
      },
      scale: {
        anchor: [0.5, 1],
        width: 1,
        height: 4
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'category'
    },
    bottom: {
      scale: {
        anchor: [0.5, 0],
        width: 1,
        height: 4
      },
      label: {
        anchor: [0.5, 0],
        padding: [6, 0, 0, 0],
        textAlign: 'center'
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'category'
    },
    left: {
      label: {
        padding: [0, 8, 0, 0],
        anchor: [1, 0.5],
        textAlign: 'right'
      },
      scale: {
        anchor: [1, 0.5],
        width: 4,
        height: 1
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'value'
    },
    right: {
      label: {
        anchor: [0, 0.5],
        padding: [0, 0, 0, 8]
      },
      scale: {
        anchor: [0, 0.5],
        width: 4,
        height: 1
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'value'
    }
  };
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect,
      orient = attrs.orient,
      axisGap = attrs.axisGap,
      transpose = attrs.transpose,
      section = attrs.section;

  if (transpose) {
    ;
    ['top', 'bottom', 'right', 'left'].forEach(function (str) {
      defaultAttrs[str].type = defaultAttrs[str].type === 'value' ? 'category' : 'value';
    });
  }

  var width = clientRect.width,
      height = clientRect.height;
  var targetVisual = attrs.targetVisual || this.chart.visuals[0];
  var axisAttrs = {
    dataSet: arr,
    stack: stack,
    splitNumber: splitNumber,
    section: section
  };

  if (targetVisual && targetVisual.constructorName === 'Scatter' && defaultAttrs[attrs.orient].type === 'category') {
    axisAttrs.field = targetVisual.dataset.option.text;
  }

  var scales = axis.call(this, axisAttrs);
  var maxVal = Math.max.apply(this, scales);
  var minVal = Math.min.apply(this, scales);
  var type = attrs.type || defaultAttrs[orient].type;
  var distance = orient === 'left' || orient === 'right' ? height : width;
  var datasetReverse = this.dataset.datasetReverse;

  if (type === 'value') {
    var scaleFY = scaleLinear().domain([minVal, maxVal]).range([0, distance]);
    scales.forEach(function (num) {
      var _getItemAttrs = getItemAttrs(defaultAttrs, orient, {
        text: '' + _typeof(datasetReverse) === 'function' ? datasetReverse(num) : num
      }, num, scaleFY, clientRect),
          scaleAttr = _getItemAttrs.scaleAttr,
          labelAttr = _getItemAttrs.labelAttr,
          gridAttr = _getItemAttrs.gridAttr;

      res.scales.push(scaleAttr);
      res.labels.push(labelAttr);
      res.grids.push(gridAttr);
    });
  } else if (type === 'category') {
    var curArr = arr[0];
    var len = axisGap ? curArr.length : curArr.length - 1;

    var _scaleFY = scaleLinear().domain([0, len]).range([0, distance]);

    curArr.forEach(function (cell, ind) {
      var _getItemAttrs2 = getItemAttrs(defaultAttrs, orient, cell, ind, _scaleFY, clientRect, axisGap),
          scaleAttr = _getItemAttrs2.scaleAttr,
          labelAttr = _getItemAttrs2.labelAttr,
          gridAttr = _getItemAttrs2.gridAttr;

      res.scales.push(scaleAttr);
      res.labels.push(labelAttr);
      res.grids.push(gridAttr);
    });

    if (axisGap) {
      // 如果是axisGap为true，需要添加一个点
      var _getItemAttrs3 = getItemAttrs(defaultAttrs, orient, {}, curArr.length, _scaleFY, clientRect, axisGap),
          scaleAttr = _getItemAttrs3.scaleAttr,
          gridAttr = _getItemAttrs3.gridAttr;

      res.scales.push(scaleAttr);
      res.grids.push(gridAttr);
    }
  }

  if (orient === 'left' || orient === 'right') {
    var dx = orient === 'left' ? 0 : width;
    res.axisPoints = [[dx, height], [dx, 0]];
    res.nameAttr = {
      pos: [dx, 0],
      anchor: [0.5, 1],
      padding: [10]
    };
  } else if (orient === 'bottom' || orient === 'top') {
    var dy = orient === 'bottom' ? height : 0;
    res.axisPoints = [[0, dy], [width, dy]];
    res.nameAttr = {
      pos: [width, dy],
      anchor: [0, 1]
    };
  }

  return res;
}

function getItemAttrs(defaultAttrs, orient, cell, value, scaleF, clientRect, axisGap) {
  var res = emptyObject();
  var width = clientRect.width,
      height = clientRect.height,
      left = clientRect.left;
  var labelPosValue = axisGap ? value + 0.5 : value;

  if (orient === 'left' || orient === 'right') {
    var x = orient === 'left' ? 0 : width;
    var yv = scaleF(value);
    res.scaleAttr = _objectSpread(_objectSpread({}, defaultAttrs[orient].scale), {}, {
      pos: [x, height - yv]
    });
    res.gridAttr = _objectSpread(_objectSpread({}, defaultAttrs[orient].grid), {}, {
      points: [[x, height - yv], [width, height - yv]]
    });
    res.labelAttr = _objectSpread(_objectSpread({}, defaultAttrs[orient].label), {}, {
      width: left,
      text: '' + cell.text,
      pos: [x, height - scaleF(labelPosValue)]
    });
  } else if (orient === 'top' || orient === 'bottom') {
    var y = orient === 'top' ? 0 : height;
    var xv = scaleF(value);
    res.scaleAttr = _objectSpread(_objectSpread({}, defaultAttrs[orient].scale), {}, {
      pos: [xv, y]
    });
    res.gridAttr = _objectSpread(_objectSpread({}, defaultAttrs[orient].grid), {}, {
      points: [[xv, 0], [xv, y]]
    });
    res.labelAttr = _objectSpread(_objectSpread({}, defaultAttrs[orient].label), {}, {
      width: left,
      text: '' + (cell.text || ''),
      pos: [scaleF(labelPosValue), y]
    });
  }

  return res;
}