import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import Base from '../../base/BaseVisual';
import { Group, Polyline, Node } from 'spritejs';
import { getStyle } from '../../utils/getStyle';
import layout from './layout';
import Point from '../../utils/Point';
import { deepObjectMerge } from '@qcharts/utils';

var Line = /*#__PURE__*/function (_Base) {
  _inherits(Line, _Base);

  var _super = _createSuper(Line);

  function Line(attrs) {
    var _this;

    _classCallCheck(this, Line);

    _this = _super.call(this, attrs);
    _this.renderLines = [];
    _this.type = 'line';
    _this.hoverIndex = -1;
    return _this;
  }

  _createClass(Line, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = _get(_getPrototypeOf(Line.prototype), "renderAttrs", this);

      return attrs;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回lines,继承base
      var _this$getRenderData = this.getRenderData(),
          arrLayout = _this$getRenderData.arrLayout,
          maxLen = _this$getRenderData.maxLen;

      var lines = arrLayout.map(function (item) {
        return {
          smoothRange: item.smoothRange,
          areaFrom: {
            points: item.areaPoints
          },
          areaTo: {
            points: item.areaPoints
          },
          from: {
            points: item.points
          },
          to: {
            points: item.points
          }
        };
      });
      return lines;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      //更新前的处理函数，返回lines,继承base
      var _this$getRenderData2 = this.getRenderData(),
          arrLayout = _this$getRenderData2.arrLayout,
          maxLen = _this$getRenderData2.maxLen;

      var renderLines = this.renderLines;
      var lines = arrLayout.map(function (item, i) {
        var from = {
          points: item.points
        };

        if (renderLines[i]) {
          from = {
            points: renderLines[i].to.points
          };
        } // if (!renderLines[i] || renderLines[i].state === 'disabled') {
        //   from.lineDash = [4, maxLen]
        // }


        return {
          state: item.state,
          smoothRange: item.smoothRange,
          areaFrom: renderLines[i] && renderLines[i].areaTo || item.areaPoints,
          areaTo: {
            points: item.areaPoints
          },
          from: from,
          to: {
            points: item.points // lineDash: [maxLen, maxLen]

          }
        };
      });
      return lines;
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      //根据line的特性返回需要数据
      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];
      var arrLayout = layout.call(this, renderData, renderAttrs);
      var _renderAttrs$clientRe = renderAttrs.clientRect,
          height = _renderAttrs$clientRe.height,
          width = _renderAttrs$clientRe.width; //对角线长度的2保证会大于曲线的长度

      var maxLen = Math.sqrt(Math.pow(height, 2), Math.pow(width, 2)) * 5;
      return {
        width: width,
        height: height,
        arrLayout: arrLayout,
        maxLen: maxLen
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
        guidePoints: [],
        layer: 'line',
        layoutX: 'category',
        layoutY: 'value'
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {//smooth: false,
      };
    }
  }, {
    key: "guidelineleave",
    value: function guidelineleave(event, el) {
      this.attr('guidePoints', []);
      this.hoverIndex = -1;
      this.dataset.resetState();
    }
  }, {
    key: "guidelinemove",
    value: function guidelinemove(event, el) {
      if (this.renderLines.length) {
        //获取 x轴坐标的刻度
        var arrX = this.renderLines[0].to.points.map(function (pos) {
          return pos[0];
        }); //转换cancas坐标到当前group的相对坐标

        var _el$getOffsetPosition = el.getOffsetPosition(event.x, event.y),
            _el$getOffsetPosition2 = _slicedToArray(_el$getOffsetPosition, 1),
            x = _el$getOffsetPosition2[0];

        var curInd = 0; //查找当前位置

        for (var i = 0; i < arrX.length; i++) {
          if (x > arrX[i] && x < arrX[i + 1]) {
            curInd = Math.abs(x - arrX[i]) < Math.abs(x - arrX[i + 1]) ? i : i + 1;
            break;
          }
        } //重置所有的dateset的状态


        if (this.hoverIndex !== curInd) {
          this.dataset.resetState(); //设置当前列的state为hover

          this.dataset.cols[curInd].state = 'hover';
          var clientRect = this.renderAttrs.clientRect;
          var posX = arrX[curInd];
          this.hoverIndex = curInd;
          this.attr({
            guidePoints: [[posX, 0], [posX, clientRect.height]],
            lineState: 'default'
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render(lines) {
      var _this2 = this;

      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          smooth = _this$renderAttrs.smooth,
          guidePoints = _this$renderAttrs.guidePoints; //渲染的样式，合并了theme中的styles与组件上的defaultStyles

      var styles = this.renderStyles; //当前主体颜色

      var colors = this.theme.colors;
      this.renderLines = lines;
      var renderData = this.dataset[this.renderAttrs.layoutBy];
      return qcharts.h(Group, {
        zIndex: 1,
        class: "container",
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height],
        onMouseleave: this.guidelineleave,
        onMouseenter: this.guidelinemove,
        onMousemove: this.guidelinemove
      }, qcharts.h(Group, {
        class: "lines-group"
      }, lines.map(function (line, ind) {
        var style = getStyle(_this2, 'line', [{
          strokeColor: colors[ind],
          smooth: smooth
        }, styles.line], [_this2.dataset.rows[ind].data, ind]); // if (style.lineDash) {
        //   line.to.lineDash = style.lineDash
        //   line.from.lineDash = style.lineDash
        // }

        return line.state === 'disabled' || style === false ? qcharts.h(Node, null) : qcharts.h(Polyline, _extends({
          onMouseEvent: ['click', _this2.dataset.rows[ind], ind],
          onClick: _this2.lineClick,
          animation: {
            from: line.from,
            to: line.to
          }
        }, style));
      })), qcharts.h(Group, {
        class: "areas-group"
      }, this.type !== 'area' ? null : lines.map(function (line, ind) {
        var style = getStyle(_this2, 'area', [{
          fillColor: colors[ind],
          smooth: smooth
        }, styles.area], [_this2.dataset.rows[ind].data, ind]);
        return line.state === 'disabled' || style === false ? qcharts.h(Node, null) : qcharts.h(Polyline, _extends({
          onMouseEvent: ['click', _this2.dataset.rows[ind], ind],
          smoothRange: line.smoothRange
        }, style, {
          animation: {
            from: line.areaFrom,
            to: line.areaTo
          }
        }));
      })), qcharts.h(Group, {
        class: "line-points"
      }, lines.map(function (line, ind) {
        return line.state === 'disabled' ? qcharts.h(Node, null) : qcharts.h(Group, null, line.to.points.map(function (p, j) {
          var animation = {
            from: {
              pos: line.from.points[j]
            },
            to: {
              pos: p
            }
          };
          var style = getStyle(_this2, 'point', [{
            fillColor: colors[ind]
          }, styles.point], [_this2.dataset.rows[ind].data, ind, j]);
          var styleHover = getStyle(_this2, 'point:hover', [style, styles['point:hover']], [_this2.dataset.rows[ind].data, ind, j]);

          if (_this2.dataset.rows[ind][j].state === 'hover') {
            deepObjectMerge(style, styleHover);
          }

          return qcharts.h(Point, _extends({}, style, {
            onMouseEvent: ['click', renderData[ind][j], j],
            animation: animation
          }));
        }));
      })), qcharts.h(Group, {
        class: "guide-line-group"
      }, guidePoints.length ? function (_) {
        var style = getStyle(_this2, 'guideline', styles.guideline);
        return style === false ? qcharts.h(Node, null) : qcharts.h(Polyline, _extends({
          points: guidePoints
        }, style));
      }() : qcharts.h(Node, null)));
    }
  }]);

  return Line;
}(Base);

export default Line;