## 样式调整

:::demo

```javascript
const data = [
  { value: 3350, label: "直接访问" },
  { value: 1648, label: "搜索引擎" },
  { value: 2440, label: "联盟广告" },
  { value: 1550, label: "视频广告" },
  { value: 3000, label: "邮件营销" },
]
data.sort((a, b) => {
  return b.value - a.value
})
const { Chart, Funnel, Tooltip, Legend } = qcharts

const chart = new Chart({
  container: "#app",
})

chart.source(data, {
  row: "label",
  value: "value",
  text: "label",
})
const tooltip = new Tooltip()
const rightFunnel = new Funnel({
  clientRect: {
    left: "22%",
    top: "20%",
    width: "25%",
    height: "70%",
  },
  align: "right",
  pyramid: true,
})
  .style("guideline", true)
  .style("guideText", true)

const leftFunnel = new Funnel({
  clientRect: {
    left: "50%",
    top: "20%",
    width: "25%",
    height: "70%",
  },
  align: "left",
  pyramid: true,
})
  .style("guideline", true)
  .style("guideText", true)
const legend = new Legend({ align: ["center", "bottom"] })
chart.append([rightFunnel, leftFunnel, tooltip, legend])
```

:::
