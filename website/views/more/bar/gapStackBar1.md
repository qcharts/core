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
const colors = ['#159d61', '#23c47e', '#c28a0c', '#ccbb2e']
const texts = [15, 9, 26, 19]
const bar = new Bar({
  stack: true,
  transpose: true,
  barWidth: 30,
  stackGap: 2
})
  .style('pillar', (attr, data, i, j) => {
    return { bgcolor: colors[j] }
  })
  .style('text', false)
const tooltip = new Tooltip({
  formatter: d => ` ${d.type}: ${d.value}`
})
const legend = new Legend({ align: ['left', 'top'] }).style('point', (attr, data, i) => {
  return {
    borderRadius: 6,
    bgcolor: colors[i]
  }
})
const axisLeft = new Axis({
  name: '/地区',
  orient: 'left'
})
  .style('axis', { strokeColor: '#1b9e66', lineWidth: 2 })
  .style('grid', false)
  .style('scale', false)
  .style('label', { fillColor: '#1DCE91' })
  .style('name', { fillColor: '#1DCE91', fontSize: 12 })
const axisBottom = new Axis({ name: '/年' })
  .style('axis', false)
  .style('label', { fillColor: '#1DCE91' })
  .style('grid', { strokeColor: '#1DCE91' })
  .style('name', { fillColor: '#1DCE91', padding: [0, 10], fontSize: 12 })
chart.append([bar, legend, axisLeft, axisBottom])
```

:::
