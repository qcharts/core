(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("spritejs/spritejs.min.js"));
	else if(typeof define === 'function' && define.amd)
		define(["spritejs"], factory);
	else if(typeof exports === 'object')
		exports["qcharts"] = factory(require("spritejs/spritejs.min.js"));
	else
		root["qcharts"] = factory(root["spritejs"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(18);

var assertThisInitialized = __webpack_require__(9);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(17);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(24);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(21);

var iterableToArrayLimit = __webpack_require__(22);

var nonIterableRest = __webpack_require__(23);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(26);

var iterableToArray = __webpack_require__(27);

var nonIterableSpread = __webpack_require__(28);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function filterClone(obj, include, exclude) {
  var res = obj;

  if (_typeof(obj) == 'object') {
    if (getType(obj) === 'array') {
      res = [];

      for (var i = 0, len = obj.length; i < len; i++) {
        res.push(filterClone(obj[i], include, exclude));
      }
    } else if (obj !== null) {
      res = Object.create(null);

      for (var j in obj) {
        if (include && getType(include) === 'array' && include.length) {
          if (include.indexOf(j) != -1) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (include && getType(include) === 'regexp') {
          if (include.test(j)) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (include && getType(include) === 'function') {
          if (include(j, obj[j])) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (exclude && getType(exclude) === 'array' && exclude.length) {
          if (exclude.indexOf(j) === -1) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (exclude && getType(exclude) === 'regexp') {
          if (!exclude.test(j)) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (exclude && getType(exclude) === 'function') {
          if (!exclude(j, obj[j])) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else {
          res[j] = filterClone(obj[j], include, exclude);
        }
      }
    }
  }

  return res;

  function getType(value) {
    var str = _typeof(value);

    if (str === 'object') {
      return value === null ? null : Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    }

    return str;
  }
}

var _default = filterClone;
exports["default"] = _default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(...t){let e=t[0];if(t.length>1)for(let r=1;r<t.length;r++)n(e,t[r]);return e;function n(t,e){for(var n in e)t[n]=t[n]&&"[object Object]"===t[n].toString()?r(t[n],e[n]):t[n]=e[n];return t}}function o(){return Object.create(null)}function u(t){const e=typeof t;return"object"===e?null===t?null:Object.prototype.toString.call(t).slice(8,-1).toLowerCase():e}function i(t,e=16,n=!1){let r=null,o=n;return function(...n){if(o)return t.apply(this,n),o=!1;r||(r=setTimeout(()=>{clearTimeout(r),r=null,t.apply(this,n)},e))}}function c(t,e){return"string"===u(t)&&t.match(/%$/)?Number(t.substring(0,t.indexOf("%")))/100*e:t}n.r(e),n.d(e,"deepObjectMerge",(function(){return r})),n.d(e,"emptyObject",(function(){return o})),n.d(e,"jsType",(function(){return u})),n.d(e,"throttle",(function(){return i})),n.d(e,"getDistancePx",(function(){return c}))}])}));
//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isWeiXin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobal; });
/* unused harmony export platform */
var isWeiXin = function isWeiXin() {
  return typeof wx !== 'undefined' && typeof wx.getSystemInfoSync === 'function';
};
var getGlobal = function getGlobal() {
  if (isWeiXin()) return getApp();
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw new Error("unable to locate global object");
};
var platform = getGlobal();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(29);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(1);

var setPrototypeOf = __webpack_require__(17);

var isNativeFunction = __webpack_require__(19);

var construct = __webpack_require__(20);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(17);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(1);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Dataset", function() { return /* reexport */ src; });
__webpack_require__.d(__webpack_exports__, "Line", function() { return /* reexport */ visuals_Line; });
__webpack_require__.d(__webpack_exports__, "Pie", function() { return /* reexport */ visuals_Pie; });
__webpack_require__.d(__webpack_exports__, "Area", function() { return /* reexport */ visuals_Area; });
__webpack_require__.d(__webpack_exports__, "Wave", function() { return /* reexport */ visuals_Wave; });
__webpack_require__.d(__webpack_exports__, "Radar", function() { return /* reexport */ visuals_Radar; });
__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return /* reexport */ plugins_Tooltip; });
__webpack_require__.d(__webpack_exports__, "Bar", function() { return /* reexport */ visuals_Bar; });
__webpack_require__.d(__webpack_exports__, "PolarBar", function() { return /* reexport */ visuals_PolarBar; });
__webpack_require__.d(__webpack_exports__, "Funnel", function() { return /* reexport */ visuals_Funnel; });
__webpack_require__.d(__webpack_exports__, "Scatter", function() { return /* reexport */ visuals_Scatter; });
__webpack_require__.d(__webpack_exports__, "Gauge", function() { return /* reexport */ visuals_Gauge; });
__webpack_require__.d(__webpack_exports__, "RadialBar", function() { return /* reexport */ visuals_RadialBar; });
__webpack_require__.d(__webpack_exports__, "Axis", function() { return /* reexport */ plugins_Axis; });
__webpack_require__.d(__webpack_exports__, "Legend", function() { return /* reexport */ plugins_Legend; });
__webpack_require__.d(__webpack_exports__, "Chart", function() { return /* reexport */ src_Chart; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ h; });
__webpack_require__.d(__webpack_exports__, "theme", function() { return /* reexport */ theme_default; });
__webpack_require__.d(__webpack_exports__, "easing", function() { return /* reexport */ tween_easing; });

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/src/h.js
const VNode = function VNode() {}
const flattern = arr => [].concat.apply([], arr)

function h(tagName, attrs, ...children) {
  const node = new VNode()
  node.tagName = tagName
  node.attrs = attrs || {}
  node.children = flattern(children).filter(Boolean)
  return node
}

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/src/consts.js
const CREATE = 'CREATE'
const REPLACE = 'REPLACE'
const UPDATE = 'UPDATE'
const REMOVE = 'REMOVE'

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/src/diff.js


const isNull = obj => obj === undefined || obj === null

const diffVNodeChildren = (oldVNode, newVNode) => {
  const patches = []
  // 新旧节点的子节点长度可能不一样，但是进行比对的次数应当为最长子节点数目
  const len = Math.max(oldVNode.children.length, newVNode.children.length)
  for (let i = 0; i < len; i++) {
    // 注意：这里不使用 patches.push ，是为了保持 子节点 在整个节点树的位置是不变的
    patches[i] = diff(oldVNode.children[i], newVNode.children[i])
  }
  return patches
}

/**
 * 比对节点属性
 * 首先合并新旧节点属性
 * 新节点没有的属性，则移除属性
 * 新旧节点属性不一致，则设置属性
 * @param {*} oldVNode
 * @param {*} newVNode
 */
const diffVNodeAttrs = (oldVNode, newVNode) => {
  let patches = []
  const oldVNodeAttrs = oldVNode.attrs
  const newVNodeAttrs = newVNode.attrs
  const attrs = Object.assign({}, oldVNodeAttrs, newVNodeAttrs)

  patches = attrs

  return patches
}

/**
 * 判断两节点是否不一样
 * 1. 旧节点为文本节点，新节点不是
 * 2. 新节点为文本节点，旧节点不是
 * 3. 新旧节点标签名不一样
 * @param {*} oldVNode
 * @param {*} newVNode
 */
const isDiffrentVNode = (oldVNode, newVNode) => {
  return (typeof oldVNode !== 'object' && oldVNode !== newVNode) || (typeof newVNode !== 'object' && oldVNode !== newVNode) || oldVNode.tagName !== newVNode.tagName
}

/**
 * diff 新旧节点差异
 * case CREATE: 旧节点不存在，则应当新建新节点
 * case REMOVE: 新节点不存在，则移出旧节点
 * case REPLACE: 只比较新旧节点，不比较其子元素，新旧节点标签名或文本内容不一致，则应当替换旧节点
 * case UPDATE: 到这里，新旧节点可能只剩下 attrs 和 子节点未进行 diff，所以直接循环 diffAttrs 和 diffChildren 即可
 * @param {*} oldVNode
 * @param {*} newVNode
 */
function diff(oldVNode, newVNode) {
  if (isNull(oldVNode)) {
    return { type: CREATE, newVNode }
  }
  if (isNull(newVNode)) {
    return { type: REMOVE }
  }
  if (isDiffrentVNode(oldVNode, newVNode)) {
    return { type: REPLACE, newVNode }
  }
  if (newVNode.tagName) {
    return {
      type: UPDATE,
      children: diffVNodeChildren(oldVNode, newVNode),
      attrs: diffVNodeAttrs(oldVNode, newVNode)
    }
  }
}

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/src/render.js

function createElement(vnode) {
  if (!vnode) {
    return
  }
  //当前图形通过绑定this传递进来
  let graph = this
  let { tagName: TagName, attrs, children } = vnode
  const el = new TagName(attrs)
  //渲染的spritejs对象放到 visual或者plugin上
  patchAttrs(graph, el, attrs)
  if (el.appendChild) {
    children.map(createElement.bind(this)).filter(Boolean).forEach(el.appendChild.bind(el))
  }
  return el
}

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/tween/easing.js
/**
 * 缓动代码来自 https://github.com/sole/tween.js/blob/master/src/Tween.js
 * @see http://sole.github.io/tween.js/examples/03_graphs.html
 */
const easing_easing = {
  /**
   * @param {number} k
   * @return {number}
   */
  linear: function(k) {
    return k
  },

  quadIn(k) {
    return k * k
  },

  quadOut(k) {
    return k * (2 - k)
  },

  quadInOut(k) {
    return ((k *= 2) <= 1 ? k * k : --k * (2 - k) + 1) / 2
  },

  // 三次方的缓动（t^3）
  /**
   * @param {number} k
   * @return {number}
   */
  cubicIn: function(k) {
    return k * k * k
  },
  /**
   * @param {number} k
   * @return {number}
   */
  cubicOut: function(k) {
    return --k * k * k + 1
  },
  /**
   * @param {number} k
   * @return {number}
   */
  cubicInOut: function(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k
    }
    return 0.5 * ((k -= 2) * k * k + 2)
  },

  // 四次方的缓动（t^4）
  /**
   * @param {number} k
   * @return {number}
   */
  quarticIn: function(k) {
    return k * k * k * k
  },
  /**
   * @param {number} k
   * @return {number}
   */
  quarticOut: function(k) {
    return 1 - --k * k * k * k
  },
  /**
   * @param {number} k
   * @return {number}
   */
  quarticInOut: function(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k
    }
    return -0.5 * ((k -= 2) * k * k * k - 2)
  },

  // 五次方的缓动（t^5）
  /**
   * @param {number} k
   * @return {number}
   */
  quinticIn: function(k) {
    return k * k * k * k * k
  },
  /**
   * @param {number} k
   * @return {number}
   */
  quinticOut: function(k) {
    return --k * k * k * k * k + 1
  },
  /**
   * @param {number} k
   * @return {number}
   */
  quinticInOut: function(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k * k
    }
    return 0.5 * ((k -= 2) * k * k * k * k + 2)
  },

  // 正弦曲线的缓动（sin(t)）
  /**
   * @param {number} k
   * @return {number}
   */
  sinusoidalIn: function(k) {
    return 1 - Math.cos((k * Math.PI) / 2)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  sinusoidalOut: function(k) {
    return Math.sin((k * Math.PI) / 2)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  sinusoidalInOut: function(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k))
  },

  // 指数曲线的缓动（2^t）
  /**
   * @param {number} k
   * @return {number}
   */
  exponentialIn: function(k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  exponentialOut: function(k) {
    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  exponentialInOut: function(k) {
    if (k === 0) {
      return 0
    }
    if (k === 1) {
      return 1
    }
    if ((k *= 2) < 1) {
      return 0.5 * Math.pow(1024, k - 1)
    }
    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2)
  },

  // 圆形曲线的缓动（sqrt(1-t^2)）
  /**
   * @param {number} k
   * @return {number}
   */
  circularIn: function(k) {
    return 1 - Math.sqrt(1 - k * k)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  circularOut: function(k) {
    return Math.sqrt(1 - --k * k)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  circularInOut: function(k) {
    if ((k *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - k * k) - 1)
    }
    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1)
  },

  // 创建类似于弹簧在停止前来回振荡的动画
  /**
   * @param {number} k
   * @return {number}
   */
  elasticIn: function(k) {
    var s
    var a = 0.1
    var p = 0.4
    if (k === 0) {
      return 0
    }
    if (k === 1) {
      return 1
    }
    if (!a || a < 1) {
      a = 1
      s = p / 4
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI)
    }
    return -(
      a *
      Math.pow(2, 10 * (k -= 1)) *
      Math.sin(((k - s) * (2 * Math.PI)) / p)
    )
  },
  /**
   * @param {number} k
   * @return {number}
   */
  elasticOut: function(k) {
    var s
    var a = 0.1
    var p = 0.4
    if (k === 0) {
      return 0
    }
    if (k === 1) {
      return 1
    }
    if (!a || a < 1) {
      a = 1
      s = p / 4
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI)
    }
    return (
      a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1
    )
  },
  /**
   * @param {number} k
   * @return {number}
   */
  elasticInOut: function(k) {
    var s
    var a = 0.1
    var p = 0.4
    if (k === 0) {
      return 0
    }
    if (k === 1) {
      return 1
    }
    if (!a || a < 1) {
      a = 1
      s = p / 4
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI)
    }
    if ((k *= 2) < 1) {
      return (
        -0.5 *
        (a *
          Math.pow(2, 10 * (k -= 1)) *
          Math.sin(((k - s) * (2 * Math.PI)) / p))
      )
    }
    return (
      a *
        Math.pow(2, -10 * (k -= 1)) *
        Math.sin(((k - s) * (2 * Math.PI)) / p) *
        0.5 +
      1
    )
  },

  // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
  /**
   * @param {number} k
   * @return {number}
   */
  backIn: function(k) {
    var s = 1.70158
    return k * k * ((s + 1) * k - s)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  backOut: function(k) {
    var s = 1.70158
    return --k * k * ((s + 1) * k + s) + 1
  },
  /**
   * @param {number} k
   * @return {number}
   */
  backInOut: function(k) {
    var s = 1.70158 * 1.525
    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s))
    }
    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2)
  },

  // 创建弹跳效果
  /**
   * @param {number} k
   * @return {number}
   */
  bounceIn: function(k) {
    return 1 - easing_easing.bounceOut(1 - k)
  },
  /**
   * @param {number} k
   * @return {number}
   */
  bounceOut: function(k) {
    if (k < 1 / 2.75) {
      return 7.5625 * k * k
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375
    } else {
      return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375
    }
  },
  /**
   * @param {number} k
   * @return {number}
   */
  bounceInOut: function(k) {
    if (k < 0.5) {
      return easing_easing.bounceIn(k * 2) * 0.5
    }
    return easing_easing.bounceOut(k * 2 - 1) * 0.5 + 0.5
  }
}

/* harmony default export */ var tween_easing = (easing_easing);

// EXTERNAL MODULE: ./node_modules/@qcharts/vnode/node_modules/@qcharts/utils/lib/index.js
var lib = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/util/interpolate.js


const constant = x => () => x
const number = (a, b) => t => a + (b - a) * t
const array = (a, b) => {
  const bl = b ? b.length : 0
  const al = a ? Math.min(bl, a.length) : 0
  const x = new Array(al)
  const c = new Array(bl)
  let i

  for (i = 0; i < al; ++i) {
    x[i] = interpolate(a[i], b[i])
  }

  for (; i < bl; ++i) {
    c[i] = b[i]
  }

  return t => {
    for (i = 0; i < al; ++i) {
      c[i] = x[i](t)
    }

    return c
  }
}
const object = (a, b) => {
  let i = {}
  let c = {}
  let k

  if (!a || !Object(lib["jsType"])(a) === 'object') {
    a = {}
  }

  if (!b || !Object(lib["jsType"])(b) === 'object') {
    b = {}
  }

  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k])
    } else {
      c[k] = b[k]
    }
  }

  return t => {
    for (k in i) {
      c[k] = i[k](t)
    }

    return c
  }
}

function interpolate(a, b) {
  let type = typeof b
  return b === null || type === 'string' || type === 'boolean' ? constant(b) : (type === 'number' ? number : Object(lib["jsType"])(b) === 'array' ? array : object)(a, b)
}

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/util/invariant.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

const NODE_ENV = "production"

function invariant(condition, message) {
  if (NODE_ENV !== 'production') {
    if (message === undefined) {
      throw new Error('invariant requires an error message argument')
    }
  }

  if (!condition) {
    var error
    if (message === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.')
    } else {
      error = new Error(message)
      error.name = 'Qcharts Error'
    }

    error.framesToPop = 1 // we don't care about invariant's own frame
    throw error
  }
}
/* harmony default export */ var util_invariant = (invariant);

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/util/index.js



function now() {
  return typeof performance !== 'undefined' ? performance.now() : Date.now()
}

let requestAnimationFrame, cancelAnimationFrame
if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
  requestAnimationFrame = window.requestAnimationFrame
  cancelAnimationFrame = window.cancelAnimationFrame
} else {
  const startTime = now()
  requestAnimationFrame = (fn) => {
    return setTimeout(() => {
      fn(now() - startTime)
    }, 16)
  }
  cancelAnimationFrame = (id) => {
    return clearTimeout(id)
  }
}
const util_delay = (time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, time)
  )


// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/tween/tween.js


function Tween(name = 'linear') {
  this._start = null
  this._end = null
  this._delay = 0

  this._canceled = false
  this._duration = 1
  this._easing = tween_easing[name] ? tween_easing[name] : tween_easing.linear

  this._onUpdate = () => {}
  this._onStart = () => {}

  return this
}

Tween.prototype = {
  from(val) {
    this._start = val
    return this
  },

  to(val) {
    this._end = val
    return this
  },

  duration(time) {
    if (typeof time !== 'number') {
      throw new Error('Duration time must be a number')
    }
    this._duration = time
    return this
  },

  delay(time) {
    this._delay = time
    return this
  },

  easing(fn) {
    if (typeof fn !== 'function') {
      throw new Error('easing function must be a function')
    }
    this._easing = fn
    return this
  },

  onStart(fn) {
    if (typeof fn !== 'function') {
      throw new Error('start callback must be a function')
    }
    this._onStart = fn
    return this
  },

  onUpdate(fn) {
    if (typeof fn !== 'function') {
      throw new Error('update callback must be a function')
    }
    this._onUpdate = fn
    return this
  },

  onComplete(fn) {
    if (typeof fn !== 'function') {
      throw new Error('complete callback must be a function')
    }
    this._onComplete = fn
    return this
  },
  start() {
    // const dt = 16.7 // 每一帧 16.7 ms
    const e = this._easing
    const i = interpolate(this._start, this._end)
    const callback = this._onUpdate
    let elapseTime = 0 // 已消耗时长
    let animateTime = this._duration
    let timer = null
    let delayTime = this._delay
    let startTime = 0

    return new Promise(resolve => {
      const step = () => {
        elapseTime = now() - startTime
        const t = e(Math.min(1.0, elapseTime / animateTime))
        if (elapseTime >= animateTime) {
          callback(i(1))
          resolve(this)
          cancelAnimationFrame(timer)
        } else {
          callback(i(t))
          timer = requestAnimationFrame(step)
        }
      }

      const start = () => {
        startTime = now()
        this._onStart(this._start, this._end)
        timer = requestAnimationFrame(step)
      }

      this.cancel = () => {
        cancelAnimationFrame(timer)
      }

      if (delayTime && delayTime > 0) {
        util_delay(delayTime).then(start)
      } else {
        start()
      }
    })
  }
}

/* harmony default export */ var tween = (Tween);

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/tween/index.js





// EXTERNAL MODULE: ./node_modules/filter-clone/lib/index.js
var filter_clone_lib = __webpack_require__(12);
var filter_clone_lib_default = /*#__PURE__*/__webpack_require__.n(filter_clone_lib);

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/src/nodeHelper.js




/**
 * 为 spritejs 元素添加动画
 * @param {*} el
 * @param {*} attrs
 */
function addAnimate(graph, el, attrs) {
  if (!el || !attrs.animation) {
    return
  }
  const animation = Object(lib["deepObjectMerge"])(graph.renderAttrs.animation, attrs.animation)

  const { from, middle, use, to, delay, duration, useTween, easing, formatter = d => d } = animation

  if (!from || !to || !use) {
    return
  }
  if (from) {
    //如果存在from，一开始就设置，防止出现抖动
    el.attr(from)
  }
  let ani = filter_clone_lib_default()(animation, null, ['from', 'to', 'formatter', 'use'])

  const setAnimation = () => {
    if (!useTween) {
      let keys = null
      if (middle) {
        keys = [from, middle, to]
      } else {
        keys = [from, to]
      }
      el.animate(keys, {
        fill: 'both',
        ...ani
      }).finished.then(() => {
        delete to.offset
        el.attr(to)
      })
    } else {
      new tween(easing)
        .from(from)
        .to(to)
        .delay(delay)
        .duration(duration)
        .onUpdate(attr => {
          el.attr(formatter(attr))
        })
        .start()
    }
  }
  setAnimation()
}

/**
 * ref 回调函数
 * @param {*} el
 * @param {*} attrs
 */
function addRef(graph, el, attrs) {
  const ref = attrs.ref
  delete attrs.ref
  if (ref && el) {
    try {
      graph.addRef(ref, el)
    } catch (e) {
      console.error(e)
    }
  }
}
/**
 * 为 spritejs 元素添加事件
 * @param {*} el
 * @param {*} attrs
 */
function addAttrs(graph, el, attrs = {}) {
  let states = attrs['states']
  let state = attrs['state']
  if (states && state) {
    let oldState = el.attr('state')
    if (state !== oldState) {
      //不相当就处理，相当上一次已经处理完毕
      let oldstates = el.attr('states') || Object(lib["emptyObject"])()
      let oldAttrs = Object(lib["deepObjectMerge"])(Object(lib["emptyObject"])(), attrs, oldstates[oldState])
      let newAttrs = Object(lib["deepObjectMerge"])(Object(lib["emptyObject"])(), attrs, states[state])
      el.attr(oldAttrs)
      let { duration } = Object(lib["deepObjectMerge"])(Object(lib["emptyObject"])(), graph.renderAttrs.animation, states.animation)
      el.transition(duration / 1000).attr(newAttrs)
    }
  } else {
    el.attr(attrs)
  }
}
/**
 * 为 spritejs 元素添加事件
 * @param {*} el
 * @param {*} attrs
 */
function addEvent(graph, el, attrs = {}) {
  //缓存方法，修改方法指针this
  Object.keys(attrs).forEach(key => {
    if (!/^on/.test(key)) {
      return
    }
    const type = key.split('on')[1].toLowerCase()
    const cb = attrs[key] || (() => {})
    let newF = evt => cb.call(graph, evt, el)
    el.removeAllListeners(type)
    el.addEventListener(type, newF)
    delete attrs[key]
  })
}

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/src/patch.js




function patchAttrs(graph, el, patche) {
  if (!el) {
    return
  }
  if (!Object.keys(patche).length) {
    return
  }
  addRef(graph, el, patche)
  addEvent(graph, el, patche)
  addAttrs(graph, el, patche)
  //el.attr(patche)
  addAnimate(graph, el, patche)
}

/**
 * @param {*} $el 当前的真实spritejs 节点
 * @param {*} patches 虚拟节点
 * @param {*} isRoot 是否是初节点，用于绑定$el与visual或者plugin
 */
function patch($el, patche, isRoot = 0) {
  //core中调用patch的时候，base中处理绑定this到当前图表
  let graph = this //graph为当前的qcharts对象 visula或者plugin
  if (!$el && !patche) {
    return
  }
  switch (patche.type) {
    case CREATE: {
      const { newVNode } = patche
      const newEl = createElement.bind(graph)(newVNode)
      if (newEl) {
        if (isRoot) {
          //创建的时候，visual与plugin绑定对应的sprite元素
          graph.$el = newEl
        }
        $el.appendChild(newEl)
      }
      break
    }
    case REPLACE: {
      const { newVNode } = patche
      const newEl = createElement.bind(graph)(newVNode)
      $el.parent.replaceChild(newEl, $el)
      break
    }
    case REMOVE: {
      $el.remove()
      break
    }
    case UPDATE: {
      const { attrs, children } = patche
      //对应的dom与vnode打上对应的ind，防止remove与create的时候变动i
      patchAttrs(graph, $el, attrs)
      if ($el.children && children.length) {
        $el.children.forEach((child, ind) => {
          child._ind = ind
        })
        children.forEach((child, ind) => {
          child._ind = ind
        })
        let len = children.length > $el.children.length ? children.length : $el.children.length
        for (let j = 0; j < len; j++) {
          let curNode = $el.children.filter(child => child._ind === j)[0]
          let curVnode = children.filter(child => child._ind === j)[0]
          if (curVnode && curVnode.type === 'CREATE') {
            //如果是create需要传父级$el
            patch.bind(graph)($el, curVnode)
          } else {
            patch.bind(graph)(curNode, curVnode)
          }
        }
      }
      break
    }
  }
}

