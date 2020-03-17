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
  const { stack, splitNumber, clientRect, orient, axisGap } = attrs
  console.log(attrs)
  const { width, height, left } = clientRect
  let scales = axis({ dataSet: arr, stack, splitNumber })
  let maxVal = Math.max.apply(this, scales)
  let minVal = Math.min.apply(this, scales)
  let type = attrs.type || defaultAttrs[orient].type
  let scaleAttr = emptyObject()
  let labelAttr = emptyObject()
  if (type === 'value') {
    let distance = orient === 'left' || orient === 'right' ? height : width
    let scaleFY = scaleLinear()
      .domain([minVal, maxVal])
      .range([0, distance])
    scales.forEach((num, ind) => {
      if (orient === 'left' || orient === 'right') {
        let x = orient === 'left' ? 0 : width
        scaleAttr = { ...defaultAttrs[orient].scale, pos: [x, height - scaleFY(num)] }
        labelAttr = { ...defaultAttrs[orient].label, width: left, text: '' + num, index: ind, pos: [x, height - scaleFY(num)] }
      } else if (orient === 'top' || orient === 'bottom') {
        let y = orient === 'top' ? 0 : height
        scaleAttr = { ...defaultAttrs[orient].scale, pos: [scaleFY(num), y] }
        labelAttr = { ...defaultAttrs[orient].label, width: left, text: '' + num, index: ind, pos: [scaleFY(num), y] }
      }
      res.scales.push(scaleAttr)
      res.labels.push(labelAttr)
    })
  } else if (type === 'category') {
    let curArr = arr[0]
    let distance = orient === 'left' || orient === 'right' ? height : width
    let scaleFY = scaleLinear()
      .domain([0, curArr.length - 1])
      .range([0, distance])
    curArr.forEach((cell, ind) => {
      if (orient === 'left' || orient === 'right') {
        let x = orient === 'left' ? 0 : width
        scaleAttr = { ...defaultAttrs[orient].scale, pos: [x, height - scaleFY(num)] }
        labelAttr = { ...defaultAttrs[orient].label, width: left, text: '' + cell.text, index: ind, pos: [x, height - scaleFY(ind)] }
      } else if (orient === 'top' || orient === 'bottom') {
        let y = orient === 'top' ? 0 : height
        scaleAttr = { ...defaultAttrs[orient].scale, pos: [scaleFY(ind), y] }
        labelAttr = { ...defaultAttrs[orient].label, width: left, text: '' + cell.text, index: ind, pos: [scaleFY(ind), y] }
      }
      res.scales.push(scaleAttr)
      res.labels.push(labelAttr)
    })
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
