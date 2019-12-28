## Double Line Chart 双 Y 轴折线图

:::demo

```javascript
let newD = [
  {
    count_all_dataset: 182,
    statistics_date: '2019-12-11',
    store_size: 1542067987751957
  },
  {
    count_all_dataset: 18,
    statistics_date: '2019-12-12',
    store_size: 353371598733843
  },
  {
    count_all_dataset: 1,
    statistics_date: '2019-12-13',
    store_size: 262842481430
  },
  {
    count_all_dataset: 2,
    statistics_date: '2019-12-16',
    store_size: 13091720702633
  },
  {
    count_all_dataset: 1526,
    statistics_date: '2019-12-17',
    store_size: 12218966122171862
  },
  {
    count_all_dataset: 1,
    statistics_date: '2019-12-18',
    store_size: 0
  }
]

let D = []
newD.forEach(item => {
  D.push({ ...item, val: item.count_all_dataset, category: '资产' })
  D.push({ ...item, val: item.store_size, category: '存储' })
})

const { Chart, Line, Bar, Legend, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(D, {
  row: 'category',
  value: 'val',
  text: 'statistics_date'
})

const ds = chart.dataset

const d1 = ds.selectRows('存储')
const line = new Line({ smooth: true, splitNumber: 5 })
  .source(d1)
  .color(['#59CB74'])
  .style('point', { strokeColor: '#fff' })

const axisLeft = new Axis({
  orient: 'left',
  splitNumber: 5
})
  .style('axis', false)
  .style('scale', false)
  .source(d1)

const d2 = ds.selectRows('资产')
const bar = new Line({ smooth: true })
  .source(d2)
  .style('point', { strokeColor: '#fff' })

const axisRight = new Axis({
  orient: 'right',
  splitNumber: 5
})
  .style('axis', false)
  .style('scale', false)
  .source(d2)

const axisBottom = new Axis().style('scale', true)

const legend = new Legend({ align: ['center', 'bottom'] })
  .style('icon', { borderRadius: 10 })
  .style('text', { fontSize: 12 })

chart.add([bar, line, axisLeft, legend])
chart.render()
```

:::
