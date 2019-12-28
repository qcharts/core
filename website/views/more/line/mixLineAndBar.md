## 折线图与柱状图组合

:::demo

```javascript
const data = [
  { date: '1月', catgory: '降水量', val: 15.2 },
  { date: '2月', catgory: '降水量', val: 19.2 },
  { date: '3月', catgory: '降水量', val: 11.2 },
  { date: '4月', catgory: '降水量', val: 45.2 },
  { date: '5月', catgory: '降水量', val: 55.2 },
  { date: '6月', catgory: '降水量', val: 75.2 },
  { date: '7月', catgory: '降水量', val: 95.2 },
  { date: '8月', catgory: '降水量', val: 135.2 },
  { date: '9月', catgory: '降水量', val: 162.2 },
  { date: '10月', catgory: '降水量', val: 32.2 },
  { date: '11月', catgory: '降水量', val: 32.2 },
  { date: '12月', catgory: '降水量', val: 15.2 },

  { date: '1月', catgory: '气温', val: 2.2 },
  { date: '2月', catgory: '气温', val: 3.2 },
  { date: '3月', catgory: '气温', val: 5.2 },
  { date: '4月', catgory: '气温', val: 6.2 },
  { date: '5月', catgory: '气温', val: 8.2 },
  { date: '6月', catgory: '气温', val: 15.2 },
  { date: '7月', catgory: '气温', val: 25.2 },
  { date: '8月', catgory: '气温', val: 23.2 },
  { date: '9月', catgory: '气温', val: 24.2 },
  { date: '10月', catgory: '气温', val: 16.2 },
  { date: '11月', catgory: '气温', val: 12.2 },
  { date: '12月', catgory: '气温', val: 6.6 }
]

const { Chart, Line, Bar, Legend, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'catgory',
  value: 'val',
  text: 'date'
})

const ds = chart.dataset

const d1 = ds.selectRows('降水量')
const line = new Line({ axisGap: true })
  .source(d1)
  .color(['#59CB74'])
  .style('point', { strokeColor: '#fff' })

const axisLeft = new Axis({
  orient: 'left',
  formatter: val => {
    return `${val} ml`
  }
})
  .style('axis', false)
  .style('scale', false)
  .source(d1)

const d2 = ds.selectRows('气温')
const bar = new Bar().source(d2)
bar.style('pillar', { fillColor: '#47A1FF' })

const axisRight = new Axis({
  orient: 'right',
  formatter: val => {
    return `${val} °C`
  }
})
  .style('axis', false)
  .style('scale', false)
  .source(d2)

const axisBottom = new Axis().style('scale', true)

const legend = new Legend({ align: ['center', 'bottom'] })
  .style('icon', { borderRadius: 10 })
  .style('text', { fontSize: 12 })

chart.add([bar, line, axisBottom, axisLeft, axisRight, legend])
chart.render()
```

:::
