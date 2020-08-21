import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import Base from './base/Base';
import { jsType, emptyObject, throttle } from '@qcharts/utils';
import { getGlobal, isWeiXin } from './base/platform';
import BaseVisual from './base/BaseVisual';
import BasePlugin from './base/BasePlugin';
import { Scene } from 'spritejs';
import { Wave, Gauge } from './index';

var Chart = /*#__PURE__*/function (_Base) {
  _inherits(Chart, _Base);

  function Chart(attr) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this));
    var container = attr.container;

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
          size = attr.size,
          contextType = attr.contextType;
      var displayRatio = 1;

      if (pixelUnit === 'rpx') {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
            windowWidth = _wx$getSystemInfoSync.windowWidth;

        displayRatio = windowWidth / 750;
      }

      _this.scene = new Scene({
        width: size[0] / displayRatio,
        height: size[1] / displayRatio,
        extra: _assertThisInitialized(_this),
        contextType: contextType,
        displayRatio: displayRatio
      });
    } else {
      _this.scene = new Scene({
        container: container,
        displayRatio: getGlobal().devicePixelRatio
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