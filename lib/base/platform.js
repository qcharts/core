export var isWeiXin = function isWeiXin() {
  return typeof wx !== 'undefined' && typeof wx.getSystemInfoSync === 'function';
};
export var getGlobal = function getGlobal() {
  if (isWeiXin()) return getApp();
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw new Error("unable to locate global object");
};
export var platform = getGlobal();