// CONCATENATED MODULE: ./node_modules/@qcharts/vnode/src/index.js






// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(6);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(9);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(16);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./node_modules/@qcharts/dataset/src/state.js
/* harmony default export */ var src_state = ({
  "default": 'default',
  //默认
  hide: 'hide',
  //数据隐藏
  hover: 'hover',
  //次激活模式，类似css中的hover
  active: 'active',
  //激活模式，如选中等场景
  disabled: 'disabled',
  //禁用模式
  mixed: 'mixed' //混合模式,比如一个row或者col里面有多种状态

});
// CONCATENATED MODULE: ./node_modules/@qcharts/dataset/src/event.js
function mixinEvent(target) {
  if (target.__store) {
    target.__store.events = [];
    var events = target.__store.events;

    target.on = function (type, cb) {
      events.push({
        type: type,
        cb: cb
      });
      return target;
    };

    target.off = function (type, cb) {
      for (var i = 0; i < events.length; i++) {
        if (cb === undefined) {
          events = [];
        } else {
          var curEvent = events[i];

          if (curEvent.type === type && curEvent.cb === cb) {
            events.splice(i, 1);
            i--;
          }
        }
      }

      return target;
    };

    target.once = function (type, cb) {
      var listener = function listener() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        fn.apply(target, args);
        self.off(type, cb);
      };

      return target.on(type, listener);
    };

    target.dispatchEvent = function (type, option) {
      events.forEach(function (item) {
        if (item.type === type) {
          item.cb.call(target, {
            type: type,
            option: option
          });
        }
      });
      return target;
    };
  }
}


// CONCATENATED MODULE: ./node_modules/@qcharts/dataset/src/Cell.js










var Cell_Cell = /*#__PURE__*/function (_Object) {
  inherits_default()(Cell, _Object);

  function Cell(data, option, dataset) {
    var _this;

    classCallCheck_default()(this, Cell);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Cell).call(this));
    _this.__store = Object.create(null);
    _this.__store.state = src_state["default"];
    _this.__store.row = undefined;
    _this.__store.col = undefined;
    _this.__store.option = option;
    _this.__store.data = data;
    _this.__store.datasets = [dataset];
    _this._layoutScaleFunc = dataset.layoutScaleFunc;
    mixinEvent(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Cell, [{
    key: "datasets",
    get: function get() {
      return this.__store.datasets;
    }
  }, {
    key: "data",
    get: function get() {
      return this, this.__store.data;
    }
  }, {
    key: "value",
    get: function get() {
      return this.__store.data[this.__store.option["value"]];
    }
  }, {
    key: "layoutScaleValue",
    get: function get() {
      return typeof this._layoutScaleFunc === "function" ? this._layoutScaleFunc(this.__store.data[this.__store.option["value"]]) : this.__store.data[this.__store.option["value"]];
    }
  }, {
    key: "text",
    get: function get() {
      return this.__store.data[this.__store.option["text"]];
    }
  }, {
    key: "row",
    set: function set(num) {
      if (this.__store.row === undefined) {
        this.__store.row = num;
      }
    },
    get: function get() {
      return this.__store.row;
    }
  }, {
    key: "col",
    set: function set(num) {
      if (this.__store.col === undefined) {
        this.__store.col = num;
      }
    },
    get: function get() {
      return this.__store.col;
    }
  }, {
    key: "option",
    get: function get() {
      return this.__store.option;
    }
  }, {
    key: "state",
    get: function get() {
      return this.__store.state;
    },
    set: function set(name) {
      var _this2 = this;

      if (src_state[name] && this.__store.state !== src_state[name]) {
        this.__store.state = src_state[name];
        this.dispatchEvent("change", {
          name: "cell",
          value: src_state[name],
          data: this
        });
        this.datasets.forEach(function (dataset) {
          dataset.dispatchEvent("change", {
            name: "cell",
            value: src_state[name],
            data: _this2
          });
        });
      }
    }
  }]);

  return Cell;
}( /*#__PURE__*/wrapNativeSuper_default()(Object));

/* harmony default export */ var src_Cell = (Cell_Cell);
// CONCATENATED MODULE: ./node_modules/@qcharts/dataset/src/Row.js










var Row_List = /*#__PURE__*/function (_Array) {
  inherits_default()(List, _Array);

  function List(name, option) {
    var _this;

    classCallCheck_default()(this, List);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(List).call(this));
    _this.__store = Object.create(null);
    _this.__store.__name = name;
    _this.__store.__option = option;
    _this.__store.dataset = null;
    mixinEvent(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(List, [{
    key: "data",
    get: function get() {
      var arr = [];
      this.forEach(function (cell) {
        arr.push(cell.data);
      });
      return arr;
    }
  }, {
    key: "dataset",
    set: function set(arr) {
      this.__store.dataset = arr;
    },
    get: function get() {
      return this.__store.dataset;
    }
  }, {
    key: "name",
    get: function get() {
      return this.__store.__name;
    }
  }, {
    key: "option",
    get: function get() {
      return this.__store.__option;
    }
  }, {
    key: "state",
    get: function get() {
      //遍历子项，查看状态是否统一
      var sta = this[0].state;

      for (var i = 1; i < this.length; i++) {
        if (this[i].state !== sta) {
          sta = 'mixed';
          break;
        }
      }

      return sta;
    },
    set: function set(name) {
      if (src_state[name] && this.state !== src_state[name]) {
        //给所有子项设置state
        this.forEach(function (cell) {
          //如果disabled的状态，必须先设置位default,disabled的state不能直接修改位其它状态
          if (cell.state === 'disabled' && name !== 'default') {
            return;
          }

          cell.state = src_state[name];
        });
        var dispatchOption = null;

        if (this instanceof Row_Row) {
          dispatchOption = {
            name: 'row',
            value: src_state[name],
            data: this
          };
        } else if (this instanceof Row_Col) {
          dispatchOption = {
            name: 'col',
            value: src_state[name],
            data: this
          };
        }

        this.dispatchEvent('change', dispatchOption);
        this.dataset && this.dataset.dispatchEvent('change', dispatchOption);
      }
    }
  }]);

  return List;
}( /*#__PURE__*/wrapNativeSuper_default()(Array));

var Row_Row = /*#__PURE__*/function (_List) {
  inherits_default()(Row, _List);

  function Row() {
    classCallCheck_default()(this, Row);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Row).apply(this, arguments));
  }

  return Row;
}(Row_List);

var Row_Col = /*#__PURE__*/function (_List2) {
  inherits_default()(Col, _List2);

  function Col() {
    classCallCheck_default()(this, Col);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Col).apply(this, arguments));
  }

  return Col;
}(Row_List);


// CONCATENATED MODULE: ./node_modules/@qcharts/dataset/src/Dataset.js











var Dataset_Dataset = /*#__PURE__*/function (_Array) {
  inherits_default()(Dataset, _Array);

  function Dataset(data, option) {
    var _this;

    classCallCheck_default()(this, Dataset);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Dataset).call(this));
    _this.layoutScaleFunc = _this.handleLayoutScale(option.layoutScale);
    data.forEach(function (item, i) {
      var cell = item;

      if (!(item instanceof src_Cell)) {
        cell = new src_Cell(item, option, assertThisInitialized_default()(_this));
      } else {
        cell.datasets.push(assertThisInitialized_default()(_this));
      }

      _this[i] = cell;
    });
    _this.__store = Object.create(null);
    var store = _this.__store;
    store.__option = option;
    store.__deps = [];
    store.__rows = [];
    store.__rows = getArrData(assertThisInitialized_default()(_this), option);
    mixinEvent(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Dataset, [{
    key: "resetState",
    value: function resetState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var res = [];
      this.forEach(function (cell) {
        //reset的时候不处理disabled
        if (cell.state !== state && cell.state !== 'disabled') {
          res.push(cell);
          cell.state = state;
        }
      });
      this.dispatchEvent('change', {
        name: 'reset',
        data: res
      });
    }
  }, {
    key: "selectRows",
    value: function selectRows(name) {
      var rowKey = this.option.row;
      var arr = [];
      this.forEach(function (item) {
        if (name.indexOf(item.data[rowKey]) !== -1) {
          arr.push(item);
        }
      });
      return new Dataset(arr, this.option);
    }
  }, {
    key: "addDep",
    value: function addDep(dep) {
      this.__store.__deps.push(dep);
    }
  }, {
    key: "handleLayoutScale",
    value: function handleLayoutScale(layoutScale) {
      if (typeof layoutScale === 'string') {
        var method = layoutScale.replace(/\d+$/, '');
        var NUM = 2;

        if (method !== 'sqrt' && method !== 'pow' && method !== 'log') {
          console.warn('layoutScale type error');
          return function (value) {
            return value;
          };
        }

        var number = layoutScale.replace(/^[a-z]+/, '');

        if (number) {
          var isNumber = /^[-+]?\d*$/.test(number);

          if (!isNumber) {
            console.warn('layoutScale type error');
            return function (value) {
              return value;
            };
          } else {
            NUM = Number(number);
          }
        }

        switch (method) {
          case 'sqrt':
            this.datasetReverse = function (value) {
              return Math.pow(value, NUM);
            };

            return function (value) {
              return Math.pow(value, 1 / NUM);
            };

          case 'pow':
            this.datasetReverse = function (value) {
              return Math.pow(value, 1 / NUM);
            };

            return function (value) {
              return Math.pow(value, NUM);
            };

          case 'log':
            if (NUM !== 2 && NUM !== 10) {
              console.warn('layoutScale type error');
              return function (value) {
                return value;
              };
            }

            this.datasetReverse = function (value) {
              return Math.pow(NUM, value);
            };

            return function (value) {
              return Math['log' + NUM](value);
            };

          default:
            console.warn('layoutScale type error');
            return function (value) {
              return value;
            };
        }
      }

      return layoutScale;
    }
  }, {
    key: "option",
    get: function get() {
      return this.__store.__option;
    }
  }, {
    key: "cols",
    get: function get() {
      var _this2 = this;

      var cols = [];
      var colLen = 0;

      this.__store.__rows.forEach(function (row) {
        if (row.length > colLen) {
          colLen = row.length;
        }
      });

      var _loop = function _loop(i) {
        var arr = new Row_Col();
        arr.dataset = _this2;

        _this2.__store.__rows.forEach(function (item) {
          arr.push(item[i]);
        });

        cols.push(arr);
      };

      for (var i = 0; i < colLen; i++) {
        _loop(i);
      }

      return cols;
    }
  }, {
    key: "rows",
    get: function get() {
      return this.__store.__rows;
    }
  }]);

  return Dataset;
}( /*#__PURE__*/wrapNativeSuper_default()(Array));

function getArrData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var key = option.row,
      sort = option.sort;
  var resArr = [];

  if (key === '*') {
    var list = new Row_Row('*', option);
    data.forEach(function (item) {
      list.push(item);
    });

    if (sort) {
      list.sort(function (a, b) {
        return sort(a.data, b.data);
      });
    }

    resArr.push(list);
  } else {
    var keys = Object.create(null);
    data.forEach(function (item) {
      var data = item.__store.data;

      if (!keys[data[key]]) {
        keys[data[key]] = new Row_Row(data[key], option);
      }

      keys[data[key]].push(item);
    });

    for (var _key in keys) {
      var curRow = keys[_key];

      if (sort) {
        curRow.sort(function (a, b) {
          return sort(a.data, b.data);
        });
      }

      resArr.push(curRow);
    }
  }

  resArr.forEach(function (list, m) {
    list.dataset = data;
    list.forEach(function (cell, n) {
      cell.row = m;
      cell.col = n;
    });
  });
  return resArr;
}

/* harmony default export */ var src_Dataset = (Dataset_Dataset);
// CONCATENATED MODULE: ./node_modules/@qcharts/dataset/src/index.js

/* harmony default export */ var src = (src_Dataset);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var helpers_get = __webpack_require__(7);
var get_default = /*#__PURE__*/__webpack_require__.n(helpers_get);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(8);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"root":"spritejs","commonjs2":"spritejs/spritejs.min.js","commonjs":"spritejs/spritejs.min.js","amd":"spritejs","umd":"spritejs"}
var spritejs_min_js_amd_spritejs_umd_spritejs_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/base/mixin.js
var lifeCycle = {
  beforeCreate: 'beforeCreate',
  //创建前
  created: 'created',
  // 图表创建
  beforeRender: 'beforeRender',
  //图表渲染前
  rendered: 'rendered',
  // 图表渲染结束
  beforeUpdate: 'beforeUpdate',
  // 图表更新前
  updated: 'updated',
  // 图表更新
  beforeDestroy: 'beforeDestroy',
  // 图表卸载前
  destroyed: 'destroyed' // 图表卸载

};

function mixin(component) {
  component.on = component.addEventListener;
  component.off = component.removeEventListener;

  component.once = function (type, fn) {
    var _this = this;

    var listener = function listener() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);

      _this.off(type, listener);
    };

    return this.on(type, listener);
  };
}


// CONCATENATED MODULE: ./node_modules/@qcharts/utils/src/index.js
function deepObjectMerge(...args) {
  // 深度合并对象
  let res = args[0]
  if (args.length > 1) {
    for (let i = 1; i < args.length; i++) {
      objectMerge(res, args[i])
    }
  }
  return res
  function objectMerge(FirstOBJ, SecondOBJ) {
    for (var key in SecondOBJ) {
      if (FirstOBJ[key] && jsType(FirstOBJ[key]) === 'object' && jsType(SecondOBJ[key]) === 'object') {
        //对象处理
        deepObjectMerge(FirstOBJ[key], SecondOBJ[key])
      } else if (FirstOBJ[key] && jsType(FirstOBJ[key]) === 'array' && jsType(SecondOBJ[key]) === 'array') {
        //数组处理
        FirstOBJ[key].splice(0, FirstOBJ[key].length, ...SecondOBJ[key])
      } else {
        FirstOBJ[key] = SecondOBJ[key]
      }
    }
    return FirstOBJ
  }
}

function emptyObject() {
  //创建空对象
  return Object.create(null)
}

function jsType(value) {
  //判断js数据类型
  const str = typeof value
  if (str === 'object') {
    return value === null ? null : Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
  }
  return str
}

function throttle(fn, interval = 16, immediately = false) {
  //截流函数
  let timer = null
  let firstTime = immediately
  return function (...args) {
    if (firstTime) {
      // 第一次加载
      fn.apply(this, args)
      return (firstTime = false)
    }
    if (timer) {
      // 定时器正在执行中，跳过
      return
    }
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(this, args)
    }, interval)
  }
}
function debounce(fn, delay = 16, immediately = false) {
  let timer = null
  return function () {
    let args = arguments
    let context = this
    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    } else {
      if (immediately) {
        fn.apply(context, args)
      }
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  }
}
function getDistancePx(num, distance) {
  if (jsType(num) === 'string' && num.match(/%$/)) {
    return (Number(num.substring(0, num.indexOf('%'))) / 100) * distance
  }
  return num
}


// EXTERNAL MODULE: ./src/base/platform.js
var platform = __webpack_require__(14);

