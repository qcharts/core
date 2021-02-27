import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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

import { Group, Arc } from 'spritejs';
import { deepObjectMerge } from '@qcharts/utils';
import BaseVisual from '../../base/BaseVisual'; // 数据拷贝

var flattern = function flattern(arr) {
  return [].concat.apply([], arr);
};

var RadialBar = /*#__PURE__*/function (_BaseVisual) {
  _inherits(RadialBar, _BaseVisual);

  var _super = _createSuper(RadialBar);

  function RadialBar() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RadialBar);

    _this = _super.call(this, attrs);
    _this.type = 'RadialBar';
    _this.animators = [];
    _this.oldPos = null;
    return _this;
  }

  _createClass(RadialBar, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'radialBar',
        radius: 0.8,
        innerRadius: 0,
        startAngle: -90,
        endAngle: 270,
        lineWidth: 5,
        strokeBgcolor: '#f5f5f5'
      };
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      var attrs = _get(_getPrototypeOf(RadialBar.prototype), "renderAttrs", this);

      var clientRect = attrs.clientRect;
      var size = [clientRect.width, clientRect.height];
      return _objectSpread(_objectSpread({}, attrs), {}, {
        size: size
      });
    }
  }, {
    key: "maxOuterRadius",
    get: function get() {
      var _this$renderAttrs = this.renderAttrs,
          startAngle = _this$renderAttrs.startAngle,
          endAngle = _this$renderAttrs.endAngle,
          radius = _this$renderAttrs.radius,
          size = _this$renderAttrs.size;

      var _size = _slicedToArray(size, 2),
          width = _size[0],
          height = _size[1];

      if (endAngle - startAngle === 90) {
        return Math.min(width, height) * radius;
      } else {
        return Math.min(width, height) / 2 * radius;
      }
    }
  }, {
    key: "center",
    get: function get() {
      var size = this.renderAttrs.size;

      var _size2 = _slicedToArray(size, 2),
          width = _size2[0],
          height = _size2[1];

      var maxRadius = this.maxOuterRadius;
      return [width / 2 - maxRadius, height / 2 - maxRadius];
    }
  }, {
    key: "innerRadius",
    get: function get() {
      var _this$renderAttrs2 = this.renderAttrs,
          radius = _this$renderAttrs2.radius,
          innerRadius = _this$renderAttrs2.innerRadius;
      return innerRadius <= 0 ? 0 : this.maxOuterRadius / radius * innerRadius;
    }
  }, {
    key: "transform",
    value: function transform(data) {
      var _this2 = this;

      var _this$renderAttrs3 = this.renderAttrs,
          startAngle = _this$renderAttrs3.startAngle,
          endAngle = _this$renderAttrs3.endAngle,
          max = _this$renderAttrs3.max,
          min = _this$renderAttrs3.min,
          lineWidth = _this$renderAttrs3.lineWidth,
          colors = _this$renderAttrs3.colors;
      var total = 0;

      if (!isNaN(max) && !isNaN(min)) {
        total = max - min;
      } else {
        var cloneData = deepObjectMerge(data);
        cloneData.sort(function (a, b) {
          return b.value - a.value;
        });
        total = cloneData[0].value * 1.3;
      }

      var angle = endAngle - startAngle;
      var innerRadius = this.innerRadius;
      var outerRadius = this.maxOuterRadius;
      var arcOffset = 0.5;
      var len = data.length;
      var perRadius = ((outerRadius - innerRadius) * 2 - lineWidth * (lineWidth >= 5 ? 1 : len - 1)) / ((len * 2 - 1) * (1 + arcOffset));
      var value = null;
      data.forEach(function (d, i) {
        value = +d.value;
        var endAngle = startAngle;

        if (d.state !== 'disabled') {
          endAngle = startAngle + angle * value / total;
        } // spriteJS bug, 起始角度差为360的时候位置会发生偏差


        if (endAngle - startAngle > 359.9) {
          endAngle = 359.9 + startAngle;
        }

        d.pos = [outerRadius, outerRadius];
        d.anchor = [0.5, 0.5];
        d.lineWidth = lineWidth;
        d.startAngle = startAngle;
        d.endAngle = endAngle;
        d.innerRadius = innerRadius + i * (1 + arcOffset) * perRadius;
        d.radius = d.innerRadius + 1 * perRadius;
        d.strokeColor = colors[i];

        var normalStyle = _this2.style('arc')(d, d.dataOrigin, d.index);

        Object.assign(d, normalStyle);
      }); // 半径大的在底，小的在上，这样事件触发才正常

      return data.sort(function (a, b) {
        return b.radius - a.radius;
      });
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      _get(_getPrototypeOf(RadialBar.prototype), "beforeRender", this).call(this);

      var startAngle = this.renderAttrs.startAngle;
      var data = flattern(this.dataset);
      data = this.transform(data);
      this.animators = data.map(function (d) {
        return {
          from: {
            startAngle: startAngle,
            endAngle: startAngle
          },
          to: {
            startAngle: startAngle,
            endAngle: d.endAngle
          }
        };
      });
      return data;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this3 = this;

      _get(_getPrototypeOf(RadialBar.prototype), "beforeUpdate", this).call(this);

      var startAngle = this.renderAttrs.startAngle;
      var data = flattern(this.dataset);
      data = this.transform(data);
      this.animators = data.map(function (d, i) {
        if (d.anticlockwise) {
          return d.disabled ? {
            from: {
              opacity: 1
            },
            to: {
              opacity: 0
            }
          } : {
            from: {
              opacity: 1
            },
            to: {
              opacity: 1
            }
          };
        } else {
          var prev = _this3.animators[i] ? _this3.animators[i].to : data[i - 1];

          if (!prev) {
            prev = {
              startAngle: startAngle,
              endAngle: startAngle
            };
          }

          return {
            from: {
              startAngle: prev.startAngle,
              endAngle: prev.endAngle
            },
            to: {
              startAngle: d.startAngle,
              endAngle: d.endAngle
            }
          };
        }
      });
      return data;
    }
  }, {
    key: "onMouseenter",
    value: function onMouseenter(event, el) {
      var _el$children$1$attrib = el.children[1].attributes,
          col = _el$children$1$attrib.col,
          row = _el$children$1$attrib.row;
      this.dataset.forEach(function (item) {
        item.state = item.col === col && item.row === row ? 'hover' : 'default';
      });
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave() {
      this.dataset.resetState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$renderAttrs4 = this.renderAttrs,
          strokeBgcolor = _this$renderAttrs4.strokeBgcolor,
          clientRect = _this$renderAttrs4.clientRect;
      var gAnimation = {
        from: {
          pos: this.oldPos ? this.oldPos : this.center
        },
        to: {
          pos: this.center
        }
      };
      this.oldPos = this.center;
      var gPos = [clientRect.left, clientRect.top];
      var gSize = [clientRect.width, clientRect.height];
      return qcharts.h(Group, {
        pos: gPos,
        size: gSize
      }, data.map(function (d, i) {
        var col = d.col,
            row = d.row,
            data = d.data;
        return qcharts.h(Group, {
          animation: gAnimation,
          onMouseenter: _this4.onMouseenter,
          onMousemove: _this4.onMouseenter,
          onMouseleave: _this4.onMouseleave
        }, qcharts.h(Arc, _extends({}, d, {
          startAngle: 0,
          endAngle: 360,
          strokeColor: strokeBgcolor
        })), qcharts.h(Arc, _extends({
          onMouseEvent: ['click', d, i]
        }, _objectSpread(_objectSpread({}, d), {}, {
          col: col,
          row: row
        }), {
          animation: _this4.animators[i]
        }, _this4.style('arc')(d, data, i))));
      }));
    }
  }, {
    key: "rendered",
    value: function rendered() {}
  }]);

  return RadialBar;
}(BaseVisual);

export default RadialBar;