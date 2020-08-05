import { Group, Polyline, Label } from "spritejs"
import { getStyle } from "@/utils/getStyle"

const LINES_MAP = new WeakMap()
const LABELS_MAP = new WeakMap()

export const withGuide = (visual, attrs, cell, formatter) => {
  if (cell.state === "disabled") {
    return null
  }
  const { align } = visual.renderAttrs
  const lineStyle = getStyle(visual, "guideline", [{}], [cell.data, cell.row])
  const textStyle = getStyle(visual, "guideText", [{}], [cell.data, cell.row])

  if (!lineStyle && !textStyle) {
    return null
  }
  const right = align !== "right"
  const { points } = linePoints(attrs, right, lineStyle && lineStyle.length)

  let line = Object.assign(
    {
      points,
      strokeColor: "#000",
    },
    typeof lineStyle === "boolean" ? {} : lineStyle
  )
  let label = Object.assign(
    {
      fillColor: "#000",
      fontSize: "12px",
      text: formatter(cell.data) || cell.text + cell.value,
      pos: [points[2] + (right ? 10 : -10), points[3]],
      anchor: [right ? 0 : 1, 0.5],
    },
    typeof textStyle === "boolean" ? {} : textStyle
  )

  return (
    <Group>
      {lineStyle ? <Polyline {...line} /> : null}
      {textStyle ? <Label {...label} /> : null}
    </Group>
  )
}

function linePoints(attrs, right, length) {
  const { points } = attrs
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
