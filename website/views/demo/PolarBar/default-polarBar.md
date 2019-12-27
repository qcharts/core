## Basic PolarBar Chart 基础柱状图

:::demo

```javascript
const data = [
  { value: 6100, label: 'TOP1' },
  { value: 5200, label: 'TOP2' },
  { value: 4400, label: 'TOP3' },
  { value: 3700, label: 'TOP4' },
  { value: 2800, label: 'TOP5' },
  { value: 3000, label: 'TOP6' },
  { value: 5300, label: 'TOP7' },
  { value: 3400, label: 'TOP8' }
]
const { Chart, PolarBar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: '*',
  value: 'value',
  text: 'label'
})
const bar = new PolarBar({
  innerRadius: 0.1,
  radius: 0.8
})
bar.style('pillar', { lineWidth: 1, strokeColor: '#FFF' })
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
})

chart.add([bar, tooltip])
chart.render()
```

:::
