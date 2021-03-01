import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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

import Base from '../../base/BasePlugin';
import { Group, Path, Label } from 'spritejs';
import { getStyle } from '../../utils/getStyle';
import Point from '../../utils/Point';

var Legend = /*#__PURE__*/function (_Base) {
  _inherits(Legend, _Base);

  var _super = _createSuper(Legend);

  function Legend(attrs) {
    var _this;

    _classCallCheck(this, Legend);

    _this = _super.call(this, attrs);
    _this.arrLayout = null;
    _this.state = {
      page: 1,
      totalPage: 1,
      perPageWidthOrHeight: 0,
      // 每页长度（或宽度）
      paginationSize: [0, 0],
      // 分页控件大小
      groupSize: [0, 0] // legends 容器大小

    };
    _this.twiceRender = false;
    _this.animationSwitch = false;
    _this.posFrom = [0, 0];
    _this.currentPos = [0, 0];
    _this.legendStateArray = [];
    _this.lineCounter = 0; //在scroll属性为false的情况下计算legend的行数(或列数)

    return _this;
  }

  _createClass(Legend, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
      var attrs = _get(_getPrototypeOf(Legend.prototype), "renderAttrs", this);

      return attrs;
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'legend',
        orient: 'horizontal',
        // 布局方式， vertical | horizontal
        align: ['center', 'bottom'],
        // 水平方向布局，left | center | right, 垂直方向布局，top | center | bottom
        iconSize: [12, 12],
        // 图标默认大小
        textSize: [40, 12],
        // 文字默认大小
        scroll: true,
        // 滚动方式，已废弃
        outGap: 10,
        // 两个legend之间的距离
        innerGap: 4,
        lineGap: 15,
        //换行后两行legend之间距离
        formatter: function formatter(d) {
          return d.text || d;
        },
        padding: 2 // legend与canvas整体之间的padding

      };
    }
  }, {
    key: "pos",
    get: function get() {
      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          align = _this$renderAttrs.align,
          padding = _this$renderAttrs.padding;
      var groupSize = this.state.groupSize;
      var width = clientRect.width,
          height = clientRect.height,
          top = clientRect.top,
          left = clientRect.left,
          right = clientRect.right,
          bottom = clientRect.bottom;
      var canvasWidth = width + left + right;
      var canvasHeight = height + top + bottom;
      this.state.paginationSize = this.isVertical ? [30, 60] : [70, 25];

      var isValidLayout = function isValidLayout(value, type) {
        if (type === 'horizontal') {
          // 水平布局
          return ['default', 'left', 'center', 'right'].indexOf(value) > -1;
        } else {
          // 垂直布局
          return ['default', 'top', 'center', 'bottom'].indexOf(value) > -1;
        }
      };

      var hLocation = {
        // 水平定位
        default: 0,
        left: padding,
        center: (canvasWidth - groupSize[0]) / 2,
        right: canvasWidth - groupSize[0] - padding,
        numberOrPercent: function numberOrPercent(num) {
          // 输入 数字或百分比
          if (typeof num === 'number') {
            return num;
          } else {
            var val = 0;

            try {
              val = parseFloat(num) / 100;
            } catch (e) {}

            return (canvasWidth - groupSize[0]) * val;
          }
        }
      };
      var vLocation = {
        // 垂直定位
        default: 0,
        top: padding,
        center: canvasHeight / 2 - groupSize[1] / 2,
        bottom: canvasHeight - groupSize[1] - padding,
        numberOrPercent: function numberOrPercent(num) {
          // 输入 数字或百分比
          if (typeof num === 'number') {
            return num;
          } else {
            var val = 0;

            try {
              val = parseFloat(num) / 100;
            } catch (e) {}

            return (canvasHeight - groupSize[1]) * val;
          }
        }
      };
      var pos = [isValidLayout(align[0], 'horizontal') ? hLocation[align[0]] : hLocation.numberOrPercent(align[0]), isValidLayout(align[1], 'vertical') ? vLocation[align[1]] : vLocation.numberOrPercent(align[1])];
      var pagePos;
      var totalPageX = Math.ceil(this.state.groupSize[0] / canvasWidth);
      var totalPageY = Math.ceil(this.state.groupSize[1] / canvasHeight);
      var paginationSize = this.state.paginationSize;
      var pagePrev, pageText, pageNext;

      if (totalPageX > 1) {
        this.state.totalPage = totalPageX;
        var pagePosY = pos[1] + groupSize[1] + paginationSize[1] > canvasHeight ? pos[1] - paginationSize[1] : pos[1] + groupSize[1];
        pagePos = [canvasWidth - paginationSize[0], pagePosY];
        pagePrev = [0, 0];
        pageText = [15, 0];
        pageNext = [45, 0];
        pos[0] = -(this.state.page - 1) * canvasWidth;
      } else if (totalPageY > 1) {
        this.state.totalPage = totalPageY;
        var pagePosX = pos[0] + groupSize[0] + paginationSize[0] > canvasWidth ? pos[0] - paginationSize[0] : pos[0] + groupSize[0];
        pagePos = [pagePosX, canvasHeight - paginationSize[1]];
        pagePrev = [5, 0];
        pageText = [0, 20];
        pageNext = [5, 40];
        pos[1] = -(this.state.page - 1) * canvasHeight;
      } else {
        this.state.page = 1;
        this.state.totalPage = 1;
      }

      return {
        pos: pos,
        pagePos: {
          pos: pagePos,
          pagePrev: pagePrev,
          pageText: pageText,
          pageNext: pageNext
        }
      };
    }
  }, {
    key: "isVertical",
    get: function get() {
      return this.renderAttrs.orient === 'vertical';
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      if (this.twiceRender) {
        this.reset();
      } else {
        this.arrLayout = this.getRenderData().arrLayout;
      }

      return this.arrLayout;
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var _this2 = this;

      var _this$renderAttrs2 = this.renderAttrs,
          layoutBy = _this$renderAttrs2.layoutBy,
          innerGap = _this$renderAttrs2.innerGap;
      var renderData = this.dataset[layoutBy].map(function (item, index) {
        _this2.legendStateArray.push(item.state);

        return {
          name: item.name,
          state: item.state
        };
      });
      var arrLayout = renderData.map(function (item) {
        return {
          textAttrs: {
            text: item.name,
            paddingLeft: innerGap
          }
        };
      });
      this.arrLayout = arrLayout;
      return {
        arrLayout: arrLayout
      };
    }
  }, {
    key: "itemClick",
    value: function itemClick(e, el) {
      var ind = el.attr('_index');
      var state = this.dataset[this.renderAttrs.layoutBy][ind].state;
      state = state !== 'disabled' ? 'disabled' : 'default';
      this.dataset[this.renderAttrs.layoutBy][ind].state = state;
    }
  }, {
    key: "itemLeave",
    value: function itemLeave(e, el) {
      var ind = el.attr('_index');
      this.legendStateArray[ind] = 'default';
      this.update();
    }
  }, {
    key: "itemMove",
    value: function itemMove(e, el) {
      var ind = el.attr('_index');

      if (this.legendStateArray[ind] === 'default') {
        this.legendStateArray[ind] = 'hover';
        this.update();
      }
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate(params) {
      if (params && params.type === 'source') {
        this.animationSwitch = true;
        this.twiceRender = false;
        return this.beforeRender();
      } else {
        if (params && params.type === 'resize') {
          this.animationSwitch = true;
        }

        return this.arrLayout;
      }
    }
  }, {
    key: "rendered",
    value: function rendered() {// console.log("rendered");
    }
  }, {
    key: "afterrender",
    value: function afterrender(e, el) {
      if (this.twiceRender) {
        this.animationSwitch = false;
        return;
      }

      this.twiceRender = true;
      this.reset();
      this.update();
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;

      var _this$renderAttrs3 = this.renderAttrs,
          outGap = _this$renderAttrs3.outGap,
          innerGap = _this$renderAttrs3.innerGap,
          iconSize = _this$renderAttrs3.iconSize,
          textSize = _this$renderAttrs3.textSize,
          clientRect = _this$renderAttrs3.clientRect,
          lineGap = _this$renderAttrs3.lineGap,
          padding = _this$renderAttrs3.padding;
      var legendsSize = this.isVertical ? [[0, padding]] : [[padding, 0]];
      var maxTextWidth = 0;
      var colors = this.theme.colors;
      var width = clientRect.width,
          height = clientRect.height,
          top = clientRect.top,
          left = clientRect.left,
          right = clientRect.right,
          bottom = clientRect.bottom;
      var canvasWidth = width + left + right;
      var canvasHeight = height + top + bottom;
      this.lineCounter = 0;
      this.arrLayout = this.arrLayout.map(function (item, index) {
        item.iconAttrs = {};
        var iconEl = _this3.$refs['icon' + index].$sprite;
        var iconRect = iconEl.getBoundingClientRect();
        iconSize = [iconEl.width ? iconEl.width : iconSize[0], iconEl.height ? iconEl.height : iconSize[1]];
        var textEl = _this3.$refs['text' + index];
        var textRect = textEl.getBoundingClientRect();
        var heightSize = iconSize[1] > textRect.height ? iconSize[1] : textRect.height; // 垂直布局下，已有的列数的width和

        var lineWidth = legendsSize.reduce(function (i, j) {
          return i + j[0];
        }, 0) - legendsSize[_this3.lineCounter][0]; // 单个legend的左上角坐标


        var iconPos = _this3.isVertical ? [lineWidth, legendsSize[_this3.lineCounter][1]] : [legendsSize[_this3.lineCounter][0], _this3.lineCounter * (heightSize + lineGap)]; // 超过单行长度后换行

        if (_this3.isVertical && iconPos[1] + textRect.height > canvasHeight - 2 * padding) {
          _this3.lineCounter++;
          iconPos = [iconPos[0] + legendsSize[_this3.lineCounter - 1][0], padding];
          maxTextWidth = 0; // 换行后重置最宽legend

          legendsSize.push([0, padding]);
        } else if (!_this3.isVertical && iconPos[0] + iconSize[0] + textRect.width + outGap > canvasWidth - 2 * padding) {
          _this3.lineCounter++;
          iconPos = [padding, _this3.lineCounter * (heightSize + lineGap)];
          legendsSize.push([padding, 0]);
        }

        var iconAttrs = {
          bgcolor: colors[index],
          size: iconSize,
          pos: [0, heightSize / 2],
          anchor: [0, 0.5]
        };

        if (_this3.dataset[_this3.renderAttrs.layoutBy][index].state === 'disabled') {
          iconAttrs.bgcolor = '#ccc';
          iconAttrs.fillColor = '#ccc';
        }

        var textAttrs = _objectSpread(_objectSpread({}, item.textAttrs), {}, {
          pos: _this3.isVertical ? [iconSize[0], heightSize / 2] : [iconSize[0], heightSize / 2],
          text: item.textAttrs.text,
          anchor: [0, 0.5]
        }); // 单个legend的宽高


        var size = [iconSize[0] + textRect.width, heightSize];

        if (size[0] + outGap > maxTextWidth) {
          maxTextWidth = size[0] + outGap;
        } // 每个legend宽高累加


        legendsSize[_this3.lineCounter] = _this3.isVertical ? [maxTextWidth, legendsSize[_this3.lineCounter][1] + size[1] + outGap] : [legendsSize[_this3.lineCounter][0] + size[0] + outGap, size[1] + lineGap];
        return {
          iconAttrs: iconAttrs,
          textAttrs: textAttrs,
          groupAttrs: {
            size: size,
            pos: iconPos
          }
        };
      }); // console.log(this.arrLayout)

      this.state.groupSize = this.isVertical ? [legendsSize.reduce(function (i, j) {
        return i + j[0];
      }, 0), this.lineCounter === 0 ? legendsSize[0][1] : canvasHeight] : [this.lineCounter === 0 ? legendsSize[0][0] : Math.max.apply(Math, _toConsumableArray(legendsSize.map(function (item) {
        return item[0];
      }))), (this.lineCounter + 1) * legendsSize[0][1]];
    } // changePage(e, el) {
    //   if (el.name === "prev" && this.state.page > 1) {
    //     this.state.page--
    //     this.animationSwitch = true
    //     this.update()
    //   } else if (el.name === "next" && this.state.page < this.state.totalPage) {
    //     this.state.page++
    //     this.animationSwitch = true
    //     this.update()
    //   }
    // }

  }, {
    key: "render",
    value: function render(arr) {
      var _this4 = this;

      this.posFrom = this.currentPos;
      var _this$pos = this.pos,
          pos = _this$pos.pos,
          pagePos = _this$pos.pagePos;
      this.posFrom = this.twiceRender && this.animationSwitch ? this.posFrom : pos;
      var _this$state = this.state,
          page = _this$state.page,
          totalPage = _this$state.totalPage;
      this.currentPos = pos;
      var styles = this.renderStyles;
      var isVertical = this.isVertical;

      if (this.twiceRender) {
        pos[0] = pos[0] - 1;
      }

      var formatter = this.renderAttrs.formatter;

      if (arr) {
        return qcharts.h(Group, {
          size: [1, 1],
          onAfterrender: this.afterrender
        }, qcharts.h(Group, {
          animation: {
            from: {
              pos: this.posFrom
            },
            to: {
              pos: pos
            },
            duration: this.twiceRender && this.animationSwitch ? this.renderAttrs.animation.duration : 0
          } // pos={pos}

        }, arr.map(function (attrs, ind) {
          var cell = _this4.dataset[_this4.renderAttrs.layoutBy][ind];
          var hover = _this4.legendStateArray[ind] === 'hover';
          var disabled = cell.state === 'disabled';
          var style = getStyle(_this4, 'point', [{}, styles.point], [cell, ind]);
          var hoverStyle = hover ? getStyle(_this4, 'point:hover', [{}], [cell, ind]) : {};

          if (disabled && attrs.iconAttrs && attrs.iconAttrs.bgcolor) {
            hoverStyle.bgcolor = '#ccc';
            hoverStyle.fillColor = '#ccc';
          }

          var textStyle = getStyle(_this4, 'text', [{}, styles.text], [cell, ind]);
          var textHoverStyle = hover ? getStyle(_this4, 'text:hover', [{}], [cell, ind]) : {};
          attrs.textAttrs.text = formatter(cell.name || '', cell.data, ind);
          return qcharts.h(Group, _extends({
            onClick: _this4.itemClick,
            onMouseleave: _this4.itemLeave,
            onMouseenter: _this4.itemMove,
            onMousemove: _this4.itemMove,
            _index: ind
          }, attrs.groupAttrs), qcharts.h(Point, _extends({
            ref: 'icon' + ind
          }, attrs.iconAttrs, style, hoverStyle)), qcharts.h(Label, _extends({
            ref: 'text' + ind
          }, attrs.textAttrs, textStyle, textHoverStyle)));
        })));
      }
    }
  }]);

  return Legend;
}(Base);

