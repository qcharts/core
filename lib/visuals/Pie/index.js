import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import Base from '../../base/BaseVisual';
import { Group, Node, Ring, Polyline, Label } from 'spritejs';
import filterClone from 'filter-clone';
import layout from './layout';
import { computeLinePos } from './layout';
import { getStyle } from '../../utils/getStyle';

var Pie = /*#__PURE__*/function (_Base) {
  _inherits(Pie, _Base);

  function Pie(attrs) {
    var _this;

    _classCallCheck(this, Pie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pie).call(this, attrs));
    _this.renderRings = [];
    _this.hoverIndex = -1;
    _this.activeIndex = -1;
    return _this;
  }

  _createClass(Pie, [{
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回lines,继承base
      var _this$getRenderData = this.getRenderData(),
          rings = _this$getRenderData.rings;

      var center = this.renderAttrs.center;
      var arr = rings.map(function (item, ind) {
        if (ind === 0) {
          return {
            from: {
              startAngle: 0,
              endAngle: 0,
              pos: center
            },
            to: _objectSpread({}, item, {
              pos: center
            })
          };
        }

        var pervAngle = rings[ind - 1].endAngle;
        return {
          from: {
            startAngle: pervAngle,
            endAngle: pervAngle,
            pos: center
          },
          to: _objectSpread({}, item, {
            pos: center
          })
        };
      });
      this.computeLine(arr);
      return arr;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this2 = this;

      //更新前的处理函数，返回lines,继承base
      var _this$getRenderData2 = this.getRenderData(),
          rings = _this$getRenderData2.rings;

      var center = this.renderAttrs.center;
      var oldRings = this.renderRings;
      var arr = rings.map(function (item, ind) {
        var curPos = [center[0] + item.offsetPos[0], center[1] + item.offsetPos[1]];
        var attrs = filterClone(item, ['startAngle', 'endAngle']);

        if (ind === _this2.hoverIndex) {
          return {
            from: _objectSpread({}, oldRings[ind].to),
            to: _objectSpread({}, attrs, {
              pos: curPos
            })
          };
        } else {
          return {
            from: _objectSpread({}, oldRings[ind].to),
            to: _objectSpread({}, attrs, {
              pos: curPos
            })
          };
        }
      });
      this.computeLine(arr);
      return arr;
    }
  }, {
    key: "computeLine",
    value: function computeLine(arr) {
      var radiusPx = this.renderAttrs.radiusPx;
      arr.forEach(function (item) {
        var _computeLinePos = computeLinePos(item.from.startAngle, item.from.endAngle, item.from.pos, radiusPx + 1, 15),
            fromPoints = _computeLinePos.points,
            fromAnchor = _computeLinePos.labelAnchor,
            fromPos = _computeLinePos.labelPos;

        var _computeLinePos2 = computeLinePos(item.to.startAngle, item.to.endAngle, item.to.pos, radiusPx + 1, 15),
            toPoints = _computeLinePos2.points,
            toAnchor = _computeLinePos2.labelAnchor,
            toPos = _computeLinePos2.labelPos;

        item.line = {
          from: {
            points: fromPoints
          },
          to: {
            points: toPoints
          }
        };
        item.label = {
          from: {
            pos: fromPos,
            anchor: fromAnchor
          },
          to: {
            pos: toPos,
            anchor: toAnchor
          }
        };
      }); //计算guideline位置
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      //根据line的特性返回需要数据
      var renderAttrs = this.renderAttrs; //let { radiusPx, center } = renderAttrs

      var renderData = this.renderData();
      var rings = layout.call(this, renderData, renderAttrs);
      return {
        rings: rings
      };
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
      return {
        layer: 'pie',
        radius: 1,
        innerRadius: 0,
        startAngle: 0,
        endAngle: 360,
        lineWidth: 1,
        //选中偏移量基数
        activeOffset: 10
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {};
    }
  }, {
    key: "mousemove",
    value: function mousemove(event, el) {
      var renderData = this.renderData();
      var ind = el.attr('_index');

      if (ind !== this.hoverIndex) {
        var curData = renderData[ind];
        renderData.forEach(function (row) {
          if (row.state === 'hover') {
            row.state = 'default';
          }
        });
        curData.state = 'hover';
        this.hoverIndex = ind;
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      var renderData = this.renderData();
      renderData.forEach(function (row) {
        if (row.state === 'hover') {
          row.state = 'default';
        }
      });
      this.hoverIndex = -1;
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var renderAttrs = this.renderAttrs;
      return this.dataset[renderAttrs.layoutBy];
    }
  }, {
    key: "render",
    value: function render(rings) {
      var _this3 = this;

      //console.log(rings)
      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          innerRadiusPx = _this$renderAttrs.innerRadiusPx,
          radiusPx = _this$renderAttrs.radiusPx; //渲染的样式，合并了theme中的styles与组件上的defaultStyles

      var styles = this.renderStyles; //当前主体颜色

      var colors = this.theme.colors;
      this.renderRings = rings;
      return qcharts.h(Group, {
        zIndex: 1,
        class: "container",
        pos: [clientRect.left, clientRect.top]
      }, qcharts.h(Group, {
        class: "rings-group",
        onMouseleave: this.mouseleave
      }, rings.map(function (ring, ind) {
        var style = getStyle(_this3, 'sector', [{
          strokeColor: colors[ind],
          fillColor: colors[ind],
          innerRadius: innerRadiusPx,
          outerRadius: radiusPx,
          _index: ind
        }, styles.sector], [_this3.dataset.rows[ind], ind]);
        return ring.state === 'disabled' || style === false ? qcharts.h(Node, null) : qcharts.h(Ring, _extends({
          onMousemove: _this3.mousemove
        }, style, {
          animation: {
            from: ring.from,
            to: ring.to
          }
        }));
      })), qcharts.h(Group, {
        class: "line-group"
      }, rings.map(function (ring, ind) {
        var style = getStyle(_this3, 'guideline', [{
          strokeColor: colors[ind]
        }, styles.guideline], [_this3.dataset.rows[ind], ind]);
        var hide = false;

        if (ring.to.startAngle === ring.to.endAngle || ring.state === 'disable' || style === false) {
          hide = true;
        }

        return hide || style === false ? qcharts.h(Node, null) : qcharts.h(Polyline, _extends({}, style, {
          animation: {
            from: ring.line.from,
            to: ring.line.to
          }
        }));
      })), qcharts.h(Group, {
        class: "label-group"
      }, rings.map(function (ring, ind) {
        var name = _this3.dataset.rows[ind].name;
        var style = getStyle(_this3, 'guideText', [{
          fillColor: '#666',
          fontSize: 12
        }, styles.guideText], [_this3.dataset.rows[ind], ind]);
        var hide = false;

        if (ring.to.startAngle === ring.to.endAngle || ring.state === 'disable' || style === false) {
          hide = true;
        }

        return hide || style === false ? qcharts.h(Node, null) : qcharts.h(Label, _extends({
          text: name
        }, style, {
          pos: ring.label.from.pos,
          animation: {
            from: ring.label.from,
            to: ring.label.to
          }
        }));
      })));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = _get(_getPrototypeOf(Pie.prototype), "renderAttrs", this);

      var radius = attrs.radius,
          innerRadius = attrs.innerRadius;
      var _attrs$clientRect = attrs.clientRect,
          width = _attrs$clientRect.width,
          height = _attrs$clientRect.height;
      attrs.center = [width / 2, height / 2];
      attrs.radiusPx = Math.min(width, height) * radius / 2;
      attrs.innerRadiusPx = Math.min(width, height) * innerRadius / 2;
      return attrs;
    }
  }]);

  return Pie;
}(Base);

export default Pie;