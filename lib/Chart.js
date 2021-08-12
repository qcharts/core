import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import Base from './base/Base';
import { jsType, emptyObject, throttle } from '@qcharts/utils';
import { h } from '@qcharts/vnode';
import { getGlobal, isWeiXin } from './base/platform';
import BaseVisual from './base/BaseVisual';
import BasePlugin from './base/BasePlugin';
import { Scene } from 'spritejs';
import { Wave, Gauge } from './index';

var Chart = /*#__PURE__*/function (_Base) {
  _inherits(Chart, _Base);

  var _super = _createSuper(Chart);

  function Chart(attr) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _super.call(this); // 预先将jsx 解析函数挂载到全局

    var global = getGlobal();

    if (!global.qcharts || global.qcharts && !global.qcharts.h) {
      global.qcharts = {
        h: h
      };
    }

    var container = attr.container,
        _attr$contextType = attr.contextType,
        contextType = _attr$contextType === void 0 ? '2d' : _attr$contextType,
        displayRatio = attr.displayRatio;

    if (jsType(container) === 'string') {
      container = document.querySelector(container);
    }

    _this.$el = container;
    _this.visuals = [];
    _this.plugins = [];
    _this.children = [];

    if (isWeiXin()) {
      var _attr$pixelUnit = attr.pixelUnit,
          pixelUnit = _attr$pixelUnit === void 0 ? 'rpx' : _attr$pixelUnit,
          size = attr.size;
      var _displayRatio = 1;

      if (pixelUnit === 'rpx') {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
            windowWidth = _wx$getSystemInfoSync.windowWidth;

        _displayRatio = windowWidth / 750;
      }

      _this.scene = new Scene({
        width: size[0] / _displayRatio,
        height: size[1] / _displayRatio,
        extra: _assertThisInitialized(_this),
        contextType: contextType,
        displayRatio: _displayRatio
      });
    } else {
      _this.scene = new Scene({
        container: container,
        contextType: contextType,
        displayRatio: displayRatio || getGlobal().devicePixelRatio
      });
    }

    _this.scene.addEventListener('resize', function (_) {
      //舞台变化的时候
      _this.checkUpdate({
        type: 'resize'
      });
    });

    _this.checkUpdate = throttle(function (args) {
      _this.children.forEach(function (node) {
        node.update(args);
      });
    }, 300);
    _this.checkRender = throttle(function (_) {
      _this.children.forEach(function (child) {
        child.created();
        console.log('abc');

        _this.dataset.addDep(child);
      });

      _this.__store.__isCreated__ = true;

      _this.dispatchEvent('updated', emptyObject());
    });
    return _this;
  }

  _createClass(Chart, [{
    key: "update",
    value: function update(args) {
      //图表发生更新，触发图表内组件更新
      this.checkUpdate(args);
    }
  }, {
    key: "append",
    value: function append(node) {
      var _this2 = this;

      var notNeedDataSetList = [Wave, Gauge];

      if (notNeedDataSetList.some(function (Target) {
        return node instanceof Target;
      })) {
        //补齐dataset，wave中不用dataset
        this.source([], {});
      } else if (!this.dataset) {
        console.error('Chart should set data before append some graphs');
        return;
      }

      if (jsType(node) === 'array') {
        node.forEach(function (item) {
          _this2.append(item);
        });
        return;
      } else if (node instanceof BaseVisual) {
        this.visuals.push(node);
      } else if (node instanceof BasePlugin) {
        this.plugins.push(node);
      }

      this.children.push(node);
      node.chart = this;
      node.scene = this.scene;
      this.checkRender();
    }
  }, {
    key: "getDataURL",
    value: function getDataURL() {
      return this.scene.snapshot().toDataURL();
    }
  }]);

  return Chart;
}(Base);

export default Chart;