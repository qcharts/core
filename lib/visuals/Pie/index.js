import _extends from "@babel/runtime/helpers/extends";
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

import Base from '../../base/BaseVisual';
import { Group, Node, Ring, Polyline, Label } from 'spritejs';
import filterClone from 'filter-clone';
import layout from './layout';
import { layoutLabel } from './layout';
import { computeLinePos } from './layout';
import { getStyle } from '../../utils/getStyle';
import { debounce } from '@qcharts/utils';

var Pie = /*#__PURE__*/function (_Base) {
  _inherits(Pie, _Base);

  var _super = _createSuper(Pie);

  function Pie(attrs) {
    var _this;

    _classCallCheck(this, Pie);

    _this = _super.call(this, attrs);

    _defineProperty(_assertThisInitialized(_this), "labelRendered", debounce(function () {
      var arr = _this.getLabelsPos();

      var rings = _this.renderRings.filter(function (item) {
        return !item.disabled;
      });

      arr.forEach(function (item, ind) {
        var children = _this.$refs['label-group'].children.filter(function (node) {
          return node instanceof Label;
        });

        children[ind].transition(0.3).attr('pos', item.pos);
        rings[ind].label.from.pos = item.pos;
        rings[ind].label.to.pos = item.pos;
      });
    }, 100));

    _this.renderRings = [];
    _this.hoverIndex = -1;
    _this.activeIndex = -1;
    return _this;
  }

  _createClass(Pie, [{
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
  }, {
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
            to: _objectSpread(_objectSpread({}, item), {}, {
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
          to: _objectSpread(_objectSpread({}, item), {}, {
            pos: center
          })
        };
      });
      this.computeLine(arr);
      return arr;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate(attrs) {
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
            to: _objectSpread(_objectSpread({}, attrs), {}, {
              pos: curPos
            })
          };
        } else {
          return {
            from: _objectSpread({}, oldRings[ind].to),
            to: _objectSpread(_objectSpread({}, attrs), {}, {
              pos: curPos
            })
          };
        }
      });
      this.computeLine(arr);
      var arrLabelPos = this.getLabelsPos(arr);
      var arrObj = arr.filter(function (item) {
        return !item.disabled;
      });
      var oldArrLabels = oldRings.filter(function (ring) {
        return !ring.disabled;
      });

      if (arrLabelPos.length === arrObj.length) {
        arrObj.forEach(function (item, ind) {
          item.label.to.pos = arrLabelPos[ind].pos;
          item.label.from.pos = arrLabelPos[ind].pos;

          if (oldArrLabels[ind]) {
            item.label.from.pos = oldArrLabels[ind].label.to.pos;
          }
        });
      }

      return arr;
    }
  }, {
    key: "computeLine",
    value: function computeLine(arr) {
      var _this$renderAttrs = this.renderAttrs,
          radiusPx = _this$renderAttrs.radiusPx,
          lineLength = _this$renderAttrs.lineLength;
      arr.forEach(function (item) {
        var _computeLinePos = computeLinePos(item.from.startAngle, item.from.endAngle, item.from.pos, radiusPx + 1, lineLength),
            fromPoints = _computeLinePos.points,
            fromAnchor = _computeLinePos.labelAnchor,
            fromPos = _computeLinePos.labelPos,
            fromDisabled = _computeLinePos.disabled;

        var _computeLinePos2 = computeLinePos(item.to.startAngle, item.to.endAngle, item.to.pos, radiusPx + 1, lineLength),
            toPoints = _computeLinePos2.points,
            toAnchor = _computeLinePos2.labelAnchor,
            toPos = _computeLinePos2.labelPos,
            toDisabled = _computeLinePos2.disabled;

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
        item.disabled = toDisabled;
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
    value: function rendered() {}
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
        lineLength: 20,
        //选中偏移量基数
        activeOffset: 10,
        formatter: function formatter(str, data) {
          return str;
        }
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
    key: "getLabelsPos",
    value: function getLabelsPos(arr) {
      var labels = [];
      var children = this.$refs['label-group'].children;

      if (arr) {
        arr.forEach(function (item, ind) {
          if (!item.disabled) {
            labels.push({
              pos: item.label.to.pos,
              size: children[ind].offsetSize
            });
          }
        });
      } else {
        this.renderRings.forEach(function (obj, ind) {
          if (obj.disabled !== true) {
            var node = children[ind];

            if (node instanceof Label) {
              var pos = node.attr('pos');
              var size = node.offsetSize;
              labels.push({
                pos: pos,
                size: size
              });
            }
          }
        });
      }

      return layoutLabel(labels);
    }
  }, {
    key: "render",
    value: function render(rings) {
      var _this3 = this;

      var _this$renderAttrs2 = this.renderAttrs,
          clientRect = _this$renderAttrs2.clientRect,
          innerRadiusPx = _this$renderAttrs2.innerRadiusPx,
          radiusPx = _this$renderAttrs2.radiusPx,
          formatter = _this$renderAttrs2.formatter; //渲染的样式，合并了theme中的styles与组件上的defaultStyles

      var styles = this.renderStyles; //当前主体颜色

      var colors = this.theme.colors;
      this.renderRings = rings;
      var renderData = this.renderData();
      return qcharts.h(Group, {
        zIndex: 1,
        onAfterrender: this.labelRendered,
        class: "container",
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height]
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
          onMouseEvent: ['click,dblclick', renderData[ind][0], ind],
          onMouseEnter: _this3.mousemove
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
        class: "label-group",
        ref: "label-group"
      }, rings.map(function (ring, ind) {
        var name = formatter(_this3.dataset.rows[ind].name, _this3.dataset.rows[ind].data);
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
  }]);

  return Pie;
}(Base);

export default Pie;