// CONCATENATED MODULE: ./src/base/Base.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Base_Base = /*#__PURE__*/function (_Node) {
  inherits_default()(Base, _Node);

  function Base(attrs) {
    var _this;

    classCallCheck_default()(this, Base);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Base).call(this));

    _this.dispatchEvent(lifeCycle.beforeCreate);

    mixin(assertThisInitialized_default()(_this));
    _this['__store'] = emptyObject();
    var store = _this['__store'];
    store.__attrs = emptyObject();
    store.__vnode__ = null;
    store.__isCreated__ = false;
    store.__refs = emptyObject();
    store.dataset = null; // 微信中不支持多图层

    var layerSetting = Object(platform["b" /* isWeiXin */])() ? {
      layer: 'default'
    } : {};

    _this.attr(_objectSpread({}, attrs, {}, layerSetting));

    _this.__update = throttle(function (args) {
      if (store.__isCreated__) {
        _this.update(args);
      }
    });
    return _this;
  }

  createClass_default()(Base, [{
    key: "source",
    value: function source(data, options) {
      var _this2 = this;

      var store = this['__store'];

      if (!(data instanceof src)) {
        var opts = options;

        if (store.dataset) {
          opts = deepObjectMerge({}, store.dataset.option, options);
        }

        store.dataset = new src(data, opts);
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

      get_default()(getPrototypeOf_default()(Base.prototype), "dispatchEvent", this).call(this, event, obj);
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

      if (Object(platform["b" /* isWeiXin */])()) {
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


      var rect = Object(platform["b" /* isWeiXin */])() ? this.layer.canvas : this.layer.canvas.getBoundingClientRect();
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
  }]);

  return Base;
}(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"]);

/* harmony default export */ var base_Base = (Base_Base);
// CONCATENATED MODULE: ./src/theme/default.js

var default_colors = ['#47A1FF', '#59CB74', '#FFB952', '#FC6980', '#6367EC', '#DA65CC', '#FBD54A', '#ADDF84', '#6CD3FF', '#659AEC', '#9F8CF1', '#ED8CCE', '#A2E5FF', '#4DCCCB', '#F79452', '#84E0BE', '#5982F6', '#E37474', '#3FDDC7', '#9861E5'];

for (var default_i = 0; default_i < 1004; default_i++) {
  //生成1024种颜色
  default_colors.push('#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6));
}

var theme = {
  colors: default_colors
};
theme.visuals = {
  Line: {
    colors: theme.colors,
    styles: {
      line: {
        lineWidth: 1
      },
      guideline: {
        strokeColor: '#ddd'
      },
      point: {
        pointType: 'ellipse',
        radiusX: 4,
        radiusY: 4,
        strokeColor: '#fff',
        borderWidth: 1
      }
    },
    attrs: {
      statck: false
    }
  },
  Pie: {
    colors: theme.colors,
    styles: {
      sector: {
        lineWidth: 1,
        strokeColor: '#fff'
      }
    },
    attrs: {}
  },
  Area: {
    colors: theme.colors,
    styles: {
      area: {
        opacity: 0.5
      },
      guideline: {
        strokeColor: '#ddd'
      },
      point: {
        pointType: 'ellipse',
        radiusX: 4,
        radiusY: 4,
        strokeColor: '#fff',
        borderWidth: 1
      }
    },
    attrs: {}
  },
  Radar: {
    colors: theme.colors,
    styles: {
      area: {
        opacity: 0.5
      }
    },
    attrs: {}
  },
  Bar: {
    colors: theme.colors,
    styles: {
      bar: {
        textureRepeat: true
      },
      groupBar: {
        opacity: 0.1
      },
      text: false
    },
    attrs: {
      statck: false
    }
  },
  PolarBar: {
    colors: theme.colors,
    styles: {
      bar: {}
    },
    attrs: {
      statck: false
    }
  },
  Funnel: {
    colors: theme.colors,
    styles: {
      funnel: {}
    },
    attrs: {
      statck: false
    }
  },
  Scatter: {
    colors: theme.colors,
    styles: {
      point: {}
    },
    attrs: {
      showGuideLine: false
    }
  },
  Wave: {
    colors: theme.colors,
    styles: {
      wave: {
        fillColor: '#37c',
        strokeColor: '#37c',
        lineWidth: 0
      },
      text: {
        fillColor: '#333',
        fontSize: 24
      },
      shape: {
        fillColor: '#e6f3ff',
        lineWidth: 3,
        strokeColor: '#156cbd'
      }
    },
    attrs: {}
  },
  Gauge: {
    colors: theme.colors,
    attrs: {}
  },
  RadialBar: {
    colors: theme.colors,
    attrs: {}
  }
};
theme.plugins = {
  Tooltip: {
    colors: theme.colors,
    styles: {},
    attrs: {}
  },
  Legend: {
    colors: theme.colors,
    styles: {
      point: {
        pointType: 'sprite',
        iconSize: [12, 12]
      },
      text: {
        fontSize: '12px',
        fillColor: '#666'
      }
    },
    attrs: {}
  },
  Axis: {
    colors: theme.colors,
    styles: {
      axis: {
        strokeColor: '#ccc',
        lineWidth: 1
      },
      scale: {
        bgcolor: '#ccc'
      },
      label: {
        fontSize: 12,
        fillColor: '#666'
      },
      grid: {
        strokeColor: '#ddd',
        lineDash: [3, 3]
      },
      name: {
        fontSize: 12,
        fillColor: '#666'
      }
    },
    attrs: {
      orient: 'bottom'
    }
  }
};

theme.set = function (obj) {
  //合并样式
  deepObjectMerge(theme, obj);
};

/* harmony default export */ var theme_default = (theme);
// CONCATENATED MODULE: ./src/base/BaseVisual.js









var BaseVisual_BaseVisual = /*#__PURE__*/function (_Base) {
  inherits_default()(BaseVisual, _Base);

  function BaseVisual(attrs) {
    var _this;

    classCallCheck_default()(this, BaseVisual);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(BaseVisual).call(this, attrs));
    _this.theme = theme_default.visuals[_this.constructor.name]; //如果当前对象设置了theme，不继承theme

    _this.theme.set = function (obj) {
      if (_this.theme === theme_default.visuals[_this.constructor.name]) {
        _this.theme = filter_clone_lib_default()(_this.theme);
      }

      _this.theme = deepObjectMerge(_this.theme, obj);
    };

    return _this;
  }

  return BaseVisual;
}(base_Base);


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(11);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/utils/getStyle.js

// merge style

/**
 * chart:当前的图表
 * key:当前的样式名称
 * defaultstyle:为数组或者对象，表示默认的样式
 * args:调用style方法的时候，style以后的参数
 */

function getStyle(chart, key, defaultStyle, args) {
  //合并样式
  var oStyle = defaultStyle;
  var arrStyle = defaultStyle;
  var oArgs = args;

  if (jsType(defaultStyle) === 'array') {
    oStyle = deepObjectMerge.apply(this, defaultStyle);
  } else {
    arrStyle = [defaultStyle];
  }

  if (jsType(args) !== 'array') {
    oArgs = [args];
  }

  var cusStyle = chart.style(key).apply(void 0, [oStyle].concat(toConsumableArray_default()(oArgs)));

  if (cusStyle === false) {
    return false;
  } else if (arrStyle.includes(false) && cusStyle === undefined) {
    return false;
  } else if (cusStyle !== undefined) {
    //如果返回的cusStyle不是false或者undefined，需要把default样式进行重写叠加
    var curStyle = defaultStyle;

    if (jsType(defaultStyle) !== 'array') {
      curStyle = [defaultStyle];
    } //获取default样式


    var oDefaultStyle = chart.defaultStyles()[key];
    oStyle = deepObjectMerge({}, oDefaultStyle, curStyle.filter(Boolean), oStyle);
  }

  return deepObjectMerge({}, oStyle, cusStyle);
}
// CONCATENATED MODULE: ./src/utils/scaleLinear.js
function scaleLinear() {
  var domain = [0, 1];
  var range = [0, 1];

  function scale(num) {
    var disDomain = domain[1] - domain[0];
    var disRange = range[1] - range[0];
    var per = (num - domain[0]) / disDomain || 0;
    return range[0] + disRange * per;
  }

  scale.domain = function (arr) {
    domain = arr;
    return this;
  };

  scale.range = function (arr) {
    range = arr;
    return this;
  };

  return scale;
} // const data = [80, 40, 30, 60, 70]
// const s = scaleLinear().domain([0, 100]).range([0, 100])
// console.log(data.map(s))



// CONCATENATED MODULE: ./src/utils/axis.js
//import { Global } from '../core/Global'
function axis_axis(attr) {
  // 计算坐标轴刻度
  if (!Array.isArray(attr.dataSet) && !attr.hasOwnProperty("section")) {
    return [];
  }

  if (attr.section !== undefined) {
    return sectionAxis(attr.section);
  }

  var data = dataHandle(attr);
  var upZero = []; // 大于零的数

  var downZero = []; // 小于零的数

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      if (element < 0) {
        downZero.push(Math.abs(element));
      } else {
        upZero.push(element);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var length = 5; // 刻度数量

  var sortUpZero = upZero.sort(function (a, b) {
    return a - b;
  });
  var sortDownZero = downZero.sort(function (a, b) {
    return a - b;
  });
  var maxUpZero = sortUpZero.length && Math.ceil(sortUpZero.pop() / 0.95);
  var maxDownZero = sortDownZero.length && Math.ceil(sortDownZero.pop() / 0.95);
  var maxValue = maxUpZero - maxDownZero >= 0 ? maxUpZero : maxDownZero;
  var mixNum = 4;
  var maxNum = 7;

  if (maxDownZero && maxUpZero) {
    mixNum = 3;
    maxNum = 5;
  }

  if (attr.splitNumber) {
    mixNum = attr.splitNumber;
    maxNum = mixNum + 1;
  }

  var getMax = false;
  var len = maxValue.toString().length; // 最大值位数

  var max = len < 3 ? Math.ceil(maxValue / Math.pow(10, len - 1)) : Math.ceil(maxValue / Math.pow(10, len - 2));

  do {
    for (var i = mixNum; i < maxNum; i++) {
      if (max % i === 0) {
        length = i;
        maxValue = len < 3 ? max * Math.pow(10, len - 1) : max * Math.pow(10, len - 2);
        getMax = true;
        break;
      }
    }

    max++;
  } while (!getMax);

  var axisArray = new Array(length + 1);
  axisArray[0] = 0;

  for (var _i = 1; _i < length + 1; _i++) {
    axisArray[_i] = maxUpZero >= maxDownZero ? Math.round(maxValue / length * _i) : -1 * Math.round(maxValue / length * _i);
  } // 处理0-1之间的数据


  if (maxDownZero <= 1 && maxDownZero > 0 || maxUpZero <= 1 && maxUpZero > 0 || maxUpZero === 0 && maxDownZero === 0) {
    axisArray = new Array(6);
    axisArray[0] = 0;
    maxValue = 1;

    for (var _i2 = 1; _i2 < 6; _i2++) {
      axisArray[_i2] = maxUpZero >= maxDownZero ? 2 * maxValue * _i2 / 10 : -2 * maxValue * _i2 / 10;
    }
  }

  if (maxUpZero < maxDownZero) {
    axisArray.reverse();
  }

  if (maxDownZero.length === 0 || maxUpZero.length === 0) {
    return axisArray;
  }

  if (maxUpZero >= maxDownZero) {
    var unit = axisArray[1] * 10;

    for (var _i3 = 1, _len = Math.ceil((axisArray.length - 1) * maxDownZero / maxUpZero); _i3 < _len + 1; _i3++) {
      axisArray.unshift(-1 * unit * _i3 / 10);
    }
  } else {
    var _unit = axisArray[axisArray.length - 2] * 10;

    for (var _i4 = 1, _len2 = Math.ceil((axisArray.length - 1) * maxUpZero / maxDownZero); _i4 < _len2 + 1; _i4++) {
      axisArray.push(-1 * _unit * _i4 / 10);
    }
  } // if (attr.needReverse) {
  //   axisArray = axisArray.map((value) => {
  //     return this.dataset.datasetReverse
  //       ? Math.round(this.dataset.datasetReverse(value))
  //       : value;
  //   });
  // }


  return axisArray;
}

function dataHandle(attr) {
  var stack = attr.stack || false;
  var data = attr.dataSet || [];
  var arr = [];

  if (stack && data.length !== 0 && data[0].length) {
    for (var i = 0, len = data[0].length; i < len; i++) {
      var sum = 0;
      var sumDown = 0;

      for (var j = 0, leng = data.length; j < leng; j++) {
        var val = data[j][i].layoutScaleValue;

        if (data[j][i].disabled === true || val === undefined) {
          continue;
        }

        if (val < 0) {
          sumDown = sumDown + val;
        } else {
          sum = sum + val;
        }
      }

      sum && arr.push(sum);
      sumDown && arr.push(sumDown);
    }
  } else {
    for (var m = 0; m < data.length; m++) {
      for (var n = 0; n < data[m].length; n++) {
        var _val = data[m][n].layoutScaleValue;

        if (data[m][n].disabled === true || _val === undefined) {
          continue;
        }

        arr.push(_val);
      }
    }
  }

  return arr;
}

function sectionAxis(section) {
  if (section && Array.isArray(section)) {
    var gap = section[1] - section[0];
    var arr = [];
    var divide = 4;
    arr.push(section[0]);

    for (var i = 4; i < 8; i++) {
      if (gap % i === 0) {
        divide = i;
        break;
      }
    }

    for (var j = 1; j <= divide; j++) {
      arr.push((section[0] + gap * j / divide).toFixed(2));
    }

    return arr;
  }

  return [];
}
// CONCATENATED MODULE: ./src/visuals/Line/layout.js


function layout(arr, attrs) {
  var type = this.type;
  var lines = [];
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect,
      axisGap = attrs.axisGap;
  var width = clientRect.width,
      height = clientRect.height;
  var scales = axis_axis.call(this, {
    dataSet: arr,
    stack: stack,
    splitNumber: splitNumber
  });
  var maxVal = Math.max.apply(this, scales);
  var minVal = Math.min.apply(this, scales);
  var scaleFY = scaleLinear().domain([minVal, maxVal]).range([0, height]);
  var prevRow = null;
  arr.forEach(function (row) {
    var line = {
      points: [],
      areaPoints: [],
      smoothRange: [],
      state: row.state
    };
    row.forEach(function (cell, i) {
      var val = cell.layoutScaleValue;

      if (cell.value !== undefined) {
        //如果为undefined 不渲染
        var dx = width / (row.length - 1);
        var offsetX = 0;

        if (axisGap) {
          dx = width / row.length;
          offsetX = dx / 2;
        }

        var curPos = [dx * i + offsetX, height - scaleFY(val)];

        if (stack && prevRow) {
          //如果是堆叠并且前一个row存在，则叠加
          curPos = [dx * i + offsetX, height - scaleFY(val + prevRow[i].layoutScaleValue)];
        }

        line.points.push(curPos);
      }
    });
    line.axisPoints = [[line.points[0][0], height - scaleFY(0)], [line.points[line.points.length - 1][0], height - scaleFY(0)]];

    if (line.state !== "disabled") {
      prevRow = row;
    }

    lines.push(line);
  });

  if (type === "area") {
    var curLine = null;
    lines.forEach(function (line, ind) {
      var nextPoints = [].concat(line.points).reverse().map(function (point) {
        return [point[0], height];
      });

      if (curLine && attrs.stack) {
        nextPoints = [].concat(lines[ind - 1].points).reverse();
      }

      var res = transAreaPoint(line.points, nextPoints);
      line.areaPoints = res.areaPoints;
      line.smoothRange = res.smoothRange;

      if (line.state !== "disabled") {
        curLine = line;
      }
    });
  }

  return lines;
}

function transAreaPoint(startPoints, endPoints) {
  var res = {
    areaPoints: [],
    smoothRange: []
  };
  res.areaPoints = [].concat([startPoints[0]]).concat(startPoints).concat([startPoints[startPoints.length - 1]]).concat([endPoints[0]]).concat(endPoints).concat([endPoints[endPoints.length - 1]]);
  res.smoothRange = [1, startPoints.length, startPoints.length + 3, startPoints.length + endPoints.length + 2];
  return res;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(15);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ./src/utils/Point.js









function Point_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Point_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Point_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Point_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var allPoint = {
  sprite: spritejs_min_js_amd_spritejs_umd_spritejs_["Sprite"],
  path: spritejs_min_js_amd_spritejs_umd_spritejs_["Path"],
  ellipse: spritejs_min_js_amd_spritejs_umd_spritejs_["Ellipse"],
  rect: spritejs_min_js_amd_spritejs_umd_spritejs_["Rect"],
  triangle: spritejs_min_js_amd_spritejs_umd_spritejs_["Triangle"],
  parallel: spritejs_min_js_amd_spritejs_umd_spritejs_["Parallel"],
  regular: spritejs_min_js_amd_spritejs_umd_spritejs_["Regular"],
  star: spritejs_min_js_amd_spritejs_umd_spritejs_["Star"]
};

var Point_Point = /*#__PURE__*/function (_Group) {
  inherits_default()(Point, _Group);

  function Point() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, Point);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Point).call(this));
    _this.pointType = null;
    _this.$sprite = null;

    _this.attr(Point_objectSpread({
      pointType: 'ellipse'
    }, attrs));

    return _this;
  }

  createClass_default()(Point, [{
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
          renderAttr = objectWithoutProperties_default()(attrs, ["pointType", "pos"]);

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
        get_default()(getPrototypeOf_default()(Point.prototype), "attr", this).call(this, 'pos', pos);
      }

      this.pointType = pointType;
    }
  }]);

  return Point;
}(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"]);

/* harmony default export */ var utils_Point = (Point_Point);
// CONCATENATED MODULE: ./src/visuals/Line/index.js















var Line_Line = /*#__PURE__*/function (_Base) {
  inherits_default()(Line, _Base);

  function Line(attrs) {
    var _this;

    classCallCheck_default()(this, Line);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Line).call(this, attrs));
    _this.renderLines = [];
    _this.type = 'line';
    _this.hoverIndex = -1;
    return _this;
  }

  createClass_default()(Line, [{
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回lines,继承base
      var _this$getRenderData = this.getRenderData(),
          arrLayout = _this$getRenderData.arrLayout,
          maxLen = _this$getRenderData.maxLen;

      var lines = arrLayout.map(function (item) {
        return {
          smoothRange: item.smoothRange,
          areaFrom: {
            points: item.areaPoints
          },
          areaTo: {
            points: item.areaPoints
          },
          from: {
            points: item.points,
            lineDash: [1, maxLen]
          },
          to: {
            points: item.points,
            lineDash: [maxLen, maxLen]
          }
        };
      });
      return lines;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      //更新前的处理函数，返回lines,继承base
      var _this$getRenderData2 = this.getRenderData(),
          arrLayout = _this$getRenderData2.arrLayout,
          maxLen = _this$getRenderData2.maxLen;

      var renderLines = this.renderLines;
      var lines = arrLayout.map(function (item, i) {
        var from = {
          points: item.points
        };

        if (renderLines[i]) {
          from = {
            points: renderLines[i].to.points
          };
        }

        if (!renderLines[i] || renderLines[i].state === 'disabled') {
          from.lineDash = [4, maxLen];
        }

        return {
          state: item.state,
          smoothRange: item.smoothRange,
          areaFrom: renderLines[i] && renderLines[i].areaTo || item.areaPoints,
          areaTo: {
            points: item.areaPoints
          },
          from: from,
          to: {
            points: item.points,
            lineDash: [maxLen, maxLen]
          }
        };
      });
      return lines;
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      //根据line的特性返回需要数据
      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];
      var arrLayout = layout.call(this, renderData, renderAttrs);
      var _renderAttrs$clientRe = renderAttrs.clientRect,
          height = _renderAttrs$clientRe.height,
          width = _renderAttrs$clientRe.width; //对角线长度的2保证会大于曲线的长度

      var maxLen = Math.sqrt(Math.pow(height, 2), Math.pow(width, 2)) * 5;
      return {
        width: width,
        height: height,
        arrLayout: arrLayout,
        maxLen: maxLen
      };
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
      return {
        guidePoints: [],
        layer: 'line'
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {//smooth: false,
      };
    }
  }, {
    key: "guidelineleave",
    value: function guidelineleave(event, el) {
      this.attr('guidePoints', []);
      this.dataset.resetState();
    }
  }, {
    key: "guidelinemove",
    value: function guidelinemove(event, el) {
      if (this.renderLines.length) {
        //获取 x轴坐标的刻度
        var arrX = this.renderLines[0].to.points.map(function (pos) {
          return pos[0];
        }); //转换cancas坐标到当前group的相对坐标

        var _el$getOffsetPosition = el.getOffsetPosition(event.x, event.y),
            _el$getOffsetPosition2 = slicedToArray_default()(_el$getOffsetPosition, 1),
            x = _el$getOffsetPosition2[0];

        var curInd = 0; //查找当前位置

        for (var i = 0; i < arrX.length; i++) {
          if (x > arrX[i] && x < arrX[i + 1]) {
            curInd = Math.abs(x - arrX[i]) < Math.abs(x - arrX[i + 1]) ? i : i + 1;
            break;
          }
        } //重置所有的dateset的状态


        if (this.hoverIndex !== curInd) {
          this.dataset.resetState(); //设置当前列的state为hover

          this.dataset.cols[curInd].state = 'hover';
          var clientRect = this.renderAttrs.clientRect;
          var posX = arrX[curInd];
          this.hoverIndex = curInd;
          this.attr({
            guidePoints: [[posX, 0], [posX, clientRect.height]],
            lineState: 'default'
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render(lines) {
      var _this2 = this;

      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          smooth = _this$renderAttrs.smooth,
          guidePoints = _this$renderAttrs.guidePoints; //渲染的样式，合并了theme中的styles与组件上的defaultStyles

      var styles = this.renderStyles; //当前主体颜色

      var colors = this.theme.colors;
      this.renderLines = lines;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        zIndex: 1,
        "class": "container",
        pos: [clientRect.left, clientRect.top],
        onMouseleave: this.guidelineleave,
        onMouseenter: this.guidelinemove,
        onMousemove: this.guidelinemove,
        size: [clientRect.width, clientRect.height]
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "lines-group"
      }, lines.map(function (line, ind) {
        var style = getStyle(_this2, 'line', [{
          strokeColor: colors[ind],
          smooth: smooth
        }, styles.line], [_this2.dataset.rows[ind], ind]);
        return line.state === 'disabled' || style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({
          onClick: _this2.lineClick
        }, style, {
          animation: {
            from: line.from,
            to: line.to
          }
        }));
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "areas-group"
      }, this.type !== 'area' ? null : lines.map(function (line, ind) {
        var style = getStyle(_this2, 'area', [{
          fillColor: colors[ind],
          smooth: smooth
        }, styles.area], [_this2.dataset.rows[ind], ind]);
        return line.state === 'disabled' || style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({
          smoothRange: line.smoothRange
        }, style, {
          animation: {
            from: line.areaFrom,
            to: line.areaTo
          }
        }));
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "line-points"
      }, lines.map(function (line, ind) {
        return line.state === 'disabled' ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], null, line.to.points.map(function (p, j) {
          var animation = {
            from: {
              pos: line.from.points[j]
            },
            to: {
              pos: p
            }
          };
          var style = getStyle(_this2, 'point', [{
            fillColor: colors[ind]
          }, styles.point], [_this2.dataset.rows[ind], ind, j]);
          var styleHover = getStyle(_this2, 'point:hover', [style, styles['point:hover']], [_this2.dataset.rows[ind], ind, j]);

          if (_this2.dataset.rows[ind][j].state === 'hover') {
            deepObjectMerge(style, styleHover);
          }

          return getApp().qcharts.h(utils_Point, extends_default()({}, style, {
            animation: animation
          }));
        }));
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "guide-line-group"
      }, guidePoints.length ? function (_) {
        var style = getStyle(_this2, 'guideline', styles.guideline);
        return style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({
          points: guidePoints
        }, style));
      }() : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null)));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = get_default()(getPrototypeOf_default()(Line.prototype), "renderAttrs", this);

      return attrs;
    }
  }]);

  return Line;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Line = (Line_Line);
// CONCATENATED MODULE: ./src/visuals/Pie/layout.js
function layout_layout(arr, attrs) {
  var rings = [];
  var arrVal = arr.map(function (row) {
    return row.reduce(function (val, item) {
      return row.state !== 'disabled' ? val + item.value : val;
    }, 0);
  }); //当totalVal为0的时候，会造成分母为0 如果totalVal为0 处理成1

  var totalVal = arrVal.reduce(function (val, item) {
    return val + item;
  }, 0) || 1;
  var startAngle = attrs.startAngle,
      endAngle = attrs.endAngle,
      activeOffset = attrs.activeOffset;
  var minAngle = Math.min(startAngle, endAngle);
  var maxAngle = Math.max(startAngle, endAngle);

  if (maxAngle > minAngle + 360) {
    maxAngle = minAngle + 360;
  }

  var totalAngle = maxAngle - minAngle;
  arrVal.forEach(function (num, ind) {
    var curPercent = num / totalVal;
    var perAngle = curPercent * totalAngle; //默认中心坐标偏移量0

    var offsetPos = [0, 0];
    var curObj = {
      startAngle: minAngle,
      endAngle: minAngle + perAngle,
      offsetPos: offsetPos
    };

    if (ind !== 0) {
      var prevRing = rings[ind - 1];
      curObj = {
        startAngle: prevRing.endAngle,
        endAngle: prevRing.endAngle + perAngle,
        offsetPos: offsetPos
      };
    }

    var curAngle = (curObj.startAngle + curObj.endAngle) / 2 % 360;
    curObj.bisectorAngle = curAngle;
    curObj.bisectorRadian = transRadius(curAngle);

    if (arr[ind].state === 'hover') {
      //角平分,角度转弧度,默认是顺时针，角度为相反
      curObj.offsetPos = [activeOffset * Math.cos(curObj.bisectorRadian), activeOffset * Math.sin(curObj.bisectorRadian)]; //选中状态
    }

    rings.push(curObj);
  });
  return rings;
}
function transRadius(angle) {
  return angle / 180 * Math.PI;
}
function computeLinePos(startAngle, endAngle, center, radius, disRadius) {
  var points = [];
  var centerAn = (startAngle + endAngle) / 2 % 360;
  var centerAngle = transRadius(centerAn);
  var labelAnchor = [0, 0];
  var startPoint = [radius * Math.cos(centerAngle), radius * Math.sin(centerAngle)];
  var endPoint = [(radius + disRadius) * Math.cos(centerAngle), (radius + disRadius) * Math.sin(centerAngle)];
  var labelPos = [(radius + disRadius) * Math.cos(centerAngle), (radius + disRadius + 5) * Math.sin(centerAngle)];
  labelPos = [center[0] + labelPos[0], center[1] + labelPos[1]];
  points.push([center[0] + startPoint[0], center[1] + startPoint[1]]);
  points.push([center[0] + endPoint[0], center[1] + endPoint[1]]);
  labelAnchor = [Math.sin(centerAngle / 2), 1 - Math.cos(centerAngle / 4)];
  return {
    points: points,
    labelAnchor: labelAnchor,
    labelPos: labelPos
  };
}
// CONCATENATED MODULE: ./src/visuals/Pie/index.js









function Pie_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Pie_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Pie_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Pie_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Pie_Pie = /*#__PURE__*/function (_Base) {
  inherits_default()(Pie, _Base);

  function Pie(attrs) {
    var _this;

    classCallCheck_default()(this, Pie);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Pie).call(this, attrs));
    _this.renderRings = [];
    _this.hoverIndex = -1;
    _this.activeIndex = -1;
    return _this;
  }

  createClass_default()(Pie, [{
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回lines,继承base
      var _this$getRenderData = this.getRenderData(),
          rings = _this$getRenderData.rings;

      var center = this.renderAttrs.center;
      var arr = rings.map(function (item, ind) {
        if (ind === 0) {
          return {
            from: {
              startAngle: 0,
              endAngle: 0,
              pos: center
            },
            to: Pie_objectSpread({}, item, {
              pos: center
            })
          };
        }

        var pervAngle = rings[ind - 1].endAngle;
        return {
          from: {
            startAngle: pervAngle,
            endAngle: pervAngle,
            pos: center
          },
          to: Pie_objectSpread({}, item, {
            pos: center
          })
        };
      });
      this.computeLine(arr);
      return arr;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this2 = this;

      //更新前的处理函数，返回lines,继承base
      var _this$getRenderData2 = this.getRenderData(),
          rings = _this$getRenderData2.rings;

      var center = this.renderAttrs.center;
      var oldRings = this.renderRings;
      var arr = rings.map(function (item, ind) {
        var curPos = [center[0] + item.offsetPos[0], center[1] + item.offsetPos[1]];
        var attrs = filter_clone_lib_default()(item, ['startAngle', 'endAngle']);

        if (ind === _this2.hoverIndex) {
          return {
            from: Pie_objectSpread({}, oldRings[ind].to),
            to: Pie_objectSpread({}, attrs, {
              pos: curPos
            })
          };
        } else {
          return {
            from: Pie_objectSpread({}, oldRings[ind].to),
            to: Pie_objectSpread({}, attrs, {
              pos: curPos
            })
          };
        }
      });
      this.computeLine(arr);
      return arr;
    }
  }, {
    key: "computeLine",
    value: function computeLine(arr) {
      var radiusPx = this.renderAttrs.radiusPx;
      arr.forEach(function (item) {
        var _computeLinePos = computeLinePos(item.from.startAngle, item.from.endAngle, item.from.pos, radiusPx + 1, 15),
            fromPoints = _computeLinePos.points,
            fromAnchor = _computeLinePos.labelAnchor,
            fromPos = _computeLinePos.labelPos;

        var _computeLinePos2 = computeLinePos(item.to.startAngle, item.to.endAngle, item.to.pos, radiusPx + 1, 15),
            toPoints = _computeLinePos2.points,
            toAnchor = _computeLinePos2.labelAnchor,
            toPos = _computeLinePos2.labelPos;

        item.line = {
          from: {
            points: fromPoints
          },
          to: {
            points: toPoints
          }
        };
        item.label = {
          from: {
            pos: fromPos,
            anchor: fromAnchor
          },
          to: {
            pos: toPos,
            anchor: toAnchor
          }
        };
      }); //计算guideline位置
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      //根据line的特性返回需要数据
      var renderAttrs = this.renderAttrs; //let { radiusPx, center } = renderAttrs

      var renderData = this.renderData();
      var rings = layout_layout.call(this, renderData, renderAttrs);
      return {
        rings: rings
      };
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
      return {
        layer: 'pie',
        radius: 1,
        innerRadius: 0,
        startAngle: 0,
        endAngle: 360,
        lineWidth: 1,
        //选中偏移量基数
        activeOffset: 10
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {};
    }
  }, {
    key: "mousemove",
    value: function mousemove(event, el) {
      var renderData = this.renderData();
      var ind = el.attr('_index');

      if (ind !== this.hoverIndex) {
        var curData = renderData[ind];
        renderData.forEach(function (row) {
          if (row.state === 'hover') {
            row.state = 'default';
          }
        });
        curData.state = 'hover';
        this.hoverIndex = ind;
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      var renderData = this.renderData();
      renderData.forEach(function (row) {
        if (row.state === 'hover') {
          row.state = 'default';
        }
      });
      this.hoverIndex = -1;
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var renderAttrs = this.renderAttrs;
      return this.dataset[renderAttrs.layoutBy];
    }
  }, {
    key: "render",
    value: function render(rings) {
      var _this3 = this;

      //console.log(rings)
      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          innerRadiusPx = _this$renderAttrs.innerRadiusPx,
          radiusPx = _this$renderAttrs.radiusPx; //渲染的样式，合并了theme中的styles与组件上的defaultStyles

      var styles = this.renderStyles; //当前主体颜色

      var colors = this.theme.colors;
      this.renderRings = rings;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        zIndex: 1,
        "class": "container",
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height]
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "rings-group",
        onMouseleave: this.mouseleave
      }, rings.map(function (ring, ind) {
        var style = getStyle(_this3, 'sector', [{
          strokeColor: colors[ind],
          fillColor: colors[ind],
          innerRadius: innerRadiusPx,
          outerRadius: radiusPx,
          _index: ind
        }, styles.sector], [_this3.dataset.rows[ind], ind]);
        return ring.state === 'disabled' || style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Ring"], extends_default()({
          onMousemove: _this3.mousemove
        }, style, {
          animation: {
            from: ring.from,
            to: ring.to
          }
        }));
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "line-group"
      }, rings.map(function (ring, ind) {
        var style = getStyle(_this3, 'guideline', [{
          strokeColor: colors[ind]
        }, styles.guideline], [_this3.dataset.rows[ind], ind]);
        var hide = false;

        if (ring.to.startAngle === ring.to.endAngle || ring.state === 'disable' || style === false) {
          hide = true;
        }

        return hide || style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({}, style, {
          animation: {
            from: ring.line.from,
            to: ring.line.to
          }
        }));
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "label-group"
      }, rings.map(function (ring, ind) {
        var name = _this3.dataset.rows[ind].name;
        var style = getStyle(_this3, 'guideText', [{
          fillColor: '#666',
          fontSize: 12
        }, styles.guideline], [_this3.dataset.rows[ind], ind]);
        var hide = false;

        if (ring.to.startAngle === ring.to.endAngle || ring.state === 'disable' || style === false) {
          hide = true;
        }

        return hide || style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({
          text: name
        }, style, {
          pos: ring.label.from.pos,
          animation: {
            from: ring.label.from,
            to: ring.label.to
          }
        }));
      })));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = get_default()(getPrototypeOf_default()(Pie.prototype), "renderAttrs", this);

      var radius = attrs.radius,
          innerRadius = attrs.innerRadius;
      var _attrs$clientRect = attrs.clientRect,
          width = _attrs$clientRect.width,
          height = _attrs$clientRect.height;
      attrs.center = [width / 2, height / 2];
      attrs.radiusPx = Math.min(width, height) * radius / 2;
      attrs.innerRadiusPx = Math.min(width, height) * innerRadius / 2;
      return attrs;
    }
  }]);

  return Pie;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Pie = (Pie_Pie);
