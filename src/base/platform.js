export const platform = window

export const isWeiXin = () => {
  return typeof wx !== 'undefined' && typeof wx.getSystemInfoSync === 'function'
}
