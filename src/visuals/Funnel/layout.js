import { axis } from "../../utils/axis"
export default function layout(arr, attrs) {
  // 输入
  const data = arr
  const { align, pyramid, clientRect, formatter } = attrs
  const { width, height } = clientRect
  // 输出
  const polygons = []
  const labels = []
  const guideLines = []
  const guideTexts = []
  const max = arr[0][0].value
  const widthFactory = width / max
  const POLYGON_NUM = computerLegend(data) // 图例显示个数
  let flag = 0 // 计算当前polygon前面有几个被隐藏
  const right = align !== "right"
  for (let i = 0, len = data.length; i < len; i++) {
    let polygon = { colse: true, lineWidth: 3, points: [] }
    const cell = data[i][0]
    const value = cell.value
    let offset = 0
    let textAnchor = [0, 0.5]
    if (align === "center") {
      textAnchor = [0.5, 0.5]
      offset = 0.5
    } else if (!right) {
      offset = 1
      textAnchor = [1, 0.5]
    }
    polygon.points.push(
      (max - value) * offset * widthFactory,
      (height * (i - flag)) / POLYGON_NUM
    )
    polygon.points.push(
      (max * offset + value * (1 - offset)) * widthFactory,
      (height * (i - flag)) / POLYGON_NUM
    )
    if (i - flag + 1 < POLYGON_NUM) {
      let counter = 1

      while (data[i + counter][0].state === "disabled") {
        counter++
      }
      const nextValue = data[i + counter][0].value

      polygon.points.push(
        (max * offset + nextValue * (1 - offset)) * widthFactory,
        (height * (i - flag + 1)) / POLYGON_NUM
      )
      polygon.points.push(
        (max - nextValue) * offset * widthFactory,
        (height * (i - flag + 1)) / POLYGON_NUM
      )
    } else {
      if (pyramid) {
        polygon.points.push(offset * width, height)
      } else {
        polygon.points.push(
          (max * offset + value * (1 - offset)) * widthFactory,
          (height * (i - flag + 1)) / POLYGON_NUM
        )
        polygon.points.push(
          (max - value) * offset * widthFactory,
          (height * (i - flag + 1)) / POLYGON_NUM
        )
      }
    }
    polygon.opacity = 1
    if (cell.state === "disabled") {
      polygon.points[6] = polygon.points[0]
      polygon.points[7] = polygon.points[1]
      polygon.points[4] = polygon.points[2]
      polygon.points[5] = polygon.points[3]
      polygon.opacity = 0
      flag++
    }
    const labelAttrs = {
      opacity: cell.state === "disabled" ? 0 : 1,
      text: Math.round((100 * value) / max) + "%",
      anchor: textAnchor,
      pos: [
        width * offset + (0.5 - offset) * 10,
        ((i - flag + 0.5) * height) / POLYGON_NUM,
      ],
      fillColor: "#FFF",
      fontSize: "12px",
    }
    let linePoints = getLinePoints(polygon.points, right)
    const guideLine = {
      points: linePoints.points,
      strokeColor: "#000",
    }
    const guideText = {
      fillColor: "#000",
      fontSize: "12px",
      text: formatter(cell.data) || cell.text + cell.value,
      pos: [guideLine.points[2] + (right ? 10 : -10), guideLine.points[3]],
      anchor: [right ? 0 : 1, 0.5],
    }
    guideLines.push(guideLine)
    guideTexts.push(guideText)
    polygons.push(polygon)
    labels.push(labelAttrs)
  }

  return { polygons, labels, guideLines, guideTexts }
}

function computerLegend(data) {
  let flag = 0
  for (let i = 0, len = data.length; i < len; i++) {
    if (data[i][0].state !== "disabled") {
      flag++
    }
  }
  if (flag === 0) {
    console.warn("data invalid!")
  }
  return flag || 1
}

function getLinePoints(points, right, length) {
  // const { points } = attrs
  // 起点
  let x, y
  if (right) {
    ;[x, y] = [(points[2] + points[4]) / 2 + 10, (points[3] + points[5]) / 2]
  } else {
    ;[x, y] = [
      (points[0] + (points.length === 6 ? points[4] : points[6])) / 2 - 10,
      (points[1] + (points.length === 6 ? points[5] : points[7])) / 2,
    ]
  }
  // 终点
  const [cX, cY] = [right ? x + (length || 40) : x - (length || 40), y]
  return {
    points: [x, y, cX, cY],
  }
}
