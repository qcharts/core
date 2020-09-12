import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import Base from './Base';
import theme from '../theme/default';
import { deepObjectMerge } from '@qcharts/utils';
import filterClone from 'filter-clone';

var BaseVisual = /*#__PURE__*/function (_Base) {
  _inherits(BaseVisual, _Base);

  function BaseVisual(attrs) {
    var _this;

    _classCallCheck(this, BaseVisual);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseVisual).call(this, attrs));
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