// CONCATENATED MODULE: ./src/visuals/Area/index.js









var Area_Area = /*#__PURE__*/function (_Line) {
  inherits_default()(Area, _Line);

  function Area(attrs) {
    var _this;

    classCallCheck_default()(this, Area);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Area).call(this, attrs));
    _this.type = 'area';
    return _this;
  }

  createClass_default()(Area, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return deepObjectMerge({}, get_default()(getPrototypeOf_default()(Area.prototype), "defaultAttrs", this).call(this), {
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
}(visuals_Line);

/* harmony default export */ var visuals_Area = (Area_Area);
// CONCATENATED MODULE: ./src/visuals/Radar/layout.js


/**
 * 根据给定角度和长度获取极坐标值
 * @param {Number} radian 角度
 * @param {Number} length 长度
 * @returns {Array} [x,y]
 */
var getPointCoordinate = function getPointCoordinate(radian, length) {
  var x = Math.cos(radian) * length;
  var y = Math.sin(radian) * length;
  return [x, y];
};
/**
 * 获取数组中最大数除以层级后的整数
 * @param {Array} data
 * @param {Number} splitNumber
 * @returns {Number}
 */


var layout_getMax = function getMax(data, splitNumber) {
  var indicatorMax = Math.max.apply(Math, toConsumableArray_default()(data));

  if (indicatorMax < splitNumber * 10) {
    return Math.ceil(indicatorMax / splitNumber) * splitNumber;
  } else {
    return Math.ceil(indicatorMax / 10 / splitNumber) * 10 * splitNumber;
  }
};
/**
 * 根据给定的数据，返回绘制雷达图所需要的数据
 * @param {Array} dataset 数据集
 * @param {Number} radius 雷达图半径
 * @param {Number} splitNumber  雷达图背景层级
 * @param {Number} startAngle 雷达图起始轴角度
 * @param {Number} labelOffset 雷达图文字偏移值
 * @param {Array} colors 雷达图主题颜色
 * @returns {Object} { sectionAttrs, borderAttrs, axisAttrs, gridAttrs }
 */


function Radar_layout_layout(data, radius, splitNumber, startAngle, labelOffset, colors) {
  var bgPoints = []; // 最外层背景多边形

  var gridAttrs = []; // 蜘蛛网图背景

  var axisAttrs = []; // 坐标轴

  var sectionAttrs = []; // 多边形数据

  if (data.some(function (d) {
    return d.length === 0;
  })) {
    return {
      sectionAttrs: sectionAttrs,
      axisAttrs: axisAttrs,
      gridAttrs: gridAttrs
    };
  }

  var allDataValue = data.reduce(function (t, row) {
    return t.concat(row.map(function (cell) {
      return cell.value;
    }));
  }, []);
  var max = layout_getMax(allDataValue, splitNumber); // 每个类别的弧度

  var dimension = data[0].length;
  var perRadian = Math.PI * 2 / dimension; // 起始角度->转弧度

  var startRadian = Math.PI / 180 * startAngle;

  for (var i = 0; i < dimension; i++) {
    // 根据角度和半径，计算对应的坐标
    var currentRadian = i * perRadian + startRadian;
    var point = getPointCoordinate(currentRadian, radius);
    bgPoints.push({
      point: point,
      radian: currentRadian
    }); // 类别指示坐标

    var labelPos = getPointCoordinate(currentRadian, radius + labelOffset);
    var label = data[0][i].text; // 坐标轴属性

    axisAttrs.push({
      points: [[0, 0], point],
      lineWidth: 1,
      lineDash: [3, 2],
      strokeColor: '#DDE0E5',
      label: label,
      labelPos: labelPos,
      radian: currentRadian,
      maxScale: max,
      splitNumber: splitNumber
    });
  }

  data.forEach(function (row, index) {
    var categoryPoints = row.map(function (d, i) {
      var value = d.value;
      var radian = bgPoints[i].radian;
      return getPointCoordinate(radian, value / max * radius);
    });
    sectionAttrs.push({
      index: index,
      name: row.name,
      dataOrigin: row.data,
      lineWidth: 1,
      points: categoryPoints,
      state: row.state,
      close: true,
      strokeColor: colors[index],
      fillColor: colors[index]
    });
  }); // 背景网格多边形坐标

  var gridPoints = bgPoints.map(function (p) {
    return p.point;
  });

  for (var _i = 0; _i < splitNumber; _i++) {
    var scale = 1 - _i / splitNumber;
    gridAttrs.push({
      scale: scale,
      radius: radius,
      points: gridPoints,
      index: _i,
      close: true,
      lineWidth: 1,
      strokeColor: '#DDE0E5',
      anchor: [0.5, 0.5]
    });
  }

  return {
    sectionAttrs: sectionAttrs,
    axisAttrs: axisAttrs,
    gridAttrs: gridAttrs
  };
}
// CONCATENATED MODULE: ./src/visuals/Radar/index.js













function Radar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Radar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Radar_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Radar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Radar_Radar = /*#__PURE__*/function (_BaseVisual) {
  inherits_default()(Radar, _BaseVisual);

  function Radar(attrs) {
    var _this;

    classCallCheck_default()(this, Radar);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Radar).call(this, attrs));

    defineProperty_default()(assertThisInitialized_default()(_this), "onMouseenter", throttle(function (event, el) {
      _this.dataset.resetState();

      var name = el.attributes.name;

      _this.dataset.rows.filter(function (row) {
        return row.state !== 'disabled';
      }).forEach(function (row) {
        row.state = row.name === name ? 'hover' : 'default';
      });
    }, 16, true));

    _this.type = 'radar';
    _this.sectionData = [];
    _this.scaleEl = [];
    _this.oldPos = null;
    return _this;
  } //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理


  createClass_default()(Radar, [{
    key: "defaultAttrs",
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    value: function defaultAttrs() {
      return {
        layer: 'radar',
        gridType: 'polygon',
        // 网格类型,polygon,circle
        splitNumber: 4,
        // 网格层次
        startAngle: 270,
        // 起始角度
        radius: 0.6,
        // 雷达图半径
        labelOffset: 7 // 文字偏移

      };
    }
  }, {
    key: "getPolylineAnimation",
    value: function getPolylineAnimation(toPoints, state, index) {
      var zeroPoints = new Array(toPoints.length).fill([0, 0]);
      var preData = this.sectionData[index] || {
        animation: {
          to: {
            points: zeroPoints
          }
        }
      };
      var animation = {
        from: {
          points: preData.animation.to.points
        },
        to: {
          points: toPoints
        }
      }; // disabled的时候缩回原点并透明

      if (state === 'disabled') {
        animation.to.points = zeroPoints;
      }

      return animation;
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var dataSet = this.dataset; // // FIXME 数据筛选之前先按照label进行排序?是否需要？

      var _this$renderAttrs = this.renderAttrs,
          len = _this$renderAttrs.len,
          splitNumber = _this$renderAttrs.splitNumber,
          startAngle = _this$renderAttrs.startAngle,
          labelOffset = _this$renderAttrs.labelOffset;
      var colors = this.theme.colors;

      var _layout = Radar_layout_layout(toConsumableArray_default()(dataSet.rows), len, splitNumber, startAngle, labelOffset, colors),
          sectionAttrs = _layout.sectionAttrs,
          axisAttrs = _layout.axisAttrs,
          gridAttrs = _layout.gridAttrs;

      return {
        sectionAttrs: sectionAttrs,
        axisAttrs: axisAttrs,
        gridAttrs: gridAttrs
      };
    }
  }, {
    key: "processData",
    value: function processData() {
      var _this2 = this;

      var _this$getRenderData = this.getRenderData(),
          sectionAttrs = _this$getRenderData.sectionAttrs,
          otherData = objectWithoutProperties_default()(_this$getRenderData, ["sectionAttrs"]);

      var processSectionAttrs = sectionAttrs.map(function (attr, i) {
        var points = attr.points,
            state = attr.state,
            otherAttrs = objectWithoutProperties_default()(attr, ["points", "state"]);

        var _this2$getStyle = _this2.getStyle('section', attr, toConsumableArray_default()(attr.dataOrigin), i),
            style = _this2$getStyle.style,
            hoverStyle = _this2$getStyle.hoverStyle;

        var stateStyle = state === 'hover' ? hoverStyle : {};

        var animation = _this2.getPolylineAnimation(points, state, i);

        return deepObjectMerge(otherAttrs, {
          state: state
        }, {
          animation: animation
        }, style, stateStyle);
      });
      return Radar_objectSpread({}, otherData, {
        sectionAttrs: processSectionAttrs
      });
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      get_default()(getPrototypeOf_default()(Radar.prototype), "beforeRender", this).call(this);

      var renderData = this.processData();
      this.sectionData = toConsumableArray_default()(renderData.sectionAttrs);
      return renderData;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      get_default()(getPrototypeOf_default()(Radar.prototype), "beforeUpdate", this).call(this);

      var updateData = this.processData();

      if (updateData.sectionAttrs) {
        var len = Math.max(this.sectionData.length, updateData.sectionAttrs.length);

        for (var i = 0; i < len; i++) {
          this.sectionData[i] = updateData.sectionAttrs[i];
        }
      }

      this.sectionData = toConsumableArray_default()(updateData.sectionAttrs);
      return updateData;
    }
  }, {
    key: "rendered",
    value: function rendered() {}
  }, {
    key: "getScaleAnimation",
    value: function getScaleAnimation(toScale) {
      return {
        from: {
          scale: 0
        },
        to: {
          scale: toScale
        }
      };
    }
  }, {
    key: "getStyle",
    value: function getStyle(type, attr, data, index) {
      return {
        style: this.style(type)(attr, data, index) || {},
        hoverStyle: this.style("".concat(type, ":hover"))(attr, data, index) || {}
      };
    }
  }, {
    key: "isSamePoints",
    value: function isSamePoints(fromPts, toPts) {
      return fromPts.toString() === toPts.toString();
    }
  }, {
    key: "renderGrid",
    value: function renderGrid(gridAttrs) {
      var _this3 = this;

      var gridType = this.renderAttrs.gridType;
      var GridShape = gridType === 'circle' ? spritejs_min_js_amd_spritejs_umd_spritejs_["Arc"] : spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"];
      return gridAttrs.map(function (attr, i) {
        var animation = _this3.scaleEl.length > 0 ? {} : _this3.getScaleAnimation(attr.scale);

        var _this3$getStyle = _this3.getStyle('grid', attr, null, i),
            style = _this3$getStyle.style;

        if (style === false) {
          return;
        }

        return getApp().qcharts.h(GridShape, extends_default()({}, attr, style, {
          animation: animation
        }));
      });
    }
  }, {
    key: "renderAxisLabel",
    value: function renderAxisLabel(attrs, i) {
      var calcAnchor = function calcAnchor(radian) {
        var x = 0.5 - Math.cos(radian);
        var y = 0.5 - Math.sin(radian);
        return [x, y];
      };

      var label = attrs.label,
          labelPos = attrs.labelPos,
          radian = attrs.radian;
      var anchor = calcAnchor(radian);
      var attr = {
        text: label,
        pos: labelPos,
        color: '#67728C',
        radian: radian,
        anchor: anchor,
        fontSize: 12
      };
      var animation = this.scaleEl.length > 0 ? {} : this.getScaleAnimation(1);

      var _this$getStyle = this.getStyle('label', attr, {
        text: attr.label,
        radian: radian
      }, i),
          style = _this$getStyle.style;

      if (style === false) {
        return;
      }

      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({}, attr, style, {
        animation: animation
      }));
    }
  }, {
    key: "renderAxisScale",
    value: function renderAxisScale(attrs, index) {
      var getPt = function getPt(attrs) {
        var points = attrs.points,
            splitNumber = attrs.splitNumber,
            maxScale = attrs.maxScale;

        var _points$ = slicedToArray_default()(points[1], 2),
            x = _points$[0],
            y = _points$[1];

        var perNum = maxScale / splitNumber;
        return [[x / splitNumber, y / splitNumber], perNum];
      };

      var _getPt = getPt(attrs),
          _getPt2 = slicedToArray_default()(_getPt, 2),
          _getPt2$ = slicedToArray_default()(_getPt2[0], 2),
          perX = _getPt2$[0],
          perY = _getPt2$[1],
          perNum = _getPt2[1];

      var labels = [];
      var display = index === 0 ? 'block' : 'none';
      var common = {
        fontSize: 12,
        anchor: [1, 0.5],
        translate: [-5, 0],
        display: display
      };

      for (var i = 0; i < attrs.splitNumber + 1; i++) {
        var point = [perX * i, perY * i];
        var text = perNum * i;

        var attr = Radar_objectSpread({
          text: text,
          color: '#67728C',
          pos: point
        }, common);

        var _this$getStyle2 = this.getStyle('scale', attr, {
          text: text,
          index: index
        }, i),
            style = _this$getStyle2.style;

        if (style === false) {
          return;
        }

        if (attr.display !== 'none') {
          var animation = {};
          var elIndex = index * attrs.splitNumber + i;
          var preEl = this.scaleEl[elIndex];

          if (preEl) {
            if (preEl.text !== text) {
              animation = {
                from: {
                  text: preEl.text
                },
                to: {
                  text: text
                },
                formatter: function formatter(attr) {
                  attr.text = attr.text.toFixed(0);
                  return attr;
                }
              };
            }
          } else {
            animation = {
              from: {
                pos: [0, 0]
              },
              to: {
                pos: point
              }
            };
          }

          this.scaleEl[i] = {
            text: Number(text.toFixed(0))
          };
          labels.push(getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({}, attr, style, {
            animation: animation
          })));
        }
      }

      return labels;
    }
  }, {
    key: "renderAxis",
    value: function renderAxis(axisAttrs) {
      var _this4 = this;

      var animation = this.scaleEl.length > 0 ? {} : this.getScaleAnimation(1);
      return axisAttrs.map(function (attr, i) {
        var _this4$getStyle = _this4.getStyle('axis', attr, {
          text: attr.label
        }, i),
            style = _this4$getStyle.style;

        if (style === false) {
          return;
        }

        return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], null, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({}, attr, style, {
          animation: animation
        })), _this4.renderAxisLabel(attr, i), _this4.renderAxisScale(attr, i));
      });
    }
  }, {
    key: "renderPoints",
    value: function renderPoints(sectionAttrs) {
      var _this5 = this;

      var allPoints = sectionAttrs.map(function (attrs) {
        var secAnimation = attrs.animation,
            dataOrigin = attrs.dataOrigin,
            strokeColor = attrs.strokeColor,
            state = attrs.state;
        var prePoints = secAnimation && secAnimation.from && secAnimation.from.points;
        var toPoints = secAnimation && secAnimation.to && secAnimation.to.points;
        return toPoints.map(function (point, i) {
          var attr = {
            pos: point,
            fillColor: strokeColor,
            radius: 2,
            dataOrigin: dataOrigin[i]
          };

          var _this5$getStyle = _this5.getStyle('point', attr, Radar_objectSpread({}, attr.dataOrigin), i),
              style = _this5$getStyle.style,
              hoverStyle = _this5$getStyle.hoverStyle;

          if (style === false) {
            return;
          }

          var animation = {
            from: {
              pos: [0, 0],
              opacity: 1
            },
            to: {
              pos: point,
              opacity: 1
            }
          };

          if (prePoints && prePoints[i]) {
            if (!_this5.isSamePoints(prePoints[i], point)) {
              animation.from.pos = prePoints[i];
            } else {
              animation.from.pos = point;
            }
          }

          if (state === 'disabled') {
            animation.to.opacity = 0;
          }

          var stateStyle = state === 'hover' ? hoverStyle : {};
          return getApp().qcharts.h(utils_Point, extends_default()({}, attr, style, stateStyle, {
            animation: animation,
            zIndex: 99
          }));
        });
      });
      return allPoints.reduce(function (pre, cur) {
        return pre.concat(cur);
      }, []);
    }
  }, {
    key: "renderSection",
    value: function renderSection(sectionAttrs) {
      var _this6 = this;

      return sectionAttrs.map(function (attr, i) {
        var animation = attr.animation,
            otherAttr = objectWithoutProperties_default()(attr, ["animation"]);

        return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({
          zIndex: 9 + i
        }, otherAttr, {
          animation: animation,
          onMouseenter: _this6.onMouseenter,
          onMouseleave: _this6.onMouseleave
        }));
      });
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave() {
      this.dataset.resetState();
      this.dataset.rows.filter(function (row) {
        return row.state !== 'disabled';
      }).forEach(function (row) {
        return row.state === 'default';
      });
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var sectionAttrs = _ref.sectionAttrs,
          axisAttrs = _ref.axisAttrs,
          gridAttrs = _ref.gridAttrs;
      var _this$renderAttrs2 = this.renderAttrs,
          center = _this$renderAttrs2.center,
          clientRect = _this$renderAttrs2.clientRect;
      var gAnimation = {
        from: {
          pos: this.oldPos ? this.oldPos : center
        },
        to: {
          pos: center
        }
      };
      this.oldPos = center;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height]
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        pos: center,
        animation: gAnimation
      }, this.renderGrid(gridAttrs), this.renderAxis(axisAttrs), this.renderSection(sectionAttrs), this.renderPoints(sectionAttrs)));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      var attrs = get_default()(getPrototypeOf_default()(Radar.prototype), "renderAttrs", this);

      var _attrs$clientRect = attrs.clientRect,
          height = _attrs$clientRect.height,
          width = _attrs$clientRect.width;
      var center = [width / 2, height / 2];
      var len = Math.min.apply(Math, center) * attrs.radius;
      return Radar_objectSpread({}, attrs, {
        center: center,
        len: len
      });
    }
  }]);

  return Radar;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Radar = (Radar_Radar);
// CONCATENATED MODULE: ./src/visuals/Bar/layout.js


function layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function Bar_layout_layout(arr, attrs) {
  // 输入
  var data = arr;
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect;
  var width = clientRect.width,
      height = clientRect.height;
  var barSize = [width, height];
  var transpose = attrs.transpose || false;
  var groupGap = attrs.groupGap || 0;
  var stackGap = attrs.stackGap || 0;
  var barWidth = attrs.barWidth || 0; // 输出

  var barData = [];
  var groupData = [];
  var textData = [];
  var bgPillarAttr = {
    opacity: 0,
    bgcolor: "#000"
  };
  var valueAxis = axis_axis.call(this, {
    dataSet: data,
    stack: stack,
    splitNumber: splitNumber
  });

  if (!valueAxis || !valueAxis.length) {
    return {
      barData: barData,
      groupData: groupData,
      textData: textData
    };
  }

  var tableSize = transpose ? {
    label: barSize[1],
    value: barSize[0]
  } : {
    label: barSize[0],
    value: barSize[1]
  };
  var axisValueMax = Math.max.apply(this, valueAxis);
  var axisValueMin = Math.min.apply(this, valueAxis);
  var POSITIVE_RATIO = axisValueMax / (axisValueMax - axisValueMin); // 正负柱子高度比例

  var GROUP_BAR_NUM = computerLegend(data); // 图例显示个数

  var GROUP_NUM = data[0].length;
  var gap = 0; // 柱子宽度，根据数据绘制类型计算，是否分组，是否旋转

  if (barWidth === 0) {
    barWidth = stack ? tableSize.label * 0.5 / GROUP_NUM : tableSize.label * 0.5 / (GROUP_NUM * GROUP_BAR_NUM);
    gap = stack ? barWidth : barWidth * GROUP_BAR_NUM;
  } else {
    gap = stack ? (tableSize.label - barWidth * GROUP_NUM) / GROUP_NUM : (tableSize.label - barWidth * GROUP_BAR_NUM * GROUP_NUM - groupGap * (GROUP_BAR_NUM - 1) * GROUP_NUM) / GROUP_NUM;
  }

  var BAR_HEIGHT_FACTOR = tableSize.value / (axisValueMax - axisValueMin);

  if (!stack) {
    // 分组柱状图
    for (var i = 0, len = GROUP_NUM; i < len; i++) {
      var flag = 0; // 计算当前柱子前面有几根被隐藏

      var value = 0;
      var rawValue = 0;
      var gpData = {
        rects: []
      }; // 计算单根柱子

      for (var j = 0, lenj = data.length; j < lenj; j++) {
        // if (data[j][i].state !== "disabled") {
        //   data[j][i].state = "default";
        // }
        rawValue = data[j][i].value;
        value = data[j][i].layoutScaleValue;
        var barHeight = BAR_HEIGHT_FACTOR * Math.abs(value);
        var rect = {
          anchor: [transpose && value < 0 ? 1 : 0, transpose || value < 0 ? 0 : 1],
          size: transpose ? [barHeight, barWidth - 1] : [barWidth - 1, barHeight],
          pos: transpose ? [tableSize.value * (1 - POSITIVE_RATIO), gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * i] : [gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * i, tableSize.value * POSITIVE_RATIO]
        };

        if (data[j][i].state === "disabled") {
          rect.size = transpose ? [0, rect.size[1]] : [rect.size[0], 0];
          flag++;
        } else {
          gpData.rects.push(rect);
        }

        var label = {
          opacity: data[j][i].state !== "disabled" ? 1 : 0,
          text: rawValue.toString(),
          anchor: [transpose && value < 0 ? 1 : 0, 0.5],
          pos: transpose ? [tableSize.value * (1 - POSITIVE_RATIO), gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * i + barWidth * 0.5] : [gap / 2 + (barWidth + groupGap) * (j - flag) + (barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap) * i + barWidth * 0.5, tableSize.value * POSITIVE_RATIO],
          rotate: transpose ? 0 : value < 0 ? 90 : 270,
          paddingLeft: 8
        };
        barData.push(rect);
        textData.push(label);
      } // 柱子整体属性


      gpData = Object.assign(gpData, layout_objectSpread({
        // title: data[0][i]['_x'],
        pos: transpose ? [0, (gap + barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1)) * i] : [(gap + barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1)) * i, 0],
        size: transpose ? [tableSize.value, barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap] : [barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap, tableSize.value]
      }, bgPillarAttr));
      groupData.push(gpData);
    }
  } else {
    // 堆叠柱状图
    for (var _i = 0, _len = GROUP_NUM; _i < _len; _i++) {
      var heightSumUp = 0;
      var heightSumDown = 0;
      var _value = 0;
      var _gpData = {
        rects: []
      }; // 计算单根柱子

      for (var _j = 0, _lenj = data.length; _j < _lenj; _j++) {
        var stackGapTemp = stackGap; // if (data[j][i].state !== "disabled") {
        //   data[j][i].state = "default";
        // }

        _value = data[_j][_i].layoutScaleValue;

        var _barHeight = BAR_HEIGHT_FACTOR * Math.abs(_value);

        if (_barHeight === 0) {
          stackGapTemp = 0;
        }

        var posY = _value < 0 ? tableSize.value * POSITIVE_RATIO + heightSumDown : tableSize.value * POSITIVE_RATIO - heightSumUp;
        var posX = _value < 0 ? tableSize.value * (1 - POSITIVE_RATIO) - heightSumDown : tableSize.value * (1 - POSITIVE_RATIO) + heightSumUp;
        var posLabelY = _value < 0 ? tableSize.value * POSITIVE_RATIO + heightSumDown + _barHeight : tableSize.value * POSITIVE_RATIO - heightSumUp;
        var _rect = {
          anchor: [transpose && _value < 0 ? 1 : 0, transpose || _value < 0 ? 0 : 1],
          size: transpose ? [_barHeight - stackGapTemp, barWidth] : [barWidth, _barHeight - stackGapTemp],
          pos: transpose ? [posX, gap / 2 + (barWidth + gap) * _i] : [gap / 2 + (barWidth + gap) * _i, posY],
          index: _j
        };
        var paddingAttrs = transpose ? "paddingLeft" : "paddingBottom";
        var _label = {
          opacity: data[_j][_i].state !== "disabled" ? 1 : 0,
          text: _value.toString(),
          anchor: transpose ? _value < 0 ? [1, 0.5] : [0, 0.5] : [0.5, 1],
          pos: transpose ? [posX, +(gap + barWidth) / 2 + (barWidth + gap) * _i] : [(gap + barWidth) / 2 + (barWidth + gap) * _i, posLabelY]
        };
        _label[paddingAttrs] = 8;

        if (data[_j][_i].state === "disabled") {
          _rect.size = transpose ? [0, _rect.size[1]] : [_rect.size[0], 0];
        } else {
          _value < 0 ? heightSumDown = heightSumDown + _barHeight : heightSumUp = heightSumUp + _barHeight;

          _gpData.rects.push(_rect);
        }

        textData.push(_label);
        barData.push(_rect);
      } // 柱子整体属性


      _gpData = Object.assign(_gpData, layout_objectSpread({
        pos: transpose ? [0, (gap + barWidth) * _i] : [(gap + barWidth) * _i, 0],
        size: transpose ? [tableSize.value, barWidth + gap] : [barWidth + gap, tableSize.value]
      }, bgPillarAttr));
      groupData.push(_gpData);
    }
  }

  return {
    textData: textData,
    barData: barData,
    groupData: groupData
  };
}

