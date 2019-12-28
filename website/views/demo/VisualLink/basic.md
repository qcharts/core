## visual 联动

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 1548, label: '搜索引擎', selected: true },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 3100, label: '邮件营销' }
]
const total = data.reduce((a, c) => (a += c['value']), 0)

const { Chart, Pie, Progress, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'label',
  col: 'value',
  value: 'value'
})

const ds = chart.dataset

const pie = new Pie({
  radius: 0.6,
  translateOnClick: false
})
const progress = new Progress({
  min: 0,
  max: total,
  pos: ['75%', 0],
  size: ['25%', '25%'],
  lineWidth: 2,
  formatter: d => d.label + ':' + ((d.value / total) * 100).toFixed(0) + '%'
})
const legend = new Legend()

pie.on('select', (attrs, data, index) => {
  const { label } = data
  const color = pie.color(index)
  progress
    .style('normal', { wavesColor: color, outlineColor: color })
    .source(ds.selectRows(label))
})

progress.source(ds.selectRows('直接访问'))

chart.add([pie, legend, progress])
chart.render()
```

:::
