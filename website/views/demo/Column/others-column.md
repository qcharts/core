## 其他

#### 负值柱状图

:::demo

```javascript
const data = [
  {
    product: '茶叶',
    year: '2016',
    sales: -81.2
  },
  {
    product: '茶叶',
    year: '2017',
    sales: 121.2
  },
  {
    product: '茶叶',
    year: '2018',
    sales: -41.2
  },
  {
    product: '牛奶',
    year: '2016',
    sales: 85.2
  },
  {
    product: '牛奶',
    year: '2017',
    sales: 79.6
  },
  {
    product: '牛奶',
    year: '2018',
    sales: 81.2
  },
  {
    product: '咖啡',
    year: '2016',
    sales: -65.2
  },
  {
    product: '咖啡',
    year: '2017',
    sales: -59.6
  },
  {
    product: '咖啡',
    year: '2018',
    sales: -61.2
  },
  {
    product: '椰汁',
    year: '2016',
    sales: 35.2
  },
  {
    product: '椰汁',
    year: '2017',
    sales: 79.6
  },
  {
    product: '椰汁',
    year: '2018',
    sales: 21.2
  }
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'year',
  col: 'product',
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
chart.add([bar, tooltip, legend, axisBottom, axisLeft])
chart.render()
```

:::

#### 数据更新

:::demo

```javascript
const data = [
  {
    product: '茶叶',
    year: '2016',
    sales: 81.2
  },
  {
    product: '茶叶',
    year: '2017',
    sales: 121.2
  },
  {
    product: '茶叶',
    year: '2018',
    sales: 41.2
  },
  {
    product: '牛奶',
    year: '2016',
    sales: 85.2
  },
  {
    product: '牛奶',
    year: '2017',
    sales: 79.6
  },
  {
    product: '牛奶',
    year: '2018',
    sales: 81.2
  },
  {
    product: '咖啡',
    year: '2016',
    sales: 65.2
  },
  {
    product: '咖啡',
    year: '2017',
    sales: 59.6
  },
  {
    product: '咖啡',
    year: '2018',
    sales: 61.2
  },
  {
    product: '椰汁',
    year: '2016',
    sales: 35.2
  },
  {
    product: '椰汁',
    year: '2017',
    sales: 79.6
  },
  {
    product: '椰汁',
    year: '2018',
    sales: 21.2
  }
]
const dataNew = [
  {
    product: '茶叶',
    year: '2016',
    sales: 81.2
  },
  {
    product: '茶叶',
    year: '2017',
    sales: 121.2
  },
  {
    product: '茶叶',
    year: '2018',
    sales: 41.2
  },
  {
    product: '茶叶',
    year: '2019',
    sales: 61.2
  },
  {
    product: '牛奶',
    year: '2016',
    sales: 85.2
  },
  {
    product: '牛奶',
    year: '2017',
    sales: 79.6
  },
  {
    product: '牛奶',
    year: '2018',
    sales: 81.2
  },
  {
    product: '牛奶',
    year: '2019',
    sales: 111.2
  },
  {
    product: '咖啡',
    year: '2016',
    sales: 65.2
  },
  {
    product: '咖啡',
    year: '2017',
    sales: 59.6
  },
  {
    product: '咖啡',
    year: '2018',
    sales: 61.2
  },
  {
    product: '咖啡',
    year: '2019',
    sales: 161.2
  }
]

let bool = true
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'year',
  col: 'product',
  value: 'sales',
  text: 'product'
})
const bar = new Bar()
const tooltip = new Tooltip({
  formatter: d => `${d.year}: ${d.product}: ${d.sales}`
})
const legend = new Legend({ align: ['center', 'bottom'] })
const axisBottom = new Axis({ type: 'category', axisGap: true })
const axisLeft = new Axis({ orient: 'left' })
chart.add([bar, tooltip, axisBottom, axisLeft, legend])
chart.render()
setTimeout(changeData, 3000)
function changeData() {
  if (bool) {
    chart.source(dataNew, {
      row: 'year',
      col: 'product',
      value: 'sales',
      text: 'product'
    })
    bool = false
  } else {
    chart.source(data, {
      row: 'year',
      col: 'product',
      value: 'sales',
      text: 'product'
    })
    bool = true
  }
  setTimeout(changeData, 5000)
}
```

:::

#### 开方数据柱状图

:::demo

```javascript
const data = [
  { abc: 25, label: '05-01' },
  { abc: 36, label: '05-02' },
  { abc: 49, label: '05-03' },
  { abc: 64, label: '05-04' },
  { abc: 81, label: '05-05' },
  { abc: 100, label: '05-06' },
  { abc: 400, label: '05-07' },
  { abc: 900, label: '05-08' }
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: '*',
  value: 'abc',
  text: 'label',
  layoutScale: 'sqrt'
})
const bar = new Bar({}).style('pillar', { fillColor: '#47A1FF' })
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.abc}`
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
```

:::
