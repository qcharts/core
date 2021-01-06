import { axis } from '../../utils/axis'
export default function layout(arr, attrs) {
  // 输入
  const data = arr
  const { stack, splitNumber, clientRect } = attrs
  const { width, height } = clientRect
  const barSize = [width, height]
  const transpose = attrs.transpose || false
  const groupGap = attrs.groupGap || 0
  const stackGap = attrs.stackGap || 0
  let barWidth = attrs.barWidth || 0

  // 输出
  const barData = []
  const groupData = []
  const textData = []
  // const bgPillarAttr = { opacity: 0.01, bgcolor: "#000" }

  const valueAxis = axis.call(this, { dataSet: data, stack, splitNumber })
  if (!valueAxis || !valueAxis.length) {
    return { barData, groupData, textData }
  }
  const tableSize = transpose
    ? { label: barSize[1], value: barSize[0] }
    : { label: barSize[0], value: barSize[1] }
  const axisValueMax = Math.max.apply(this, valueAxis)
  const axisValueMin = Math.min.apply(this, valueAxis)
  const POSITIVE_RATIO = axisValueMax / (axisValueMax - axisValueMin) // 正负柱子高度比例
  const GROUP_BAR_NUM = computerLegend(data) // 图例显示个数

  const GROUP_NUM = data[0].length
  let gap = 0
  // 柱子宽度，根据数据绘制类型计算，是否分组，是否旋转
  if (barWidth === 0) {
    barWidth = stack
      ? (tableSize.label * 0.5) / GROUP_NUM
      : (tableSize.label * 0.5) / (GROUP_NUM * GROUP_BAR_NUM)

    gap = stack ? barWidth : barWidth * GROUP_BAR_NUM
  } else {
    gap = stack
      ? (tableSize.label - barWidth * GROUP_NUM) / GROUP_NUM
      : (tableSize.label -
          barWidth * GROUP_BAR_NUM * GROUP_NUM -
          groupGap * (GROUP_BAR_NUM - 1) * GROUP_NUM) /
        GROUP_NUM
  }

  const BAR_HEIGHT_FACTOR = tableSize.value / (axisValueMax - axisValueMin)
  if (!stack) {
    // 分组柱状图
    for (let i = 0, len = GROUP_NUM; i < len; i++) {
      let flag = 0 // 计算当前柱子前面有几根被隐藏
      let value = 0
      let rawValue = 0
      let gpData = { rects: [] }
      // 计算单根柱子
      for (let j = 0, lenj = data.length; j < lenj; j++) {
        // if (data[j][i].state !== "disabled") {
        //   data[j][i].state = "default";
        // }
        rawValue = data[j][i].value
        value = data[j][i].layoutScaleValue()
        let barHeight = BAR_HEIGHT_FACTOR * Math.abs(value)
        const pos = transpose
          ? [
              tableSize.value * (1 - POSITIVE_RATIO),
              gap / 2 +
                (barWidth + groupGap) * (j - flag) +
                (barWidth * GROUP_BAR_NUM +
                  groupGap * (GROUP_BAR_NUM - 1) +
                  gap) *
                  (GROUP_NUM - i - 1)
            ]
          : [
              gap / 2 +
                (barWidth + groupGap) * (j - flag) +
                (barWidth * GROUP_BAR_NUM +
                  groupGap * (GROUP_BAR_NUM - 1) +
                  gap) *
                  i,
              tableSize.value * POSITIVE_RATIO
            ]
        const size = transpose
          ? [barHeight, barWidth - 1]
          : [barWidth - 1, barHeight]
        const anchor = [
          transpose && value < 0 ? 1 : 0,
          transpose || value < 0 ? 0 : 1
        ]
        // const point1 = [gap / 2 + barWidth]
        const rect = {
          anchor: anchor,
          size: size,
          pos: pos
        }

        rect.points = getPoints({
          pos,
          size,
          anchor,
          transpose
        })
        delete rect.pos
        if (data[j][i].state === 'disabled') {
          getDisabledPoints({ value, points: rect.points, transpose })
          flag++
        } else {
          gpData.rects.push(rect)
        }
        let label = {
          opacity: data[j][i].state !== 'disabled' ? 1 : 0,
          text: rawValue.toString(),
          anchor: [transpose && value < 0 ? 1 : 0, 0.5],
          pos: transpose
            ? [
                tableSize.value * (1 - POSITIVE_RATIO),
                gap / 2 +
                  (barWidth + groupGap) * (j - flag) +
                  (barWidth * GROUP_BAR_NUM +
                    groupGap * (GROUP_BAR_NUM - 1) +
                    gap) *
                    (GROUP_NUM - i - 1) +
                  barWidth * 0.5
              ]
            : [
                gap / 2 +
                  (barWidth + groupGap) * (j - flag) +
                  (barWidth * GROUP_BAR_NUM +
                    groupGap * (GROUP_BAR_NUM - 1) +
                    gap) *
                    i +
                  barWidth * 0.5,
                tableSize.value * POSITIVE_RATIO
              ],
          rotate: transpose ? 0 : value < 0 ? 90 : 270,
          paddingLeft: 8
        }
        barData.push(rect)
        textData.push(label)
      }
      const groupPos = transpose
        ? [
            0,
            (gap + barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1)) *
              (GROUP_NUM - i - 1)
          ]
        : [
            (gap + barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1)) *
              i,
            0
          ]
      const groupSize = transpose
        ? [
            tableSize.value,
            barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap
          ]
        : [
            barWidth * GROUP_BAR_NUM + groupGap * (GROUP_BAR_NUM - 1) + gap,
            tableSize.value
          ]
      // 柱子整体属性
      gpData = Object.assign(gpData, {
        // title: data[0][i]['_x'],
        pos: groupPos,
        size: groupSize
        // ...bgPillarAttr,
      })

      gpData.points = getPoints({
        pos: groupPos,
        size: groupSize,
        anchor: [0, 0],
        transpose,
        value,
        stillSprite: true
      })
      delete gpData.pos

      groupData.push(gpData)
    }
  } else {
    // 堆叠柱状图
    for (let i = 0, len = GROUP_NUM; i < len; i++) {
      let heightSumUp = 0
      let heightSumDown = 0
      let value = 0
      let gpData = { rects: [] }
      // 计算单根柱子
      for (let j = 0, lenj = data.length; j < lenj; j++) {
        let stackGapTemp = stackGap
        // if (data[j][i].state !== "disabled") {
        //   data[j][i].state = "default";
        // }
        value = data[j][i].layoutScaleValue()
        let barHeight = BAR_HEIGHT_FACTOR * Math.abs(value)
        if (barHeight === 0) {
          stackGapTemp = 0
        }
        let posY =
          value < 0
            ? tableSize.value * POSITIVE_RATIO + heightSumDown
            : tableSize.value * POSITIVE_RATIO - heightSumUp
        let posX =
          value < 0
            ? tableSize.value * (1 - POSITIVE_RATIO) - heightSumDown
            : tableSize.value * (1 - POSITIVE_RATIO) + heightSumUp
        let posLabelY =
          value < 0
            ? tableSize.value * POSITIVE_RATIO + heightSumDown + barHeight
            : tableSize.value * POSITIVE_RATIO - heightSumUp
        const pos = transpose
          ? [posX, gap / 2 + (barWidth + gap) * (GROUP_NUM - i - 1)]
          : [gap / 2 + (barWidth + gap) * i, posY]
        const size = transpose
          ? [barHeight - stackGapTemp, barWidth]
          : [barWidth, barHeight - stackGapTemp]
        const anchor = [
          transpose && value < 0 ? 1 : 0,
          transpose || value < 0 ? 0 : 1
        ]
        let rect = {
          anchor: anchor,
          size: size,
          pos: pos,
          index: j
        }

        rect.points = getPoints({
          pos,
          size,
          anchor,
          transpose
        })
        delete rect.pos
        let paddingAttrs = transpose ? 'paddingLeft' : 'paddingBottom'
        let label = {
          opacity: data[j][i].state !== 'disabled' ? 1 : 0,
          text: value.toString(),
          anchor: transpose ? (value < 0 ? [1, 0.5] : [0, 0.5]) : [0.5, 1],
          pos: transpose
            ? [
                posX,
                +(gap + barWidth) / 2 + (barWidth + gap) * (GROUP_NUM - i - 1)
              ]
            : [(gap + barWidth) / 2 + (barWidth + gap) * i, posLabelY]
        }
        label[paddingAttrs] = 8
        if (data[j][i].state === 'disabled') {
          getDisabledPoints({ value, points: rect.points, transpose })
        } else {
          value < 0
            ? (heightSumDown = heightSumDown + barHeight)
            : (heightSumUp = heightSumUp + barHeight)
          gpData.rects.push(rect)
        }
        textData.push(label)
        barData.push(rect)
      }
      const groupPos = transpose
        ? [0, (gap + barWidth) * (GROUP_NUM - i - 1)]
        : [(gap + barWidth) * i, 0]
      const groupSize = transpose
        ? [tableSize.value, barWidth + gap]
        : [barWidth + gap, tableSize.value]
      // 柱子整体属性
      gpData = Object.assign(gpData, {
        pos: groupPos,
        size: groupSize
        // ...bgPillarAttr,
      })

      gpData.points = getPoints({
        pos: groupPos,
        size: groupSize,
        anchor: [0, 0],
        transpose
      })
      delete gpData.pos

      groupData.push(gpData)
    }
  }

  return { textData, barData, groupData }
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

