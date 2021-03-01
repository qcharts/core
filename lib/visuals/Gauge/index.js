import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Group, Polyline, Label, Arc, Gradient } from 'spritejs';
import { jsType } from '@qcharts/utils';
import BaseVisual from '../../base/BaseVisual';
/**
 * 根据给定参数，生成仪表盘刻度的坐标以及刻度文字标注的坐标
 * @param {Number} radius 仪表盘半径
 * @param {Number} angle 刻度的角度 单位度
 * @param {Number} tickLength 刻度的长度
 * @param {Number} labelOffset 刻度文字的偏移值
 * @param {Boolean} isInner 刻度是否在仪表盘内部
 */

function tickLine(radius, angle, tickLength, labelOffset, isInner) {
  var radian = angle * Math.PI / 180;
  var cos = Math.cos(radian);
  var sin = Math.sin(radian); // 起点

  var x = cos * radius,
      y = sin * radius; // 中点

  var _ref = isInner ? [x - tickLength * cos, y - tickLength * sin] : [x + tickLength * cos, y + tickLength * sin],
      _ref2 = _slicedToArray(_ref, 2),
      cX0 = _ref2[0],
      cY0 = _ref2[1];

  var labelPos = isInner ? [x - (tickLength + labelOffset) * cos, y - (tickLength + labelOffset) * sin] : [x + (tickLength + labelOffset) * cos, y + (tickLength + labelOffset) * sin];
  var anchorX = isInner ? cos : -cos;
  var anchorY = isInner ? sin : -sin;
  var anchor = [0.5, 0.5];

  if (Math.abs(anchorX) > Math.abs(anchorY)) {
    anchor[0] = anchorX < 0 ? 0 : anchorX;
  } else {
    anchor[1] = anchorY > 0 ? anchorY : 0;
  }

  return {
    points: [[x, y], [cX0, cY0]],
    labelPos: labelPos,
    anchor: anchor
  };
}

