## 样式调整

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 1648, label: '搜索引擎' },
  { value: 2440, label: '联盟广告' },
  { value: 1550, label: '视频广告' },
  { value: 3000, label: '邮件营销' }
]

const { Chart, Funnel, Tooltip, Legend } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'label',
  col: 'value',
  value: 'value',
  text: 'label',
  sort: (a, b) => b.value - a.value
})
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
})
const rightFunnel = new Funnel({
  size: ['25%', '70%'],
  pos: ['22%', '20%'],
  align: 'right',
  pyramid: true
})
  .style('guideline', true)
  .style('guideText', true)

const leftFunnel = new Funnel({
  size: ['25%', '70%'],
  pos: ['50%', '20%'],
  align: 'left',
  pyramid: true
})
  .style('guideline', true)
  .style('guideText', true)
const legend = new Legend({ align: ['center', 'bottom'] })
chart.add([rightFunnel, leftFunnel, tooltip, legend])
chart.render()
```

:::
