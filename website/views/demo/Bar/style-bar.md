## Custom Style 自定义样式

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 1548, label: '搜索引擎', selected: true },
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
      return { border: { width: 1 }, borderRadius: 20 }
    }
    return {
      border: { width: 1 },
      opacity: 1.0,
      fillColor: {
        vector: [0, 0, 0, 100],
        colors: [{ color: 'red', offset: 0 }, { color: 'blue', offset: 1 }]
      }
    }
  })
  .style('pillar:hover', (attrs, data, i) => {
    if (i % 2 === 0) {
      return {
        borderRadius: 10
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
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

## Custom Style 自定义样式 2

:::demo

```javascript
const data = [
  {
    product: '05-12',
    year: '图例一',
    sales: 3000
  },
  {
    product: '05-12',
    year: '图例二',
    sales: 3500
  },
  {
    product: '05-12',
    year: '图例三',
    sales: 2000
  },
  {
    product: '05-13',
    year: '图例一',
    sales: 5800
  },
  {
    product: '05-13',
    year: '图例二',
    sales: 4200
  },
  {
    product: '05-13',
    year: '图例三',
    sales: 2700
  },
  {
    product: '05-14',
    year: '图例一',
    sales: 2600
  },
  {
    product: '05-14',
    year: '图例二',
    sales: 1800
  },
  {
    product: '05-14',
    year: '图例三',
    sales: 3800
  },
  {
    product: '05-15',
    year: '图例一',
    sales: 3400
  },
  {
    product: '05-15',
    year: '图例二',
    sales: 5100
  },
  {
    product: '05-15',
    year: '图例三',
    sales: 4300
  },
  {
    product: '05-16',
    year: '图例一',
    sales: 3100
  },
  {
    product: '05-16',
    year: '图例二',
    sales: 3400
  },
  {
    product: '05-16',
    year: '图例三',
    sales: 2100
  }
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'year',
  value: 'sales',
  text: 'product'
})
const bar = new Bar({
  transpose: true,
  barWidth: 12,
  barGap: 5
}).style('text', (attrs, data, i) => {
  let size = attrs.size
  let pos = attrs.pos

  let str = data.sales + ''

  let result = str
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev
    })
  return {
    text: result,
    pos: [pos[0] + size[0], pos[1] + size[1] / 2]
  }
})
const tooltip = new Tooltip({
  formatter: d => `${d.product} - ${d.year} - ${d.sales}`
})
const legend = new Legend({ align: ['center', 'bottom'] })

const axisLeft = new Axis({
  orient: 'left'
})
  .style('grid', false)
  .style('label', (attrs, d, i) => {
    return { translate: [60, 10], fontSize: 18 }
  })
  .style('scale', false)
  .style('axis', false)
chart.add([bar, tooltip, legend, axisLeft])
chart.render()
```

:::

## Custom Style 自定义样式 3

:::demo

```javascript
const data = [
  { value: 2200, label: '05-01' },
  { value: 6000, label: '05-02' },
  { value: 5600, label: '05-03' },
  { value: 8500, label: '05-04' },
  { value: 13600, label: '05-05' },
  { value: 10800, label: '05-06' },
  { value: 6400, label: '05-07' },
  { value: 3500, label: '05-08' }
]
const dataNew = [
  { value: 2002, label: '05-01' },
  { value: 6700, label: '05-02' },
  { value: 5006, label: '05-03' },
  { value: 8005, label: '05-04' },
  { value: 10036, label: '05-05' },
  { value: 10008, label: '05-06' },
  { value: 6004, label: '05-07' },
  { value: 3005, label: '05-08' }
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: '*',
  value: 'value',
  text: 'label'
})
let bool = true
const bar = new Bar({})
  .style('pillar', { fillColor: '#47A1FF' })
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
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
})
const legend = new Legend({ align: ['center', 'bottom'] }).style('text', {
  text: '图例一'
})
const axisBottom = new Axis()
const axisLeft = new Axis({ orient: 'left' })
  .style('axis', false)
  .style('scale', false)
chart.add([bar, tooltip, legend, axisBottom, axisLeft])
chart.render()
setTimeout(changeData, 3000)
function changeData() {
  if (bool) {
    chart.source(dataNew, {
      row: '*',
      value: 'value',
      text: 'label'
    })
    bool = false
  } else {
    chart.source(data, {
      row: '*',
      value: 'value',
      text: 'label'
    })
    bool = true
  }
  setTimeout(changeData, 5000)
}
```

:::
