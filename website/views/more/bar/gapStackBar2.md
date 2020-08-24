## 间距堆叠条形图 2

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
    value: 10
  },
  {
    data: '自然灾害',
    type: '重大',
    value: 8
  },
  {
    data: '自然灾害',
    type: '特大',
    value: 2
  },
  {
    data: '事故灾害',
    type: '一般',
    value: 19
  },
  {
    data: '事故灾害',
    type: '较大',
    value: 12
  },
  {
    data: '事故灾害',
    type: '重大',
    value: 6
  },
  {
    data: '事故灾害',
    type: '特大',
    value: 2
  },
  {
    data: '社会安全',
    type: '一般',
    value: 14
  },
  {
    data: '社会安全',
    type: '较大',
    value: 9
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
    value: 10
  },
  {
    data: '公共卫生',
    type: '较大',
    value: 5
  },
  {
    data: '公共卫生',
    type: '重大',
    value: 4
  },
  {
    data: '公共卫生',
    type: '特大',
    value: 1
  }
]
const BAR_WIDTH = 30
const SCOPE_PIXEL = 20
const { Chart, Bar, Tooltip, Axis, Legend, theme } = qcharts

const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'type',
  value: 'value',
  text: 'data'
})
const colors = ['#1ACE87', '#30FBAB', '#FBB70B', '#FFEB3E']
const bar = new Bar({
  stack: true,
  transpose: true,
  barWidth: BAR_WIDTH,
  stackGap: 5,
  polygon: true
})
  .style('pillar', (attr, data, i, j) => {
    let points = attr.points
    if (points[0][0] === points[1][0] && points[0][0] === 0) {
      points[2][0] = 0
    } else {
      points[2][0] = points[2][0] - SCOPE_PIXEL
    }
    if (points[0][0] !== 0) {
      points[3][0] = points[3][0] - SCOPE_PIXEL
    }
    return { points, fillColor: colors[j] }
  })
  .style('backgroundpillar', (attr, data, i) => {
    let attrs = attr
    let points = attrs.points
    let size = attrs.size
    points[0][1] = points[0][1] + (size[1] - BAR_WIDTH) / 2
    points[1][1] = points[0][1]
    points[2][1] = points[2][1] - (size[1] - BAR_WIDTH) / 2
    points[3][1] = points[2][1]
    points[2][0] = points[2][0] - SCOPE_PIXEL
    const opacity = 0.05
    return { points, opacity }
  })
const legend = new Legend({ align: ['right', 'top'] }).style('point', (attr, data, i) => {
  return {
    borderRadius: 6,
    bgcolor: colors[i]
  }
})
const axisLeft = new Axis({
  orient: 'left'
})
  .style('axis', { strokeColor: '#1DCE91' })
  .style('grid', false)
  .style('scale', false)
  .style('label', { fillColor: '#30FBAB' })
const axisBottom = new Axis()
  .style('axis', false)
  .style('label', { fillColor: '#30FBAB' })
  .style('grid', { strokeColor: '#30FBAB' })
chart.append([bar, legend, axisLeft, axisBottom])
```

:::
