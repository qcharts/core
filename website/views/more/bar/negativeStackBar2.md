## 负值堆叠条形图 2

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
const BAR_WIDTH = 20
const SCOPE_PIXEL = 20
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
  barWidth: BAR_WIDTH,
  polygon: true,
})
bar.style("backgroundpillar", (attr, data, i) => {
  let points = attr.points
  let size = attr.size
  points[1] = points[1] + (size[1] - BAR_WIDTH) / 2
  points[3] = points[1]
  points[5] = points[5] - (size[1] - BAR_WIDTH) / 2
  points[7] = points[5]
  points[6] = points[6] + SCOPE_PIXEL
  points[4] = points[4] - SCOPE_PIXEL
  const opacity = 0.1
  return { points, opacity }
})
bar.style("pillar", (attr, data, i, j) => {
  let points = attr.points
  if (points[6] !== points[4]) {
    if (j === 0) {
      points[6] = points[6] + SCOPE_PIXEL
      // return { points }
    } else {
      points[4] = points[4] - SCOPE_PIXEL
    }
  }
  return { points }
})
const tooltip = new Tooltip({
  formatter: (d) => ` ${d.type}: ${d.value}`,
})
const legend = new Legend({ align: ["center", "bottom"] })
const axisBottom = new Axis().style("scale", false).style("grid", false)
const axisLeft = new Axis({
  orient: "left",
  formatter: (a, b) => {
    console.log(a, b)
    return ` ${a}`
  },
})
  .style("grid", false)
  .style("scale", false)
  .style("label", true)
chart.append([bar, tooltip, legend, axisBottom, axisLeft])
```

:::
