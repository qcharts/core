## 样式调整

- `arc`: 控制弧线
- `title`: 控制仪表盘中心标题
- `subTitle`: 控制仪表盘中心副标题
- `tickLine`: 控制刻度线
- `tickText`: 控制刻度文字

:::demo

```javascript
const data = [
  {
    text: '收入',
    value: 600
  }
]

const { Chart, Gauge, Legend, Tooltip } = qcharts

const chart = new Chart({ container: '#app', forceFit: true })

chart.source(data, {
  row: 'text',
  value: 'value'
})

const gauge = new Gauge({
  min: 0,
  max: 1000,
  tickStep: 200,
  title: '标题',
  subTitle: '副标题'
})

gauge.style('arc', { color: '#0f0' })

gauge.style('title', { color: 'red' })
gauge.style('subTitle', { color: 'blue' })

gauge.style('tickLine', (attrs, data, i) => {
  if (i % 2) {
    return { color: '#f00', lineWidth: 2 }
  } else if (i === 4) {
    return { color: 'transparent' }
  }
})
gauge.style('tickText', (attrs, data, i) => {
  if (i % 2) {
    return { color: '#f00', lineWidth: 2 }
  } else if (i === 2) {
    return { color: 'transparent' }
  }
})

chart.add(gauge)

chart.render()
```

:::
