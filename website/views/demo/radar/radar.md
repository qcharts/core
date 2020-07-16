## 基本雷达图

:::demo 基本雷达图

```javascript
const data = [
  { label: '分类一', category: '类别一', value: 19 },
  { label: '分类二', category: '类别一', value: 74 },
  { label: '分类三', category: '类别一', value: 40 },
  { label: '分类四', category: '类别一', value: 46 },
  { label: '分类五', category: '类别一', value: 30 },
  { label: '分类六', category: '类别一', value: 62 },

  { label: '分类一', category: '类别二', value: 69 },
  { label: '分类二', category: '类别二', value: 14 },
  { label: '分类三', category: '类别二', value: 70 },
  { label: '分类四', category: '类别二', value: 26 },
  { label: '分类五', category: '类别二', value: 50 },
  { label: '分类六', category: '类别二', value: 52 },
]

const { Chart, Radar,Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app',
})
chart.source(data, {
  row: 'category',
  value: 'value',
  text: 'label',
})
const radar = new Radar()
radar.style('section', (d) => ({ opacity: 0.3 }))
.style('section:hover',d=>({opacity: 0.8,lineWidth:2,strokeColor:'red'}))

const legend = new Legend({ align: ['center', 'bottom'] })

chart.append([radar,legend, new Tooltip()])
```

:::
