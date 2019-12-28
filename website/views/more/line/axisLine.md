## 折线图与柱状图组合

:::demo

```javascript
const data = [
  { date: '1月', category: '降水量', val: 15.2 },
  { date: '2月', category: '降水量', val: 19.2 },
  { date: '3月', category: '降水量', val: 11.2 },
  { date: '4月', category: '降水量', val: 45.2 },
  { date: '5月', category: '降水量', val: 55.2 },
  { date: '6月', category: '降水量', val: 75.2 },
  { date: '7月', category: '降水量', val: 95.2 },
  { date: '8月', category: '降水量', val: 135.2 },
  { date: '9月', category: '降水量', val: 162.2 },
  { date: '10月', category: '降水量', val: 32.2 },
  { date: '11月', category: '降水量', val: 32.2 },
  { date: '12月', category: '降水量', val: 15.2 },
  { date: '1月', category: '气温', val: 2.2 },
  { date: '2月', category: '气温', val: 3.2 },
  { date: '3月', category: '气温', val: 5.2 },
  { date: '4月', category: '气温', val: 6.2 },
  { date: '5月', category: '气温', val: 8.2 },
  { date: '6月', category: '气温', val: 15.2 },
  { date: '7月', category: '气温', val: 25.2 },
  { date: '8月', category: '气温', val: 23.2 },
  { date: '9月', category: '气温', val: 24.2 },
  { date: '10月', category: '气温', val: 16.2 },
  { date: '11月', category: '气温', val: 12.2 },
  { date: '12月', category: '气温', val: 6.6 }
]

const { Chart, Line, Bar, Legend, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'category',
  value: 'val',
  text: 'date'
})

const line = new Line()
  .color(['#3e97ff', '#37dbc0'])
  .style('point', { strokeColor: '#fff' })

const axisLeft = new Axis({
  orient: 'left',
  formatter: val => {
    return `${val} ml`
  }
})
  .style('axis', false)
  .style('scale', false)

const axisBottom = new Axis().style('scale', hideAxis).style('label', hideAxis)

function hideAxis(attrs, data, i) {
  if (i % 2 !== 0) {
    return false
  }
}
const legend = new Legend({ align: ['center', 'bottom'] })
  .style('icon', { borderRadius: 10 })
  .style('text', { fontSize: 12 })

chart.add([line, axisBottom, axisLeft, legend])
chart.render()
```

:::