function getPoints(params) {
  let { pos, size, anchor, transpose } = params
  return transpose
    ? [
        [pos[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]],
        [pos[0] + size[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]],
        [
          pos[0] + size[0] - anchor[0] * size[0],
          pos[1] + size[1] - anchor[1] * size[1]
        ],
        [pos[0] - anchor[0] * size[0], pos[1] + size[1] - anchor[1] * size[1]]
      ]
    : [
        [pos[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]],
        [pos[0] + size[0] - anchor[0] * size[0], pos[1] - anchor[1] * size[1]],
        [
          pos[0] + size[0] - anchor[0] * size[0],
          pos[1] + size[1] - anchor[1] * size[1]
        ],
        [pos[0] - anchor[0] * size[0], pos[1] + size[1] - anchor[1] * size[1]]
      ]
}
function getDisabledPoints(params) {
  let { points, value, transpose } = params
  if (transpose) {
    if (value < 0) {
      points[0][0] = points[1][0]
      points[3][0] = points[2][0]
    } else {
      points[1][0] = points[0][0]
      points[2][0] = points[3][0]
    }
  } else {
    if (value < 0) {
      points[2][1] = points[1][1]
      points[3][1] = points[0][1]
    } else {
      points[1][1] = points[2][1]
      points[0][1] = points[3][1]
    }
  }
  return points
}