function computerLegend(data) {
  var flag = 0;

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].state !== "disabled") {
      flag++;
    }
  }

  if (flag === 0) {// console.warn('data invalid!')
  }

  return flag || 1;
}
// CONCATENATED MODULE: ./src/visuals/Bar/index.js











function Bar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Bar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Bar_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Bar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Bar_Bar = /*#__PURE__*/function (_Base) {
  inherits_default()(Bar, _Base);

  function Bar(attrs) {
    var _this;

    classCallCheck_default()(this, Bar);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Bar).call(this, attrs));

    defineProperty_default()(assertThisInitialized_default()(_this), "onMousemove", throttle(function (event, el) {
      if (_this.groups.length && !isNaN(event.x) && !isNaN(event.y)) {
        var curInd = 0;

        var _el$getOffsetPosition = el.getOffsetPosition(event.x, event.y),
            _el$getOffsetPosition2 = slicedToArray_default()(_el$getOffsetPosition, 2),
            x = _el$getOffsetPosition2[0],
            y = _el$getOffsetPosition2[1];

        if (!_this.renderAttrs.transpose) {
          //获取 x轴坐标的刻度
          var width = _this.groups[0].size[0]; //转换canvas坐标到当前group的相对坐标

          curInd = Math.floor(x / width);
        } else {
          var _width = _this.groups[0].size[1]; //转换canvas坐标到当前group的相对坐标

          curInd = Math.floor(y / _width);
        }

        if (curInd < 1) {
          curInd = 0;
        } else if (curInd > _this.groups.length - 1) {
          curInd = _this.groups.length - 1;
        }

        if (_this.hoverIndex !== curInd) {
          var bgpillarState = _this.renderAttrs.bgpillarState;
          bgpillarState[curInd] = 'hover';
          bgpillarState[_this.hoverIndex] = 'defualt';

          _this.attr('bgpillarState', bgpillarState);

          _this.dataset.resetState();

          _this.dataset.cols[curInd].state = 'hover';
          _this.hoverIndex = curInd;
        }
      }
    }, 16, true));

    defineProperty_default()(assertThisInitialized_default()(_this), "myClick", function () {
      console.log('myclick');
    });

    _this.type = 'bar';
    _this.pillars = null;
    _this.texts = null;
    _this.groups = null;
    _this.fromTos = null;
    _this.hoverIndex = -1;
    return _this;
  }

  createClass_default()(Bar, [{
    key: "beforeRender",
    value: function beforeRender() {
      var _this2 = this;

      //渲染前的处理函数，返回lines,继承base---------before
      var _this$getRenderData = this.getRenderData(),
          arrLayout = _this$getRenderData.arrLayout;

      var barData = arrLayout.barData.map(function (item) {
        return {
          attrs: item,
          from: {
            size: _this2.renderAttrs.transpose ? [0, item.size[1]] : [item.size[0], 0]
          },
          to: {
            size: item.size
          }
        };
      });
      var textData = arrLayout.textData.map(function (item) {
        return {
          attrs: item,
          from: {
            pos: item.pos
          },
          to: {
            pos: item.pos
          }
        };
      });
      this.pillars = barData;
      this.groups = arrLayout.groupData;
      this.texts = textData;
      return {
        barData: barData,
        textData: textData,
        groupData: arrLayout.groupData
      };
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this3 = this;

      var pillars = this.pillars;
      var texts = this.texts;

      var _this$getRenderData2 = this.getRenderData(),
          arrLayout = _this$getRenderData2.arrLayout;

      var barData = arrLayout.barData.map(function (nextPillar, i) {
        var prev = pillars[i] ? pillars[i] : arrLayout.barData[i - 1];

        if (!prev) {
          prev = {
            size: [0, 0],
            pos: nextPillar.pos,
            labelAttrs: null
          };
        }

        return {
          attrs: nextPillar,
          from: {
            size: prev.attrs.disable ? _this3.attr('transpose') ? [0, prev.attrs.size[1]] : [prev.attrs.size[0], 0] : prev.attrs.size,
            pos: prev.attrs.pos
          },
          to: {
            size: nextPillar.size,
            pos: nextPillar.pos
          }
        };
      });
      var textData = arrLayout.textData.map(function (nextText, i) {
        var prev = texts[i] ? texts[i] : arrLayout.textData[i - 1];

        if (!prev) {
          prev = {
            pos: nextPillar.pos
          };
        }

        return {
          attrs: nextText,
          from: {
            pos: prev.attrs.pos
          },
          to: {
            pos: nextText.pos
          }
        };
      });
      this.pillars = barData;
      this.groups = arrLayout.groupData;
      this.texts = textData;
      return {
        barData: barData,
        textData: textData,
        groupData: arrLayout.groupData
      };
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];
      var dataLength = renderData.length > 1 ? renderData.length : renderData[0].length;
      var arrLayout = Bar_layout_layout.call(this, renderData, renderAttrs);
      var colors = this.theme.colors;
      var styles = this.renderStyles;
      arrLayout.barData = arrLayout.barData.map(function (bar, i) {
        // let style = this.style("pillar")(bar.attrs, this.dataset.rows[i], i);
        // let barStyle = deepObjectMerge(
        //   { bgcolor: bar.bgcolor || colors[i % dataLength] },
        //   styles.bar,
        //   style
        // );
        // bar = deepObjectMerge(bar, barStyle);
        return bar;
      });
      return {
        arrLayout: arrLayout
      };
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      var renderData = this.dataset['rows'];
      var stateArray = Array.from({
        length: renderData[0].length
      }, function () {
        return 'defalut';
      }); // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式

      return {
        layer: 'bar',
        bgpillarState: stateArray,
        states: {
          bgpillar: {
            animation: {
              duration: 20
            },
            "default": {
              opacity: 0.01
            },
            hover: {
              opacity: 0.1
            }
          }
        }
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {
        text: {
          fontSize: 12,
          fillColor: '#666'
        }
      };
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave(e, el) {
      this.dataset.resetState();
      var bgpillarState = this.renderAttrs.bgpillarState;
      bgpillarState[this.hoverIndex] = 'defualt';
      this.attr('bgpillarState', bgpillarState);
      this.hoverIndex = -1;
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this4 = this;

      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          bgpillarState = _this$renderAttrs.bgpillarState,
          states = _this$renderAttrs.states;
      var styles = this.renderStyles;
      var renderData = this.dataset[this.renderAttrs.layoutBy];
      var dataLength = renderData.length > 1 ? renderData.length : renderData[0].length;
      var colors = this.theme.colors;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height],
        onMouseleave: this.onMouseleave,
        onMouseenter: this.onMousemove,
        onMousemove: this.onMousemove,
        onClick: this.myClick // onMousemove={throttle(this.onMousemove)}

      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        ref: "pillars",
        "class": "pillars-group"
      }, data.barData.map(function (pillar, ind) {
        var cell = _this4.dataset.rows[ind % renderData.length][Math.floor(ind / renderData.length)];

        var style = getStyle(_this4, 'pillar', [Bar_objectSpread({
          bgcolor: colors[ind % dataLength]
        }, pillar.attrs), styles.bar], [cell.data, Math.floor(ind / renderData.length), ind % renderData.length]);
        var hoverStyle = getStyle(_this4, 'pillar:hover', [], [cell.data, Math.floor(ind / renderData.length), ind % renderData.length]);

        if (cell.state === 'hover') {
          deepObjectMerge(style, hoverStyle);
        }

        return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Sprite"], extends_default()({}, pillar.attrs, pillar.from, style, {
          animation: {
            from: pillar.from,
            to: pillar.to
          }
        }));
      }), data.textData.map(function (text, ind) {
        var barAttrs = filter_clone_lib_default()(data.barData[ind].attrs, ['pos', 'size']);
        var textStyle = getStyle(_this4, 'text', [{
          barAttrs: barAttrs
        }, styles.text], [_this4.dataset.rows[ind % renderData.length][Math.floor(ind / renderData.length)].data, Math.floor(ind / renderData.length), ind % renderData.length]); //console.log('aaa', textStyle, styles.text)

        textStyle = filter_clone_lib_default()(textStyle, [], ['barAttrs']);

        if (textStyle.pos) {
          _this4.texts[ind].attrs.pos = textStyle.pos;
          text.to.pos = textStyle.pos;
        }

        return textStyle === false ? null : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({}, text.attrs, textStyle, {
          animation: {
            from: text.from,
            to: text.to
          }
        }));
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        ref: "bgpillar",
        "class": "bgpillars-group"
      }, data.groupData.map(function (pillar, ind) {
        var style = getStyle(_this4, 'backgroundpillar', [], [_this4.dataset.rows[ind % renderData.length], Math.floor(ind / renderData.length)]);
        return style === false ? null : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Sprite"], extends_default()({
          state: bgpillarState[ind],
          states: states.bgpillar
        }, pillar, style));
      })));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = get_default()(getPrototypeOf_default()(Bar.prototype), "renderAttrs", this);

      return attrs;
    }
  }]);

  return Bar;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Bar = (Bar_Bar);
// CONCATENATED MODULE: ./src/visuals/PolarBar/layout.js

function PolarBar_layout_layout(arr, attrs) {
  // 输入
  var data = arr;
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect,
      groupPadAngle = attrs.groupPadAngle,
      activeOffset = attrs.activeOffset;
  var width = clientRect.width,
      height = clientRect.height;
  var barSize = [width, height];
  var groupGap = groupPadAngle || 0;
  var stackGap = attrs.stackGap || 0;
  var radius = attrs.radius || 1;
  var barInnerRadius = attrs.innerRadius || 0;
  var padAngle = attrs.padAngle; // 输出

  var barData = [];
  var bgPillarAttr = {
    opacity: 0.01,
    fillColor: "#FF0000"
  }; // const valueAxis = getAxis(stack, data)

  var valueAxis = axis_axis.call(this, {
    dataSet: data,
    stack: stack,
    splitNumber: splitNumber
  });

  if (!valueAxis || !valueAxis.length) {
    return {
      barData: barData
    };
  }

  var tableSize = Math.min(barSize[0], barSize[1]);
  var axisValueMax = Math.max.apply(this, valueAxis);
  var axisValueMin = Math.min.apply(this, valueAxis);
  var POSITIVE_RATIO = axisValueMax / (axisValueMax - axisValueMin); // 正负柱子高度比例

  var GROUP_BAR_NUM = layout_computerLegend(data); // 图例显示个数

  var GROUP_NUM = data[0].length;
  var BAR_MAX_HEIGHT = 0.5 * radius * tableSize;
  var BAR_HEIGHT_FACTOR = BAR_MAX_HEIGHT / (axisValueMax - axisValueMin);

  if (!stack) {
    // 分组柱状图
    for (var i = 0, len = GROUP_NUM; i < len; i++) {
      var flag = 0; // 计算当前柱子前面有几根被隐藏

      var value = 0;
      var gpData = {
        rects: []
      };
      var groupAngle = (Math.PI * 2 - GROUP_NUM * groupGap) / GROUP_NUM; // 计算单根柱子

      for (var j = 0, lenj = data.length; j < lenj; j++) {
        // if (data[j][i].disabled !== true) {
        //   data[j][i].disabled = false;
        // }
        var barAngle = groupAngle / GROUP_BAR_NUM;
        var startAngle = (groupAngle + groupGap) * i + barAngle * (j - flag) - Math.PI * 0.5;
        value = data[j][i].layoutScaleValue;
        var barHeight = BAR_HEIGHT_FACTOR * value;
        var innerRadius = BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) + barInnerRadius * tableSize * 0.5; //默认中心坐标偏移量0

        var offsetPos = [0, 0];
        var rect = {
          innerRadius: innerRadius,
          outerRadius: innerRadius + barHeight,
          startAngle: startAngle * 180 / Math.PI,
          endAngle: (startAngle + barAngle) * 180 / Math.PI,
          value: data[j][i].value,
          text: data[j][i].text,
          state: data[j][i].state,
          data: data[j][i].data,
          id: i * lenj + j,
          offsetPos: offsetPos
        };

        if (rect.state === "hover") {
          var curAngle = (rect.startAngle + rect.endAngle) / 2 % 360;
          rect.bisectorRadian = layout_transRadius(curAngle); //角平分,角度转弧度,默认是顺时针，角度为相反

          rect.offsetPos = [activeOffset * Math.cos(rect.bisectorRadian), activeOffset * Math.sin(rect.bisectorRadian)]; //选中状态
        }

        if (rect.state === "disabled") {
          rect.endAngle = rect.startAngle;
          rect.radius = 0;
          rect.opacity = 0;
          flag++;
        } else {
          rect.opacity = 1;
          gpData.rects.push(rect);
        }

        if (GROUP_NUM < 2) {
          delete rect.startAngle;
          delete rect.endAngle;
        }

        barData.push(rect);
      }
    }
  } else {
    // 堆叠柱状图
    for (var _i = 0, _len = GROUP_NUM; _i < _len; _i++) {
      var heightSumUp = 0;
      var heightSumDown = 0;
      var _value = 0;
      var _gpData = {
        rects: []
      };

      var _groupAngle = (Math.PI * 2 - GROUP_NUM * groupGap) / GROUP_NUM; // 计算单根柱子


      for (var _j = 0, _lenj = data.length; _j < _lenj; _j++) {
        // if (data[j][i].disabled !== true) {
        //   data[j][i].disabled = false;
        // }
        var _startAngle = (_groupAngle + groupGap) * _i - Math.PI * 0.5;

        _value = data[_j][_i].value;

        var _barHeight = BAR_HEIGHT_FACTOR * _value;

        var _innerRadius = _value < 0 ? BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) - heightSumDown : BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) + heightSumUp;

        _innerRadius = _innerRadius + barInnerRadius * tableSize * 0.5;
        var _offsetPos = [0, 0];
        var _rect = {
          innerRadius: _innerRadius,
          outerRadius: _innerRadius + _barHeight - stackGap,
          startAngle: _startAngle * 180 / Math.PI,
          endAngle: (_startAngle + _groupAngle) * 180 / Math.PI,
          value: data[_j][_i].value,
          text: data[_j][_i].text,
          state: data[_j][_i].state,
          data: data[_j][_i].data,
          offsetPos: _offsetPos
        };

        if (_rect.state === "hover") {
          _rect.strokeColor = "#F00";
        } else {
          delete _rect.strokeColor;
        }

        if (_rect.state === "disabled") {
          _rect.opacity = 0;
        } else {
          _rect.opacity = 1;
          _value < 0 ? heightSumDown = heightSumDown - _barHeight : heightSumUp = heightSumUp + _barHeight;

          _gpData.rects.push(_rect);
        }

        barData.push(_rect);
      }
    }
  } // attachPadAngleOfArr(barData, padAngle)


  return {
    barData: barData
  };
}

function layout_computerLegend(data) {
  var flag = 0;

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].state !== "disabled") {
      flag++;
    }
  }

  if (flag === 0) {// console.warn('data invalid!')
  }

  return flag || 1;
}

function layout_transRadius(angle) {
  return angle / 180 * Math.PI;
}
// CONCATENATED MODULE: ./src/visuals/PolarBar/index.js









function PolarBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PolarBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PolarBar_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PolarBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var PolarBar_PolarBar = /*#__PURE__*/function (_Base) {
  inherits_default()(PolarBar, _Base);

  function PolarBar(attrs) {
    var _this;

    classCallCheck_default()(this, PolarBar);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PolarBar).call(this, attrs));
    _this.type = "polarbar";
    _this.pillars = [];
    _this.hoverIndex = -1;
    _this.timer = null;
    return _this;
  }

  createClass_default()(PolarBar, [{
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回rings,继承base
      var _this$getRenderData = this.getRenderData(),
          arrLayout = _this$getRenderData.arrLayout;

      this.pillars = arrLayout.barData;
      var barData = arrLayout.barData.map(function (item) {
        return {
          from: {
            endAngle: item.startAngle
          },
          to: item
        };
      });
      return {
        barData: barData
      };
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var pillars = this.pillars;
      var pos = this.renderAttrs.pos;

      var _this$getRenderData2 = this.getRenderData(),
          arrLayout = _this$getRenderData2.arrLayout;

      var barData = arrLayout.barData.map(function (nextPillar, i) {
        var curPos = [pos[0] + nextPillar.offsetPos[0], pos[1] + nextPillar.offsetPos[1]];
        nextPillar.pos = curPos;
        return {
          from: PolarBar_objectSpread({}, pillars[i]),
          to: PolarBar_objectSpread({}, nextPillar)
        };
      });
      this.pillars = arrLayout.barData;
      return {
        barData: barData
      };
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var _this2 = this;

      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];

      if (!renderData || renderData.length === 0) {
        return {
          barData: []
        };
      }

      var dataLength = renderData.length > 1 ? renderData.length : renderData[0].length;
      this.legendArr = Array.from({
        length: renderData.length
      }, function () {
        return 1;
      });
      var arrLayout = PolarBar_layout_layout.call(this, renderData, renderAttrs);
      var colors = this.theme.colors;
      var styles = this.renderStyles;
      arrLayout.barData.forEach(function (bar, i) {
        var style = _this2.style("pillar")(bar.attrs, _this2.dataset.rows[i], i);

        bar.fillColor = bar.fillColor || colors[i % dataLength];
        bar.strokeColor = renderAttrs.strokeColor || "#FFF";
        bar.pos = renderAttrs.pos;

        if (!bar.hasOwnProperty("startAngle") || !bar.hasOwnProperty("endAngle")) {
          bar.lineWidth = 0;
        } else {
          bar.lineWidth = 1;
        }

        var barStyle = deepObjectMerge({
          bgcolor: bar.bgcolor || colors[i % dataLength]
        }, styles.bar, style);
        bar = deepObjectMerge(bar, barStyle);
      });
      return {
        arrLayout: arrLayout
      };
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
      return {
        layer: "bar",
        //选中偏移量基数
        activeOffset: 10
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {};
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      var _this3 = this;

      this.timer = setTimeout(function () {
        _this3.dataset.resetState();

        _this3.hoverIndex = -1;
      }, 100);
    }
  }, {
    key: "mousemove",
    value: function mousemove(e, el) {
      clearTimeout(this.timer); // let fun = throttle(function(e, el) {

      var renderData = this.renderData();
      var ind = el.attr("_index");
      var groupInd = Math.floor(ind / renderData.length);

      if (groupInd !== this.hoverIndex) {
        this.dataset.resetState();
        this.dataset[this.renderAttrs.layoutBy === "rows" ? "cols" : "rows"][groupInd].state = "hover";
        this.hoverIndex = groupInd;
      } // }, 30).bind(this);
      // fun(e, el);

    }
  }, {
    key: "groupMousemove",
    value: function groupMousemove(e, el) {
      console.log(el);
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var renderAttrs = this.renderAttrs;
      return this.dataset[renderAttrs.layoutBy];
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this4 = this;

      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          innerRadiusPx = _this$renderAttrs.innerRadiusPx,
          radiusPx = _this$renderAttrs.radiusPx;
      var colors = this.theme.colors;
      var styles = this.renderStyles;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "container",
        ref: "wrap"
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "rings-group",
        onMouseleave: this.mouseleave
      }, data.barData.map(function (ring, ind) {
        var style = getStyle(_this4, "sector", [{
          _index: ind
        }, styles.sector], [_this4.dataset.rows[ind], ind]);
        return ring.state === "disabled" || style === false ? getApp().qcharts.h(Node, null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Ring"], extends_default()({
          onMousemove: _this4.mousemove
        }, style, {
          animation: {
            from: ring.from,
            to: ring.to
          }
        }));
      })));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = get_default()(getPrototypeOf_default()(PolarBar.prototype), "renderAttrs", this);

      var _attrs$clientRect = attrs.clientRect,
          height = _attrs$clientRect.height,
          width = _attrs$clientRect.width,
          top = _attrs$clientRect.top,
          left = _attrs$clientRect.left;
      attrs.pos = [left + width / 2, top + height / 2];
      return attrs;
    }
  }]);

  return PolarBar;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_PolarBar = (PolarBar_PolarBar);
// CONCATENATED MODULE: ./src/visuals/Funnel/layout.js

function Funnel_layout_layout(arr, attrs) {
  // 输入
  var data = arr;
  var align = attrs.align,
      pyramid = attrs.pyramid,
      clientRect = attrs.clientRect;
  var width = clientRect.width,
      height = clientRect.height; // 输出

  var polygons = [];
  var max = arr[0][0].value;
  var widthFactory = width / max;
  var POLYGON_NUM = Funnel_layout_computerLegend(data); // 图例显示个数

  var flag = 0; // 计算当前polygon前面有几个被隐藏

  for (var i = 0, len = data.length; i < len; i++) {
    var polygon = {
      colse: true,
      lineWidth: 3,
      points: []
    };
    var value = data[i][0].value;
    var offset = 0;
    var textAnchor = [0, 0.5];

    if (align === "center") {
      textAnchor = [0.5, 0.5];
      offset = 0.5;
    } else if (align === "right") {
      offset = 1;
      textAnchor = [1, 0.5];
    }

    polygon.points.push((max - value) * offset * widthFactory, height * (i - flag) / POLYGON_NUM);
    polygon.points.push((max * offset + value * (1 - offset)) * widthFactory, height * (i - flag) / POLYGON_NUM);

    if (i - flag + 1 < POLYGON_NUM) {
      var counter = 1;

      while (data[i + counter][0].state === "disabled") {
        counter++;
      }

      var nextValue = data[i + counter][0].value;
      polygon.points.push((max * offset + nextValue * (1 - offset)) * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
      polygon.points.push((max - nextValue) * offset * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
    } else {
      if (pyramid) {
        polygon.points.push(offset * width, height);
      } else {
        polygon.points.push((max * offset + value * (1 - offset)) * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
        polygon.points.push((max - value) * offset * widthFactory, height * (i - flag + 1) / POLYGON_NUM);
      }
    }

    polygon.opacity = 1;

    if (data[i][0].state === "disabled") {
      polygon.points[6] = polygon.points[0];
      polygon.points[7] = polygon.points[1];
      polygon.points[4] = polygon.points[2];
      polygon.points[5] = polygon.points[3];
      polygon.opacity = 0;
      flag++;
    }

    polygon.labelAttrs = {
      opacity: !data[i][0].state === "disabled" ? 1 : 0,
      text: Math.round(100 * value / max) + "%",
      anchor: textAnchor,
      pos: [width * offset + (0.5 - offset) * 10, (i - flag + 0.5) * height / POLYGON_NUM],
      fillColor: "#FFF",
      fontSize: "12px"
    };
    polygons.push(polygon);
  }

  return polygons;
}

function Funnel_layout_computerLegend(data) {
  var flag = 0;

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].state !== "disabled") {
      flag++;
    }
  }

  if (flag === 0) {
    console.warn("data invalid!");
  }

  return flag || 1;
}
// CONCATENATED MODULE: ./src/visuals/Funnel/index.js











