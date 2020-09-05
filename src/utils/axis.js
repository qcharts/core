//import { Global } from '../core/Global'
export function axis(attr) {
  // 计算坐标轴刻度
  if (!Array.isArray(attr.dataSet) && !attr.hasOwnProperty('section')) {
    return []
  }
  if (attr.section !== undefined) {
    return sectionAxis(attr.section)
  }
  const data = dataHandle(attr)
  let upZero = [] // 大于零的数
  let downZero = [] // 小于零的数
  for (const element of data) {
    if (element < 0) {
      downZero.push(Math.abs(element))
    } else {
      upZero.push(element)
    }
  }
  let length = 5 // 刻度数量
  let sortUpZero = upZero.sort((a, b) => {
    return a - b
  })
  let sortDownZero = downZero.sort((a, b) => {
    return a - b
  })
  let maxUpZero = sortUpZero.length && Math.ceil(sortUpZero.pop() / 0.95)
  let maxDownZero = sortDownZero.length && Math.ceil(sortDownZero.pop() / 0.95)
  let maxValue = maxUpZero - maxDownZero >= 0 ? maxUpZero : maxDownZero
  let mixNum = 4
  let maxNum = 7
  if (maxDownZero && maxUpZero) {
    mixNum = 3
    maxNum = 5
  }
  if (attr.splitNumber) {
    mixNum = attr.splitNumber
    maxNum = mixNum + 1
  }
  let getMax = false
  const len = maxValue.toString().length // 最大值位数
  let max = len < 3 ? Math.ceil(maxValue / Math.pow(10, len - 1)) : Math.ceil(maxValue / Math.pow(10, len - 2))
  do {
    for (let i = mixNum; i < maxNum; i++) {
      if (max % i === 0) {
        length = i
        maxValue = len < 3 ? max * Math.pow(10, len - 1) : max * Math.pow(10, len - 2)
        getMax = true
        break
      }
    }
    max++
  } while (!getMax)

  let axisArray = new Array(length + 1)
  axisArray[0] = 0
  for (let i = 1; i < length + 1; i++) {
    axisArray[i] = maxUpZero >= maxDownZero ? Math.round((maxValue / length) * i) : -1 * Math.round((maxValue / length) * i)
  }

  // 处理0-1之间的数据
  if ((maxDownZero <= 1 && maxDownZero > 0) || (maxUpZero <= 1 && maxUpZero > 0) || (maxUpZero === 0 && maxDownZero === 0)) {
    axisArray = new Array(6)
    axisArray[0] = 0
    maxValue = 1
    for (let i = 1; i < 6; i++) {
      axisArray[i] = maxUpZero >= maxDownZero ? (2 * maxValue * i) / 10 : (-2 * maxValue * i) / 10
    }
  }

  if (maxUpZero < maxDownZero) {
    axisArray.reverse()
  }
  if (maxDownZero.length === 0 || maxUpZero.length === 0) {
    return axisArray
  }
  if (maxUpZero >= maxDownZero) {
    const unit = axisArray[1] * 10
    for (let i = 1, len = Math.ceil(((axisArray.length - 1) * maxDownZero) / maxUpZero); i < len + 1; i++) {
      axisArray.unshift((-1 * unit * i) / 10)
    }
  } else {
    const unit = axisArray[axisArray.length - 2] * 10
    for (let i = 1, len = Math.ceil(((axisArray.length - 1) * maxUpZero) / maxDownZero); i < len + 1; i++) {
      axisArray.push((-1 * unit * i) / 10)
    }
  }
  // if (attr.needReverse) {
  //   axisArray = axisArray.map((value) => {
  //     return this.dataset.datasetReverse
  //       ? Math.round(this.dataset.datasetReverse(value))
  //       : value;
  //   });
  // }
  return axisArray
}

function dataHandle(attr) {
  const stack = attr.stack || false
  const data = attr.dataSet || []
  const arr = []

  if (stack && data.length !== 0 && data[0].length) {
    for (let i = 0, len = data[0].length; i < len; i++) {
      let sum = 0
      let sumDown = 0
      for (let j = 0, leng = data.length; j < leng; j++) {
        let val = data[j][i].layoutScaleValue(attr.field)
        if (data[j][i].disabled === true || val === undefined) {
          continue
        }
        if (val < 0) {
          sumDown = sumDown + val
        } else {
          sum = sum + val
        }
      }
      sum && arr.push(sum)
      sumDown && arr.push(sumDown)
    }
  } else {
    for (let m = 0; m < data.length; m++) {
      for (let n = 0; n < data[m].length; n++) {
        let val = data[m][n].layoutScaleValue(attr.field)
        if (data[m][n].disabled === true || val === undefined) {
          continue
        }
        arr.push(val)
      }
    }
  }
  return arr
}

function sectionAxis(section) {
  if (section && Array.isArray(section)) {
    const gap = section[1] - section[0]
    const arr = []
    let divide = 4
    arr.push(section[0])
    for (let i = 4; i < 8; i++) {
      if (gap % i === 0) {
        divide = i
        break
      }
    }
    for (let j = 1; j <= divide; j++) {
      arr.push((section[0] + (gap * j) / divide).toFixed(2))
    }
    return arr
  }
  return []
}
