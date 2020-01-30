## Double Line Chart 双 Y 轴折线图

:::demo

```javascript
const data = [
  { date: '05-01', category: '图例一', sales: 15.2 },
  { date: '05-02', category: '图例一', sales: 39.2 },
  { date: '05-03', category: '图例一', sales: 51.2 },
  { date: '05-04', category: '图例一', sales: 65.2 },
  { date: '05-05', category: '图例一', sales: 55.2 },
  { date: '05-06', category: '图例一', sales: 75.2 },
  { date: '05-07', category: '图例一', sales: 85.2 },
  { date: '05-08', category: '图例一', sales: 65.2 },
  { date: '05-01', category: '图例二', sales: 20.2 },
  { date: '05-02', category: '图例二', sales: 49.2 },
  { date: '05-03', category: '图例二', sales: 57.2 },
  { date: '05-04', category: '图例二', sales: 55.2 },
  { date: '05-05', category: '图例二', sales: 75.2 },
  { date: '05-06', category: '图例二', sales: 95.2 },
  { date: '05-07', category: '图例二', sales: 90.2 },
  { date: '05-08', category: '图例二', sales: 85.2 }
]

const data1 = [
  { date: '05-01', category: '图例一', sales: 25.2 },
  { date: '05-02', category: '图例一', sales: 19.2 },
  { date: '05-03', category: '图例一', sales: 41.2 },
  { date: '05-04', category: '图例一', sales: 75.2 },
  { date: '05-05', category: '图例一', sales: 35.2 },
  { date: '05-06', category: '图例一', sales: 65.2 },
  { date: '05-07', category: '图例一', sales: 95.2 },
  { date: '05-08', category: '图例一', sales: 45.2 },
  { date: '05-01', category: '图例二', sales: 70.2 },
  { date: '05-02', category: '图例二', sales: 79.2 },
  { date: '05-03', category: '图例二', sales: 47.2 },
  { date: '05-04', category: '图例二', sales: 85.2 },
  { date: '05-05', category: '图例二', sales: 95.2 },
  { date: '05-06', category: '图例二', sales: 65.2 },
  { date: '05-07', category: '图例二', sales: 40.2 },
  { date: '05-08', category: '图例二', sales: 55.2 }
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
chart.dataset.on('change', function(res) {
  console.log('dataset', res)
})
newData.on('change', function(res) {
  console.log('newData', res)
})

chart.append([line])
setTimeout(function() {
  //chart.source(data1)
}, 1000)
```

:::
