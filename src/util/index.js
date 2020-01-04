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
      FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]' ? deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : (FirstOBJ[key] = SecondOBJ[key])
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
    return value === null
      ? null
      : Object.prototype.toString
          .call(value)
          .slice(8, -1)
          .toLowerCase()
  }
  return str
}
function throttle(fn, interval = 16, immediately = false) {
  //截流函数
  let timer = null
  let firstTime = immediately
  return function(...args) {
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
function getDistancePx(num, distance) {
  if (jsType(num) === 'string' && num.match(/%$/)) {
    return (Number(num.substring(0, num.indexOf('%'))) / 100) * distance
  }
  return num
}
export { deepObjectMerge, emptyObject, jsType, throttle, getDistancePx }
