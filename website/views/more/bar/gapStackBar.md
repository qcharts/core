## 间距堆叠条形图

:::demo

```javascript
const data = [
  {
    data: '自然灾害',
    type: '一般',
    value: 30
  },
  {
    data: '自然灾害',
    type: '较大',
    value: 15
  },
  {
    data: '自然灾害',
    type: '重大',
    value: 4
  },
  {
    data: '自然灾害',
    type: '特大',
    value: 0
  },
  {
    data: '事故灾害',
    type: '一般',
    value: 36
  },
  {
    data: '事故灾害',
    type: '较大',
    value: 18
  },
  {
    data: '事故灾害',
    type: '重大',
    value: 3
  },
  {
    data: '事故灾害',
    type: '特大',
    value: 0
  },
  {
    data: '社会安全',
    type: '一般',
    value: 36
  },
  {
    data: '社会安全',
    type: '较大',
    value: 12
  },
  {
    data: '社会安全',
    type: '重大',
    value: 7
  },
  {
    data: '社会安全',
    type: '特大',
    value: 2
  },
  {
    data: '公共卫生',
    type: '一般',
    value: 28
  },
  {
    data: '公共卫生',
    type: '较大',
    value: 22
  },
  {
    data: '公共卫生',
    type: '重大',
    value: 4
  },
  {
    data: '公共卫生',
    type: '特大',
    value: 0
  }
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'type',
  value: 'value',
  text: 'data'
})
const colors = ['#1DC19E', '#F4FA58', '#FE9A2E', '#FE2E2E']
const texts = [15, 9, 26, 19]
const bar = new Bar({
  stack: true,
  transpose: true,
  barWidth: 30,
  stackGap: 5,
  size: ['60%', '80%']
})
  .style('pillar', (attr, data, i) => {
    return { fillColor: colors[i % 4] }
  })
  .style('text', (attrs, data, i) => {
    if ((i + 1) % 4 !== 0) {
      return false
    }
    let anchor = attrs.anchor || [0, 0]
    let size = attrs.size
    let pos = attrs.pos
    return {
      color: '#1DCE91',
      rotate: 0,
      text: texts[Math.floor(i / 4)],
      anchor: [0, 0.5],
      pos: [pos[0] + size[0] + 5, pos[1] + size[1] / 2]
    }
  })
const tooltip = new Tooltip({
  formatter: d => ` ${d.type}: ${d.value}`
})
const legend = new Legend({ align: ['left', 'top'] }).style(
  'icon',
  (attr, data, i) => {
    return { bgcolor: colors[i] }
  }
)
const axisLeft = new Axis({
  orient: 'left'
})
  .style('axis', { strokeColor: '#1DCE91' })
  .style('grid', false)
  .style('scale', false)
  .style('label', { color: '#1DCE91' })
chart.add([bar, legend, axisLeft])
chart.render()
```

:::
