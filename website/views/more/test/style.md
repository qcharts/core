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
const { Chart, Line } = qcharts
const $wrap = document.querySelector('#app')
const chart = new Chart({
  container: $wrap
})

chart.source(data, {
  row: 'category',
  value: 'sales',
  text: 'date'
})
const line = new Line({ splitNumber: 5 })
//line.style({ line: { lineWidth: 2 } })
chart.dataset.on('change', function(res) {
  console.log('dataset', res)
})

chart.append([line])
```

:::
