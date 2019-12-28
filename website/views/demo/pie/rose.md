## Nightingle Rose Chart 南丁格尔玫瑰图

:::demo

```javascript
const data = [
  { value: 335, name: '直接访问' },
  { value: 310, name: '邮件营销' },
  { value: 280, name: '联盟广告' },
  { value: 254, name: '视频广告' },
  { value: 200, name: '搜索引擎' }
]
const { Chart, Pie, Tooltip, Legend } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  row: 'name',
  value: 'value'
})

const pie = new Pie({
  radius: 0.7,
  pos: [0, 0],
  size: ['80%', '100%'],
  rose: true
})
pie.style('guideline', true)
pie.style('guideText', { fontSize: '12px' })

const legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })
legend.style('icon', (attrs, d, i) => ({
  borderRadius: 10,
  marginTop: i > 0 ? 15 : 0
}))
legend.style('text', (attrs, d, i) => ({
  marginTop: i > 0 ? 15 : 0
}))

chart.add(pie)
chart.add(legend)

chart.render()
```

:::

### 设定角度

:::demo

```javascript
const data = [
  { value: 335, name: '直接访问' },
  { value: 310, name: '邮件营销' },
  { value: 280, name: '联盟广告' },
  { value: 254, name: '视频广告' },
  { value: 200, name: '搜索引擎' }
]
const { Chart, Pie, Axis, Tooltip, Legend } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  row: 'name',
  value: 'value'
})

const pie = new Pie({
  size: [360, 360],
  radius: 1,
  rose: true,
  startAngle: Math.PI * 1,
  endAngle: Math.PI * 1.5
})
pie.style('text', true)

const legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })
legend.style('icon', (attrs, d, i) => ({
  borderRadius: 10,
  marginTop: i > 0 ? 15 : 0
}))
legend.style('text', (attrs, d, i) => ({
  marginTop: i > 0 ? 15 : 0
}))

const axisBottom = new Axis()
const axisLeft = new Axis({
  orient: 'right',
  grid: true,
  coord: 'polar',
  coordPos: ['100%', '100%']
})

chart.add(pie)
chart.add([legend, axisBottom, axisLeft])

chart.render()
```

:::
