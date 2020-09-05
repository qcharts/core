## Basic Column Chart 基础柱状图

:::demo

```javascript
const data = [
  { value: 22, label: "05-01" },
  { value: 60, label: "05-02" },
  { value: 56, label: "05-03" },
  { value: 85, label: "05-04" },
  { value: 136, label: "05-05" },
  { value: 108, label: "05-06" },
  { value: 64, label: "05-07" },
  { value: 35, label: "05-08" },
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
  animation: {
    duration: 1000,
    easing: "elasticOut",
  },
})
const tooltip = new Tooltip()
const axisBottom = new Axis().style("grid", false)
const axisLeft = new Axis({ orient: "left" })
  .style("axis", false)
  .style("scale", false)
chart.append([bar, tooltip, axisBottom, axisLeft])
```

:::
