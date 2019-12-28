## Double Line Chart 双 X 轴折线图

:::demo

```javascript
const data = [
  { date: '2015-1', category: '2015年降水量', val: 15.2 },
  { date: '2015-2', category: '2015年降水量', val: 19.2 },
  { date: '2015-3', category: '2015年降水量', val: 11.2 },
  { date: '2015-4', category: '2015年降水量', val: 45.2 },
  { date: '2015-5', category: '2015年降水量', val: 55.2 },
  { date: '2015-6', category: '2015年降水量', val: 75.2 },
  { date: '2015-7', category: '2015年降水量', val: 95.2 },
  { date: '2015-8', category: '2015年降水量', val: 135.2 },
  { date: '2015-9', category: '2015年降水量', val: 162.2 },
  { date: '2015-10', category: '2015年降水量', val: 32.2 },
  { date: '2015-11', category: '2015年降水量', val: 32.2 },
  { date: '2015-12', category: '2015年降水量', val: 15.2 },

  { date: '2016-1', category: '2016年降水量', val: 2.2 },
  { date: '2016-2', category: '2016年降水量', val: 3.2 },
  { date: '2016-3', category: '2016年降水量', val: 5.2 },
  { date: '2016-4', category: '2016年降水量', val: 6.2 },
  { date: '2016-5', category: '2016年降水量', val: 8.2 },
  { date: '2016-6', category: '2016年降水量', val: 15.2 },
  { date: '2016-7', category: '2016年降水量', val: 25.2 },
  { date: '2016-8', category: '2016年降水量', val: 23.2 },
  { date: '2016-9', category: '2016年降水量', val: 24.2 },
  { date: '2016-10', category: '2016年降水量', val: 16.2 },
  { date: '2016-11', category: '2016年降水量', val: 12.2 },
  { date: '2016-12', category: '2016年降水量', val: 6.6 }
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

const d1 = ds.selectRows('2015年降水量')
const line = new Line().source(d1)
line
  .style('point', { strokeColor: '#fff' })
  .style('line', { strokeColor: '#47A1FF' })
const axisBottom = new Axis({ orient: 'bottom' }).source(d1)

const d2 = ds.selectRows('2016年降水量')
const line2 = new Line().source(d2)
line2.style('point', { strokeColor: '#fff' })
line2.color(['#59CB74'])

const axisTop = new Axis({
  orient: 'top'
}).source(d2)

const axisLeft = new Axis({ orient: 'left' })
  .style('scale', true)
  .style('grid', function(attr, data, i) {
    if (i === 6) {
      return false
    }
  })

const legend = new Legend({ align: ['center', 'bottom'] })
  .style('icon', { borderRadius: 10 })
  .style('text', { fontSize: 12 })

chart.add([line, line2, axisBottom, axisLeft, axisTop, legend])
chart.render()
```

:::
