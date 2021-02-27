import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Group, Polyline, Arc, Label } from 'spritejs';
import BaseVisual from '../../base/BaseVisual';
import { scaleLinear } from '../../utils/scaleLinear';
import { hexToRgba } from '../../utils/color';
import { deepObjectMerge } from '@qcharts/utils';
import { getStyle } from '../../utils/getStyle';
import layout from './layout';

var Scatter = /*#__PURE__*/function (_BaseVisual) {
  _inherits(Scatter, _BaseVisual);

  var _super = _createSuper(Scatter);

  function Scatter() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Scatter);

    _this = _super.call(this, attrs);
    _this.type = 'scatter';
    _this.scatterData = [];
    _this.guideLineData = [];
    return _this;
  }

  _createClass(Scatter, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'scatter',
        labelField: null,
        areaField: null,
        //气泡大小字段值，不设置此值则为散点图
        areaRange: null,
        // 面积映射
        showGuideLine: false,
        layoutWay: null
      };
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      return _objectSpread({}, _get(_getPrototypeOf(Scatter.prototype), "renderAttrs", this));
    }
  }, {
    key: "processData",
    value: function processData() {
      var _this2 = this;

      var dataSet = this.dataset;
      var _this$renderAttrs = this.renderAttrs,
          layoutWay = _this$renderAttrs.layoutWay,
          clientRect = _this$renderAttrs.clientRect,
          axisGap = _this$renderAttrs.axisGap;

      var _layout$call = layout.call(this, dataSet, {
        size: [clientRect.width, clientRect.height],
        layoutWay: layoutWay,
        axisGap: axisGap
      }),
          data = _layout$call.data,
          newLayoutWay = _layout$call.layoutWay;

      deepObjectMerge(this.renderAttrs.layoutWay || {}, newLayoutWay);
      data.forEach(function (item, i) {
        var color = _this2.theme.colors[i];
        var fillColor = hexToRgba(color, 0.3);
        item.attrs.forEach(function (di) {
          di.strokeColor = color;
          di.fillColor = fillColor;
        });
      });
      return data;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this3 = this;

      _get(_getPrototypeOf(Scatter.prototype), "beforeUpdate", this).call(this);

      var updateData = this.processData();
      var temp = updateData.map(function (row) {
        return deepObjectMerge({}, row);
      });
      updateData.forEach(function (row, ind) {
        var oldRow = _this3.scatterData[ind];
        row.attrs.forEach(function (cell, cInd) {
          var radius = _this3.getRealRadius(_objectSpread({}, cell));

          cell.radius = radius;

          if (oldRow && oldRow.attrs[cInd]) {
            var oldCell = oldRow.attrs[cInd];

            var toPos = _toConsumableArray(cell.pos);

            var fromPos = oldCell.animation.to && oldCell.animation.to.pos ? _toConsumableArray(oldCell.animation.to.pos) : _toConsumableArray(oldCell.pos); // 位置相同

            if (toPos.toString() === fromPos.toString()) {
              var fromRadius = radius;
              var toRadius = radius; //default-> disabled

              if (cell.state === 'disabled') {
                toRadius = 0;
              } // old is disabled


              if (oldCell.animation.to.radius == 0) {
                fromRadius = 0;
              }

              cell.animation = {
                from: {
                  radius: fromRadius
                },
                to: {
                  radius: toRadius
                }
              };
            } else {
              cell.animation = {
                from: {
                  pos: fromPos
                },
                to: {
                  pos: toPos
                }
              };
            }
          } else {
            cell.animation = {
              from: {
                radius: 0
              },
              to: {
                radius: radius
              }
            };
          }
        });
      });
      this.scatterData = temp;
      return updateData;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      var _this4 = this;

      _get(_getPrototypeOf(Scatter.prototype), "beforeRender", this).call(this);

      var renderData = this.processData();
      this.scatterData = renderData.map(function (row) {
        return deepObjectMerge({}, row);
      });
      renderData.forEach(function (row) {
        row.attrs.forEach(function (cell) {
          var radius = _this4.getRealRadius(_objectSpread({}, cell));

          cell.animation = {
            from: {
              radius: 0
            },
            to: {
              radius: radius
            }
          };
        });
      });
      return renderData;
    }
  }, {
    key: "getRealRadius",
    value: function getRealRadius(attr) {
      var _this$renderAttrs2 = this.renderAttrs,
          areaRange = _this$renderAttrs2.areaRange,
          areaField = _this$renderAttrs2.areaField;
      var radius = attr.radius,
          dataOrigin = attr.dataOrigin; // 面积字段未定义，直接返回半径

      if (!areaField || !dataOrigin.hasOwnProperty(areaField)) {
        return radius;
      } // 面积范围未定义，直接返回数据中的面积


      if (!areaRange) {
        return dataOrigin[areaField];
      }

      var allData = _toConsumableArray(this.dataset).map(function (d) {
        return d.data[areaField];
      }).sort(function (a, b) {
        return a - b;
      });

      var linear = scaleLinear().domain([allData[0], allData[allData.length - 1]]).range(areaRange);
      var realArea = linear(dataOrigin[areaField]);
      return realArea;
    }
  }, {
    key: "onMouseenter",
    value: function onMouseenter(event, el) {
      var arc = el.children[0];
      var _arc$attributes = arc.attributes,
          rowInd = _arc$attributes.row,
          colInd = _arc$attributes.col,
          pos = _arc$attributes.pos;
      this.dataset.forEach(function (cell) {
        if (cell.row === rowInd && cell.col === colInd) {
          cell.state = 'hover';
        }
      });
      var showGuideLine = this.renderAttrs.showGuideLine;

      if (showGuideLine) {
        var _this$renderAttrs$cli = this.renderAttrs.clientRect,
            height = _this$renderAttrs$cli.height,
            width = _this$renderAttrs$cli.width;
        this.guideLineData = [[[0, pos[1]], [width, pos[1]]], [[pos[0], 0], [pos[0], height]]];
      }
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave(event, el) {
      var arc = el.children[0];
      this.dataset.resetState();
      this.guideLineData = [];
    }
  }, {
    key: "renderGuideLine",
    value: function renderGuideLine() {
      if (this.guideLineData.length > 0) {
        return this.guideLineData.map(function (points) {
          return qcharts.h(Polyline, {
            points: points,
            strokeColor: '#ddd',
            lineWidth: 1,
            translate: [0.5, 0.5]
          });
        });
      }

      return;
    }
  }, {
    key: "renderScatter",
    value: function renderScatter(data) {
      var _this5 = this;

      var _this$renderAttrs3 = this.renderAttrs,
          labelField = _this$renderAttrs3.labelField,
          layoutBy = _this$renderAttrs3.layoutBy;
      console.log(this.renderAttrs);
      var styles = this.renderStyles;
      var renderData = this.dataset[layoutBy];
      var scatters = data.map(function (item, di) {
        return item.attrs.map(function (attr, ci) {
          var style = getStyle(_this5, 'point', [attr, styles.point], [_objectSpread({}, attr.dataOrigin), ci]);

          if (style === false) {
            return;
          }

          var labelAttr = null;
          var text = '';

          if (labelField) {
            labelAttr = getStyle(_this5, 'label', [{
              pos: attr.pos,
              fillColor: attr.strokeColor
            }, styles.label], [_objectSpread({}, attr.dataOrigin), ci]);
            text = attr.dataOrigin[labelField];
            labelAttr.zIndex = 10 + di + ci;
          }

          var hStyle = getStyle(_this5, 'point:hover', [style, styles['point:hover']], [attr.dataOrigin, ci]);
          var stateStyle = attr.state === 'hover' ? hStyle : {};
          return qcharts.h(Group, {
            onMousemove: _this5.onMouseenter,
            onMouseleave: _this5.onMouseleave,
            onMouseEvent: ['click', renderData[di][ci], ci]
          }, qcharts.h(Arc, _extends({}, attr, style, stateStyle, {
            zIndex: 9 + di + ci
          })), labelAttr ? qcharts.h(Label, _extends({
            text: text
          }, labelAttr)) : null);
        });
      });
      return scatters.reduce(function (pre, cur) {
        return pre.concat(cur);
      }, []);
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this$renderAttrs$cli2 = this.renderAttrs.clientRect,
          height = _this$renderAttrs$cli2.height,
          width = _this$renderAttrs$cli2.width,
          left = _this$renderAttrs$cli2.left,
          top = _this$renderAttrs$cli2.top;
      return qcharts.h(Group, {
        size: [width, height],
        pos: [left, top],
        zIndex: 10
      }, this.renderScatter(data), this.renderGuideLine());
    }
  }, {
    key: "rendered",
    value: function rendered() {}
  }]);

  return Scatter;
}(BaseVisual);

export default Scatter;