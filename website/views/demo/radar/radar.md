## 基本雷达图

:::demo 基本雷达图

```javascript
const data = [
  { label: '分类一', category: '类别一', value: 19 },
  { label: '分类二', category: '类别一', value: 74 },
  { label: '分类三', category: '类别一', value: 40 },
  { label: '分类四', category: '类别一', value: 46 },
  { label: '分类五', category: '类别一', value: 30 },
  { label: '分类六', category: '类别一', value: 62 }
]

const { Chart, Radar, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'category',
  value: 'value',
  text: 'label'
})
const radar = new Radar()

radar.style('point', false)

const legend = new Legend({ align: ['center', 'bottom'] })

chart.add([radar, legend])

chart.add(
  new Tooltip({
    title: d => d[0].data[0].category,
    formatter: d => {
      const content = d.data.map(d => `${d.label}:${d.value}`)
      return content.join('\n')
    }
  })
)
chart.render()
```

:::
