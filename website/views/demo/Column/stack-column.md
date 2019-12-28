## Stack Column Chart 堆叠柱状图

:::demo

```javascript
const data = [
  {
    data: '05-01',
    type: '图例一',
    value: 11
  },
  {
    data: '05-01',
    type: '图例二',
    value: 12.2
  },
  {
    data: '05-02',
    type: '图例一',
    value: 28
  },
  {
    data: '05-02',
    type: '图例二',
    value: 31
  },
  {
    data: '05-03',
    type: '图例一',
    value: 36
  },
  {
    data: '05-03',
    type: '图例二',
    value: 18
  },
  {
    data: '05-04',
    type: '图例一',
    value: 58
  },
  {
    data: '05-04',
    type: '图例二',
    value: 30.2
  },
  {
    data: '05-05',
    type: '图例一',
    value: 86.2
  },
  {
    data: '05-05',
    type: '图例二',
    value: 41.2
  },
  {
    data: '05-06',
    type: '图例一',
    value: 71.2
  },
  {
    data: '05-06',
    type: '图例二',
    value: 45.2
  },
  {
    data: '05-07',
    type: '图例一',
    value: 41.2
  },
  {
    data: '05-07',
    type: '图例二',
    value: 22.2
  },
  {
    data: '05-08',
    type: '图例一',
    value: 16.2
  },
  {
    data: '05-08',
    type: '图例二',
    value: 20.2
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
const bar = new Bar({
  stack: true
})
const tooltip = new Tooltip({
  formatter: d => `${d.type}: ${d.value}`
})
const legend = new Legend({ align: ['center', 'bottom'] })
const axisBottom = new Axis()
const axisLeft = new Axis({ orient: 'left' })
  .style('axis', false)
  .style('scale', false)
chart.add([bar, tooltip, legend, axisBottom, axisLeft])
chart.render()
```

:::
