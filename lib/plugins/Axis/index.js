import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import Base from '../../base/BasePlugin';
import { Group, Label, Polyline, Node } from 'spritejs';
import { emptyObject } from '@qcharts/utils';
import filterClone from 'filter-clone';
import layout from './layout';
import { getStyle } from '../../utils/getStyle';

var Axis = /*#__PURE__*/function (_Base) {
  _inherits(Axis, _Base);

  var _super = _createSuper(Axis);

  function Axis(attrs) {
    var _this;

    _classCallCheck(this, Axis);

    _this = _super.call(this, attrs);
    _this.renderAxis = emptyObject();
    return _this;
  }

  _createClass(Axis, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
      var attrs = _get(_getPrototypeOf(Axis.prototype), "renderAttrs", this);

      var targetVisual = this.chart.visuals[0];

      if (attrs.axisGap === undefined && targetVisual && targetVisual.constructorName === 'Bar') {
        //如果axisGap没有赋值
        //如果是柱状图
        attrs.axisGap = true;
      }

      if (targetVisual && targetVisual.attr('axisGap')) {
        attrs.axisGap = targetVisual.attr('axisGap');
      }

      if (targetVisual && targetVisual.constructorName === 'Scatter') {
        attrs.type = attrs.type || 'value';
      }

      if (attrs.transpose === undefined && targetVisual) {
        //坐标轴转换
        attrs.transpose = targetVisual.renderAttrs.transpose;
      }

      return attrs;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      var _this$getRenderData = this.getRenderData(),
          axis = _this$getRenderData.axis;

      return axis;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this$getRenderData2 = this.getRenderData(),
          axis = _this$getRenderData2.axis;

      return axis;
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'axis',
        zIndex: -1,
        formatter: function formatter(e) {
          return e;
        }
      };
    } //defaultStyles() {}

  }, {
    key: "getRenderData",
    value: function getRenderData() {
      //根据axis的特性返回需要数据
      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];
      var axis = layout.call(this, renderData, renderAttrs);
      return {
        axis: axis
      };
    }
  }, {
    key: "render",
    value: function render(axis) {
      var _this2 = this;

      var oldAxis = this.renderAxis || emptyObject();
      this.renderAxis = axis;
      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          formatter = _this$renderAttrs.formatter,
          orient = _this$renderAttrs.orient,
          name = _this$renderAttrs.name; //渲染的样式，合并了theme中的styles与组件上的defaultStyles

      var styles = this.renderStyles;
      var axisStyle = getStyle(this, 'axis', styles.axis); //当前主体颜色

      var arrOrient = this.chart.plugins.map(function (plugin) {
        if (plugin.constructorName === 'Axis') {
          return plugin.renderAttrs.orient;
        }
      }).filter(Boolean);
      var nameStyle = getStyle(this, 'name', [styles.name || {}, filterClone(axis.nameAttr, [], ['pos'])]);
      var oldPos = oldAxis.nameAttr && oldAxis.nameAttr.pos || axis.nameAttr.pos;
      var nameAni = {
        from: {
          pos: oldPos
        },
        to: {
          pos: axis.nameAttr.pos
        }
      };
      return qcharts.h(Group, {
        ref: "wrap",
        pos: [clientRect.left, clientRect.top]
      }, qcharts.h(Polyline, _extends({}, axisStyle, {
        animation: {
          from: {
            points: oldAxis.axisPoints
          },
          to: {
            points: axis.axisPoints
          }
        }
      })), qcharts.h(Group, null, axis.grids.map(function (grid, ind) {
        var fromPoints = oldAxis.grids && oldAxis.grids[ind] && oldAxis.grids[ind].points || grid.points;
        var ani = {
          from: {
            points: fromPoints
          },
          to: {
            points: grid.points
          }
        };
        var style = getStyle(_this2, 'grid', styles.grid, [{
          label: axis.labels[ind] && axis.labels[ind].text
        }, ind]);

        if (orient === 'left' || orient === 'right') {
          if (ind === 0 && arrOrient.includes('bottom') || ind === axis.grids.length - 1 && arrOrient.includes('top')) {
            return qcharts.h(Node, null);
          }
        } else if (orient === 'top' || orient === 'bottom') {
          if (ind === 0 && arrOrient.includes('left') || ind === axis.grids.length - 1 && arrOrient.includes('right')) {
            return qcharts.h(Node, null);
          }
        }

        return style === false ? qcharts.h(Node, null) : qcharts.h(Polyline, _extends({}, style, {
          points: ani.from.points,
          animation: ani
        }));
      }), axis.scales.map(function (scale, ind) {
        var fromPos = oldAxis.scales && oldAxis.scales[ind] && oldAxis.scales[ind].pos || scale.pos;
        var ani = {
          from: {
            pos: fromPos
          },
          to: {
            pos: scale.pos
          }
        }; // 排除pos属性，pos属性用来处理动画，其它属性直接赋值

        var style = getStyle(_this2, 'scale', styles.scale, [scale, ind]);
        return style === false ? qcharts.h(Node, null) : qcharts.h(Group, _extends({}, filterClone(scale, [], ['pos']), style, {
          animation: ani
        }));
      }), axis.labels.map(function (label, ind) {
        var fromPos = oldAxis.labels && oldAxis.labels[ind] && oldAxis.labels[ind].pos || label.pos;
        var style = getStyle(_this2, 'label', styles.label, [label, ind]);
        var ani = {
          from: {
            pos: fromPos
          },
          to: {
            pos: label.pos
          }
        };
        return style === false ? qcharts.h(Node, null) : qcharts.h(Label, _extends({}, filterClone(label, [], ['pos', 'text']), style, {
          text: formatter(label.text),
          animation: ani
        }));
      })), nameStyle === false || name === undefined || name.length === 0 ? qcharts.h(Node, null) : qcharts.h(Label, _extends({}, nameStyle, {
        text: name,
        animation: nameAni
      })));
    }
  }]);

  return Axis;
}(Base);

export default Axis;