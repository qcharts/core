## 样式调整

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 1548, label: '搜索引擎' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 3100, label: '邮件营销' }
]

const { Chart, Bar, Tooltip, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: '*',
  value: 'value',
  text: 'label'
})

const bar = new Bar()
  .style('pillar', (attrs, d, i) => {
    if (i % 2 === 0) {
      return {
        border: { width: 1 },
        borderRadius: 20,
        fillColor: {
          vector: [0, 0, 0, 100],
          colors: [
            { color: '#9861E5', offset: 0 },
            { color: '#ADDF84', offset: 1 }
          ]
        }
      }
    }
    return {
      border: { width: 1 },
      opacity: 1.0,
      fillColor: {
        vector: [0, 0, 0, 100],
        colors: [
          { color: '#84E0BE', offset: 0 },
          { color: '#FBD54A', offset: 1 }
        ]
      },
      borderRadius: 20
    }
  })
  .style('pillar:hover', (attrs, data, i) => {
    if (i % 2 === 0) {
      return {
        borderRadius: 10
      }
    }
    return { opacity: 0.5, fillColor: '#FC6980' }
  })
  .style('text', (attrs, data, i) => {
    let anchor = attrs.anchor || [0, 0]
    let size = attrs.size
    let pos = attrs.pos
    return {
      rotate: 0,
      text: data.value,
      anchor: [0.5, 1],
      pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
    }
  })
  .style('text:hover', (attrs, data, i) => {
    let anchor = attrs.anchor || [0, 0]
    let size = attrs.size
    let pos = attrs.pos
    return {
      font: '22px "宋体"',
      rotate: 0,
      text: data.value,
      anchor: [0.5, 1],
      pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
    }
  })
  .style('backgroundpillar', { borderRadius: 10 })
  .style('backgroundpillar:hover', { borderRadius: 20 })

const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
})

const axisBottom = new Axis()
const axisLeft = new Axis({ orient: 'left' })

chart.add([bar, tooltip, axisBottom, axisLeft])
chart.render()
```

:::
