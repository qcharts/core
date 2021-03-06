## 负值堆叠条形图

:::demo

```javascript
const data = [
  {
    data: "05-12",
    type: "图例一",
    value: -11,
  },
  {
    data: "05-12",
    type: "图例二",
    value: 12.2,
  },
  {
    data: "05-13",
    type: "图例一",
    value: -28,
  },
  {
    data: "05-13",
    type: "图例二",
    value: 31,
  },
  {
    data: "05-14",
    type: "图例一",
    value: -36,
  },
  {
    data: "05-14",
    type: "图例二",
    value: 18,
  },
  {
    data: "05-15",
    type: "图例一",
    value: -58,
  },
  {
    data: "05-15",
    type: "图例二",
    value: 30.2,
  },
  {
    data: "05-16",
    type: "图例一",
    value: -86.2,
  },
  {
    data: "05-16",
    type: "图例二",
    value: 41.2,
  },
  {
    data: "05-17",
    type: "图例一",
    value: -71.2,
  },
  {
    data: "05-17",
    type: "图例二",
    value: 45.2,
  },
  {
    data: "05-18",
    type: "图例一",
    value: -41.2,
  },
  {
    data: "05-18",
    type: "图例二",
    value: 22.2,
  },
  {
    data: "05-19",
    type: "图例一",
    value: -16.2,
  },
  {
    data: "05-19",
    type: "图例二",
    value: 20.2,
  },
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  row: "type",
  value: "value",
  text: "data",
})
const bar = new Bar({
  stack: true,
  transpose: true,
  barWidth: 20,
}).style("text", (attrs, data, i, j) => {
  let size = attrs.barAttrs.size
  let points = attrs.barAttrs.points
  let anchor = [0, 0.5]
  let newPos = [points[1][0], (points[1][1] + points[2][1]) / 2]
  if (j % 2 === 0) {
    anchor = [1, 0.5]
    newPos = [points[0][0], (points[0][1] + points[3][1]) / 2]
  }
  return {
    fillColor: "#333",
    rotate: 0,
    fontSize: 14,
    text: Math.abs(data.value),
    anchor: anchor,
    padding: [4, 4],
    pos: newPos,
  }
})
const tooltip = new Tooltip({
  formatter: (d) => ` ${d.type}: ${d.value}`,
})
const legend = new Legend({ align: ["center", "bottom"] })
const axisBottom = new Axis().style("scale", false).style("grid", false)
const axisLeft = new Axis({
  orient: "left",
  formatter: (a, b) => {
    return ` ${a}`
  },
})
  .style("grid", false)
  .style("scale", false)
  .style("label", true)
chart.append([bar, tooltip, legend, axisBottom, axisLeft])
```

:::
