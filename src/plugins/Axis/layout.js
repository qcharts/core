import { scaleLinear } from '../../utils/scaleLinear'
import { axis } from '../../utils/axis'
import { emptyObject } from '@qcharts/utils'
export default function layout(arr, attrs) {
  let res = {
    scales: [],
    labels: [],
    grids: [],
    axisPoints: [],
    orient: attrs.orient
  }
  let defaultAttrs = {
    top: {
      label: {
        anchor: [0.5, 1],
        padding: [0, 0, 6, 0],
        textAlign: 'center'
      },
      scale: {
        anchor: [0.5, 1],
        width: 1,
        height: 4
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'category'
    },
    bottom: {
      scale: {
        anchor: [0.5, 0],
        width: 1,
        height: 4
      },
      label: {
        anchor: [0.5, 0],
        padding: [6, 0, 0, 0],
        textAlign: 'center'
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
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
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'value'
    },
    right: {
      label: {
        anchor: [0, 0.5],
        padding: [0, 0, 0, 8]
      },
      scale: {
        anchor: [0, 0.5],
        width: 4,
        height: 1
      },
      grid: {
        strokeColor: '#666'
      },
      name: {},
      type: 'value'
    }
  }
  const { stack, splitNumber, clientRect, orient, axisGap, transpose, section } = attrs
  if (transpose) {
    ;['top', 'bottom', 'right', 'left'].forEach(str => {
      defaultAttrs[str].type = defaultAttrs[str].type === 'value' ? 'category' : 'value'
    })
  }
  const { width, height } = clientRect
  let targetVisual = attrs.targetVisual || this.chart.visuals[0]
  let axisAttrs = {
    dataSet: arr,
    stack,
    splitNumber,
    section
  }
  if (targetVisual && targetVisual.constructorName === 'Scatter' && defaultAttrs[attrs.orient].type === 'category') {
    axisAttrs.field = targetVisual.dataset.option.text
  }
  let scales = axis.call(this, axisAttrs)
  let maxVal = Math.max.apply(this, scales)
  let minVal = Math.min.apply(this, scales)
  let type = attrs.type || defaultAttrs[orient].type
  let distance = orient === 'left' || orient === 'right' ? height : width
  let datasetReverse = this.dataset.datasetReverse
  if (type === 'value') {
    let scaleFY = scaleLinear()
      .domain([minVal, maxVal])
      .range([0, distance])
    scales.forEach(num => {
      let { scaleAttr, labelAttr, gridAttr } = getItemAttrs(
        defaultAttrs,
        orient,
        {
          text: '' + typeof datasetReverse === 'function' ? datasetReverse(num) : num
        },
        num,
        scaleFY,
        clientRect
      )
      res.scales.push(scaleAttr)
      res.labels.push(labelAttr)
      res.grids.push(gridAttr)
    })
  } else if (type === 'category') {
    let curArr = arr[0]
    let len = axisGap ? curArr.length : curArr.length - 1
    let scaleFY = scaleLinear()
      .domain([0, len])
      .range([0, distance])
    curArr.forEach((cell, ind) => {
      let { scaleAttr, labelAttr, gridAttr } = getItemAttrs(defaultAttrs, orient, cell, ind, scaleFY, clientRect, axisGap)
      res.scales.push(scaleAttr)
      res.labels.push(labelAttr)
      res.grids.push(gridAttr)
    })
    if (axisGap) {
      // 如果是axisGap为true，需要添加一个点
      let { scaleAttr, gridAttr } = getItemAttrs(defaultAttrs, orient, {}, curArr.length, scaleFY, clientRect, axisGap)
      res.scales.push(scaleAttr)
      res.grids.push(gridAttr)
    }
  }
  if (orient === 'left' || orient === 'right') {
    let dx = orient === 'left' ? 0 : width
    res.axisPoints = [
      [dx, height],
      [dx, 0]
    ]
    res.nameAttr = { pos: [dx, 0], anchor: [0.5, 1], padding: [10] }
  } else if (orient === 'bottom' || orient === 'top') {
    let dy = orient === 'bottom' ? height : 0
    res.axisPoints = [
      [0, dy],
      [width, dy]
    ]
    res.nameAttr = { pos: [width, dy], anchor: [0, 1] }
  }
  return res
}
function getItemAttrs(defaultAttrs, orient, cell, value, scaleF, clientRect, axisGap) {
  let res = emptyObject()
  let { width, height, left } = clientRect
  let labelPosValue = axisGap ? value + 0.5 : value
  if (orient === 'left' || orient === 'right') {
    let x = orient === 'left' ? 0 : width
    let yv = scaleF(value)
    res.scaleAttr = { ...defaultAttrs[orient].scale, pos: [x, height - yv] }
    res.gridAttr = {
      ...defaultAttrs[orient].grid,
      points: [
        [x, height - yv],
        [width, height - yv]
      ]
    }
    res.labelAttr = {
      ...defaultAttrs[orient].label,
      width: left,
      text: '' + cell.text,
      pos: [x, height - scaleF(labelPosValue)]
    }
  } else if (orient === 'top' || orient === 'bottom') {
    let y = orient === 'top' ? 0 : height
    let xv = scaleF(value)
    res.scaleAttr = { ...defaultAttrs[orient].scale, pos: [xv, y] }
    res.gridAttr = {
      ...defaultAttrs[orient].grid,
      points: [
        [xv, 0],
        [xv, y]
      ]
    }
    res.labelAttr = {
      ...defaultAttrs[orient].label,
      width: left,
      text: '' + (cell.text || ''),
      pos: [scaleF(labelPosValue), y]
    }
  }
  return res
}
