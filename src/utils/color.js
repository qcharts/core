export function hexToRgba(hex, opacity) {
  // 16进制颜色转rgba
  if (/^rgba\(.+\)$/.test(hex)) {
    return hex;
  }
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[ 0 ], c[ 0 ], c[ 1 ], c[ 1 ], c[ 2 ], c[ 2 ]]
    }
    c = '0x' + c.join('')
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      opacity +
      ')'
    )
  }
  throw new Error('Bad Hex')
}
export function randomHexColor() {
  // 随机生成十六进制颜色
  let random = Math.floor(Math.random() * 16777216).toString(16) // 生成ffffff以内16进制数
  while (random.length < 6) {
    // while循环判断hex位数，少于6位前面加0凑够6位
    random = `0${random}`
  }
  return `#${random}`
}