export default Legend; // reset() {
//   let legendsSize = [0, 0]
//   let { outGap, innerGap, iconSize, textSize } = this.renderAttrs
//   let maxTextWidth = 0
//   let colors = this.theme.colors
//   this.arrLayout = this.arrLayout.map((item, index) => {
//     item.iconAttrs = {}
//     let iconEl = this.$refs["icon" + index]
//     let iconRect = iconEl.getBoundingClientRect()
//     let textEl = this.$refs["text" + index]
//     let textRect = textEl.getBoundingClientRect()
//     let iconAttrs = {
//       bgcolor: colors[index],
//       size: iconSize,
//       pos: this.isVertical
//         ? [0, legendsSize[1] + (textRect.height - iconSize[1]) / 2]
//         : [legendsSize[0], (textRect.height - iconSize[1]) / 2],
//     }
//     if (this.dataset[this.renderAttrs.layoutBy][index].state === "disabled") {
//       iconAttrs.bgcolor = "#ccc"
//       iconAttrs.fillColor = "#ccc"
//     }
//     let textAttrs = {
//       ...item.textAttrs,
//       pos: this.isVertical
//         ? [iconSize[0], legendsSize[1]]
//         : [iconSize[0] + legendsSize[0], 0],
//       text: item.textAttrs.text,
//     }
//     let size = [iconSize[0] + textRect.width, iconSize[1]]
//     if (size[0] + outGap > maxTextWidth) {
//       maxTextWidth = size[0] + outGap
//     }
//     legendsSize = this.isVertical
//       ? [maxTextWidth, legendsSize[1] + textRect.height + outGap]
//       : [legendsSize[0] + size[0] + outGap, textRect.height]
//     return { iconAttrs, textAttrs }
//   })
//   this.state.groupSize = legendsSize
// }