function Funnel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Funnel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Funnel_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Funnel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Funnel_Funnel = /*#__PURE__*/function (_Base) {
  inherits_default()(Funnel, _Base);

  function Funnel(attrs) {
    var _this;

    classCallCheck_default()(this, Funnel);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Funnel).call(this, attrs));

    defineProperty_default()(assertThisInitialized_default()(_this), "onMousemove", throttle(function (event, el) {
      if (_this.groups.length && !isNaN(event.x) && !isNaN(event.y)) {
        var curInd = 0;

        var _el$getOffsetPosition = el.getOffsetPosition(event.x, event.y),
            _el$getOffsetPosition2 = slicedToArray_default()(_el$getOffsetPosition, 2),
            x = _el$getOffsetPosition2[0],
            y = _el$getOffsetPosition2[1];

        if (!_this.renderAttrs.transpose) {
          //获取 x轴坐标的刻度
          var width = _this.groups[0].size[0]; //转换canvas坐标到当前group的相对坐标

          curInd = Math.floor(x / width);
        } else {
          var _width = _this.groups[0].size[1]; //转换canvas坐标到当前group的相对坐标

          curInd = Math.floor(y / _width);
        }

        if (curInd < 1) {
          curInd = 0;
        } else if (curInd > _this.groups.length - 1) {
          curInd = _this.groups.length - 1;
        }

        if (_this.hoverIndex !== curInd) {
          var bgpillarState = _this.renderAttrs.bgpillarState;
          bgpillarState[curInd] = "hover";
          bgpillarState[_this.hoverIndex] = "defualt";

          _this.attr("bgpillarState", bgpillarState);

          _this.dataset.resetState();

          _this.dataset.cols[curInd].state = "hover";
          _this.hoverIndex = curInd;
        }
      }
    }, 16, true));

    defineProperty_default()(assertThisInitialized_default()(_this), "myClick", function () {
      console.log("myclick");
    });

    _this.type = "funnel";
    _this.polygons = null;
    _this.hoverIndex = -1;
    return _this;
  }

  createClass_default()(Funnel, [{
    key: "beforeRender",
    value: function beforeRender() {
      //渲染前的处理函数，返回lines,继承base---------before
      var _this$getRenderData = this.getRenderData(),
          polygons = _this$getRenderData.polygons;

      polygons = polygons.map(function (plg) {
        return {
          from: {
            points: plg.points.length === 8 ? [plg.points[6], plg.points[7], plg.points[4], plg.points[5], plg.points[4], plg.points[5], plg.points[6], plg.points[7]] : [plg.points[4], plg.points[5], plg.points[4], plg.points[5], plg.points[4], plg.points[5]]
          },
          to: Funnel_objectSpread({
            pos: [0, 0]
          }, plg)
        };
      });
      this.polygons = polygons;
      return {
        polygons: polygons
      };
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var oldPolygons = this.polygons;

      var _this$getRenderData2 = this.getRenderData(),
          polygons = _this$getRenderData2.polygons;

      polygons = polygons.map(function (polygon, i) {
        return {
          from: {
            points: oldPolygons[i].to.points
          },
          to: Funnel_objectSpread({}, polygon)
        };
      });
      this.polygons = polygons;
      return {
        polygons: polygons
      };
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var _this2 = this;

      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];
      var polygons = Funnel_layout_layout(renderData, renderAttrs);
      var colors = this.theme.colors;
      var styles = this.renderStyles;
      polygons = polygons.map(function (plg, i) {
        var style = _this2.style("polygon")(plg.attrs, _this2.dataset.rows[i], i);

        var plgStyle = deepObjectMerge({
          fillColor: plg.bgcolor || colors[i]
        }, styles.funnel, style);
        plg = deepObjectMerge(plg, plgStyle);
        return plg;
      });
      return {
        polygons: polygons
      };
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      var renderData = this.dataset["rows"];
      var stateArray = Array.from({
        length: renderData[0].length
      }, function () {
        return "defalut";
      }); // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式

      return {
        layer: "bar",
        bgpillarState: stateArray,
        states: {
          bgpillar: {
            animation: {
              duration: 20
            },
            "default": {
              opacity: 0.01
            },
            hover: {
              opacity: 0.1
            }
          }
        }
      };
    }
  }, {
    key: "defaultStyles",
    value: function defaultStyles() {
      // 默认的样式,继承base
      return {};
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave(e, el) {
      this.dataset.resetState();
      var bgpillarState = this.renderAttrs.bgpillarState;
      bgpillarState[this.hoverIndex] = "defualt";
      this.attr("bgpillarState", bgpillarState);
      this.hoverIndex = -1;
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          bgpillarState = _this$renderAttrs.bgpillarState,
          states = _this$renderAttrs.states;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        "class": "container",
        ref: "wrap",
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height]
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        ref: "pillars",
        "class": "pillars-group",
        bgcolor: "#FF0"
      }, data.polygons.map(function (pillar, ind) {
        return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({}, pillar.from, {
          animation: {
            from: pillar.from,
            to: pillar.to
          }
        }));
      })));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = get_default()(getPrototypeOf_default()(Funnel.prototype), "renderAttrs", this);

      return attrs;
    }
  }]);

  return Funnel;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Funnel = (Funnel_Funnel);
// CONCATENATED MODULE: ./src/utils/color.js
function hexToRgba(hex, opacity) {
  // 16进制颜色转rgba
  if (/^rgba\(.+\)$/.test(hex)) {
    return hex;
  }

  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');

    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = '0x' + c.join('');
    return 'rgba(' + [c >> 16 & 255, c >> 8 & 255, c & 255].join(',') + ',' + opacity + ')';
  }

  throw new Error('Bad Hex');
}
function randomHexColor() {
  // 随机生成十六进制颜色
  var random = Math.floor(Math.random() * 16777216).toString(16); // 生成ffffff以内16进制数

  while (random.length < 6) {
    // while循环判断hex位数，少于6位前面加0凑够6位
    random = "0".concat(random);
  }

  return "#".concat(random);
}
// CONCATENATED MODULE: ./src/visuals/Scatter/layout.js




function Scatter_layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Scatter_layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Scatter_layout_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Scatter_layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var layout_getDataRange = function getDataRange(data) {
  if (data.length === 0) {
    return [0, 1];
  }

  var min = Math.min.apply(Math, toConsumableArray_default()(data));
  var max = Math.max.apply(Math, toConsumableArray_default()(data));
  return [min, max];
};

var layout_getBigRange = function getBigRange(data) {
  if (data.length === 0) {
    return [0, 1];
  }

  var _getDataRange = layout_getDataRange(data),
      _getDataRange2 = slicedToArray_default()(_getDataRange, 2),
      min = _getDataRange2[0],
      max = _getDataRange2[1];

  var n = Math.round(min / 10) - 1;
  var m = Math.round(max / 10) + 1;
  return [n * 10, m * 10];
};

var layout_updateSectionVal = function updateSectionVal(section, newSection) {
  var min = newSection.min,
      max = newSection.max;

  if (jsType(min) === 'number') {
    section[0] = min;
  }

  if (jsType(max) === 'number') {
    section[1] = max;
  }
};

function Scatter_layout_layout(dataSet, size, layoutWay) {
  var _size = slicedToArray_default()(size, 2),
      width = _size[0],
      height = _size[1];

  var _dataSet$option = dataSet.option,
      textField = _dataSet$option.text,
      valueField = _dataSet$option.value;

  var allData = toConsumableArray_default()(dataSet); // 如果X轴是文本框，则进行均分


  var maxLen = layout_getDataRange(dataSet.rows.map(function (d) {
    return d.length;
  }))[1];
  var xDomain = [0, maxLen - 1];
  var xSection = [0, maxLen - 1];
  var xIsTextData = allData.some(function (d) {
    return jsType(d.text) === 'string';
  });

  if (!xIsTextData) {
    xSection = layout_getBigRange(allData.map(function (d) {
      return d.text;
    }));
    var xScales = axis_axis.call(this, {
      dataSet: data,
      stack: false,
      field: textField,
      section: xSection
    });
    xDomain = layout_getDataRange(xScales);
  }

  var yIsTextData = allData.some(function (d) {
    return jsType(d.value) === 'string';
  });

  if (yIsTextData) {
    throw new Error("Scatter's value category data should be Number!");
  }

  var ySection = layout_getBigRange(allData.map(function (d) {
    return d.layoutScaleValue;
  }));
  var yScales = axis_axis.call(this, {
    dataSet: data,
    stack: false,
    field: 'layoutScaleValue',
    section: ySection
  });
  var yDomain = layout_getDataRange(yScales);

  if (layoutWay) {
    if (layoutWay[textField]) {
      layout_updateSectionVal(xSection, layoutWay[textField]);
    }

    if (layoutWay[valueField]) {
      layout_updateSectionVal(ySection, layoutWay[valueField]);
    }
  }

  var newLayoutWay = {};
  newLayoutWay[textField] = {
    min: xSection[0],
    max: xSection[1]
  };
  newLayoutWay[valueField] = {
    min: ySection[0],
    max: ySection[1]
  };
  var xLinear = scaleLinear().domain(xDomain).range([0, width]);
  var yLinear = scaleLinear().domain(yDomain).range([0, height]);
  var resultData = dataSet.rows.map(function (dArry) {
    var attrs = dArry.map(function (d, i) {
      var x = xIsTextData ? i : d.text;
      var y = d.layoutScaleValue;
      var pos = [xLinear(x), height - yLinear(y)];
      return {
        pos: pos,
        radius: 5,
        anchor: [1, 1],
        dataOrigin: Scatter_layout_objectSpread({}, d.data),
        state: d.state,
        name: dArry.name,
        col: d.col,
        row: d.row
      };
    });
    return {
      name: dArry.name,
      state: dArry.state,
      attrs: attrs
    };
  });
  return {
    data: resultData,
    layoutWay: newLayoutWay
  };
}
// CONCATENATED MODULE: ./src/visuals/Scatter/index.js











function Scatter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Scatter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Scatter_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Scatter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Scatter_Scatter = /*#__PURE__*/function (_BaseVisual) {
  inherits_default()(Scatter, _BaseVisual);

  function Scatter() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, Scatter);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Scatter).call(this, attrs));
    _this.type = "scatter";
    _this.scatterData = [];
    _this.guideLineData = [];
    return _this;
  }

  createClass_default()(Scatter, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: "scatter",
        labelField: null,
        areaField: null,
        //气泡大小字段值，不设置此值则为散点图
        areaRange: null,
        // 面积映射
        showGuideLine: false,
        layoutWay: null
      };
    }
  }, {
    key: "processData",
    value: function processData() {
      var _this2 = this;

      var dataSet = this.dataset;
      var _this$renderAttrs = this.renderAttrs,
          layoutWay = _this$renderAttrs.layoutWay,
          clientRect = _this$renderAttrs.clientRect;

      var _layout$call = Scatter_layout_layout.call(this, dataSet, [clientRect.width, clientRect.height], layoutWay),
          data = _layout$call.data,
          newLayoutWay = _layout$call.layoutWay;

      deepObjectMerge(this.renderAttrs.layoutWay || {}, newLayoutWay);
      data.forEach(function (item, i) {
        var color = _this2.theme.colors[i];
        var fillColor = hexToRgba(color, 0.3);
        item.attrs.forEach(function (di) {
          di.strokeColor = color;
          di.fillColor = fillColor;
        });
      });
      return data;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this3 = this;

      get_default()(getPrototypeOf_default()(Scatter.prototype), "beforeUpdate", this).call(this);

      var updateData = this.processData();
      var temp = updateData.map(function (row) {
        return deepObjectMerge({}, row);
      });
      updateData.forEach(function (row, ind) {
        var oldRow = _this3.scatterData[ind];
        row.attrs.forEach(function (cell, cInd) {
          var radius = _this3.getRealRadius(Scatter_objectSpread({}, cell));

          cell.radius = radius;

          if (oldRow && oldRow.attrs[cInd]) {
            var oldCell = oldRow.attrs[cInd];

            var toPos = toConsumableArray_default()(cell.pos);

            var fromPos = oldCell.animation.to && oldCell.animation.to.pos ? toConsumableArray_default()(oldCell.animation.to.pos) : toConsumableArray_default()(oldCell.pos); // 位置相同

            if (toPos.toString() === fromPos.toString()) {
              var fromRadius = radius;
              var toRadius = radius; //default-> disabled

              if (cell.state === "disabled") {
                toRadius = 0;
              } // old is disabled


              if (oldCell.animation.to.radius == 0) {
                fromRadius = 0;
              }

              cell.animation = {
                from: {
                  radius: fromRadius
                },
                to: {
                  radius: toRadius
                }
              };
            } else {
              cell.animation = {
                from: {
                  pos: fromPos
                },
                to: {
                  pos: toPos
                }
              };
            }
          } else {
            cell.animation = {
              from: {
                radius: 0
              },
              to: {
                radius: radius
              }
            };
          }
        });
      });
      this.scatterData = temp;
      return updateData;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      var _this4 = this;

      get_default()(getPrototypeOf_default()(Scatter.prototype), "beforeRender", this).call(this);

      var renderData = this.processData();
      this.scatterData = renderData.map(function (row) {
        return deepObjectMerge({}, row);
      });
      renderData.forEach(function (row) {
        row.attrs.forEach(function (cell) {
          var radius = _this4.getRealRadius(Scatter_objectSpread({}, cell));

          cell.animation = {
            from: {
              radius: 0
            },
            to: {
              radius: radius
            }
          };
        });
      });
      return renderData;
    }
  }, {
    key: "getRealRadius",
    value: function getRealRadius(attr) {
      var _this$renderAttrs2 = this.renderAttrs,
          areaRange = _this$renderAttrs2.areaRange,
          areaField = _this$renderAttrs2.areaField;
      var radius = attr.radius,
          dataOrigin = attr.dataOrigin; // 面积字段未定义，直接返回半径

      if (!areaField || !dataOrigin.hasOwnProperty(areaField)) {
        return radius;
      } // 面积范围未定义，直接返回数据中的面积


      if (!areaRange) {
        return dataOrigin[areaField];
      }

      var allData = toConsumableArray_default()(this.dataset).map(function (d) {
        return d.data[areaField];
      }).sort(function (a, b) {
        return a - b;
      });

      var linear = scaleLinear().domain([allData[0], allData[allData.length - 1]]).range(areaRange);
      var realArea = linear(dataOrigin[areaField]);
      return realArea;
    }
  }, {
    key: "onMouseenter",
    value: function onMouseenter(event, el) {
      var arc = el.children[0];
      var _arc$attributes = arc.attributes,
          rowInd = _arc$attributes.row,
          colInd = _arc$attributes.col,
          pos = _arc$attributes.pos;
      this.dataset.forEach(function (cell) {
        if (cell.row === rowInd && cell.col === colInd) {
          cell.state = "hover";
        }
      });
      var showGuideLine = this.renderAttrs.showGuideLine;

      if (showGuideLine) {
        var _this$renderAttrs$cli = this.renderAttrs.clientRect,
            height = _this$renderAttrs$cli.height,
            width = _this$renderAttrs$cli.width;
        this.guideLineData = [[[0, pos[1]], [width, pos[1]]], [[pos[0], 0], [pos[0], height]]];
      }
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave() {
      this.dataset.resetState();
      this.guideLineData = [];
    }
  }, {
    key: "renderGuideLine",
    value: function renderGuideLine() {
      if (this.guideLineData.length > 0) {
        return this.guideLineData.map(function (points) {
          return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], {
            points: points,
            strokeColor: "#ddd",
            lineWidth: 1,
            translate: [0.5, 0.5]
          });
        });
      }

      return;
    }
  }, {
    key: "renderScatter",
    value: function renderScatter(data) {
      var _this5 = this;

      var labelField = this.renderAttrs.labelField;
      var scatters = data.map(function (item, di) {
        return item.attrs.map(function (attr, ci) {
          var style = _this5.style('point')(attr, Scatter_objectSpread({}, attr.dataOrigin), ci);

          if (style === false) {
            return;
          }

          var labelAttr = null;

          if (labelField) {
            var _style = _this5.style('label')(attr, Scatter_objectSpread({}, attr.dataOrigin), ci);

            if (_style !== false) {
              if (attr.dataOrigin.hasOwnProperty(labelField)) {
                var strokeColor = attr.strokeColor,
                    other = objectWithoutProperties_default()(attr, ["strokeColor"]);

                var text = attr.dataOrigin[labelField];
                labelAttr = deepObjectMerge(other, {
                  fillColor: strokeColor,
                  text: text,
                  anchor: [0.5, 0.5],
                  fontSize: '12px',
                  zIndex: 10 + di + ci
                }, _style);
              }
            }
          }

          var hStyle = _this5.style('point:hover')(attr, attr.dataOrigin, ci) || {};
          var stateStyle = attr.state === 'hover' ? hStyle : {};
          return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
            onMouseenter: _this5.onMouseenter,
            onMouseleave: _this5.onMouseleave
          }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Arc"], extends_default()({}, attr, style, stateStyle, {
            zIndex: 9 + di + ci
          })), labelAttr ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], labelAttr) : null);
        });
      });
      return scatters.reduce(function (pre, cur) {
        return pre.concat(cur);
      }, []);
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this$renderAttrs$cli2 = this.renderAttrs.clientRect,
          height = _this$renderAttrs$cli2.height,
          width = _this$renderAttrs$cli2.width,
          left = _this$renderAttrs$cli2.left,
          top = _this$renderAttrs$cli2.top;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        size: [width, height],
        pos: [left, top],
        zIndex: 10
      }, this.renderScatter(data), this.renderGuideLine());
    }
  }, {
    key: "rendered",
    value: function rendered() {}
  }, {
    key: "renderAttrs",
    get: function get() {
      return Scatter_objectSpread({}, get_default()(getPrototypeOf_default()(Scatter.prototype), "renderAttrs", this));
    }
  }]);

  return Scatter;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Scatter = (Scatter_Scatter);
// CONCATENATED MODULE: ./src/utils/ellipse2path.js
//通过圆生成path
function ellipse2path(cx, cy, rx, ry) {
  //非数值单位计算，如当宽度像100%则移除
  if (isNaN(cx - cy + rx - ry)) return;
  var path = 'M' + (cx - rx) + ' ' + cy + 'a' + rx + ' ' + ry + ' 0 1 0 ' + 2 * rx + ' 0' + 'a' + rx + ' ' + ry + ' 0 1 0 ' + -2 * rx + ' 0' + 'z';
  return path;
}

/* harmony default export */ var utils_ellipse2path = (ellipse2path);
// CONCATENATED MODULE: ./src/visuals/Wave/index.js









function Wave_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Wave_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Wave_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Wave_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Wave_Wave = /*#__PURE__*/function (_Base) {
  inherits_default()(Wave, _Base);

  function Wave(attrs) {
    var _this;

    classCallCheck_default()(this, Wave);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Wave).call(this, attrs)); //波纹振偏移量

    _this.offsetR = 50;
    _this.tickId = '';
    _this.oldAttr = {};
    return _this;
  }

  createClass_default()(Wave, [{
    key: "rendered",
    value: function rendered() {
      //path的高宽
      this.wave();
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
      return {
        amplitude: 8,
        //振幅
        wavelength: 300,
        //波长`
        radius: 150,
        percent: 65,
        formatter: function formatter(per) {
          return per + '%';
        }
      };
    }
  }, {
    key: "wave",
    value: function wave() {
      var _this2 = this;

      var currentR = 0;
      var per = 4;
      var clipWave = this.$refs['clipWave'];
      var clipPath = this.$refs['clipPath'] || clipWave;
      var pathHeight = clipPath.originalContentRect[3];
      var _this$renderAttrs = this.renderAttrs,
          percent = _this$renderAttrs.percent,
          wavelength = _this$renderAttrs.wavelength,
          amplitude = _this$renderAttrs.amplitude,
          clientRect = _this$renderAttrs.clientRect,
          animation = _this$renderAttrs.animation,
          shape = _this$renderAttrs.shape;
      var perR = 24 / animation.duration;
      var currentX = 0 - clientRect.left; //以路径的top为起点，计算百分比

      var startY = pathHeight * (100 - percent) / 100 + clipPath.originalContentRect[1];
      this.tickId = Object(spritejs_min_js_amd_spritejs_umd_spritejs_["requestAnimationFrame"])(function (_) {
        _this2.offsetR += perR;
        var points = [[currentX, startY + pathHeight]];
        points.push([currentX, startY + amplitude * Math.sin(currentR + _this2.offsetR)]);

        while (currentX < clientRect.width + clientRect.left + clientRect.right) {
          points.push([currentX, startY + amplitude * Math.sin(currentR + _this2.offsetR)]);
          currentX += wavelength / (per * 2);
          currentR += Math.PI / per;
        }

        var lastY = amplitude * Math.sin(currentR + _this2.offsetR);
        points.push([currentX, startY + lastY]);
        points.push([currentX, startY + lastY]);
        points.push([currentX, startY + pathHeight]);
        clipWave.attr({
          points: points,
          clipPath: ' ' + shape
        });

        if (_this2.offsetR >= 2 * Math.PI) {
          _this2.offsetR = _this2.offsetR % (2 * Math.PI);
        }

        _this2.wave();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$renderAttrs2 = this.renderAttrs,
          clientRect = _this$renderAttrs2.clientRect,
          shape = _this$renderAttrs2.shape,
          pos = _this$renderAttrs2.pos,
          formatter = _this$renderAttrs2.formatter,
          percent = _this$renderAttrs2.percent,
          radius = _this$renderAttrs2.radius;
      var renderStyles = this.renderStyles;
      var waveStyle = getStyle(this, 'wave', renderStyles.wave);
      var shapeStyle = getStyle(this, 'shape', renderStyles.shape);
      var textStyle = getStyle(this, 'text', renderStyles.text);
      var animation = {
        from: {
          pos: this.oldAttr.pos || pos
        },
        to: {
          pos: pos
        }
      };
      this.oldAttr = Wave_objectSpread({}, this.renderAttrs);
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        zIndex: 1,
        "class": "container",
        pos: [clientRect.left, clientRect.top],
        size: [clientRect.width, clientRect.height]
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        animation: animation
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Path"], {
        ref: "clipPath1",
        d: shape,
        fillColor: shapeStyle.fillColor
      }), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({
        ref: "clipWave"
      }, waveStyle, {
        clipPath: shape,
        smooth: true
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Path"], {
        ref: "clipPath",
        d: shape,
        strokeColor: shapeStyle.strokeColor,
        lineWidth: shapeStyle.lineWidth
      }), textStyle === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({
        text: formatter(percent)
      }, textStyle, {
        pos: [radius, radius],
        anchor: [0.5]
      }))));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
      var attrs = get_default()(getPrototypeOf_default()(Wave.prototype), "renderAttrs", this);

      var clientRect = attrs.clientRect;
      var width = Math.floor(clientRect.width);
      var height = Math.floor(clientRect.height);
      var radius = attrs.radius;
      attrs.pos = [0, 0];

      if (!attrs.shape) {
        attrs.pos = [width / 2 - radius, height / 2 - radius];
        attrs.shape = utils_ellipse2path(radius, radius, attrs.radius, attrs.radius);
      }

      return attrs;
    }
  }]);

  return Wave;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Wave = (Wave_Wave);
// CONCATENATED MODULE: ./src/visuals/Gauge/index.js










function Gauge_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Gauge_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Gauge_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Gauge_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * 根据给定参数，生成仪表盘刻度的坐标以及刻度文字标注的坐标
 * @param {Number} radius 仪表盘半径
 * @param {Number} angle 刻度的角度 单位度
 * @param {Number} tickLength 刻度的长度
 * @param {Number} labelOffset 刻度文字的偏移值
 * @param {Boolean} isInner 刻度是否在仪表盘内部
 */

function Gauge_tickLine(radius, angle, tickLength, labelOffset, isInner) {
  var radian = angle * Math.PI / 180;
  var cos = Math.cos(radian);
  var sin = Math.sin(radian); // 起点

  var x = cos * radius,
      y = sin * radius; // 中点

  var _ref = isInner ? [x - tickLength * cos, y - tickLength * sin] : [x + tickLength * cos, y + tickLength * sin],
      _ref2 = slicedToArray_default()(_ref, 2),
      cX0 = _ref2[0],
      cY0 = _ref2[1];

  var labelPos = isInner ? [x - (tickLength + labelOffset) * cos, y - (tickLength + labelOffset) * sin] : [x + (tickLength + labelOffset) * cos, y + (tickLength + labelOffset) * sin];
  var anchorX = isInner ? cos : -cos;
  var anchorY = isInner ? sin : -sin;
  var anchor = [0.5, 0.5];

  if (Math.abs(anchorX) > Math.abs(anchorY)) {
    anchor[0] = anchorX < 0 ? 0 : anchorX;
  } else {
    anchor[1] = anchorY > 0 ? anchorY : 0;
  }

  return {
    points: [[x, y], [cX0, cY0]],
    labelPos: labelPos,
    anchor: anchor
  };
}

