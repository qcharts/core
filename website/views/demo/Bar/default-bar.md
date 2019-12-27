## Basic Bar Chart 基础条形图

:::demo1

```javascript
const data = [
  { value: 6100, label: 'TOP1' },
  { value: 5200, label: 'TOP2' },
  { value: 4400, label: 'TOP3' },
  { value: 3700, label: 'TOP4' },
  { value: 2800, label: 'TOP5' },
  { value: 2000, label: 'TOP6' },
  { value: 1300, label: 'TOP7' },
  { value: 400, label: 'TOP8' }
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: '*',
  value: 'value',
  text: 'label'
})
const bar = new Bar({
  pos: ['20%', '10%'],
  size: ['70%', '80%'],
  transpose: true,
  barWidth: 18
})
bar.style('pillar', { fillColor: '#47A1FF' })
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
}).style('icon', { fillColor: '#47A1FF' })
const legend = new Legend({ align: ['center', 'bottom'] }).style('text', {
  text: '图例一'
})
const axisBottom = new Axis().style('scale', false).style('grid', true)
const axisLeft = new Axis({
  orient: 'left'
}).style('grid', false)
chart.add([bar, tooltip, legend, axisBottom, axisLeft])
chart.render()
```

:::
