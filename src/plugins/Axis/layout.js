import { scaleLinear } from '../../utils/scaleLinear'
import { axis } from '../../utils/axis'
import { emptyObject } from '@qcharts/utils'
export default function layout(arr, attrs) {
  let res = {
    scales: [],
    labels: [],
    axisPoints: [],
    orient: attrs.orient
  }
  let defaultAttrs = {
    top: {
      label: {
        anchor: [0.5, 1]
      },
      scale: {
        anchor: [1, 1],
        width: 1,
        height: 4
      },
      type: 'category'
    },
    bottom: {
      scale: {
        anchor: [0.5, 0],
        width: 1,
        bgcolor: '#f00',
        height: 4
      },
      label: {
        anchor: [0.5, 0],
        padding: [6, 0, 0, 0],
        textAlign: 'center'
      },
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
      type: 'value'
    },
    right: {
      label: {
        anchor: [1, 0]
      },
      scale: {
        anchor: [0, 1],
        width: 4,
        height: 1
      },
      type: 'value'
    }
  }
  const { stack, splitNumber, clientRect, orient, axisGap, transpose } = attrs
  if (transpose) {
    ;['top', 'bottom', 'right', 'left'].forEach(str => {
      defaultAttrs[str].type = defaultAttrs[str].type === 'value' ? 'category' : 'value'
    })
  }
  const { width, height } = clientRect
  let scales = axis({ dataSet: arr, stack, splitNumber })
  let maxVal = Math.max.apply(this, scales)
  let minVal = Math.min.apply(this, scales)
  let type = attrs.type || defaultAttrs[orient].type
  let distance = orient === 'left' || orient === 'right' ? height : width
  if (type === 'value') {
    let scaleFY = scaleLinear()
      .domain([minVal, maxVal])
      .range([0, distance])
    scales.forEach(num => {
      let { scaleAttr, labelAttr } = getItemAttrs(defaultAttrs, orient, { text: '' + num }, num, scaleFY, clientRect)
      res.scales.push(scaleAttr)
      res.labels.push(labelAttr)
    })
  } else if (type === 'category') {
    let curArr = arr[0]
    let len = axisGap ? curArr.length : curArr.length - 1
    let scaleFY = scaleLinear()
      .domain([0, len])
      .range([0, distance])
    curArr.forEach((cell, ind) => {
      let { scaleAttr, labelAttr } = getItemAttrs(defaultAttrs, orient, cell, ind, scaleFY, clientRect, axisGap)
      res.scales.push(scaleAttr)
      res.labels.push(labelAttr)
    })
    if (axisGap) {
      // 如果是axisGap为true，需要添加一个点
      let { scaleAttr } = getItemAttrs(defaultAttrs, orient, {}, curArr.length, scaleFY, clientRect, axisGap)
      res.scales.push(scaleAttr)
    }
  }
  if (orient === 'left' || orient === 'right') {
    res.axisPoints = [
      [0, height],
      [0, 0]
    ]
  } else if (orient === 'bottom' || orient === 'top') {
    res.axisPoints = [
      [0, height],
      [width, height]
    ]
  }
  return res
}
function getItemAttrs(defaultAttrs, orient, cell, value, scaleF, clientRect, axisGap) {
  let res = emptyObject()
  let { width, height, left } = clientRect
  let labelPosValue = axisGap ? value + 0.5 : value
  if (orient === 'left' || orient === 'right') {
    let x = orient === 'left' ? 0 : width
    res.scaleAttr = { ...defaultAttrs[orient].scale, pos: [x, height - scaleF(value)] }
    res.labelAttr = { ...defaultAttrs[orient].label, width: left, text: '' + cell.text, pos: [x, height - scaleF(labelPosValue)] }
  } else if (orient === 'top' || orient === 'bottom') {
    let y = orient === 'top' ? 0 : height
    res.scaleAttr = { ...defaultAttrs[orient].scale, pos: [scaleF(value), y] }
    res.labelAttr = { ...defaultAttrs[orient].label, width: left, text: '' + cell.text, pos: [scaleF(labelPosValue), y] }
  }
  return res
}
