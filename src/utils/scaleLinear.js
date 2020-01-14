function scaleLinear() {
  let domain = [0, 1]
  let range = [0, 1]
  function scale(num) {
    let disDomain = domain[1] - domain[0]
    let disRange = range[1] - range[0]
    let per = (num - domain[0]) / disDomain || 0
    return range[0] + disRange * per
  }
  scale.domain = function(arr) {
    domain = arr
    return this
  }
  scale.range = function(arr) {
    range = arr
    return this
  }
  return scale
}

// const data = [80, 40, 30, 60, 70]
// const s = scaleLinear().domain([0, 100]).range([0, 100])
// console.log(data.map(s))

export { scaleLinear }