var Gauge_Gauge = /*#__PURE__*/function (_BaseVisual) {
  inherits_default()(Gauge, _BaseVisual);

  function Gauge(attrs) {
    var _this;

    classCallCheck_default()(this, Gauge);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Gauge).call(this, attrs));
    _this.gaugeAnimations = [];
    _this.type = 'Gauge';
    _this.oldPos = null;

    _this.style('tickText', true);

    _this.style('tickLine', true);

    return _this;
  }

  createClass_default()(Gauge, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'gauge',
        min: 0,
        // 刻度最小值
        max: 100,
        // 刻度最大值
        percent: 50,
        // 指针值
        lineCap: 'round',
        _useBuiltInColors: false,
        // 默认颜色不使用渐变色
        lineWidth: 10,
        // 仪表盘圆弧宽度
        startAngle: 140,
        // 仪表盘弧度起始角度，arc 角度顺时针增加，0度为屏幕X轴方向
        endAngle: 400,
        // 仪表盘弧度终止角度
        strokeBgcolor: '#dde3ea',
        // 仪表盘弧度的背景色
        title: function title(d) {
          return d;
        },
        tickStep: 10,
        // tick 步进，生成 tick 的数量为 (max - min) / tickStep
        tickLength: 10,
        // 刻度长度，为负值时向外绘制
        labelOffset: 5,
        tickFormatter: function tickFormatter(d) {
          return d;
        } // 刻度文本格式化

      };
    }
  }, {
    key: "transform",
    value: function transform() {
      var _this$renderAttrs = this.renderAttrs,
          radius = _this$renderAttrs.radius,
          startAngle = _this$renderAttrs.startAngle,
          endAngle = _this$renderAttrs.endAngle,
          min = _this$renderAttrs.min,
          max = _this$renderAttrs.max,
          percent = _this$renderAttrs.percent;
      var total = Math.abs(max - min);
      return {
        dataOrigin: percent,
        startAngle: startAngle,
        radius: radius,
        endAngle: (endAngle - startAngle) * (percent - min) / total + startAngle,
        strokeColor: this.color(0)
      };
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      get_default()(getPrototypeOf_default()(Gauge.prototype), "beforeRender", this).call(this);

      var arc = this.transform();
      this.gaugeAnimations = {
        from: {
          startAngle: arc.startAngle,
          endAngle: arc.startAngle
        },
        to: {
          startAngle: arc.startAngle,
          endAngle: arc.endAngle
        }
      };
      return arc;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      get_default()(getPrototypeOf_default()(Gauge.prototype), "beforeUpdate", this).call(this);

      var arc = this.transform();
      var animation = {
        from: {
          startAngle: arc.startAngle,
          endAngle: arc.startAngle
        },
        to: {
          startAngle: arc.startAngle,
          endAngle: arc.endAngle
        }
      };

      if (this.gaugeAnimations) {
        animation.from = Gauge_objectSpread({}, this.gaugeAnimations.to);
      }

      this.gaugeAnimations = Gauge_objectSpread({}, animation);
      return arc;
    }
  }, {
    key: "color",
    value: function color(i) {
      return this.theme.colors[i];
    }
    /**
     * 渲染指针
     * @param {Number} angle 角度
     */

  }, {
    key: "renderPointer",
    value: function renderPointer(d, maxTickTextFontSize) {
      var style = this.style('pointer')(d, d.dataOrigin, 0);

      if (style === false) {
        return;
      } // 动画


      var _this$gaugeAnimations = this.gaugeAnimations,
          from = _this$gaugeAnimations.from,
          to = _this$gaugeAnimations.to; // rotate角度起始位置为屏幕Y轴方向，arc角度为X轴方向

      var fromRotate = from.endAngle + 90;
      var toRotate = to.endAngle + 90;
      var pointerAnimation = {
        from: {
          rotate: fromRotate
        },
        to: {
          rotate: toRotate
        }
      }; // 半径

      var _this$renderAttrs2 = this.renderAttrs,
          radius = _this$renderAttrs2.radius,
          pointerWidth = _this$renderAttrs2.pointerWidth,
          center = _this$renderAttrs2.center,
          tickLength = _this$renderAttrs2.tickLength,
          labelOffset = _this$renderAttrs2.labelOffset,
          lineWidth = _this$renderAttrs2.lineWidth; // 指针顶部离仪表盘的距离

      var pointerTopOffset = tickLength + lineWidth + labelOffset + maxTickTextFontSize;

      if (tickLength < 0) {
        pointerTopOffset = pointerTopOffset - tickLength - labelOffset;
      } // 指针长度


      var pointerLen = radius - pointerTopOffset; // 指针宽度

      var pWidth = radius / 10; // 指针颜色

      var color = this.color(0);

      var _center = slicedToArray_default()(center, 2),
          x = _center[0],
          y = _center[1];

      var attr = {
        fillColor: color,
        rotate: fromRotate,
        transformOrigin: center,
        zIndex: 11,
        points: [[x, y], [x - pWidth / 2, y - pointerLen * 0.1], [x, y - pointerLen], [x + pWidth / 2, y - pointerLen * 0.1], [x, y]],
        close: true
      };
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({}, attr, style, {
        animation: pointerAnimation
      }));
    }
  }, {
    key: "isStyleExist",
    value: function isStyleExist(name) {
      var style = this.style("".concat(name));
      return Boolean(style);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$renderAttrs3 = this.renderAttrs,
          _useBuiltInColors = _this$renderAttrs3._useBuiltInColors,
          title = _this$renderAttrs3.title,
          percent = _this$renderAttrs3.percent,
          center = _this$renderAttrs3.center,
          radius = _this$renderAttrs3.radius,
          startAngle = _this$renderAttrs3.startAngle,
          endAngle = _this$renderAttrs3.endAngle,
          lineWidth = _this$renderAttrs3.lineWidth,
          lineCap = _this$renderAttrs3.lineCap,
          strokeBgcolor = _this$renderAttrs3.strokeBgcolor,
          clientRect = _this$renderAttrs3.clientRect;
      var labelCenter = [center[0], center[1] * 1.25];
      var ticks = this.ticks;
      var tickLine = this.isStyleExist('tickLine');
      var tickText = this.isStyleExist('tickText');
      var realTitle = title || percent;
      var gradientColor = null; // 默认使用内置的渐变配色方案

      if (_useBuiltInColors !== false) {
        var colors = this.theme.colors.reverse();
        var gradientOpt = {
          vector: [0, 0, center[0] * 2, center[1] * 2],
          colors: [{
            color: colors[0],
            offset: 0
          }, {
            color: colors[1],
            offset: 0.3
          }, {
            color: colors[2],
            offset: 1
          }]
        };
        gradientColor = new spritejs_min_js_amd_spritejs_umd_spritejs_["Gradient"](gradientOpt);
      }

      var maxTickTextFontSize = 16;

      if (tickText !== false) {
        ticks.map(function (tick, j) {
          var style = _this2.style('tickText')(data, data.dataOrigin, j);

          if (style && style.fontSize) {
            if (jsType(style.fontSize) === 'number' && maxTickTextFontSize < style.fontSize) {
              maxTickTextFontSize = style.fontSize;
            }

            if (jsType(style.fontSize) === 'string') {
              var realSize = Number(style.fontSize.replace('px', ''));

              if (jsType(realSize) === 'number' && maxTickTextFontSize < realSize) {
                maxTickTextFontSize = realSize;
              }
            }
          }
        });
      }

      var gPos = [clientRect.left, clientRect.top];
      var gSize = [clientRect.width, clientRect.height];
      var gAnimation = {
        from: {
          pos: this.oldPos ? this.oldPos : gPos
        },
        to: {
          pos: gPos
        }
      };
      this.oldPos = gPos;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        pos: gPos,
        size: gSize,
        animation: gAnimation
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Arc"], {
        pos: center,
        lineWidth: lineWidth,
        lineCap: lineCap,
        startAngle: startAngle,
        endAngle: endAngle,
        strokeColor: strokeBgcolor,
        radius: radius,
        zIndex: 10
      }), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Arc"], extends_default()({
        pos: center,
        lineCap: lineCap,
        lineWidth: lineWidth
      }, data, {
        animation: this.gaugeAnimations
      }, gradientColor ? {
        strokeColor: gradientColor
      } : {
        strokeColor: this.color(0)
      }, this.style('arc')(data, data.dataOrigin, 0), {
        zIndex: 11
      })), this.renderPointer(data, maxTickTextFontSize), realTitle ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({
        text: jsType(realTitle) === 'function' ? realTitle(data.dataOrigin) : realTitle,
        pos: labelCenter,
        textAlign: "center",
        zIndex: 10,
        anchor: [0.5, 1]
      }, this.style('title')(data, data.dataOrigin, 0))) : null, tickLine !== false || tickText !== false ? ticks.map(function (tick, j) {
        return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
          pos: center,
          anchor: [0, 0],
          zIndex: 1010
        }, tickLine !== false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({
          points: tick.points,
          strokeColor: strokeBgcolor
        }, _this2.style('tickLine')(data, data.dataOrigin, j))) : null, tickText !== false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({}, tick.label, _this2.style('tickText')(data, data.dataOrigin, j))) : null);
      }) : null);
    }
  }, {
    key: "rendered",
    value: function rendered() {
      var _this3 = this;

      this.on('resize', function () {
        return _this3.forceUpdate();
      });
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      var attrs = get_default()(getPrototypeOf_default()(Gauge.prototype), "renderAttrs", this); // 仪表盘半径


      var clientRect = attrs.clientRect;
      var height = clientRect.height,
          width = clientRect.width;
      var size = [width, height];
      var radius = ~~Math.min.apply(size, size.map(function (v) {
        return v / 2;
      })); // 指针宽度

      var pointerWidth = radius / 10; // 绘图中心

      var center = [width / 2, height / 2];
      return Gauge_objectSpread({}, attrs, {
        radius: radius,
        pointerWidth: pointerWidth,
        center: center
      });
    }
  }, {
    key: "ticks",
    get: function get() {
      var _this$renderAttrs4 = this.renderAttrs,
          min = _this$renderAttrs4.min,
          max = _this$renderAttrs4.max,
          radius = _this$renderAttrs4.radius,
          startAngle = _this$renderAttrs4.startAngle,
          endAngle = _this$renderAttrs4.endAngle,
          lineWidth = _this$renderAttrs4.lineWidth,
          tickStep = _this$renderAttrs4.tickStep,
          tickLength = _this$renderAttrs4.tickLength,
          labelOffset = _this$renderAttrs4.labelOffset,
          tickFormatter = _this$renderAttrs4.tickFormatter;
      var count = Math.abs(max - min) / tickStep;
      var total = endAngle - startAngle;
      var isInner = tickLength > 0;
      var perAngle = total / count;
      var ticks = [];
      var tickRadius = isInner ? radius - lineWidth / 2 : radius + lineWidth / 2;
      var angle = 0;
      var i = -1;

      while (++i <= count) {
        angle = i * perAngle + startAngle;
        var ret = Gauge_tickLine(tickRadius, angle, Math.abs(tickLength), Math.abs(labelOffset), isInner);
        ticks.push({
          points: ret.points,
          label: {
            text: tickFormatter(i * tickStep + min).toFixed(0),
            pos: ret.labelPos,
            anchor: ret.anchor
          }
        });
      }

      if ((ticks[0].angle + ticks[ticks.length - 1].angle) % (Math.PI * 2) === 0) {
        ticks.pop();
      }

      return ticks;
    }
  }]);

  return Gauge;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_Gauge = (Gauge_Gauge);
// CONCATENATED MODULE: ./src/visuals/RadialBar/index.js










function RadialBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RadialBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RadialBar_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RadialBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // 数据拷贝

var RadialBar_flattern = function flattern(arr) {
  return [].concat.apply([], arr);
};

var RadialBar_RadialBar = /*#__PURE__*/function (_BaseVisual) {
  inherits_default()(RadialBar, _BaseVisual);

  function RadialBar() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, RadialBar);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(RadialBar).call(this, attrs));
    _this.type = 'RadialBar';
    _this.animators = [];
    _this.oldPos = null;
    return _this;
  }

  createClass_default()(RadialBar, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'radialBar',
        radius: 0.8,
        innerRadius: 0,
        startAngle: -90,
        endAngle: 270,
        lineWidth: 5,
        strokeBgcolor: '#f5f5f5'
      };
    }
  }, {
    key: "transform",
    value: function transform(data) {
      var _this2 = this;

      var _this$renderAttrs = this.renderAttrs,
          startAngle = _this$renderAttrs.startAngle,
          endAngle = _this$renderAttrs.endAngle,
          max = _this$renderAttrs.max,
          min = _this$renderAttrs.min,
          lineWidth = _this$renderAttrs.lineWidth,
          colors = _this$renderAttrs.colors;
      var total = 0;

      if (!isNaN(max) && !isNaN(min)) {
        total = max - min;
      } else {
        var cloneData = deepObjectMerge(data);
        cloneData.sort(function (a, b) {
          return b.value - a.value;
        });
        total = cloneData[0].value * 1.3;
      }

      var angle = endAngle - startAngle;
      var innerRadius = this.innerRadius;
      var outerRadius = this.maxOuterRadius;
      var arcOffset = 0.5;
      var len = data.length;
      var perRadius = ((outerRadius - innerRadius) * 2 - lineWidth * (lineWidth >= 5 ? 1 : len - 1)) / ((len * 2 - 1) * (1 + arcOffset));
      var value = null;
      data.forEach(function (d, i) {
        value = +d.value;
        d.pos = [outerRadius, outerRadius];
        d.anchor = [0.5, 0.5];
        d.lineWidth = lineWidth;
        d.startAngle = startAngle;
        d.endAngle = d.state === 'disabled' ? startAngle : startAngle + angle * value / total;
        d.innerRadius = innerRadius + i * (1 + arcOffset) * perRadius;
        d.radius = d.innerRadius + 1 * perRadius;
        d.strokeColor = colors[i];

        var normalStyle = _this2.style('arc')(d, d.dataOrigin, d.index);

        Object.assign(d, normalStyle);
      }); // 半径大的在底，小的在上，这样事件触发才正常

      return data.sort(function (a, b) {
        return b.radius - a.radius;
      });
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      get_default()(getPrototypeOf_default()(RadialBar.prototype), "beforeRender", this).call(this);

      var startAngle = this.renderAttrs.startAngle;
      var data = RadialBar_flattern(this.dataset);
      data = this.transform(data);
      this.animators = data.map(function (d) {
        return {
          from: {
            startAngle: startAngle,
            endAngle: startAngle
          },
          to: {
            startAngle: startAngle,
            endAngle: d.endAngle
          }
        };
      });
      return data;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this3 = this;

      get_default()(getPrototypeOf_default()(RadialBar.prototype), "beforeUpdate", this).call(this);

      var startAngle = this.renderAttrs.startAngle;
      var data = RadialBar_flattern(this.dataset);
      data = this.transform(data);
      this.animators = data.map(function (d, i) {
        if (d.anticlockwise) {
          return d.disabled ? {
            from: {
              opacity: 1
            },
            to: {
              opacity: 0
            }
          } : {
            from: {
              opacity: 1
            },
            to: {
              opacity: 1
            }
          };
        } else {
          var prev = _this3.animators[i] ? _this3.animators[i].to : data[i - 1];

          if (!prev) {
            prev = {
              startAngle: startAngle,
              endAngle: startAngle
            };
          }

          return {
            from: {
              startAngle: prev.startAngle,
              endAngle: prev.endAngle
            },
            to: {
              startAngle: d.startAngle,
              endAngle: d.endAngle
            }
          };
        }
      });
      return data;
    }
  }, {
    key: "onMouseenter",
    value: function onMouseenter(event, el) {
      var _el$children$1$attrib = el.children[1].attributes,
          col = _el$children$1$attrib.col,
          row = _el$children$1$attrib.row;
      this.dataset.forEach(function (item) {
        item.state = item.col === col && item.row === row ? 'hover' : 'default';
      });
    }
  }, {
    key: "onMouseleave",
    value: function onMouseleave() {
      this.dataset.resetState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var strokeBgcolor = this.renderAttrs.strokeBgcolor;
      var gAnimation = {
        from: {
          pos: this.oldPos ? this.oldPos : this.center
        },
        to: {
          pos: this.center
        }
      };
      this.oldPos = this.center;
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], null, data.map(function (d, i) {
        var col = d.col,
            row = d.row,
            data = d.data;
        return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
          pos: _this4.center,
          animation: gAnimation,
          onMouseenter: _this4.onMouseenter,
          onMousemove: _this4.onMouseenter,
          onMouseleave: _this4.onMouseleave
        }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Arc"], extends_default()({}, d, {
          startAngle: 0,
          endAngle: 360,
          strokeColor: strokeBgcolor
        })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Arc"], extends_default()({
          pos: _this4.center
        }, RadialBar_objectSpread({}, d, {
          col: col,
          row: row
        }), {
          animation: _this4.animators[i]
        }, _this4.style('arc')(d, data, i))));
      }));
    }
  }, {
    key: "rendered",
    value: function rendered() {}
  }, {
    key: "renderAttrs",
    get: function get() {
      var attrs = get_default()(getPrototypeOf_default()(RadialBar.prototype), "renderAttrs", this);

      var clientRect = attrs.clientRect;
      var size = [clientRect.width, clientRect.height];
      return RadialBar_objectSpread({}, attrs, {
        size: size
      });
    }
  }, {
    key: "maxOuterRadius",
    get: function get() {
      var _this$renderAttrs2 = this.renderAttrs,
          startAngle = _this$renderAttrs2.startAngle,
          endAngle = _this$renderAttrs2.endAngle,
          radius = _this$renderAttrs2.radius,
          size = _this$renderAttrs2.size;

      var _size = slicedToArray_default()(size, 2),
          width = _size[0],
          height = _size[1];

      if (endAngle - startAngle === 90) {
        return Math.min(width, height) * radius;
      } else {
        return Math.min(width, height) / 2 * radius;
      }
    }
  }, {
    key: "center",
    get: function get() {
      var _this$renderAttrs3 = this.renderAttrs,
          startAngle = _this$renderAttrs3.startAngle,
          endAngle = _this$renderAttrs3.endAngle,
          radius = _this$renderAttrs3.radius,
          size = _this$renderAttrs3.size;
      var angle = (endAngle + startAngle) / 2;

      var _size2 = slicedToArray_default()(size, 2),
          width = _size2[0],
          height = _size2[1];

      var maxRadius = this.maxOuterRadius;
      var x = width / 2 - maxRadius,
          y = height / 2 - maxRadius;

      if (endAngle - startAngle === 90) {
        // 区分象限
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var maxWidth = radius * width;
        var maxHeight = radius * height;
        x += cos < 0 ? maxWidth / 2 : -(maxWidth / 2);
        y += sin < 0 ? maxHeight / 2 : -(maxHeight / 2);
      }

      return [x, y];
    }
  }, {
    key: "innerRadius",
    get: function get() {
      var _this$renderAttrs4 = this.renderAttrs,
          radius = _this$renderAttrs4.radius,
          innerRadius = _this$renderAttrs4.innerRadius;
      return innerRadius <= 0 ? 0 : this.maxOuterRadius / radius * innerRadius;
    }
  }]);

  return RadialBar;
}(BaseVisual_BaseVisual);

/* harmony default export */ var visuals_RadialBar = (RadialBar_RadialBar);
// CONCATENATED MODULE: ./src/base/BasePlugin.js









var BasePlugin_BasePlugin = /*#__PURE__*/function (_Base) {
  inherits_default()(BasePlugin, _Base);

  function BasePlugin(attrs) {
    var _this;

    classCallCheck_default()(this, BasePlugin);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(BasePlugin).call(this, attrs));
    _this.theme = theme_default.plugins[_this.constructor.name]; //如果当前对象设置了theme，不继承theme

    _this.theme.set = function (obj) {
      if (_this.theme === theme_default.visuals[_this.constructor.name]) {
        _this.theme = filter_clone_lib_default()(_this.theme);
      }

      _this.theme = deepObjectMerge(_this.theme, obj);
    };

    return _this;
  }

  return BasePlugin;
}(base_Base);


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(18);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/plugins/Axis/layout.js



