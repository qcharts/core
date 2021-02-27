import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import Base from './Base';
import theme from '../theme/default';
import { deepObjectMerge } from '@qcharts/utils';
import filterClone from 'filter-clone';

var BaseVisual = /*#__PURE__*/function (_Base) {
  _inherits(BaseVisual, _Base);

  var _super = _createSuper(BaseVisual);

  function BaseVisual(attrs) {
    var _this;

    _classCallCheck(this, BaseVisual);

    _this = _super.call(this, attrs);
    _this.theme = theme.visuals[_this.constructorName]; //如果当前对象设置了theme，不继承theme

    _this.theme.set = function (obj) {
      if (_this.theme === theme.visuals[_this.constructorName]) {
        _this.theme = filterClone(_this.theme);
      }

      _this.theme = deepObjectMerge({}, _this.theme, obj);
    };

    return _this;
  }

  return BaseVisual;
}(Base);

export { BaseVisual as default };