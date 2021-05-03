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
import { Group, Polyline, Label } from 'spritejs';
import { deepObjectMerge, throttle } from '@qcharts/utils';
import layout from './layout';
import { getStyle } from '../../utils/getStyle';

var Funnel = /*#__PURE__*/function (_Base) {
  _inherits(Funnel, _Base);

  var _super = _createSuper(Funnel);

  function Funnel(attrs) {
    var _this;

    _classCallCheck(this, Funnel);

    _this = _super.call(this, attrs);

    _defineProperty(_assertThisInitialized(_this), "myClick", function () {
      console.log('myclick');
    });

    _this.type = 'funnel';
    _this.polygons = null;
    _this.labels = null;
    _this.hoverIndex = -1;
    return _this;
  }

  _createClass(Funnel, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = _get(_getPrototypeOf(Funnel.prototype), "renderAttrs", this);

      return attrs;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回lines,继承base---------before
      var _this$getRenderData = this.getRenderData(),
          polygons = _this$getRenderData.polygons,
          labels = _this$getRenderData.labels,
          guideLines = _this$getRenderData.guideLines,
          guideTexts = _this$getRenderData.guideTexts;

      polygons = polygons.map(function (plg) {
        return {
          attrs: _objectSpread({}, plg),
          from: {
            points: plg.points.length === 8 ? [plg.points[6], plg.points[7], plg.points[4], plg.points[5], plg.points[4], plg.points[5], plg.points[6], plg.points[7]] : [plg.points[4], plg.points[5], plg.points[4], plg.points[5], plg.points[4], plg.points[5]]
          },
          to: {
            // pos: [0, 0],
            points: plg.points
          }
        };
      });
      labels = labels.map(function (item) {
        return {
          attrs: _objectSpread({}, item)
        };
      });
      guideLines = guideLines.map(function (item) {
        return {
          attrs: _objectSpread({}, item)
        };
      });
      guideTexts = guideTexts.map(function (item) {
        return {
          attrs: _objectSpread({}, item)
        };
      });
      this.polygons = polygons;
      this.labels = labels;
      this.guideLines = guideLines;
      this.guideTexts = guideTexts;
      return {
        polygons: polygons,
        labels: labels,
        guideTexts: guideTexts,
        guideLines: guideLines
      };
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var oldPolygons = this.polygons;
      var oldLabels = this.labels;
      var oldTexts = this.guideTexts;
      var oldLines = this.guideLines;

      var _this$getRenderData2 = this.getRenderData(),
          polygons = _this$getRenderData2.polygons,
          labels = _this$getRenderData2.labels,
          guideLines = _this$getRenderData2.guideLines,
          guideTexts = _this$getRenderData2.guideTexts;

      polygons = polygons.map(function (polygon, i) {
        return {
          attrs: _objectSpread({}, polygon),
          from: {
            points: oldPolygons[i].to.points
          },
          to: {
            points: polygon.points
          }
        };
      });
      labels = labels.map(function (label, i) {
        return {
          attrs: _objectSpread({}, label),
          from: {
            pos: oldLabels[i].attrs.pos
          },
          to: {
            pos: label.pos
          }
        };
      });
      guideTexts = guideTexts.map(function (item, i) {
        return {
          attrs: _objectSpread({}, item),
          from: {
            pos: oldTexts[i].attrs.pos
          },
          to: {
            pos: item.pos
          }
        };
      });
      guideLines = guideLines.map(function (item, i) {
        return {
          attrs: _objectSpread({}, item),
          from: {
            points: oldLines[i].attrs.points
          },
          to: {
            points: item.points
          }
        };
      });
      this.polygons = polygons;
      this.labels = labels;
      this.guideLines = guideLines;
      this.guideTexts = guideTexts;
      return {
        polygons: polygons,
        labels: labels,
        guideTexts: guideTexts,
        guideLines: guideLines
      };
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];

      var _layout = layout(renderData, renderAttrs),
          polygons = _layout.polygons,
          labels = _layout.labels,
          guideLines = _layout.guideLines,
          guideTexts = _layout.guideTexts;

      return {
        polygons: polygons,
        labels: labels,
        guideLines: guideLines,
        guideTexts: guideTexts
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
        layer: 'funnel',
        formatter: function formatter(d) {
          return d.value ? d.value : d;
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
    key: "onMousemove",
    value: function onMousemove(event, el) {
      var ind = el.attr('_ind');
      this.dataset.resetState();
      this.dataset[this.renderAttrs.layoutBy][ind][0].state = 'hover';
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave(e, el) {
      this.dataset.resetState();
    }
  }, {
    key: "withText",
    value: function withText(attrs, cell) {
      var labelAttrs = attrs.labelAttrs;

      if (cell.state === 'disabled') {
        return;
      }

      var textStyle = getStyle(this, 'text', [{}], [cell.data, cell.row]);

      if (textStyle === false) {
        return;
      } // let { textFrom, textTo } = this.fromTos[index]


      return qcharts.h(Label, _extends({}, labelAttrs, textStyle));
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this2 = this;

      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          bgpillarState = _this$renderAttrs.bgpillarState,
          states = _this$renderAttrs.states;
      var polygons = data.polygons,
          labels = data.labels,
          guideLines = data.guideLines,
          guideTexts = data.guideTexts;
      var styles = this.renderStyles;
      var colors = this.theme.colors;
      return qcharts.h(Group, {
        class: "container",
        ref: "wrap",
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height]
      }, qcharts.h(Group, {
        ref: "pillars",
        class: "pillars-group"
      }, polygons.map(function (pillar, ind) {
        var cell = _this2.dataset[_this2.renderAttrs.layoutBy][ind][0];
        var style = getStyle(_this2, 'polygon', [{
          _ind: ind,
          fillColor: colors[ind]
        }, styles.polygon], [cell, ind]);
        var styleHover = getStyle(_this2, 'polygon:hover', [{
          _ind: ind,
          opacity: 0.8
        }, styles.polygon], [cell, ind]);

        if (cell.state === 'hover') {
          deepObjectMerge(style, styleHover);
        }

        return qcharts.h(Group, null, qcharts.h(Polyline, _extends({
          onMouseEvent: ['click', cell, ind],
          onMousemove: _this2.onMousemove,
          onMouseleave: _this2.onMouseleave
        }, pillar.attrs, pillar.from, style, {
          animation: {
            from: pillar.from,
            to: pillar.to
          }
        })));
      })), qcharts.h(Group, {
        ref: "guideLine"
      }, guideLines.map(function (item, ind) {
        var cell = _this2.dataset[_this2.renderAttrs.layoutBy][ind][0];

        if (cell.state === 'disabled') {
          return;
        }

        var lineStyle = getStyle(_this2, 'guideline', [{}], [cell.data, cell.row]);

        if (lineStyle === false) {
          return;
        }

        return qcharts.h(Polyline, _extends({}, item.attrs, item.from, lineStyle, {
          animation: {
            from: item.from,
            to: item.to
          }
        }));
      })), qcharts.h(Group, {
        ref: "guideText"
      }, guideTexts.map(function (item, ind) {
        var cell = _this2.dataset[_this2.renderAttrs.layoutBy][ind][0];

        if (cell.state === 'disabled') {
          return;
        }

        var textStyle = getStyle(_this2, 'guideText', [{}], [cell.data, cell.row]);

        if (textStyle === false) {
          return;
        }

        return qcharts.h(Label, _extends({}, item.attrs, item.from, textStyle, {
          animation: {
            from: item.from,
            to: item.to
          }
        }));
      })), qcharts.h(Group, {
        ref: "label"
      }, labels.map(function (item, ind) {
        var cell = _this2.dataset[_this2.renderAttrs.layoutBy][ind][0];

        if (cell.state === 'disabled') {
          return;
        }

        var textStyle = getStyle(_this2, 'text', [{}], [cell.data, cell.row]);

        if (textStyle === false) {
          return;
        }

        return qcharts.h(Label, _extends({}, item.attrs, item.from, textStyle, {
          animation: {
            from: item.from,
            to: item.to
          }
        }));
      })));
    }
  }]);

  return Funnel;
}(Base);

export default Funnel;