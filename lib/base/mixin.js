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

export { lifeCycle, mixin };