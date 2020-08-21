import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import Base from './Base';
import theme from '../theme/default';
import { deepObjectMerge } from '@qcharts/utils';
import filterClone from 'filter-clone';

var BasePlugin = /*#__PURE__*/function (_Base) {
  _inherits(BasePlugin, _Base);

  function BasePlugin(attrs) {
    var _this;

    _classCallCheck(this, BasePlugin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BasePlugin).call(this, attrs));
    _this.theme = theme.plugins[_this.constructorName]; //如果当前对象设置了theme，不继承theme

    _this.theme.set = function (obj) {
      if (_this.theme === theme.visuals[_this.constructorName]) {
        _this.theme = filterClone(_this.theme);
      }

      _this.theme = deepObjectMerge(_this.theme, obj);
    };

    return _this;
  }

  return BasePlugin;
}(Base);

export { BasePlugin as default };