## Basic Bar Chart 基础条形图

:::demo1

```javascript
const data = [
  { value: 6100, label: "TOP1" },
  { value: 5200, label: "TOP2" },
  { value: 4400, label: "TOP3" },
  { value: 3700, label: "TOP4" },
  { value: 2800, label: "TOP5" },
  { value: 2000, label: "TOP6" },
  { value: 1300, label: "TOP7" },
  { value: 400, label: "TOP8" },
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  value: "value",
  text: "label",
})
const bar = new Bar({
  transpose: true,
  barWidth: 18,
  animation: {
    duration: 1000,
    easing: "elasticOut",
  },
})

const tooltip = new Tooltip()
const axisBottom = new Axis().style("scale", false)
const axisLeft = new Axis({
  orient: "left",
}).style("grid", false)
chart.append([bar, tooltip, axisBottom, axisLeft])
```

:::
