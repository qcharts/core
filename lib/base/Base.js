import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Node } from 'spritejs';
import { lifeCycle, mixin } from './mixin';
import { emptyObject, deepObjectMerge, jsType, getDistancePx, throttle } from '@qcharts/utils';
import { patch, diff } from '@qcharts/vnode';
import Dataset from '@qcharts/dataset';
import { isWeiXin } from './platform';

var Base = /*#__PURE__*/function (_Node) {
  _inherits(Base, _Node);

  var _super = _createSuper(Base);

  function Base(attrs) {
    var _this;

    _classCallCheck(this, Base);

    _this = _super.call(this);

    _this.dispatchEvent(lifeCycle.beforeCreate);

    mixin(_assertThisInitialized(_this));
    _this['__store'] = emptyObject();
    var store = _this['__store'];
    store.__attrs = emptyObject();
    store.__vnode__ = null;
    store.__isCreated__ = false;
    store.__refs = emptyObject();
    store.dataset = null; // 微信中不支持多图层

    var layerSetting = isWeiXin() ? {
      layer: 'default'
    } : {};

    _this.attr(_objectSpread(_objectSpread({}, attrs), layerSetting));

    _this.__update = throttle(function (args) {
      if (store.__isCreated__) {
        _this.update(args);
      }
    });
    return _this;
  }

  _createClass(Base, [{
    key: "constructorName",
    get: function get() {
      var curName = this.defaultAttrs().layer.replace(/^\w/, function (str) {
        return str.toLocaleUpperCase();
      });
      return curName; //return this.constructor.toString().match(/function (.+)\(/)[1]
    }
  }, {
    key: "store",
    get: function get() {
      return this['__store'];
    }
  }, {
    key: "layer",
    get: function get() {
      var _deepObjectMerge = deepObjectMerge({}, this.baseAttrs(), this.defaultAttrs(), this.theme.attrs, this.attr()),
          layerName = _deepObjectMerge.layer,
          _deepObjectMerge$zInd = _deepObjectMerge.zIndex,
          zIndex = _deepObjectMerge$zInd === void 0 ? 0 : _deepObjectMerge$zInd;

      if (isWeiXin()) {
        return this.scene.layer(layerName);
      }

      return this.scene.layer(layerName).attr({
        zIndex: zIndex
      });
    }
  }, {
    key: "$refs",
    get: function get() {
      return this['__store'].__refs;
    }
  }, {
    key: "renderStyles",
    get: function get() {
      var styles = deepObjectMerge({}, this.defaultStyles(), this.theme.styles);
      return styles;
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //attrs转换
      var attrs = deepObjectMerge({}, this.baseAttrs(), this.defaultAttrs(), this.theme.attrs, this.attr());
      var animation = attrs.animation,
          clientRect = attrs.clientRect; //动画数据转换

      if (jsType(animation) === 'boolean') {
        animation = {
          use: animation ? true : false
        };
      } //处理layer支持多layer


      var rect = isWeiXin() ? this.layer.canvas : this.layer.canvas.getBoundingClientRect();
      var width = rect.width,
          height = rect.height; //计算布局数据

      for (var key in clientRect) {
        if (['left', 'right', 'width'].indexOf(key) !== -1) {
          clientRect[key] = getDistancePx(clientRect[key], width);
        } else if (['top', 'bottom', 'height'].indexOf(key) !== -1) {
          clientRect[key] = getDistancePx(clientRect[key], height);
        }
      }

      if (clientRect.width === undefined) {
        clientRect.width = width - clientRect.left - clientRect.right;
      } else {
        clientRect.right = width - clientRect.left - clientRect.width;
      }

      if (clientRect.height === undefined) {
        clientRect.height = height - clientRect.top - clientRect.bottom;
      } else {
        clientRect.bottom = height - clientRect.top - clientRect.height;
      }

      attrs.colors = this.theme.colors;
      return attrs;
    }
  }, {
    key: "dataset",
    get: function get() {
      return this['__store'].dataset || this.chart && this.chart.dataset;
    }
  }, {
    key: "source",
    value: function source(data, options) {
      var _this2 = this;

      var store = this['__store'];

      if (!(data instanceof Dataset)) {
        var opts = options;

        if (store.dataset) {
          opts = deepObjectMerge({}, store.dataset.option, options);
        }

        store.dataset = new Dataset(data, opts);
      } else {
        store.dataset = data;
      }

      if (store.dataset && store.__isCreated__) {
        store.dataset.on('change', function (_) {
          _this2.__update({
            type: 'state'
          });
        }); //如果以前存在，则更新

        this.__update({
          type: 'source'
        });
      }

      return this;
    }
  }, {
    key: "created",
    value: function created() {
      var _this3 = this;

      //初始化创建的时候执行
      var store = this['__store'];
      this.dispatchEvent(lifeCycle.created);
      store.__vnode__ = this.render(this.beforeRender({
        type: 'create'
      }));
      var patches = diff(null, store.__vnode__);
      this.dispatchEvent(lifeCycle.beforeRender);
      patch.bind(this)(this.$el || this.layer, patches, 1);
      this.dispatchEvent(lifeCycle.rendered);
      this.rendered();
      store.__isCreated__ = true;
      this.dataset.on('change', function (_) {
        _this3.__update({
          type: 'state'
        });
      });
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      //图表初始化准备数据
      return this.renderAttrs;
    }
  }, {
    key: "render",
    value: function render() {
      console.warn('this function must be rewrited');
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      return this.renderAttrs;
    }
  }, {
    key: "update",
    value: function update(params) {
      //图表更新准备数据
      var store = this['__store'];
      this.dispatchEvent(lifeCycle.beforeUpdate);
      var vnode = this.render(this.beforeUpdate(params));
      var patches = diff(store.__vnode__, vnode);
      patch.bind(this)(this.$el || this.layer, patches);
      store.__vnode__ = vnode;
      this.dispatchEvent(lifeCycle.updated);
      this.updated();
    }
  }, {
    key: "updated",
    value: function updated() {}
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyObject();

      _get(_getPrototypeOf(Base.prototype), "dispatchEvent", this).call(this, event, obj);
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return emptyObject();
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      return emptyObject();
    }
  }, {
    key: "baseAttrs",
    value: function baseAttrs() {
      var attrs = {
        //动画类型
        animation: {
          use: true,
          duration: 700,
          useTween: true,
          easing: 'bounceOut'
        },
        //位置布局信息
        clientRect: {
          left: '10%',
          top: '10%',
          right: '10%',
          bottom: '10%',
          width: undefined,
          height: undefined
        },
        //透明度
        opacity: 1,
        layer: 'default',
        layoutBy: 'rows' //按照哪个数据布局 ['rows','cols']

      };
      return attrs;
    }
  }, {
    key: "attr",
    value: function attr(name, val) {
      //属性设置
      var store = this['__store'];

      if (jsType(name) === 'object') {
        for (var key in name) {
          this.attr(key, name[key]);
        }
      } else if (name === undefined) {
        var res = emptyObject();

        for (var _key in store.__attrs) {
          //过滤style属性
          if (_key.indexOf('style@') !== 0) {
            res[_key] = store.__attrs[_key];
          }
        }

        return res;
      } else if (val === undefined) {
        //获取属性
        return store.__attrs[name];
      } else if (name !== undefined) {
        store.__attrs[name] = val;
        store.__isCreated__ && this.__update({
          type: 'attr'
        });
      }
    }
  }, {
    key: "addRef",
    value: function addRef(ref, el) {
      this['__store'].__refs[ref] = el; //在vnode中调用，存储到this.__refs中
    }
  }, {
    key: "style",
    value: function style(type, _style) {
      var _this4 = this;

      //样式设置，样式用attr逻辑存储，添加@符号
      if (jsType(type) === 'object') {
        //多样式赋值
        for (var key in type) {
          this.style(key, type[key]);
        }
      } else if (type !== undefined && _style === undefined) {
        //获取样式，统一返回成函数
        var style = this.attr('style@' + type);
        return function () {
          if (jsType(style) === 'function') {
            for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return style.apply(_this4, args);
          } else {
            return style;
          }
        };
      } else if (type !== undefined && _style !== undefined) {
        //赋值
        this.attr('style@' + type, _style);
        return this;
      } else if (type === undefined && _style === undefined) {
        //获取全部样式
        var res = emptyObject();
        var attrs = this['__store'].__attrs;

        for (var _key3 in attrs) {
          if (_key3.indexOf('style@') === 0) {
            var styleKey = _key3.substr(6);

            res[styleKey] = this.style(styleKey);
          }
        }

        return res;
      }
    }
  }]);

  return Base;
}(Node);

export default Base;