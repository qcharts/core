## Double Line Chart 双 Y 轴折线图

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

const { Chart, Line, Legend, Tooltip, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'category',
  value: 'val',
  text: 'date'
})

const ds = chart.dataset

const d1 = ds.selectRows('降水量')
const line = new Line({
  splitNumber: 5,
  guideline: false
})
  .source(d1)
  .style('point', { strokeColor: '#fff' })

const axisLeft = new Axis({
  orient: 'left',
  splitNumber: 5,
  name: '降水量（毫升）',
  formatter: val => {
    return `${val} ml`
  }
})
  .style('axis', false)
  .style('scale', false)
  .style('name', { color: '#f00', translate: [-10, -10] })
  .source(d1)

const d2 = ds.selectRows('气温')
const line2 = new Line({
  splitNumber: 5
})
  .source(d2)
  .style('point', { strokeColor: '#fff' })
line2.color(['#59CB74'])

const axisRight = new Axis({
  splitNumber: 5,
  orient: 'right',
  name: '温度（摄氏度）',
  formatter: val => {
    return `${val} °C`
  }
})
  .style('axis', false)
  .style('scale', false)
  .style('name', { fontSize: 12, translate: [10, 0] })
  .source(d2)

const axisBottom = new Axis().style('scale', true)

const legend = new Legend({ align: ['center', 'bottom'] })
  .style('icon', { borderRadius: 10 })
  .style('text', { fontSize: 12 })

const tooltip = new Tooltip({
  title: t => t[0].date,
  formatter: function(d) {
    const date = d.date
    const curData = data.filter(item => item.date === date)
    return `气温:${curData[1].val}°C  降水:${curData[0].val}ml`
  }
})

chart.add([line, line2, axisBottom, axisLeft, axisRight, legend, tooltip])
chart.render()
```

:::
