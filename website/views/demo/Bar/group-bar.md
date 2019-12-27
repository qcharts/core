## Group Bar Chart 分组条形图

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
  barWidth: 12
})
const tooltip = new Tooltip({
  formatter: d => `${d.product} - ${d.year} - ${d.sales}`
})
const legend = new Legend({ align: ['center', 'bottom'] })
const axisBottom = new Axis().style('scale', false).style('grid', true)
const axisLeft = new Axis({
  orient: 'left'
}).style('grid', false)
chart.add([bar, tooltip, legend, axisBottom, axisLeft])
chart.render()
```
