## Group Column Chart 分组柱状图

:::demo

```javascript
const data = [
  {
    product: '05-08',
    year: '图例一',
    sales: 42
  },
  {
    product: '05-08',
    year: '图例二',
    sales: 78.2
  },
  {
    product: '05-08',
    year: '图例三',
    sales: 62
  },
  {
    product: '05-09',
    year: '图例一',
    sales: 80
  },
  {
    product: '05-09',
    year: '图例二',
    sales: 108
  },
  {
    product: '05-09',
    year: '图例三',
    sales: 64
  },
  {
    product: '05-10',
    year: '图例一',
    sales: 36
  },
  {
    product: '05-10',
    year: '图例二',
    sales: 91
  },
  {
    product: '05-10',
    year: '图例三',
    sales: 56
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
  transpose: false,
  barWidth: 20
})
const tooltip = new Tooltip({
  formatter: d => `${d.product} - ${d.year} - ${d.sales}`
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
