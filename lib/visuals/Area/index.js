import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import Line from '../Line';
import { deepObjectMerge } from '@qcharts/utils';

var Area = /*#__PURE__*/function (_Line) {
  _inherits(Area, _Line);

  var _super = _createSuper(Area);

  function Area(attrs) {
    var _this;

    _classCallCheck(this, Area);

    _this = _super.call(this, attrs);
    _this.type = 'area';
    return _this;
  }

  _createClass(Area, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return deepObjectMerge({}, _get(_getPrototypeOf(Area.prototype), "defaultAttrs", this).call(this), {
        stack: true,
        animation: {
          duration: 700,
          easing: 'bounceOut'
        },
        layer: 'area'
      });
    }
  }]);

  return Area;
}(Line);

export default Area;