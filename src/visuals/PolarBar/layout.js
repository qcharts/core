import { axis } from '../../utils/axis'

export default function layout(arr, attrs) {
  // 输入
  const data = arr
  const { stack, splitNumber, clientRect, groupPadAngle, activeOffset } = attrs
  const { width, height } = clientRect
  const barSize = [width, height]
  const groupGap = groupPadAngle || 0
  const stackGap = attrs.stackGap || 0

  const radius = attrs.radius || 1
  const barInnerRadius = attrs.innerRadius || 0
  const padAngle = attrs.padAngle
  // 输出
  const barData = []

  const bgPillarAttr = { opacity: 0.01, fillColor: '#FF0000' }

  // const valueAxis = getAxis(stack, data)
  const valueAxis = axis.call(this, { dataSet: data, stack, splitNumber })
  if (!valueAxis || !valueAxis.length) {
    return { barData }
  }

  const tableSize = Math.min(barSize[0], barSize[1])
  const axisValueMax = Math.max.apply(this, valueAxis)
  const axisValueMin = Math.min.apply(this, valueAxis)
  const POSITIVE_RATIO = axisValueMax / (axisValueMax - axisValueMin) // 正负柱子高度比例
  const GROUP_BAR_NUM = computerLegend(data) // 图例显示个数

  const GROUP_NUM = data[0].length
  const BAR_MAX_HEIGHT = 0.5 * radius * tableSize
  const BAR_HEIGHT_FACTOR = BAR_MAX_HEIGHT / (axisValueMax - axisValueMin)
  if (!stack) {
    // 分组柱状图
    for (let i = 0, len = GROUP_NUM; i < len; i++) {
      let flag = 0 // 计算当前柱子前面有几根被隐藏
      let value = 0
      let gpData = { rects: [] }
      let groupAngle = (360 - GROUP_NUM * groupGap) / GROUP_NUM
      // 计算单根柱子
      for (let j = 0, lenj = data.length; j < lenj; j++) {
        // if (data[j][i].disabled !== true) {
        //   data[j][i].disabled = false;
        // }
        let barAngle = groupAngle / GROUP_BAR_NUM
        let startAngle = (groupAngle + groupGap) * i + barAngle * (j - flag) - 90
        value = data[j][i].layoutScaleValue()
        let barHeight = BAR_HEIGHT_FACTOR * value
        let innerRadius = BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) + barInnerRadius * tableSize * 0.5
        //默认中心坐标偏移量0
        let offsetPos = [0, 0]
        let rect = {
          innerRadius: innerRadius,
          outerRadius: value === 0 ? innerRadius + 1 : innerRadius + barHeight,
          startAngle: startAngle,
          endAngle: startAngle + barAngle,
          value: data[j][i].value,
          text: data[j][i].text,
          state: data[j][i].state,
          data: data[j][i].data,
          id: i * lenj + j,
          offsetPos: offsetPos,
          opacity: value === 0 ? 0 : 1
        }
        if (rect.state === 'hover') {
          let curAngle = ((rect.startAngle + rect.endAngle) / 2) % 360
          rect.bisectorRadian = transRadius(curAngle)
          //角平分,角度转弧度,默认是顺时针，角度为相反
          rect.offsetPos = [activeOffset * Math.cos(rect.bisectorRadian), activeOffset * Math.sin(rect.bisectorRadian)]
          //选中状态
        }
        if (rect.state === 'disabled') {
          rect.endAngle = rect.startAngle
          rect.radius = 0
          rect.opacity = 0
          flag++
        } else {
          // rect.opacity = 1
          gpData.rects.push(rect)
        }
        if (GROUP_NUM < 2) {
          delete rect.startAngle
          delete rect.endAngle
        }
        barData.push(rect)
      }
    }
  } else {
    // 堆叠柱状图
    for (let i = 0, len = GROUP_NUM; i < len; i++) {
      let heightSumUp = 0
      let heightSumDown = 0
      let value = 0
      let gpData = { rects: [] }
      let groupAngle = (360 - GROUP_NUM * groupGap) / GROUP_NUM
      // 计算单根柱子
      for (let j = 0, lenj = data.length; j < lenj; j++) {
        // if (data[j][i].disabled !== true) {
        //   data[j][i].disabled = false;
        // }
        let startAngle = (groupAngle + groupGap) * i - 90
        value = data[j][i].value
        let barHeight = BAR_HEIGHT_FACTOR * value

        let innerRadius = value < 0 ? BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) - heightSumDown : BAR_MAX_HEIGHT * (1 - POSITIVE_RATIO) + heightSumUp
        innerRadius = innerRadius + barInnerRadius * tableSize * 0.5
        let offsetPos = [0, 0]
        let rect = {
          innerRadius: innerRadius,
          outerRadius: value === 0 ? innerRadius + 1 : innerRadius + barHeight - stackGap,
          startAngle: startAngle,
          endAngle: startAngle + groupAngle,
          value: data[j][i].value,
          text: data[j][i].text,
          state: data[j][i].state,
          data: data[j][i].data,
          offsetPos: offsetPos,
          opacity: value === 0 ? 0 : 1
        }

        if (rect.state === 'hover') {
          rect.strokeColor = '#F00'
        } else {
          delete rect.strokeColor
        }
        if (rect.state === 'disabled') {
          rect.opacity = 0
        } else {
          // rect.opacity = 1
          value < 0 ? (heightSumDown = heightSumDown - barHeight) : (heightSumUp = heightSumUp + barHeight)
          gpData.rects.push(rect)
        }
        barData.push(rect)
      }
    }
  }
  attachPadAngleOfArr(barData, padAngle)
  return { barData }
}

function computerLegend(data) {
  let flag = 0
  for (let i = 0, len = data.length; i < len; i++) {
    if (data[i][0].state !== 'disabled') {
      flag++
    }
  }
  if (flag === 0) {
    // console.warn('data invalid!')
  }
  return flag || 1
}
export function transRadius(angle) {
  return (angle / 180) * Math.PI
}
function attachPadAngleOfArr(arr, padAngle = 0) {
  // 设置 padAngle
  const maxPadAngle = Math.min.apply(
    null,
    arr.filter(d => !d.disabled).map(a => a.endAngle - a.startAngle)
  )

  if (padAngle >= 0) {
    padAngle = padAngle > maxPadAngle ? maxPadAngle / 2 : padAngle

    arr
      .filter(d => !d.disabled)
      .forEach(a => {
        if (a.endAngle - a.startAngle > padAngle * 2) {
          a.padAngle = padAngle
          a.startAngle += padAngle
          a.endAngle -= padAngle
        }
      })
  }
}
