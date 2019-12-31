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
  return Object.create(null)
}

function jsType(value) {
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
export { deepObjectMerge, emptyObjectj, jsType }
