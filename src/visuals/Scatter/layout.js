import { axis } from '../../utils/axis'
import { scaleLinear } from '../../utils/scaleLinear'
import { jsType } from '@qcharts/utils'

const getDataRange = data => {
  if (data.length === 0) {
    return [0, 1]
  }
  const min = Math.min(...data)
  const max = Math.max(...data)
  return [min, max]
}

const getBigRange = data => {
  if (data.length === 0) {
    return [0, 1]
  }
  const [min, max] = getDataRange(data)
  const n = Math.round(min / 10) - 1
  const m = Math.round(max / 10) + 1
  return [n * 10, m * 10]
}

const updateSectionVal = (section, newSection) => {
  const { min, max } = newSection
  if (jsType(min) === 'number') {
    section[0] = min
  }
  if (jsType(max) === 'number') {
    section[1] = max
  }
}

export default function layout(dataSet, attrs) {
  const { size, layoutWay, axisGap, sectionX, sectionY } = attrs
  const [width, height] = size
  const { text: textField, value: valueField } = dataSet.option
  const allData = [...dataSet]

  // 如果X轴是文本框，则进行均分
  const maxLen = getDataRange(dataSet.rows.map(d => d.length))[1]

  let xDomain = [0, maxLen - 1]
  let xOffset = 0
  if (axisGap) {
    xDomain = [0, maxLen]
    xOffset = width / maxLen / 2
  }
  let xSection = [0, maxLen - 1]
  const xIsTextData = allData.some(d => jsType(d.text) === 'string')
  if (!xIsTextData) {
    xSection = getBigRange(allData.map(d => d.text))
    const xScales = axis.call(this, {
      dataSet: dataSet.rows,
      stack: false,
      field: textField,
      section: sectionX
      // section: xSection
    })
    xDomain = getDataRange(xScales)
  }

  const yIsTextData = allData.some(d => jsType(d.value) === 'string')
  if (yIsTextData) {
    throw new Error("Scatter's value category data should be Number!")
  }
  let ySection = getBigRange(allData.map(d => d.layoutScaleValue()))
  const yScales = axis.call(this, {
    dataSet: dataSet.rows,
    stack: false,
    field: valueField,
    section: sectionY
    // section: ySection
  })
  const yDomain = getDataRange(yScales)

  if (layoutWay) {
    if (layoutWay[textField]) {
      updateSectionVal(xSection, layoutWay[textField])
    }
    if (layoutWay[valueField]) {
      updateSectionVal(ySection, layoutWay[valueField])
    }
  }

  const newLayoutWay = {}
  newLayoutWay[textField] = { min: xSection[0], max: xSection[1] }
  newLayoutWay[valueField] = { min: ySection[0], max: ySection[1] }

  const xLinear = scaleLinear()
    .domain(xDomain)
    .range([0, width])
  const yLinear = scaleLinear()
    .domain(yDomain)
    .range([0, height])

  const resultData = dataSet.rows.map(dArry => {
    const attrs = dArry.map((d, i) => {
      const x = xIsTextData ? i : d.text
      const y = d.layoutScaleValue()
      const pos = [xLinear(x) + xOffset, height - yLinear(y)]
      return {
        pos,
        radius: 5,
        anchor: [1, 1],
        dataOrigin: { ...d.data },
        state: d.state,
        name: dArry.name,
        col: d.col,
        row: d.row
      }
    })
    return {
      name: dArry.name,
      state: dArry.state,
      attrs
    }
  })
  return { data: resultData, layoutWay: newLayoutWay }
}
