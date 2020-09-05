## Basic Line Chart 基础折线图

:::demo

```javascript
const data = [
  { date: '05-01', catgory: '图例一', sales: 15.2 },
  { date: '05-02', catgory: '图例一', sales: 39.2 },
  { date: '05-03', catgory: '图例一', sales: 31.2 },
  { date: '05-04', catgory: '图例一', sales: 65.2 },
  { date: '05-05', catgory: '图例一', sales: 55.2 },
  { date: '05-06', catgory: '图例一', sales: 75.2 },
  { date: '05-07', catgory: '图例一', sales: 95.2 },
  { date: '05-08', catgory: '图例一', sales: 100 }
]

const { Chart, Line, Legend, Tooltip, Axis } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'catgory',
  value: 'sales',
  text: 'date'
})
const line = new Line()
const axisBottom = new Axis().style('grid', false)
const toolTip = new Tooltip({
  title: arr => {
    return arr[0].date + ':数据'
  }
})
const legend = new Legend()
const axisLeft = new Axis({ orient: 'left' }).style('axis', false).style('scale', false)

chart.append([line, axisBottom, axisLeft, toolTip, legend])
```

:::
