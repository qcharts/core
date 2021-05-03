import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Group, Polyline, Arc, Label, Node } from 'spritejs';
import { deepObjectMerge, throttle, jsType } from '@qcharts/utils';
import BaseVisual from '../../base/BaseVisual';
import layout from './layout';
import Point from '../../utils/Point';

var Radar = /*#__PURE__*/function (_BaseVisual) {
  _inherits(Radar, _BaseVisual);

  var _super = _createSuper(Radar);

  function Radar(attrs) {
    var _this;

    _classCallCheck(this, Radar);

    _this = _super.call(this, attrs);

    _defineProperty(_assertThisInitialized(_this), "onMouseenter", throttle(function (event, el) {
      _this.dataset.resetState();

      var name = el.attributes.name;

      _this.dataset.rows.filter(function (row) {
        return row.state !== 'disabled';
      }).forEach(function (row) {
        row.state = row.name === name ? 'hover' : 'default';
      });
    }, 16, true));

    _this.type = 'radar';
    _this.sectionData = [];
    _this.scaleEl = [];
    _this.oldPos = null;
    return _this;
  } //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理


  _createClass(Radar, [{
    key: "renderAttrs",
    get: function get() {
      var attrs = _get(_getPrototypeOf(Radar.prototype), "renderAttrs", this);

      var _attrs$clientRect = attrs.clientRect,
          height = _attrs$clientRect.height,
          width = _attrs$clientRect.width;
      var center = [width / 2, height / 2];
      var len = Math.min.apply(Math, center) * attrs.radius;
      return _objectSpread(_objectSpread({}, attrs), {}, {
        center: center,
        len: len
      });
    } // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式

  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'radar',
        gridType: 'polygon',
        // 网格类型,polygon,circle
        splitNumber: 4,
        // 网格层次
        startAngle: 270,
        // 起始角度
        radius: 0.6,
        // 雷达图半径
        labelOffset: 7 // 文字偏移

      };
    }
  }, {
    key: "getPolylineAnimation",
    value: function getPolylineAnimation(toPoints, state, index) {
      var zeroPoints = new Array(toPoints.length).fill([0, 0]);
      var preData = this.sectionData[index] || {
        animation: {
          to: {
            points: zeroPoints
          }
        }
      };
      var animation = {
        from: {
          points: preData.animation.to.points
        },
        to: {
          points: toPoints
        }
      }; // disabled的时候缩回原点并透明

      if (state === 'disabled') {
        animation.to.points = zeroPoints;
      }

      return animation;
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var dataSet = this.dataset; // // FIXME 数据筛选之前先按照label进行排序?是否需要？

      var _this$renderAttrs = this.renderAttrs,
          len = _this$renderAttrs.len,
          splitNumber = _this$renderAttrs.splitNumber,
          startAngle = _this$renderAttrs.startAngle,
          labelOffset = _this$renderAttrs.labelOffset;
      var colors = this.theme.colors;

      var _layout = layout(_toConsumableArray(dataSet.rows), len, splitNumber, startAngle, labelOffset, colors),
          sectionAttrs = _layout.sectionAttrs,
          axisAttrs = _layout.axisAttrs,
          gridAttrs = _layout.gridAttrs;

      return {
        sectionAttrs: sectionAttrs,
        axisAttrs: axisAttrs,
        gridAttrs: gridAttrs
      };
    }
  }, {
    key: "processData",
    value: function processData() {
      var _this2 = this;

      var _this$getRenderData = this.getRenderData(),
          sectionAttrs = _this$getRenderData.sectionAttrs,
          otherData = _objectWithoutProperties(_this$getRenderData, ["sectionAttrs"]);

      var processSectionAttrs = sectionAttrs.map(function (attr, i) {
        var points = attr.points,
            state = attr.state,
            otherAttrs = _objectWithoutProperties(attr, ["points", "state"]);

        var _this2$getStyle = _this2.getStyle('section', attr, _toConsumableArray(attr.dataOrigin), i),
            style = _this2$getStyle.style,
            hoverStyle = _this2$getStyle.hoverStyle;

        var stateStyle = state === 'hover' ? hoverStyle : {};

        var animation = _this2.getPolylineAnimation(points, state, i);

        return deepObjectMerge(otherAttrs, {
          state: state
        }, {
          animation: animation
        }, style, stateStyle);
      });
      return _objectSpread(_objectSpread({}, otherData), {}, {
        sectionAttrs: processSectionAttrs
      });
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      _get(_getPrototypeOf(Radar.prototype), "beforeRender", this).call(this);

      var renderData = this.processData();
      this.sectionData = _toConsumableArray(renderData.sectionAttrs);
      return renderData;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      _get(_getPrototypeOf(Radar.prototype), "beforeUpdate", this).call(this);

      var updateData = this.processData();

      if (updateData.sectionAttrs) {
        var len = Math.max(this.sectionData.length, updateData.sectionAttrs.length);

        for (var i = 0; i < len; i++) {
          this.sectionData[i] = updateData.sectionAttrs[i];
        }
      }

      this.sectionData = _toConsumableArray(updateData.sectionAttrs);
      return updateData;
    }
  }, {
    key: "rendered",
    value: function rendered() {}
  }, {
    key: "getScaleAnimation",
    value: function getScaleAnimation(toScale) {
      return {
        from: {
          scale: 0
        },
        to: {
          scale: toScale
        }
      };
    }
  }, {
    key: "getStyle",
    value: function getStyle(type, attr, data, index) {
      return {
        style: this.style(type)(attr, data, index),
        hoverStyle: this.style("".concat(type, ":hover"))(attr, data, index)
      };
    }
  }, {
    key: "isSamePoints",
    value: function isSamePoints(fromPts, toPts) {
      return fromPts.toString() === toPts.toString();
    }
  }, {
    key: "renderGrid",
    value: function renderGrid(gridAttrs) {
      var _this3 = this;

      var gridType = this.renderAttrs.gridType;
      var GridShape = gridType === 'circle' ? Arc : Polyline;
      return gridAttrs.map(function (attr, i) {
        var animation = _this3.scaleEl.length > 0 ? {} : _this3.getScaleAnimation(attr.scale);

        var _this3$getStyle = _this3.getStyle('grid', attr, null, i),
            style = _this3$getStyle.style;

        if (style === false) {
          return;
        }

        return qcharts.h(GridShape, _extends({}, attr, style, {
          animation: animation
        }));
      });
    }
  }, {
    key: "renderAxisLabel",
    value: function renderAxisLabel(attrs, i) {
      var calcAnchor = function calcAnchor(radian) {
        var x = 0.5 - Math.cos(radian);
        var y = 0.5 - Math.sin(radian);
        return [x, y];
      };

      var label = attrs.label,
          labelPos = attrs.labelPos,
          radian = attrs.radian;
      var anchor = calcAnchor(radian);
      var attr = {
        text: label,
        pos: labelPos,
        color: '#67728C',
        radian: radian,
        anchor: anchor,
        fontSize: 12
      };
      var animation = this.scaleEl.length > 0 ? {} : this.getScaleAnimation(1);

      var _this$getStyle = this.getStyle('label', attr, {
        text: attr.label,
        radian: radian
      }, i),
          style = _this$getStyle.style;

      if (style === false) {
        return;
      }

      return qcharts.h(Label, _extends({}, attr, style, {
        animation: animation
      }));
    }
  }, {
    key: "renderAxisScale",
    value: function renderAxisScale(attrs, index) {
      var getPt = function getPt(attrs) {
        var points = attrs.points,
            splitNumber = attrs.splitNumber,
            maxScale = attrs.maxScale;

        var _points$ = _slicedToArray(points[1], 2),
            x = _points$[0],
            y = _points$[1];

        var perNum = maxScale / splitNumber;
        return [[x / splitNumber, y / splitNumber], perNum];
      };

      var _getPt = getPt(attrs),
          _getPt2 = _slicedToArray(_getPt, 2),
          _getPt2$ = _slicedToArray(_getPt2[0], 2),
          perX = _getPt2$[0],
          perY = _getPt2$[1],
          perNum = _getPt2[1];

      var labels = [];
      var display = index === 0 ? 'block' : 'none';
      var common = {
        fontSize: 12,
        anchor: [1, 0.5],
        translate: [-5, 0],
        display: display
      };

      for (var i = 0; i < attrs.splitNumber + 1; i++) {
        var point = [perX * i, perY * i];
        var text = perNum * i;

        var attr = _objectSpread({
          text: text,
          color: '#67728C',
          pos: point
        }, common);

        var _this$getStyle2 = this.getStyle('scale', attr, {
          text: text,
          index: index
        }, i),
            style = _this$getStyle2.style;

        var elIndex = index * attrs.splitNumber + i;
        var preEl = this.scaleEl[elIndex];

        if (attr.display !== 'none') {
          var animation = {};

          if (preEl) {
            if (preEl.text !== text) {
              animation = {
                from: {
                  text: preEl.text
                },
                to: {
                  text: text
                },
                formatter: function formatter(attr) {
                  attr.text = attr.text.toFixed(0);
                  return attr;
                }
              };
            }
          } else {
            animation = {
              from: {
                pos: [0, 0]
              },
              to: {
                pos: point
              }
            };
          }

          this.scaleEl[i] = {
            text: Number(text.toFixed(0))
          };
          labels.push(style === false ? qcharts.h(Node, null) : qcharts.h(Label, _extends({}, attr, style, {
            animation: animation
          })));
        }
      }

      return labels;
    }
  }, {
    key: "renderAxis",
    value: function renderAxis(axisAttrs) {
      var _this4 = this;

      var animation = this.scaleEl.length > 0 ? {} : this.getScaleAnimation(1);
      return axisAttrs.map(function (attr, i) {
        var _this4$getStyle = _this4.getStyle('axis', attr, {
          text: attr.label
        }, i),
            style = _this4$getStyle.style;

        if (style === false) {
          return;
        }

        return qcharts.h(Group, null, qcharts.h(Polyline, _extends({}, attr, style, {
          animation: animation
        })), _this4.renderAxisLabel(attr, i), _this4.renderAxisScale(attr, i));
      });
    }
  }, {
    key: "renderPoints",
    value: function renderPoints(sectionAttrs) {
      var _this5 = this;

      var allPoints = sectionAttrs.map(function (attrs) {
        var secAnimation = attrs.animation,
            dataOrigin = attrs.dataOrigin,
            strokeColor = attrs.strokeColor,
            state = attrs.state;
        var prePoints = secAnimation && secAnimation.from && secAnimation.from.points;
        var toPoints = secAnimation && secAnimation.to && secAnimation.to.points;
        return toPoints.map(function (point, i) {
          var attr = {
            pos: point,
            fillColor: strokeColor,
            radius: 2,
            dataOrigin: dataOrigin[i]
          };

          var _this5$getStyle = _this5.getStyle('point', attr, _objectSpread({}, attr.dataOrigin), i),
              style = _this5$getStyle.style,
              hoverStyle = _this5$getStyle.hoverStyle;

          if (style === false) {
            return;
          }

          var animation = {
            from: {
              pos: [0, 0],
              opacity: 1
            },
            to: {
              pos: point,
              opacity: 1
            }
          };

          if (prePoints && prePoints[i]) {
            if (!_this5.isSamePoints(prePoints[i], point)) {
              animation.from.pos = prePoints[i];
            } else {
              animation.from.pos = point;
            }
          }

          if (state === 'disabled') {
            animation.to.opacity = 0;
          }

          var stateStyle = state === 'hover' ? hoverStyle : {};
          return qcharts.h(Point, _extends({}, attr, style, stateStyle, {
            animation: animation,
            zIndex: 99
          }));
        });
      });
      return allPoints.reduce(function (pre, cur) {
        return pre.concat(cur);
      }, []);
    }
  }, {
    key: "renderSection",
    value: function renderSection(sectionAttrs) {
      var _this6 = this;

      return sectionAttrs.map(function (attr, i) {
        var animation = attr.animation,
            otherAttr = _objectWithoutProperties(attr, ["animation"]);

        var cell = _this6.dataset[_this6.renderAttrs.layoutBy][i];
        return qcharts.h(Polyline, _extends({
          zIndex: 9 + i
        }, otherAttr, {
          animation: animation,
          onMouseEvent: ['click', cell, i],
          onMouseenter: _this6.onMouseenter,
          onMouseleave: _this6.onMouseleave
        }));
      });
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave() {
      this.dataset.resetState();
      this.dataset.rows.filter(function (row) {
        return row.state !== 'disabled';
      }).forEach(function (row) {
        return row.state === 'default';
      });
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var sectionAttrs = _ref.sectionAttrs,
          axisAttrs = _ref.axisAttrs,
          gridAttrs = _ref.gridAttrs;
      var _this$renderAttrs2 = this.renderAttrs,
          center = _this$renderAttrs2.center,
          clientRect = _this$renderAttrs2.clientRect;
      var gAnimation = {
        from: {
          pos: this.oldPos ? this.oldPos : center
        },
        to: {
          pos: center
        }
      };
      this.oldPos = center;
      return qcharts.h(Group, {
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height]
      }, qcharts.h(Group, {
        pos: center,
        animation: gAnimation
      }, this.renderGrid(gridAttrs), this.renderAxis(axisAttrs), this.renderSection(sectionAttrs), this.renderPoints(sectionAttrs)));
    }
  }]);

  return Radar;
}(BaseVisual);

export default Radar;