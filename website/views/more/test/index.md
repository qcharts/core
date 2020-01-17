## Double Line Chart 双 Y 轴折线图

:::demo

```javascript
const data = [
  { date: '05-08', category: '图例一', sales: 100 },
  { date: '05-01', category: '图例一', sales: 15.2 },
  { date: '05-01', category: '图例二', sales: 15.2 },
  { date: '05-02', category: '图例一', sales: 39.2 },
  { date: '05-02', category: '图例二', sales: 39.2 },
  { date: '05-03', category: '图例一', sales: 31.2 },
  { date: '05-03', category: '图例二', sales: 31.2 },
  { date: '05-04', category: '图例一', sales: 65.2 },
  { date: '05-04', category: '图例二', sales: 65.2 },
  { date: '05-05', category: '图例一', sales: 55.2 },
  { date: '05-05', category: '图例二', sales: 55.2 },
  { date: '05-06', category: '图例一', sales: 75.2 },
  { date: '05-06', category: '图例二', sales: 75.2 },
  { date: '05-07', category: '图例一', sales: 95.2 },
  { date: '05-07', category: '图例二', sales: 95.2 },
  { date: '05-08', category: '图例二', sales: 100 }
]

const { Chart, Line } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'category',
  value: 'sales',
  text: 'date'
})
let newData = chart.dataset.selectRows(['图例一'])
// console.log(newData)
const line = new Line({ smooth: true, splitNumber: 5 })

chart.append([line])
// chart.source(data, {
//   row: 'date',
//   value: 'sales',
//   text: 'category'
// })
```

:::
