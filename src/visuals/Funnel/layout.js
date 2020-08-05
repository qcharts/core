import { axis } from "../../utils/axis"
export default function layout(arr, attrs) {
  // 输入
  const data = arr
  const { align, pyramid, clientRect } = attrs
  const { width, height } = clientRect
  // 输出
  const polygons = []

  const max = arr[0][0].value
  const widthFactory = width / max
  const POLYGON_NUM = computerLegend(data) // 图例显示个数
  let flag = 0 // 计算当前polygon前面有几个被隐藏
  for (let i = 0, len = data.length; i < len; i++) {
    let polygon = { colse: true, lineWidth: 3, points: [] }
    const value = data[i][0].value
    let offset = 0
    let textAnchor = [0, 0.5]
    if (align === "center") {
      textAnchor = [0.5, 0.5]
      offset = 0.5
    } else if (align === "right") {
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
    if (data[i][0].state === "disabled") {
      polygon.points[6] = polygon.points[0]
      polygon.points[7] = polygon.points[1]

      polygon.points[4] = polygon.points[2]
      polygon.points[5] = polygon.points[3]

      polygon.opacity = 0
      flag++
    }
    polygon.labelAttrs = {
      opacity: data[i][0].state === "disabled" ? 0 : 1,
      text: Math.round((100 * value) / max) + "%",
      anchor: textAnchor,
      pos: [
        width * offset + (0.5 - offset) * 10,
        ((i - flag + 0.5) * height) / POLYGON_NUM,
      ],
      fillColor: "#FFF",
      fontSize: "12px",
    }
    polygons.push(polygon)
  }

  return polygons
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
