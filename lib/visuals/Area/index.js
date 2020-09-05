import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import Line from '../Line';
import { deepObjectMerge } from '@qcharts/utils';

var Area = /*#__PURE__*/function (_Line) {
  _inherits(Area, _Line);

  function Area(attrs) {
    var _this;

    _classCallCheck(this, Area);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Area).call(this, attrs));
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