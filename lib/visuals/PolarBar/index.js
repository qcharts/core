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

import Base from "../../base/BaseVisual";
import { Group, Ring } from "spritejs";
import { deepObjectMerge } from "@qcharts/utils";
import layout from "./layout";
import { getStyle } from "../../utils/getStyle";
import filterClone from "filter-clone";

var PolarBar = /*#__PURE__*/function (_Base) {
  _inherits(PolarBar, _Base);

  var _super = _createSuper(PolarBar);

  function PolarBar(attrs) {
    var _this;

    _classCallCheck(this, PolarBar);

    _this = _super.call(this, attrs);
    _this.type = "polarbar";
    _this.pillars = [];
    _this.hoverIndex = -1;
    _this.timer = null;
    return _this;
  }

  _createClass(PolarBar, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = _get(_getPrototypeOf(PolarBar.prototype), "renderAttrs", this);

      var _attrs$clientRect = attrs.clientRect,
          height = _attrs$clientRect.height,
          width = _attrs$clientRect.width,
          top = _attrs$clientRect.top,
          left = _attrs$clientRect.left;
      attrs.pos = [left + width / 2, top + height / 2];
      return attrs;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回rings,继承base
      var _this$getRenderData = this.getRenderData(),
          arrLayout = _this$getRenderData.arrLayout;

      this.pillars = arrLayout.barData;
      var barData = arrLayout.barData.map(function (item) {
        return {
          from: {
            endAngle: item.startAngle
          },
          to: item
        };
      });
      return {
        barData: barData
      };
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var pillars = this.pillars;
      var pos = this.renderAttrs.pos;

      var _this$getRenderData2 = this.getRenderData(),
          arrLayout = _this$getRenderData2.arrLayout;

      var barData = arrLayout.barData.map(function (nextPillar, i) {
        var curPos = [pos[0] + nextPillar.offsetPos[0], pos[1] + nextPillar.offsetPos[1]];
        nextPillar.pos = curPos;
        return {
          from: _objectSpread({}, pillars[i]),
          to: _objectSpread({}, nextPillar)
        };
      });
      this.pillars = arrLayout.barData;
      return {
        barData: barData
      };
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var _this2 = this;

      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset["rows"];

      if (!renderData || renderData.length === 0) {
        return {
          barData: []
        };
      }

      var dataLength = renderData.length;
      this.legendArr = Array.from({
        length: renderData.length
      }, function () {
        return 1;
      });
      var arrLayout = layout.call(this, renderData, renderAttrs);
      var colors = this.theme.colors;
      var styles = this.renderStyles;
      arrLayout.barData.forEach(function (bar, i) {
        var cell = renderData[i % dataLength][Math.floor(i / dataLength)];

        var style = _this2.style("pillar")(bar, cell.data, i);

        bar.fillColor = bar.fillColor || colors[cell.row];
        bar.strokeColor = renderAttrs.strokeColor || "#FFF";
        bar.pos = renderAttrs.pos;

        if (!bar.hasOwnProperty("startAngle") || !bar.hasOwnProperty("endAngle")) {
          bar.lineWidth = 0;
        } else {
          bar.lineWidth = 1;
        }

        var barStyle = deepObjectMerge({}, styles.bar, style);
        bar = deepObjectMerge(bar, barStyle);
      });
      return {
        arrLayout: arrLayout
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
        layer: "bar",
        //选中偏移量基数
        activeOffset: 20
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {};
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      var _this3 = this;

      this.timer = setTimeout(function () {
        _this3.dataset.resetState();

        _this3.hoverIndex = -1;
      }, 100);
    }
  }, {
    key: "mousemove",
    value: function mousemove(e, el) {
      clearTimeout(this.timer); // let fun = throttle(function(e, el) {

      var renderData = this.renderData();
      var ind = el.attr("_index");
      var groupInd = Math.floor(ind / renderData.length);

      if (groupInd !== this.hoverIndex) {
        this.dataset.resetState();
        this.dataset[this.renderAttrs.layoutBy === "rows" ? "cols" : "rows"][groupInd].state = "hover";
        this.hoverIndex = groupInd;
      } // }, 30).bind(this);
      // fun(e, el);

    }
  }, {
    key: "groupMousemove",
    value: function groupMousemove(e, el) {
      console.log(el);
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var renderAttrs = this.renderAttrs;
      return this.dataset[renderAttrs.layoutBy];
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this4 = this;

      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          innerRadiusPx = _this$renderAttrs.innerRadiusPx,
          radiusPx = _this$renderAttrs.radiusPx;
      var colors = this.theme.colors;
      var styles = this.renderStyles;
      return qcharts.h(Group, {
        class: "container",
        ref: "wrap"
      }, qcharts.h(Group, {
        class: "rings-group",
        onMouseleave: this.mouseleave
      }, data.barData.map(function (ring, ind) {
        var style = getStyle(_this4, "sector", [{
          _index: ind
        }, styles.sector], [_this4.dataset.rows[ind], ind]);
        return ring.state === "disabled" || style === false ? qcharts.h(Node, null) : qcharts.h(Ring, _extends({
          onMousemove: _this4.mousemove
        }, style, {
          animation: {
            from: ring.from,
            to: ring.to
          }
        }));
      })));
    }
  }]);

  return PolarBar;
}(Base);

export default PolarBar;