var Gauge = /*#__PURE__*/function (_BaseVisual) {
  _inherits(Gauge, _BaseVisual);

  var _super = _createSuper(Gauge);

  function Gauge(attrs) {
    var _this;

    _classCallCheck(this, Gauge);

    _this = _super.call(this, attrs);
    _this.gaugeAnimations = [];
    _this.type = 'Gauge';
    _this.oldPos = null;

    _this.style('tickText', true);

    _this.style('tickLine', true);

    return _this;
  }

  _createClass(Gauge, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'gauge',
        min: 0,
        // 刻度最小值
        max: 100,
        // 刻度最大值
        percent: 50,
        // 指针值
        lineCap: 'round',
        _useBuiltInColors: false,
        // 默认颜色不使用渐变色
        lineWidth: 10,
        // 仪表盘圆弧宽度
        startAngle: 140,
        // 仪表盘弧度起始角度，arc 角度顺时针增加，0度为屏幕X轴方向
        endAngle: 400,
        // 仪表盘弧度终止角度
        strokeBgcolor: '#dde3ea',
        // 仪表盘弧度的背景色
        title: function title(d) {
          return d;
        },
        tickStep: 10,
        // tick 步进，生成 tick 的数量为 (max - min) / tickStep
        tickLength: 10,
        // 刻度长度，为负值时向外绘制
        labelOffset: 5,
        tickFormatter: function tickFormatter(d) {
          return d;
        } // 刻度文本格式化

      };
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      var attrs = _get(_getPrototypeOf(Gauge.prototype), "renderAttrs", this); // 仪表盘半径


      var clientRect = attrs.clientRect;
      var height = clientRect.height,
          width = clientRect.width;
      var size = [width, height];
      var radius = ~~Math.min.apply(size, size.map(function (v) {
        return v / 2;
      })); // 指针宽度

      var pointerWidth = radius / 10; // 绘图中心

      var center = [width / 2, height / 2]; // Fixed: spriteJS bug, 起始角度差为360的时候位置会发生偏差

      if (attrs.endAngle - attrs.startAngle > 359.9) {
        attrs.endAngle = attrs.startAngle + 359.9;
      }

      return _objectSpread(_objectSpread({}, attrs), {}, {
        radius: radius,
        pointerWidth: pointerWidth,
        center: center
      });
    }
  }, {
    key: "ticks",
    get: function get() {
      var _this$renderAttrs = this.renderAttrs,
          min = _this$renderAttrs.min,
          max = _this$renderAttrs.max,
          radius = _this$renderAttrs.radius,
          startAngle = _this$renderAttrs.startAngle,
          endAngle = _this$renderAttrs.endAngle,
          lineWidth = _this$renderAttrs.lineWidth,
          tickStep = _this$renderAttrs.tickStep,
          tickLength = _this$renderAttrs.tickLength,
          labelOffset = _this$renderAttrs.labelOffset,
          tickFormatter = _this$renderAttrs.tickFormatter;
      var count = Math.abs(max - min) / tickStep;
      var total = endAngle - startAngle;
      var isInner = tickLength > 0;
      var perAngle = total / count;
      var ticks = [];
      var tickRadius = isInner ? radius - lineWidth / 2 : radius + lineWidth / 2;
      var angle = 0;
      var i = -1;

      while (++i <= count) {
        angle = i * perAngle + startAngle;
        var ret = tickLine(tickRadius, angle, Math.abs(tickLength), Math.abs(labelOffset), isInner);
        ticks.push({
          points: ret.points,
          label: {
            text: tickFormatter(i * tickStep + min).toFixed(0),
            pos: ret.labelPos,
            anchor: ret.anchor
          }
        });
      }

      if ((ticks[0].angle + ticks[ticks.length - 1].angle) % (Math.PI * 2) === 0) {
        ticks.pop();
      }

      return ticks;
    }
  }, {
    key: "transform",
    value: function transform() {
      var _this$renderAttrs2 = this.renderAttrs,
          radius = _this$renderAttrs2.radius,
          startAngle = _this$renderAttrs2.startAngle,
          endAngle = _this$renderAttrs2.endAngle,
          min = _this$renderAttrs2.min,
          max = _this$renderAttrs2.max,
          percent = _this$renderAttrs2.percent;
      var total = Math.abs(max - min);
      var attrEndAngle = (endAngle - startAngle) * (percent - min) / total + startAngle; // 最大不可超过endAngle

      if (attrEndAngle > endAngle) {
        attrEndAngle = endAngle;
      }

      return {
        dataOrigin: percent,
        startAngle: startAngle,
        radius: radius,
        endAngle: attrEndAngle,
        strokeColor: this.color(0)
      };
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      _get(_getPrototypeOf(Gauge.prototype), "beforeRender", this).call(this);

      var arc = this.transform();
      this.gaugeAnimations = {
        from: {
          startAngle: arc.startAngle,
          endAngle: arc.startAngle
        },
        to: {
          startAngle: arc.startAngle,
          endAngle: arc.endAngle
        }
      };
      return arc;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      _get(_getPrototypeOf(Gauge.prototype), "beforeUpdate", this).call(this);

      var arc = this.transform();
      var animation = {
        from: {
          startAngle: arc.startAngle,
          endAngle: arc.startAngle
        },
        to: {
          startAngle: arc.startAngle,
          endAngle: arc.endAngle
        }
      };

      if (this.gaugeAnimations) {
        animation.from = _objectSpread({}, this.gaugeAnimations.to);
      }

      this.gaugeAnimations = _objectSpread({}, animation);
      return arc;
    }
  }, {
    key: "color",
    value: function color(i) {
      return this.theme.colors[i];
    }
    /**
     * 渲染指针
     * @param {Number} angle 角度
     */

  }, {
    key: "renderPointer",
    value: function renderPointer(d, maxTickTextFontSize) {
      var style = this.style('pointer')(d, d.dataOrigin, 0);

      if (style === false) {
        return;
      } // 动画


      var _this$gaugeAnimations = this.gaugeAnimations,
          from = _this$gaugeAnimations.from,
          to = _this$gaugeAnimations.to; // rotate角度起始位置为屏幕Y轴方向，arc角度为X轴方向

      var fromRotate = from.endAngle + 90;
      var toRotate = to.endAngle + 90;
      var pointerAnimation = {
        from: {
          rotate: fromRotate
        },
        to: {
          rotate: toRotate
        }
      }; // 半径

      var _this$renderAttrs3 = this.renderAttrs,
          radius = _this$renderAttrs3.radius,
          center = _this$renderAttrs3.center,
          tickLength = _this$renderAttrs3.tickLength,
          labelOffset = _this$renderAttrs3.labelOffset,
          lineWidth = _this$renderAttrs3.lineWidth; // 指针顶部离仪表盘的距离

      var pointerTopOffset = tickLength + lineWidth + labelOffset + maxTickTextFontSize;

      if (tickLength < 0) {
        pointerTopOffset = pointerTopOffset - tickLength - labelOffset;
      } // 指针长度


      var pointerLen = radius - pointerTopOffset; // 指针宽度

      var pWidth = radius / 10; // 指针颜色

      var color = this.color(0);

      var _center = _slicedToArray(center, 2),
          x = _center[0],
          y = _center[1];

      var attr = {
        fillColor: color,
        rotate: fromRotate,
        transformOrigin: center,
        zIndex: 11,
        points: [[x, y], [x - pWidth / 2, y - pointerLen * 0.1], [x, y - pointerLen], [x + pWidth / 2, y - pointerLen * 0.1], [x, y]],
        close: true
      };
      return qcharts.h(Polyline, _extends({}, attr, style, {
        animation: pointerAnimation
      }));
    }
  }, {
    key: "isStyleExist",
    value: function isStyleExist(name) {
      var style = this.style("".concat(name));
      return Boolean(style);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$renderAttrs4 = this.renderAttrs,
          _useBuiltInColors = _this$renderAttrs4._useBuiltInColors,
          title = _this$renderAttrs4.title,
          percent = _this$renderAttrs4.percent,
          center = _this$renderAttrs4.center,
          radius = _this$renderAttrs4.radius,
          startAngle = _this$renderAttrs4.startAngle,
          endAngle = _this$renderAttrs4.endAngle,
          lineWidth = _this$renderAttrs4.lineWidth,
          lineCap = _this$renderAttrs4.lineCap,
          strokeBgcolor = _this$renderAttrs4.strokeBgcolor,
          clientRect = _this$renderAttrs4.clientRect;
      var labelCenter = [center[0], center[1] * 1.25];
      var ticks = this.ticks;
      var tickLine = this.isStyleExist('tickLine');
      var tickText = this.isStyleExist('tickText');
      var realTitle = title || percent;
      var gradientColor = null; // 默认使用内置的渐变配色方案

      if (_useBuiltInColors !== false) {
        var colors = this.theme.colors.reverse();
        var gradientOpt = {
          vector: [0, 0, center[0] * 2, center[1] * 2],
          colors: [{
            color: colors[0],
            offset: 0
          }, {
            color: colors[1],
            offset: 0.3
          }, {
            color: colors[2],
            offset: 1
          }]
        };
        gradientColor = new Gradient(gradientOpt);
      }

      var maxTickTextFontSize = 16;

      if (tickText !== false) {
        ticks.map(function (tick, j) {
          var style = _this2.style('tickText')(data, data.dataOrigin, j);

          if (style && style.fontSize) {
            if (jsType(style.fontSize) === 'number' && maxTickTextFontSize < style.fontSize) {
              maxTickTextFontSize = style.fontSize;
            }

            if (jsType(style.fontSize) === 'string') {
              var realSize = Number(style.fontSize.replace('px', ''));

              if (jsType(realSize) === 'number' && maxTickTextFontSize < realSize) {
                maxTickTextFontSize = realSize;
              }
            }
          }
        });
      }

      var gPos = [clientRect.left, clientRect.top];
      var gSize = [clientRect.width, clientRect.height];
      var gAnimation = {
        from: {
          pos: this.oldPos ? this.oldPos : gPos
        },
        to: {
          pos: gPos
        }
      };
      this.oldPos = gPos;
      return qcharts.h(Group, {
        pos: gPos,
        size: gSize,
        animation: gAnimation
      }, qcharts.h(Arc, {
        pos: center,
        lineWidth: lineWidth,
        lineCap: lineCap,
        startAngle: startAngle,
        endAngle: endAngle,
        strokeColor: strokeBgcolor,
        radius: radius,
        zIndex: 10
      }), qcharts.h(Arc, _extends({
        pos: center,
        lineCap: lineCap,
        lineWidth: lineWidth
      }, data, {
        animation: this.gaugeAnimations
      }, gradientColor ? {
        strokeColor: gradientColor
      } : {
        strokeColor: this.color(0)
      }, this.style('arc')(data, data.dataOrigin, 0), {
        zIndex: 11
      })), this.renderPointer(data, maxTickTextFontSize), realTitle ? qcharts.h(Label, _extends({
        text: jsType(realTitle) === 'function' ? realTitle(data.dataOrigin) : realTitle,
        pos: labelCenter,
        textAlign: "center",
        zIndex: 10,
        anchor: [0.5, 1]
      }, this.style('title')(data, data.dataOrigin, 0))) : null, tickLine !== false || tickText !== false ? ticks.map(function (tick, j) {
        return qcharts.h(Group, {
          pos: center,
          anchor: [0, 0],
          zIndex: 1010
        }, tickLine !== false ? qcharts.h(Polyline, _extends({
          points: tick.points,
          strokeColor: strokeBgcolor
        }, _this2.style('tickLine')(data, data.dataOrigin, j))) : null, tickText !== false ? qcharts.h(Label, _extends({}, tick.label, _this2.style('tickText')(data, data.dataOrigin, j))) : null);
      }) : null);
    }
  }, {
    key: "rendered",
    value: function rendered() {}
  }]);

  return Gauge;
}(BaseVisual);

export default Gauge;