## 柱状图颜色渐变

:::demo

```javascript
const data = [
  { value: 7, label: '易涝区' },
  { value: 11, label: '台风易受灾区' },
  { value: 20, label: '坍塌' },
  { value: 6, label: '滑坡' },
  { value: 3, label: '泥石流危险区' }
]
const BAR_WIDTH = 30
const color = '#30FBAB'
const { Chart, Bar, Tooltip, Axis, theme } = qcharts
theme.set({ colors: [color] })

const { Gradient } = spritejs
const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  value: 'value',
  text: 'label'
})

const bar = new Bar({ barWidth: BAR_WIDTH })
  .style('text', (attrs, data, i, j) => {
    const size = attrs.barAttrs.size
    const points = attrs.barAttrs.points
    return {
      padding: 0,
      rotate: 0,
      text: data.value,
      fillColor: color,
      anchor: [0.5, 1],
      pos: [(points[0][0] + points[1][0]) / 2, points[0][1] - 20]
    }
  })
  .style('pillar', (attrs, data, i, j) => {
    const points = attrs.points
    points[0][1] = points[0][1] + BAR_WIDTH / 2
    return { points }
  })
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
})
const axisLeft = new Axis({ orient: 'left' })
  .style('axis', false)
  .style('scale', false)
  .style('grid', { strokeColor: 'rgba(48, 251, 171,0.5)' })
  .style('label', { fillColor: color })
const axisBottom = new Axis()
  .style('scale', false)
  .style('axis', { strokeColor: 'rgba(48, 251, 171,1)' })
  .style('label', { padding: [20, 5], fillColor: color })
  .style('grid', false)

chart.append([bar, tooltip, axisBottom, axisLeft])
```

:::