function Axis_layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Axis_layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Axis_layout_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Axis_layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Axis_layout_layout(arr, attrs) {
  var res = {
    scales: [],
    labels: [],
    grids: [],
    axisPoints: [],
    orient: attrs.orient
  };
  var defaultAttrs = {
    top: {
      label: {
        anchor: [0.5, 1],
        padding: [0, 0, 6, 0],
        textAlign: 'center'
      },
      scale: {
        anchor: [0.5, 1],
        width: 1,
        height: 4
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'category'
    },
    bottom: {
      scale: {
        anchor: [0.5, 0],
        width: 1,
        height: 4
      },
      label: {
        anchor: [0.5, 0],
        padding: [6, 0, 0, 0],
        textAlign: 'center'
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'category'
    },
    left: {
      label: {
        padding: [0, 8, 0, 0],
        anchor: [1, 0.5],
        textAlign: 'right'
      },
      scale: {
        anchor: [1, 0.5],
        width: 4,
        height: 1
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'value'
    },
    right: {
      label: {
        anchor: [0, 0.5],
        padding: [0, 0, 0, 8]
      },
      scale: {
        anchor: [0, 0.5],
        width: 4,
        height: 1
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'value'
    }
  };
  var stack = attrs.stack,
      splitNumber = attrs.splitNumber,
      clientRect = attrs.clientRect,
      orient = attrs.orient,
      axisGap = attrs.axisGap,
      transpose = attrs.transpose;

  if (transpose) {
    ;
    ['top', 'bottom', 'right', 'left'].forEach(function (str) {
      defaultAttrs[str].type = defaultAttrs[str].type === 'value' ? 'category' : 'value';
    });
  }

  var width = clientRect.width,
      height = clientRect.height;
  var scales = axis_axis.call(this, {
    dataSet: arr,
    stack: stack,
    splitNumber: splitNumber // needReverse: true,

  });
  var maxVal = Math.max.apply(this, scales);
  var minVal = Math.min.apply(this, scales);
  var type = attrs.type || defaultAttrs[orient].type;
  var distance = orient === 'left' || orient === 'right' ? height : width;
  var datasetReverse = this.dataset.datasetReverse;

  if (type === 'value') {
    var scaleFY = scaleLinear().domain([minVal, maxVal]).range([0, distance]);
    scales.forEach(function (num) {
      var _getItemAttrs = getItemAttrs(defaultAttrs, orient, {
        text: '' + typeof_default()(datasetReverse) === 'function' ? datasetReverse(num) : num
      }, num, scaleFY, clientRect),
          scaleAttr = _getItemAttrs.scaleAttr,
          labelAttr = _getItemAttrs.labelAttr,
          gridAttr = _getItemAttrs.gridAttr;

      res.scales.push(scaleAttr);
      res.labels.push(labelAttr);
      res.grids.push(gridAttr);
    });
  } else if (type === 'category') {
    var curArr = arr[0];
    var len = axisGap ? curArr.length : curArr.length - 1;

    var _scaleFY = scaleLinear().domain([0, len]).range([0, distance]);

    curArr.forEach(function (cell, ind) {
      var _getItemAttrs2 = getItemAttrs(defaultAttrs, orient, cell, ind, _scaleFY, clientRect, axisGap),
          scaleAttr = _getItemAttrs2.scaleAttr,
          labelAttr = _getItemAttrs2.labelAttr,
          gridAttr = _getItemAttrs2.gridAttr;

      res.scales.push(scaleAttr);
      res.labels.push(labelAttr);
      res.grids.push(gridAttr);
    });

    if (axisGap) {
      // 如果是axisGap为true，需要添加一个点
      var _getItemAttrs3 = getItemAttrs(defaultAttrs, orient, {}, curArr.length, _scaleFY, clientRect, axisGap),
          scaleAttr = _getItemAttrs3.scaleAttr,
          gridAttr = _getItemAttrs3.gridAttr;

      res.scales.push(scaleAttr);
      res.grids.push(gridAttr);
    }
  }

  if (orient === 'left' || orient === 'right') {
    var dx = orient === 'left' ? 0 : width;
    res.axisPoints = [[dx, height], [dx, 0]];
    res.nameAttr = {
      pos: [dx, 0],
      anchor: [0.5, 1],
      padding: [10]
    };
  } else if (orient === 'bottom' || orient === 'top') {
    var dy = orient === 'bottom' ? height : 0;
    res.axisPoints = [[0, dy], [width, dy]];
    res.nameAttr = {
      pos: [width, dy],
      anchor: [0, 1]
    };
  }

  return res;
}

function getItemAttrs(defaultAttrs, orient, cell, value, scaleF, clientRect, axisGap) {
  var res = emptyObject();
  var width = clientRect.width,
      height = clientRect.height,
      left = clientRect.left,
      top = clientRect.top;
  var labelPosValue = axisGap ? value + 0.5 : value;

  if (orient === 'left' || orient === 'right') {
    var x = orient === 'left' ? 0 : width;
    var yv = scaleF(value);
    res.scaleAttr = Axis_layout_objectSpread({}, defaultAttrs[orient].scale, {
      pos: [x, height - yv]
    });
    res.gridAttr = Axis_layout_objectSpread({}, defaultAttrs[orient].grid, {
      points: [[x, height - yv], [width, height - yv]]
    });
    res.labelAttr = Axis_layout_objectSpread({}, defaultAttrs[orient].label, {
      width: left,
      text: '' + cell.text,
      pos: [x, height - scaleF(labelPosValue)]
    });
  } else if (orient === 'top' || orient === 'bottom') {
    var y = orient === 'top' ? 0 : height;
    var xv = scaleF(value);
    res.scaleAttr = Axis_layout_objectSpread({}, defaultAttrs[orient].scale, {
      pos: [xv, y]
    });
    res.gridAttr = Axis_layout_objectSpread({}, defaultAttrs[orient].grid, {
      points: [[xv, 0], [xv, y]]
    });
    res.labelAttr = Axis_layout_objectSpread({}, defaultAttrs[orient].label, {
      width: left,
      text: '' + cell.text,
      pos: [scaleF(labelPosValue), y]
    });
  }

  return res;
}
// CONCATENATED MODULE: ./src/plugins/Axis/index.js














var Axis_Axis = /*#__PURE__*/function (_Base) {
  inherits_default()(Axis, _Base);

  function Axis(attrs) {
    var _this;

    classCallCheck_default()(this, Axis);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Axis).call(this, attrs));
    _this.renderAxis = emptyObject();
    return _this;
  }

  createClass_default()(Axis, [{
    key: "beforeRender",
    value: function beforeRender() {
      var _this$getRenderData = this.getRenderData(),
          axis = _this$getRenderData.axis;

      return axis;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this$getRenderData2 = this.getRenderData(),
          axis = _this$getRenderData2.axis;

      return axis;
    }
  }, {
    key: "rendered",
    value: function rendered() {//console.log(this.$refs['wrap'])
    }
  }, {
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return {
        layer: 'axis',
        zIndex: -1,
        formatter: function formatter(e) {
          return e;
        }
      };
    } //defaultStyles() {}

  }, {
    key: "getRenderData",
    value: function getRenderData() {
      //根据axis的特性返回需要数据
      var renderAttrs = this.renderAttrs;
      var renderData = this.dataset[renderAttrs.layoutBy];
      var axis = Axis_layout_layout.call(this, renderData, renderAttrs);
      return {
        axis: axis
      };
    }
  }, {
    key: "render",
    value: function render(axis) {
      var _this2 = this;

      var oldAxis = this.renderAxis || emptyObject();
      this.renderAxis = axis;
      var _this$renderAttrs = this.renderAttrs,
          clientRect = _this$renderAttrs.clientRect,
          formatter = _this$renderAttrs.formatter,
          orient = _this$renderAttrs.orient,
          name = _this$renderAttrs.name; //渲染的样式，合并了theme中的styles与组件上的defaultStyles

      var styles = this.renderStyles;
      var axisStyle = getStyle(this, 'axis', styles.axis); //当前主体颜色

      var arrOrient = this.chart.plugins.map(function (plugin) {
        if (plugin.constructor.name === 'Axis') {
          return plugin.renderAttrs.orient;
        }
      }).filter(Boolean);
      var nameStyle = getStyle(this, 'name', [styles.name || {}, filter_clone_lib_default()(axis.nameAttr, [], ['pos'])]);
      var oldPos = oldAxis.nameAttr && oldAxis.nameAttr.pos || axis.nameAttr.pos;
      var nameAni = {
        from: {
          pos: oldPos
        },
        to: {
          pos: axis.nameAttr.pos
        }
      };
      return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
        ref: "wrap",
        pos: [clientRect.left, clientRect.top]
      }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({}, axisStyle, {
        animation: {
          from: {
            points: oldAxis.axisPoints
          },
          to: {
            points: axis.axisPoints
          }
        }
      })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], null, axis.grids.map(function (grid, ind) {
        var fromPoints = oldAxis.grids && oldAxis.grids[ind] && oldAxis.grids[ind].points || grid.points;
        var ani = {
          from: {
            points: fromPoints
          },
          to: {
            points: grid.points
          }
        };
        var style = getStyle(_this2, 'grid', styles.grid, [ind]);

        if (orient === 'left' || orient === 'right') {
          if (ind === 0 && arrOrient.includes('bottom') || ind === axis.grids.length - 1 && arrOrient.includes('top')) {
            return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null);
          }
        } else if (orient === 'top' || orient === 'bottom') {
          if (ind === 0 && arrOrient.includes('left') || ind === axis.grids.length - 1 && arrOrient.includes('right')) {
            return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null);
          }
        }

        return style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Polyline"], extends_default()({}, style, {
          points: ani.from.points,
          animation: ani
        }));
      }), axis.scales.map(function (scale, ind) {
        var fromPos = oldAxis.scales && oldAxis.scales[ind] && oldAxis.scales[ind].pos || scale.pos;
        var ani = {
          from: {
            pos: fromPos
          },
          to: {
            pos: scale.pos
          }
        }; // 排除pos属性，pos属性用来处理动画，其它属性直接赋值

        var style = getStyle(_this2, 'scale', styles.scale, [scale, ind]);
        return style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], extends_default()({}, filter_clone_lib_default()(scale, [], ['pos']), style, {
          animation: ani
        }));
      }), axis.labels.map(function (label, ind) {
        var fromPos = oldAxis.labels && oldAxis.labels[ind] && oldAxis.labels[ind].pos || label.pos;
        var style = getStyle(_this2, 'label', styles.label, [label, ind]);
        var ani = {
          from: {
            pos: fromPos
          },
          to: {
            pos: label.pos
          }
        };
        return style === false ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({}, filter_clone_lib_default()(label, [], ['pos', 'text']), style, {
          text: formatter(label.text),
          animation: ani
        }));
      })), nameStyle === false || name === undefined || name.length === 0 ? getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Node"], null) : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({}, nameStyle, {
        text: name,
        animation: nameAni
      })));
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
      var attrs = get_default()(getPrototypeOf_default()(Axis.prototype), "renderAttrs", this);

      var targetVisual = this.chart.visuals[0];

      if (attrs.axisGap === undefined && targetVisual && targetVisual.constructor.name === 'Bar') {
        //如果axisGap没有赋值
        //如果是柱状图
        attrs.axisGap = true;
      }

      if (targetVisual && targetVisual.constructor.name === 'Scatter') {
        attrs.type = 'value';
      }

      if (attrs.transpose === undefined && targetVisual) {
        //坐标轴转换
        attrs.transpose = targetVisual.renderAttrs.transpose;
      }

      return attrs;
    }
  }]);

  return Axis;
}(BasePlugin_BasePlugin);

/* harmony default export */ var plugins_Axis = (Axis_Axis);
// CONCATENATED MODULE: ./src/plugins/Legend/index.js









function Legend_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Legend_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Legend_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Legend_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Legend_Legend = /*#__PURE__*/function (_Base) {
  inherits_default()(Legend, _Base);

  function Legend(attrs) {
    var _this;

    classCallCheck_default()(this, Legend);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Legend).call(this, attrs));
    _this.arrLayout = null;
    _this.state = {
      page: 1,
      totalPage: 1,
      perPageWidthOrHeight: 0,
      // 每页长度（或宽度）
      paginationSize: [0, 0],
      // 分页控件大小
      groupSize: [0, 0] // legends 容器大小

    };
    _this.twiceRender = false;
    _this.animationSwitch = false;
    _this.posFrom = [0, 0];
    _this.currentPos = [0, 0];
    _this.legendStateArray = [];
    return _this;
  }

  createClass_default()(Legend, [{
    key: "defaultAttrs",
    value: function defaultAttrs() {
      return defineProperty_default()({
        orient: "horizontal",
        // 布局方式， vertical | horizontal
        align: ["center", "bottom"],
        // 水平方向布局，left | center | right, 垂直方向布局，top | center | bottom
        formatter: function formatter(d) {
          return d.value || d;
        },
        iconSize: [12, 12],
        textSize: [40, 12],
        outGap: 10,
        innerGap: 4
      }, "formatter", function formatter(d) {
        return d.text || d;
      });
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      if (this.twiceRender) {
        this.reset();
      } else {
        this.arrLayout = this.getRenderData().arrLayout;
      }

      return this.arrLayout;
    }
  }, {
    key: "getRenderData",
    value: function getRenderData() {
      var _this2 = this;

      var _this$renderAttrs = this.renderAttrs,
          layoutBy = _this$renderAttrs.layoutBy,
          innerGap = _this$renderAttrs.innerGap;
      var renderData = this.dataset[layoutBy].map(function (item, index) {
        _this2.legendStateArray.push(item.state);

        return {
          name: item.name,
          state: item.state
        };
      });
      var arrLayout = renderData.map(function (item) {
        return {
          textAttrs: {
            text: item.name,
            paddingLeft: innerGap
          }
        };
      });
      this.arrLayout = arrLayout;
      return {
        arrLayout: arrLayout
      };
    }
  }, {
    key: "itemClick",
    value: function itemClick(e, el) {
      var ind = el.attr("_index");
      var state = this.dataset[this.renderAttrs.layoutBy][ind].state;
      state = state !== "disabled" ? "disabled" : "default";
      this.dataset[this.renderAttrs.layoutBy][ind].state = state;
    }
  }, {
    key: "itemLeave",
    value: function itemLeave(e, el) {
      var ind = el.attr("_index");
      this.legendStateArray[ind] = "default";
      this.update();
    }
  }, {
    key: "itemMove",
    value: function itemMove(e, el) {
      var ind = el.attr("_index");

      if (this.legendStateArray[ind] === "default") {
        this.legendStateArray[ind] = "hover";
        this.update();
      }
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate(params) {
      if (params && params.type === "source") {
        this.animationSwitch = true;
        this.twiceRender = false;
        return this.beforeRender();
      } else {
        if (params && params.type === "resize") {
          this.animationSwitch = true;
        }

        return this.arrLayout;
      }
    }
  }, {
    key: "rendered",
    value: function rendered() {// console.log("rendered");
    }
  }, {
    key: "afterrender",
    value: function afterrender(e, el) {
      if (this.twiceRender) {
        this.animationSwitch = false;
        return;
      }

      this.twiceRender = true;
      this.reset();
      this.update();
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;

      var legendsSize = [0, 0];
      var _this$renderAttrs2 = this.renderAttrs,
          outGap = _this$renderAttrs2.outGap,
          innerGap = _this$renderAttrs2.innerGap,
          iconSize = _this$renderAttrs2.iconSize,
          textSize = _this$renderAttrs2.textSize;
      var maxTextWidth = 0;
      var colors = this.theme.colors;
      this.arrLayout = this.arrLayout.map(function (item, index) {
        item.iconAttrs = {};
        var iconEl = _this3.$refs["icon" + index];
        var iconRect = iconEl.getBoundingClientRect();
        var textEl = _this3.$refs["text" + index];
        var textRect = textEl.getBoundingClientRect();
        var iconAttrs = {
          bgcolor: colors[index],
          size: iconSize,
          pos: _this3.isVertical ? [0, legendsSize[1] + (textRect.height - iconSize[1]) / 2] : [legendsSize[0], (textRect.height - iconSize[1]) / 2]
        };

        if (_this3.dataset[_this3.renderAttrs.layoutBy][index].state === "disabled") {
          iconAttrs.bgcolor = "#ccc";
          iconAttrs.fillColor = "#ccc";
        }

        var textAttrs = Legend_objectSpread({}, item.textAttrs, {
          pos: _this3.isVertical ? [iconSize[0], legendsSize[1]] : [iconSize[0] + legendsSize[0], 0],
          text: item.textAttrs.text
        });

        var size = [iconSize[0] + textRect.width, iconSize[1]];

        if (size[0] + outGap > maxTextWidth) {
          maxTextWidth = size[0] + outGap;
        }

        legendsSize = _this3.isVertical ? [maxTextWidth, legendsSize[1] + textRect.height + outGap] : [legendsSize[0] + size[0] + outGap, textRect.height];
        return {
          iconAttrs: iconAttrs,
          textAttrs: textAttrs
        };
      });
      this.state.groupSize = legendsSize;
    }
  }, {
    key: "changePage",
    value: function changePage(e, el) {
      if (el.name === "prev" && this.state.page > 1) {
        this.state.page--;
        this.animationSwitch = true;
        this.update();
      } else if (el.name === "next" && this.state.page < this.state.totalPage) {
        this.state.page++;
        this.animationSwitch = true;
        this.update();
      }
    }
  }, {
    key: "render",
    value: function render(arr) {
      var _this4 = this;

      this.posFrom = this.currentPos;
      var _this$pos = this.pos,
          pos = _this$pos.pos,
          pagePos = _this$pos.pagePos;
      this.posFrom = this.twiceRender && this.animationSwitch ? this.posFrom : pos;
      var _this$state = this.state,
          page = _this$state.page,
          totalPage = _this$state.totalPage;
      this.currentPos = pos;
      var styles = this.renderStyles;
      var isVertical = this.isVertical;

      if (this.twiceRender) {
        pos[0] = pos[0] - 1;
      }

      var formatter = this.renderAttrs.formatter;

      if (arr) {
        return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
          size: [1, 1],
          onAfterrender: this.afterrender
        }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
          animation: {
            from: {
              pos: this.posFrom
            },
            to: {
              pos: pos
            },
            duration: this.twiceRender && this.animationSwitch ? this.renderAttrs.animation.duration : 0
          } // pos={pos}

        }, arr.map(function (attrs, ind) {
          var cell = _this4.dataset[_this4.renderAttrs.layoutBy][ind];
          var hover = _this4.legendStateArray[ind] === "hover";
          var disabled = cell.state === "disabled";
          var style = getStyle(_this4, "point", [{}, styles.point], [cell, ind]);
          var hoverStyle = hover ? getStyle(_this4, "point:hover", [{}], [cell, ind]) : {};

          if (disabled && attrs.iconAttrs.bgcolor) {
            hoverStyle.bgcolor = "#ccc";
            hoverStyle.fillColor = "#ccc";
          }

          var textStyle = getStyle(_this4, "text", [{}, styles.text], [cell, ind]);
          var textHoverStyle = hover ? getStyle(_this4, "text:hover", [{}], [cell, ind]) : {};
          attrs.textAttrs.text = formatter(cell.name, cell.data, ind);
          return getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], extends_default()({
            onClick: _this4.itemClick,
            onMouseleave: _this4.itemLeave,
            onMouseenter: _this4.itemMove,
            onMousemove: _this4.itemMove
          }, {
            _index: ind
          }), getApp().qcharts.h(utils_Point, extends_default()({
            ref: "icon" + ind
          }, attrs.iconAttrs, style, hoverStyle)), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], extends_default()({
            ref: "text" + ind
          }, attrs.textAttrs, textStyle, textHoverStyle)));
        })), totalPage <= 1 ? null : getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Group"], {
          pos: pagePos.pos
        }, getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Path"], extends_default()({
          pos: pagePos.pagePrev
        }, isVertical ? {
          marginLeft: 5
        } : {}, {
          name: "prev",
          padding: [isVertical ? 2 : 1, 0, 0, 0],
          d: isVertical ? "M 0 15 L 15 15 L7.5 0 Z" : "M 0 7.5 L 13 0 L13 15 Z",
          fillColor: page <= 1 ? "#ccc" : "#324556",
          onClick: this.changePage
        })), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Label"], {
          pos: pagePos.pageText,
          ref: "paginationText",
          fontSize: "14px",
          text: page + "/" + totalPage + "",
          lineBreak: "normal",
          padding: isVertical ? [0, 2] : [0, 2]
        }), getApp().qcharts.h(spritejs_min_js_amd_spritejs_umd_spritejs_["Path"], extends_default()({
          pos: pagePos.pageNext
        }, isVertical ? {
          marginLeft: 5
        } : {}, {
          name: "next",
          padding: [isVertical ? 2 : 1, 0, 0, 0],
          d: isVertical ? "M 0 0 L 15 0 L7.5 13 Z" : "M 13 7.5 L 0 0 L0 15 Z",
          fillColor: page >= totalPage ? "#ccc" : "#324556",
          onClick: this.changePage
        }))));
      }
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
      var attrs = get_default()(getPrototypeOf_default()(Legend.prototype), "renderAttrs", this);

      return attrs;
    }
  }, {
    key: "pos",
    get: function get() {
      var _this$renderAttrs3 = this.renderAttrs,
          clientRect = _this$renderAttrs3.clientRect,
          align = _this$renderAttrs3.align;
      var groupSize = this.state.groupSize;
      var width = clientRect.width,
          height = clientRect.height,
          top = clientRect.top,
          left = clientRect.left,
          right = clientRect.right,
          bottom = clientRect.bottom;
      var canvasWidth = width + left + right;
      var canvasHeight = height + top + bottom;
      this.state.paginationSize = this.isVertical ? [30, 60] : [70, 25];

      var isValidLayout = function isValidLayout(value, type) {
        if (type === "horizontal") {
          // 水平布局
          return ["default", "left", "center", "right"].indexOf(value) > -1;
        } else {
          // 垂直布局
          return ["default", "top", "center", "bottom"].indexOf(value) > -1;
        }
      };

      var hLocation = {
        // 水平定位
        "default": 0,
        left: 2,
        center: (canvasWidth - groupSize[0]) / 2,
        right: canvasWidth - groupSize[0] - 2,
        numberOrPercent: function numberOrPercent(num) {
          // 输入 数字或百分比
          if (typeof num === "number") {
            return num;
          } else {
            var val = 0;

            try {
              val = parseFloat(num) / 100;
            } catch (e) {}

            return (canvasWidth - groupSize[0]) * val;
          }
        }
      };
      var vLocation = {
        // 垂直定位
        "default": 0,
        top: 2,
        center: canvasHeight / 2 - groupSize[1] / 2,
        bottom: canvasHeight - groupSize[1] - 2,
        numberOrPercent: function numberOrPercent(num) {
          // 输入 数字或百分比
          if (typeof num === "number") {
            return num;
          } else {
            var val = 0;

            try {
              val = parseFloat(num) / 100;
            } catch (e) {}

            return (canvasHeight - groupSize[1]) * val;
          }
        }
      };
      var pos = [isValidLayout(align[0], "horizontal") ? hLocation[align[0]] : hLocation.numberOrPercent(align[0]), isValidLayout(align[1], "vertical") ? vLocation[align[1]] : vLocation.numberOrPercent(align[1])];
      var pagePos;
      var totalPageX = Math.ceil(this.state.groupSize[0] / canvasWidth);
      var totalPageY = Math.ceil(this.state.groupSize[1] / canvasHeight);
      var paginationSize = this.state.paginationSize;
      var pagePrev, pageText, pageNext;

      if (totalPageX > 1) {
        this.state.totalPage = totalPageX;
        var pagePosY = pos[1] + groupSize[1] + paginationSize[1] > canvasHeight ? pos[1] - paginationSize[1] : pos[1] + groupSize[1];
        pagePos = [canvasWidth - paginationSize[0], pagePosY];
        pagePrev = [0, 0];
        pageText = [15, 0];
        pageNext = [45, 0];
        pos[0] = -(this.state.page - 1) * canvasWidth;
      } else if (totalPageY > 1) {
        this.state.totalPage = totalPageY;
        var pagePosX = pos[0] + groupSize[0] + paginationSize[0] > canvasWidth ? pos[0] - paginationSize[0] : pos[0] + groupSize[0];
        pagePos = [pagePosX, canvasHeight - paginationSize[1]];
        pagePrev = [5, 0];
        pageText = [0, 20];
        pageNext = [5, 40];
        pos[1] = -(this.state.page - 1) * canvasHeight;
      } else {
        this.state.page = 1;
        this.state.totalPage = 1;
      }

      return {
        pos: pos,
        pagePos: {
          pos: pagePos,
          pagePrev: pagePrev,
          pageText: pageText,
          pageNext: pageNext
        }
      };
    }
  }, {
    key: "isVertical",
    get: function get() {
      return this.renderAttrs.orient === "vertical";
    }
  }]);

  return Legend;
}(BasePlugin_BasePlugin);

/* harmony default export */ var plugins_Legend = (Legend_Legend);
// CONCATENATED MODULE: ./src/plugins/Tooltip/index.js











var Tooltip_Tooltip = /*#__PURE__*/function (_Base) {
  inherits_default()(Tooltip, _Base);

  function Tooltip(attrs) {
    var _this;

    classCallCheck_default()(this, Tooltip);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Tooltip).call(this, attrs));

    defineProperty_default()(assertThisInitialized_default()(_this), "tipMousemove", throttle(function (e) {
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

  createClass_default()(Tooltip, [{
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
          formatter = _this$renderAttrs.formatter;
      this.chart.dataset.on('change', function (data) {
        var option = data.option;
        _this2.$el.innerHTML = ''; // let reverse = param => {
        //   return typeof this.dataset.datasetReverse === 'function' ? this.dataset.datasetReverse(param) : param
        // }

        if (option.value === 'hover') {
          var arr = [].concat(_this2.chart.dataset).filter(function (item) {
            return item.state === 'hover';
          });

          if (sort) {
            arr.sort(sort);
          }

          if (arr.length) {
            var innerHtml = '';
            var $div = document.createElement('div');
            $div.style.cssText = 'white-space:nowrap;padding:6px 10px;background-color:rgba(0,0,0,0.5);color:#fff;';
            arr.forEach(function (item, ind) {
              var text = "".concat(item.text, "\uFF1A").concat(item.value);

              if (formatter) {
                text = formatter(item.data) || text;
              }

              var html = "<div class=\"tooltip-item\"><span class=\"icon\" style=\"margin-right:6px;display:inline-block;width:10px;height:10px;background-color:".concat(colors[ind], "\"></span><span class=\"text\">").concat(text, "</span></div>");
              innerHtml += html;
            });
            $div.innerHTML = innerHtml;

            _this2.$el.appendChild($div);
          }
        } else if (option.name === 'reset') {
          _this2.$el.innerHTML = '';
        }
      });
      document.body.addEventListener('mousemove', this.tipMousemove);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.$el) {
        this.$el = document.createElement('div');
        this.$el.className = 'qcharts-tooltip';
        this.$el.style.cssText = 'transition:top 300ms ease-out,left 300ms ease-out;position:absolute;pointEvents:none;pointer-events:none;font-size:14px;';
      }

      document.body.appendChild(this.$el);
    }
  }, {
    key: "renderAttrs",
    get: function get() {
      //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
      var attrs = get_default()(getPrototypeOf_default()(Tooltip.prototype), "renderAttrs", this);

      return attrs;
    }
  }]);

  return Tooltip;
}(BasePlugin_BasePlugin);

/* harmony default export */ var plugins_Tooltip = (Tooltip_Tooltip);
// CONCATENATED MODULE: ./src/Chart.js














var Chart_Chart = /*#__PURE__*/function (_Base) {
  inherits_default()(Chart, _Base);

  function Chart(attr) {
    var _this;

    classCallCheck_default()(this, Chart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Chart).call(this));
    var container = attr.container;

    if (jsType(container) === 'string') {
      container = document.querySelector(container);
    }

    _this.$el = container;
    _this.visuals = [];
    _this.plugins = [];
    _this.children = [];

    if (Object(platform["b" /* isWeiXin */])()) {
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

      _this.scene = new spritejs_min_js_amd_spritejs_umd_spritejs_["Scene"]({
        width: size[0] / displayRatio,
        height: size[1] / displayRatio,
        extra: assertThisInitialized_default()(_this),
        contextType: contextType,
        displayRatio: displayRatio
      });
    } else {
      _this.scene = new spritejs_min_js_amd_spritejs_umd_spritejs_["Scene"]({
        container: container,
        displayRatio: Object(platform["a" /* getGlobal */])().devicePixelRatio
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

  createClass_default()(Chart, [{
    key: "update",
    value: function update(args) {
      //图表发生更新，触发图表内组件更新
      this.checkUpdate(args);
    }
  }, {
    key: "append",
    value: function append(node) {
      var _this2 = this;

      var notNeedDataSetList = [visuals_Wave, visuals_Gauge];

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
      } else if (node instanceof BaseVisual_BaseVisual) {
        this.visuals.push(node);
      } else if (node instanceof BasePlugin_BasePlugin) {
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
}(base_Base);

/* harmony default export */ var src_Chart = (Chart_Chart);
// CONCATENATED MODULE: ./src/index.js



















var qcharts = {
  version: '1.0.0',
  Line: visuals_Line,
  Pie: visuals_Pie,
  Area: visuals_Area,
  Radar: visuals_Radar,
  Bar: visuals_Bar,
  PolarBar: visuals_PolarBar,
  Funnel: visuals_Funnel,
  Scatter: visuals_Scatter,
  Gauge: visuals_Gauge,
  RadialBar: visuals_RadialBar,
  Legend: plugins_Legend,
  Axis: plugins_Axis,
  Wave: visuals_Wave,
  Tooltip: plugins_Tooltip,
  h: h,
  theme: theme_default,
  Chart: src_Chart,
  easing: tween_easing
};
var global = Object(platform["a" /* getGlobal */])();
global.qcharts = qcharts;

/* harmony default export */ var src_0 = __webpack_exports__["default"] = (qcharts);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=index.js.map