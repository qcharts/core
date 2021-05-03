import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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
import { Group, Label, Polyline } from 'spritejs';
import { getStyle } from '../../utils/getStyle';
import { deepObjectMerge, throttle } from '@qcharts/utils';
import layout from './layout';
import filterClone from 'filter-clone';

var Bar = /*#__PURE__*/function (_Base) {
  _inherits(Bar, _Base);

  var _super = _createSuper(Bar);

  function Bar(attrs) {
    var _this;

    _classCallCheck(this, Bar);

    _this = _super.call(this, attrs);

    _defineProperty(_assertThisInitialized(_this), "myClick", function (e, el) {
      //console.log('click')
      var curInd = this.getIndexByCoord(e, el);

      if (curInd === Number.NEGATIVE_INFINITY) {
        return;
      }

      getStyle(this, 'click', curInd);
    });

    _this.type = 'bar';
    _this.pillars = null;
    _this.texts = null;
    _this.groups = null;
    _this.fromTos = null;
    _this.hoverIndex = -1;
    _this.bgpillarState = null;
    return _this;
  }

  _createClass(Bar, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = _get(_getPrototypeOf(Bar.prototype), "renderAttrs", this);

      return attrs;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回lines,继承base---------before
      var transpose = this.renderAttrs.transpose;

      var _this$getRenderData = this.getRenderData(),
          arrLayout = _this$getRenderData.arrLayout;

      this.bgpillarState = Array.from({
        length: arrLayout.length
      }, function () {
        return 'defalut';
      });
      var textData = arrLayout.textData.map(function (item) {
        return {
          attrs: item,
          from: {
            pos: item.pos
          },
          to: {
            pos: item.pos
          }
        };
      });
      var barData = arrLayout.barData.map(function (item, ind) {
        var fromPoints = null;
        var value = parseFloat(textData[ind].attrs.text);
        fromPoints = filterClone(item.points);

        if (transpose) {
          if (value < 0) {
            fromPoints[0][0] = fromPoints[1][0];
            fromPoints[3][0] = fromPoints[2][0];
          } else {
            fromPoints[1][0] = fromPoints[0][0];
            fromPoints[2][0] = fromPoints[3][0];
          }
        } else {
          if (value < 0) {
            fromPoints[3][1] = fromPoints[0][1];
            fromPoints[2][1] = fromPoints[1][1];
          } else {
            fromPoints[0][1] = fromPoints[3][1];
            fromPoints[1][1] = fromPoints[2][1];
          }
        }

        return {
          attrs: item,
          from: {
            points: fromPoints
          },
          to: {
            points: item.points
          }
        };
      });
      this.pillars = barData;
      this.groups = arrLayout.groupData;
      this.texts = textData;
      return {
        barData: barData,
        textData: textData,
        groupData: arrLayout.groupData
      };
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var pillars = this.pillars;
      var texts = this.texts;

      var _this$getRenderData2 = this.getRenderData(),
          arrLayout = _this$getRenderData2.arrLayout;

      var barData = arrLayout.barData.map(function (nextPillar, i) {
        var prev = pillars[i] ? pillars[i] : arrLayout.barData[i - 1];

        if (!prev) {
          prev = {
            size: [0, 0],
            pos: nextPillar.pos,
            labelAttrs: null
          };
        }

        return {
          attrs: nextPillar,
          from: {
            points: prev.attrs.points
          },
          to: {
            points: nextPillar.points
          }
        };
      });
      var textData = arrLayout.textData.map(function (nextText, i) {
        var prev = texts[i] ? texts[i] : arrLayout.textData[i - 1];

        if (!prev) {
          prev = {
            pos: nextPillar.pos
          };
        }

        return {
          attrs: nextText,
          from: {
            pos: prev.attrs.pos
          },
          to: {
            pos: nextText.pos
          }
        };
      });
      this.pillars = barData;
      this.groups = arrLayout.groupData;
      this.texts = textData;
      return {
        barData: barData,
        textData: textData,
        groupData: arrLayout.groupData
      };
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];
      var dataLength = renderData.length > 1 ? renderData.length : renderData[0].length;
      var arrLayout = layout.call(this, renderData, renderAttrs);
      var colors = this.theme.colors;
      var styles = this.renderStyles;
      arrLayout.barData = arrLayout.barData.map(function (bar, i) {
        // let style = this.style("pillar")(bar.attrs, this.dataset.rows[i], i);
        // let barStyle = deepObjectMerge(
        //   { bgcolor: bar.bgcolor || colors[i % dataLength] },
        //   styles.bar,
        //   style
        // );
        // bar = deepObjectMerge(bar, barStyle);
        return bar;
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
      return {
        layer: 'bar',
        states: {
          bgpillar: {
            animation: {
              duration: 20
            },
            default: {
              opacity: 0.0001
            },
            hover: {
              opacity: 0.1
            }
          }
        }
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {
        text: {
          fontSize: 12,
          fillColor: '#666'
        }
      };
    }
  }, {
    key: "getIndexByCoord",
    value: function getIndexByCoord(event, el) {
      if (this.groups.length && !isNaN(event.x) && !isNaN(event.y)) {
        var bgpillarState = this.bgpillarState;
        var curInd = 0;

        var _el$getOffsetPosition = el.getOffsetPosition(event.x, event.y),
            _el$getOffsetPosition2 = _slicedToArray(_el$getOffsetPosition, 2),
            x = _el$getOffsetPosition2[0],
            y = _el$getOffsetPosition2[1];

        if (!this.renderAttrs.transpose) {
          //获取 x轴坐标的刻度
          var width = this.groups[0].size[0]; //转换canvas坐标到当前group的相对坐标

          curInd = Math.floor(x / width);
        } else {
          var _width = this.groups[0].size[1]; //转换canvas坐标到当前group的相对坐标

          curInd = this.groups.length - Math.floor(y / _width) - 1;
        }

        if (curInd < 1) {
          curInd = 0;
        } else if (curInd > this.groups.length - 1) {
          curInd = this.groups.length - 1;
        }

        return curInd;
      } else {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }, {
    key: "onMousemove",
    value: function onMousemove(event, el) {
      var curInd = this.getIndexByCoord(event, el);

      if (curInd === Number.NEGATIVE_INFINITY) {
        return;
      }

      if (this.hoverIndex !== curInd) {
        this.bgpillarState[curInd] = 'hover';

        if (this.hoverIndex > -1) {
          this.bgpillarState[this.hoverIndex] = 'defualt';
        }

        this.dataset.resetState();
        this.dataset.cols[curInd].state = 'hover';
        this.hoverIndex = curInd;
      }
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave(e, el) {
      this.dataset.resetState();
      this.bgpillarState[this.hoverIndex] = 'defualt';
      this.hoverIndex = -1;
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this2 = this;

      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          states = _this$renderAttrs.states,
          layoutBy = _this$renderAttrs.layoutBy;
      var styles = this.renderStyles;
      var renderData = this.dataset[layoutBy];
      var dataLength = renderData.length > 1 ? renderData.length : renderData[0].length;
      var colors = this.theme.colors;
      return qcharts.h(Group, {
        zIndex: 1,
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height],
        onMouseleave: this.onMouseleave,
        onMouseenter: this.onMousemove,
        onMousemove: this.onMousemove,
        onClick: this.myClick // onMousemove={throttle(this.onMousemove)}

      }, qcharts.h(Group, {
        ref: "bgpillar"
      }, data.groupData.map(function (pillar, ind) {
        var style = getStyle(_this2, 'backgroundpillar', [_objectSpread({}, pillar), styles.groupBar], [_this2.dataset.rows[ind % renderData.length], Math.floor(ind / renderData.length)]);
        style.points = style.points.flat();
        return style === false ? null : qcharts.h(Polyline, _extends({
          state: _this2.bgpillarState[ind],
          states: states.bgpillar
        }, pillar, style, {
          animation: {
            from: {
              points: style.points
            },
            to: {
              points: style.points
            },
            duration: 0
          }
        }));
      })), qcharts.h(Group, {
        ref: "pillars",
        class: "pillars-group"
      }, data.barData.map(function (pillar, ind) {
        var cell = _this2.dataset[layoutBy][ind % renderData.length][Math.floor(ind / renderData.length)];

        var style = getStyle(_this2, 'pillar', [_objectSpread({
          fillColor: colors[cell.row],
          bgcolor: colors[cell.row]
        }, pillar.attrs), styles.bar], [cell.data, Math.floor(ind / renderData.length), ind % renderData.length]);
        var hoverStyle = getStyle(_this2, 'pillar:hover', [], [cell.data, Math.floor(ind / renderData.length), ind % renderData.length]);

        if (cell.state === 'hover') {
          deepObjectMerge(style, hoverStyle);
        }

        return qcharts.h(Polyline, _extends({
          onMouseEvent: ['click', cell, ind]
        }, pillar.attrs, pillar.from, style, {
          animation: {
            from: pillar.from,
            to: pillar.to
          }
        }));
      }), data.textData.map(function (text, ind) {
        var barAttrs = filterClone(data.barData[ind].attrs, ['anchor', 'points', 'size', 'pos']);
        var textStyle = getStyle(_this2, 'text', [{
          barAttrs: barAttrs
        }, styles.text], [_this2.dataset.rows[ind % renderData.length][Math.floor(ind / renderData.length)].data, Math.floor(ind / renderData.length), ind % renderData.length]);
        textStyle = filterClone(textStyle, [], ['barAttrs']);

        if (textStyle.pos) {
          _this2.texts[ind].attrs.pos = textStyle.pos;
          text.to.pos = textStyle.pos;
        }

        return textStyle === false ? null : qcharts.h(Label, _extends({}, text.attrs, textStyle, {
          animation: {
            from: text.from,
            to: text.to
          }
        }));
      })));
    }
  }]);

  return Bar;
}(Base);

export default Bar;