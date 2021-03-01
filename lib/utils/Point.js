import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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

import { Sprite, Path, Ellipse, Rect, Triangle, Parallel, Regular, Star, Group } from 'spritejs';
import { jsType } from '@qcharts/utils';
var allPoint = {
  sprite: Sprite,
  path: Path,
  ellipse: Ellipse,
  rect: Rect,
  triangle: Triangle,
  parallel: Parallel,
  regular: Regular,
  star: Star
};

var Point = /*#__PURE__*/function (_Group) {
  _inherits(Point, _Group);

  var _super = _createSuper(Point);

  function Point() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Point);

    _this = _super.call(this);
    _this.pointType = null;
    _this.$sprite = null;

    _this.attr(_objectSpread({
      pointType: 'ellipse'
    }, attrs));

    return _this;
  }

  _createClass(Point, [{
    key: "attr",
    value: function attr(name, val) {
      var attrs = name;

      if (jsType(name) !== 'object') {
        attrs = {};
        attrs[name] = val;
      }

      this.renderSymbol(attrs);
    }
  }, {
    key: "renderSymbol",
    value: function renderSymbol(attrs) {
      var pointType = attrs.pointType,
          pos = attrs.pos,
          renderAttr = _objectWithoutProperties(attrs, ["pointType", "pos"]);

      if (pointType && pointType !== this.pointType) {
        if (!Object.keys(allPoint).includes(pointType)) {
          throw new Error("pointType should be one of 'sprite','path','ellipse','rect','triangle','parallel','regular','star' but it is ".concat(pointType));
        }

        this.$sprite && this.$sprite.remove();
        this.$sprite = new allPoint[pointType](renderAttr);
        this.append(this.$sprite);
      } else {
        this.$sprite.attr(renderAttr);
      }

      if (pos && pos.length) {
        _get(_getPrototypeOf(Point.prototype), "attr", this).call(this, 'pos', pos);
      }

      this.pointType = pointType;
    }
  }]);

  return Point;
}(Group);

export default Point;