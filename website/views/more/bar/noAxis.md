## 隐藏坐标轴

:::demo

```javascript
const data = [
  { value: 2200, label: "05-01" },
  { value: 6000, label: "05-02" },
  { value: 5600, label: "05-03" },
  { value: 8500, label: "05-04" },
  { value: 13600, label: "05-05" },
  { value: 10800, label: "05-06" },
  { value: 6400, label: "05-07" },
  { value: 3500, label: "05-08" },
]
const { Chart, Bar, Tooltip, Axis } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  value: "value",
  text: "label",
})
let bool = true
const bar = new Bar({})
  .style("pillar", { bgcolor: "#47A1FF" })
  .style("text", (attrs, data, i, j) => {
    let size = attrs.barAttrs.size
    let points = attrs.barAttrs.points
    let str = data.value + ""

    let result = str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev
      })
    return {
      fillColor: "#2AAAFF",
      rotate: 0,
      text: result,
      anchor: [0.5, 1],
      pos: [(points[0][0] + points[1][0]) / 2, points[0][1]],
      padding: 0,
    }
  })
const tooltip = new Tooltip({
  formatter: (d) => `${d.label}: ${d.value}`,
})

const axisBottom = new Axis()
  .style("axis", false)
  .style("scale", false)
  .style("label", function(attrs, data, i) {
    return {
      rotate: 45,
      translate: [-10, 0],
      anchor: [0, 0],
    }
  })

chart.append([bar, tooltip, axisBottom])
```

:::
