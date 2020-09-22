### 修改雷达图点形状

:::demo

```javascript
const data = [
  { date: '体力', category: '诸葛亮', sales: 100 },
  { date: '武力', category: '诸葛亮', sales: 69 },
  { date: '智力', category: '诸葛亮', sales: 100 },
  { date: '统帅', category: '诸葛亮', sales: 95 },
  { date: '魅力', category: '诸葛亮', sales: 95 },
  { date: '忠诚', category: '诸葛亮', sales: 100 }
]

const { Chart, Radar, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'category',
  value: 'sales',
  text: 'date'
})
const radar = new Radar().style('scale', false)
radar.style('section', d => ({ opacity: 0.3 })).style('section:hover', d => ({ opacity: 0.5 }))

const legend = new Legend({ align: ['center', '80%'] })

chart.append([radar, legend, new Tooltip()])
```

:::
