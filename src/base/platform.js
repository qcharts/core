export const isWeiXin = () => {
  return typeof wx !== 'undefined' && typeof wx.getSystemInfoSync === 'function'
}

export const getGlobal = () => {
  if (isWeiXin()) return getApp()
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw new Error(`unable to locate global object`)
}

export const platform = getGlobal()
