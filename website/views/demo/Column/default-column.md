## Basic Column Chart 基础柱状图

:::demo

```javascript
const data = [
  { value: 22, label: '05-01' },
  { value: 60, label: '05-02' },
  { value: 56, label: '05-03' },
  { value: 85, label: '05-04' },
  { value: 136, label: '05-05' },
  { value: 108, label: '05-06' },
  { value: 64, label: '05-07' },
  { value: 35, label: '05-08' }
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
const bar = new Bar().style('pillar', { fillColor: '#47A1FF' })
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
}).style('icon', { fillColor: '#47A1FF' })
const legend = new Legend({ align: ['center', 'bottom'] }).style('text', {
  text: '图例一'
})
const axisBottom = new Axis()
const axisLeft = new Axis({ orient: 'left' })
  .style('axis', false)
  .style('scale', false)
chart.add([bar, tooltip, legend, axisBottom, axisLeft])
chart.render()
```

:::
