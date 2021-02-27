import _extends from "@babel/runtime/helpers/extends";
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

import Base from '../../base/BaseVisual';
import { Group, Polyline, Path, requestAnimationFrame, Label, Node } from 'spritejs';
import ellipse2path from '../../utils/ellipse2path';
import { getStyle } from '../../utils/getStyle';

var Wave = /*#__PURE__*/function (_Base) {
  _inherits(Wave, _Base);

  var _super = _createSuper(Wave);

  function Wave(attrs) {
    var _this;

    _classCallCheck(this, Wave);

    _this = _super.call(this, attrs); //波纹振偏移量

    _this.offsetR = 50;
    _this.tickId = '';
    _this.oldAttr = {};
    return _this;
  }

  _createClass(Wave, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = _get(_getPrototypeOf(Wave.prototype), "renderAttrs", this);

      var clientRect = attrs.clientRect;
      var width = Math.floor(clientRect.width);
      var height = Math.floor(clientRect.height);
      var radius = attrs.radius;
      attrs.pos = [0, 0];

      if (!attrs.shape) {
        attrs.pos = [width / 2 - radius, height / 2 - radius];
        attrs.shape = ellipse2path(radius, radius, attrs.radius, attrs.radius);
      }

      return attrs;
    }
  }, {
    key: "rendered",
    value: function rendered() {
      //path的高宽
      this.wave();
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
      return {
        layer: 'wave',
        amplitude: 8,
        //振幅
        wavelength: 300,
        //波长`
        radius: 150,
        percent: 65,
        formatter: function formatter(per) {
          return per + '%';
        }
      };
    }
  }, {
    key: "wave",
    value: function wave() {
      var _this2 = this;

      var currentR = 0;
      var per = 4;
      var clipWave = this.$refs['clipWave'];
      var clipPath = this.$refs['clipPath'] || clipWave;
      var pathHeight = clipPath.originalContentRect[3];
      var _this$renderAttrs = this.renderAttrs,
          percent = _this$renderAttrs.percent,
          wavelength = _this$renderAttrs.wavelength,
          amplitude = _this$renderAttrs.amplitude,
          clientRect = _this$renderAttrs.clientRect,
          animation = _this$renderAttrs.animation,
          shape = _this$renderAttrs.shape;
      var perR = 24 / animation.duration;
      var currentX = 0 - clientRect.left; //以路径的top为起点，计算百分比

      var startY = pathHeight * (100 - percent) / 100 + clipPath.originalContentRect[1];
      this.tickId = requestAnimationFrame(function (_) {
        _this2.offsetR += perR;
        var points = [[currentX, startY + pathHeight]];
        points.push([currentX, startY + amplitude * Math.sin(currentR + _this2.offsetR)]);

        while (currentX < clientRect.width + clientRect.left + clientRect.right) {
          points.push([currentX, startY + amplitude * Math.sin(currentR + _this2.offsetR)]);
          currentX += wavelength / (per * 2);
          currentR += Math.PI / per;
        }

        var lastY = amplitude * Math.sin(currentR + _this2.offsetR);
        points.push([currentX, startY + lastY]);
        points.push([currentX, startY + lastY]);
        points.push([currentX, startY + pathHeight]);
        clipWave.attr({
          points: points,
          clipPath: ' ' + shape
        });

        if (_this2.offsetR >= 2 * Math.PI) {
          _this2.offsetR = _this2.offsetR % (2 * Math.PI);
        }

        _this2.wave();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$renderAttrs2 = this.renderAttrs,
          clientRect = _this$renderAttrs2.clientRect,
          shape = _this$renderAttrs2.shape,
          pos = _this$renderAttrs2.pos,
          formatter = _this$renderAttrs2.formatter,
          percent = _this$renderAttrs2.percent,
          radius = _this$renderAttrs2.radius;
      var renderStyles = this.renderStyles;
      var waveStyle = getStyle(this, 'wave', renderStyles.wave);
      var shapeStyle = getStyle(this, 'shape', renderStyles.shape);
      var textStyle = getStyle(this, 'text', [{
        pos: [radius, radius],
        anchor: [0.5, 0.5]
      }, renderStyles.text]);
      var animation = {
        from: {
          pos: this.oldAttr.pos || pos
        },
        to: {
          pos: pos
        }
      };
      this.oldAttr = _objectSpread({}, this.renderAttrs);
      return qcharts.h(Group, {
        zIndex: 1,
        class: "container",
        pos: [clientRect.left, clientRect.top]
      }, qcharts.h(Group, {
        animation: animation
      }, qcharts.h(Path, {
        ref: "clipPath1",
        d: shape,
        fillColor: shapeStyle.fillColor
      }), qcharts.h(Polyline, _extends({
        ref: "clipWave"
      }, waveStyle, {
        clipPath: shape,
        smooth: true
      })), qcharts.h(Path, {
        ref: "clipPath",
        d: shape,
        strokeColor: shapeStyle.strokeColor,
        lineWidth: shapeStyle.lineWidth
      }), textStyle === false ? qcharts.h(Node, null) : qcharts.h(Label, _extends({
        text: formatter(percent)
      }, textStyle))));
    }
  }]);

  return Wave;
}(Base);

export default Wave;