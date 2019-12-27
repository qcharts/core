## 组合

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

const chart = new qcharts.Chart({
  container: '#app'
})

chart.source(data, {
  row: 'product',
  col: 'year',
  value: 'sales',
  sort: (a, b) => b.value - a.value
})

const ds = chart.dataset

;['茶叶', '牛奶', '咖啡', '椰汁'].map((row, i) => {
  const size = ['40%', '40%']
  const pos = [i === 0 || i === 2 ? '10%' : '50%', i > 1 ? '50%' : '10%']

  const pie = new qcharts.Pie({
    radius: 0.6,
    size,
    pos
  }).source(ds.selectRows(row))

  pie.style('guideline', true)
  pie.style('guideText', true)

  chart.add(pie)
})

const legend = new qcharts.Legend({ vertical: 0 })
const tooltip = new qcharts.Tooltip({
  formatter: d => `${d.product}: ${d.year}: ${d.sales}`
})

chart.add([legend, tooltip])

chart.render()
```

:::

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

const chart = new qcharts.Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  col: 'product',
  value: 'sales',
  sort: (a, b) => b.value - a.value
})

const ds = chart.dataset

;[2016, 2017, 2018].map((row, i) => {
  const size = ['40%', '40%']
  const pos = [i === 0 || i === 2 ? '10%' : '50%', i > 1 ? '50%' : '10%']

  const pie = new qcharts.Pie({
    radius: 0.6,
    innerRadius: 0,
    size,
    pos
  }).source(ds.selectRows(row))

  pie.style('guideline', { color: 'red' })
  pie.style('guideline:hover', { color: 'blue' })
  pie.style('guideText', { color: 'red' })
  pie.style('guideText:hover', { color: 'blue' })

  chart.add(pie)
})

const legend = new qcharts.Legend({ vertical: 0 })
const tooltip = new qcharts.Tooltip({
  formatter: d => `${d.product}: ${d.year}: ${d.sales}`
})

chart.add([legend, tooltip])

chart.render()
```

:::
