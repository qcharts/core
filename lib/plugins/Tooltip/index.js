import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import Base from '../../base/BasePlugin';
import { throttle } from '@qcharts/utils';
import { getStyle } from '../../utils/getStyle';

var Tooltip = /*#__PURE__*/function (_Base) {
  _inherits(Tooltip, _Base);

  var _super = _createSuper(Tooltip);

  function Tooltip(attrs) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, attrs);

    _defineProperty(_assertThisInitialized(_this), "tipMousemove", throttle(function (e) {
      var maxLeft = window.innerWidth - _this.$el.getBoundingClientRect().width - 5;
      var maxTop = window.innerHeight - _this.$el.getBoundingClientRect().height - 5;
      var tarTop = e.y > maxTop ? maxTop : e.y;
      var tarLeft = e.x > maxLeft ? maxLeft : e.x;
      _this.$el.style.left = tarLeft + 'px';
      _this.$el.style.top = tarTop + 'px';
    }, 100, 1));

    _this.$el = null;
    return _this;
  }

  _createClass(Tooltip, [{
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
      var attrs = _get(_getPrototypeOf(Tooltip.prototype), "renderAttrs", this);

      return attrs;
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'tooltip'
      };
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {}
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {}
  }, {
    key: "rendered",
    value: function rendered() {
      var _this2 = this;

      var _this$renderAttrs = this.renderAttrs,
          colors = _this$renderAttrs.colors,
          sort = _this$renderAttrs.sort,
          formatter = _this$renderAttrs.formatter,
          title = _this$renderAttrs.title;
      var styles = this.renderStyles;
      this.chart.dataset.on('change', function (data) {
        var option = data.option;
        _this2.$el.innerHTML = '';

        if (option.value === 'hover') {
          var arr = [].concat(_this2.chart.dataset).filter(function (item) {
            return item.state === 'hover';
          });

          if (sort) {
            arr.sort(sort);
          }

          if (arr.length) {
            var $div = document.createElement('div');
            $div.style.cssText = 'white-space:nowrap;padding:6px 10px;background-color:rgba(0,0,0,0.5);color:#fff;';
            arr.forEach(function (item, ind) {
              var text = "".concat(item.text, "\uFF1A").concat(item.value);

              if (formatter) {
                text = formatter(item.data) || text;
              }

              var style = getStyle(_this2, 'point', [{
                'background-color': colors[item.row]
              }, styles.point], [arr.map(function (item) {
                return item.data;
              }), ind]);
              var styleText = getStyle(_this2, 'text', [styles.text], [arr.map(function (item) {
                return item.data;
              }), ind]);
              var $html = document.createElement('div');
              $html.className = 'tooltip-item';
              $html.innerHTML = "<span class=\"icon\" style=\"margin-right:6px;display:inline-block;width:10px;height:10px;background-color:".concat(colors[item.row], "\"></span><span class=\"text\">").concat(text, "</span>");
              $div.append($html);
              var $icon = $html.querySelector('.icon');
              var $text = $html.querySelector('.text');
              Object.assign($icon.style, style);
              Object.assign($text.style, styleText);
            });

            if (title) {
              var str = title;

              if (typeof title === 'function') {
                var formatterData = arr.map(function (cell) {
                  return cell.data;
                });
                str = title(formatterData);
              }

              var $title = document.createElement('div');
              $title.className = 'tooltip-title';
              $title.innerHTML = str || '';
              var styleTitle = getStyle(_this2, 'title', [styles.title], [arr.data]);
              Object.assign($title.style, styleTitle);
              $div.prepend($title);
            }

            _this2.$el.appendChild($div);
          }
        } else if (option.name === 'reset') {
          _this2.$el.innerHTML = '';
        }
      });
      this.chart.$el.addEventListener('mousemove', this.tipMousemove);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.$el) {
        this.$el = document.createElement('div');
        this.$el.className = 'qcharts-tooltip';
        this.$el.style.cssText = 'transition:top 300ms ease-out,left 300ms ease-out;position:absolute;pointEvents:none;pointer-events:none;font-size:14px;';
        document.body.appendChild(this.$el);
      }
    }
  }]);

  return Tooltip;
}(Base);

export default Tooltip;