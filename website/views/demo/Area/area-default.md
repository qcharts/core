## Basic Area Chart 基础面积图

:::demo

```javascript
const data = [
  { date: '05-01', category: '图例一', sales: 15.2 },
  { date: '05-02', category: '图例一', sales: 39.2 },
  { date: '05-03', category: '图例一', sales: 31.2 },
  { date: '05-04', category: '图例一', sales: 65.2 },
  { date: '05-05', category: '图例一', sales: 55.2 },
  { date: '05-06', category: '图例一', sales: 75.2 },
  { date: '05-07', category: '图例一', sales: 95.2 },
  { date: '05-08', category: '图例一', sales: 65.2 }
]

const { Chart, Area, Axis, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'category',
  value: 'sales',
  text: 'date'
})

const area = new Area().style('point', { fillColor: 'transparent', strokeColor: 'transparent' }).style('point:hover', { strokeColor: '#fff' })

const axisBottom = new Axis()
const tooltip = new Tooltip()
const legend = new Legend()
const axisLeft = new Axis({ orient: 'left' }).style('axis', false).style('scale', false)

chart.append([area, axisBottom, axisLeft, tooltip, legend])
chart.render()
```

:::
