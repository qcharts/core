## Stacked Area Chart 堆叠面积图

:::demo 

```javascript
const data = [
  { date: '05-01',category:'图例一', sales: 15.2 },
  { date: '05-02',category:'图例一', sales: 39.2 },
  { date: '05-03',category:'图例一', sales: 31.2 },
  { date: '05-04',category:'图例一', sales: 65.2 },
  { date: '05-05',category:'图例一', sales: 55.2 },
  { date: '05-06',category:'图例一', sales: 75.2 },
  { date: '05-07',category:'图例一', sales: 95.2 },
  { date: '05-08',category:'图例一', sales: 65.2 },
  { date: '05-01',category:'图例二', sales: 10.2 },
  { date: '05-02',category:'图例二', sales: 30.2 },
  { date: '05-03',category:'图例二', sales: 25.2 },
  { date: '05-04',category:'图例二', sales: 70.2 },
  { date: '05-05',category:'图例二', sales: 45.2 },
  { date: '05-06',category:'图例二', sales: 56.2 },
  { date: '05-07',category:'图例二', sales: 70.2 },
  { date: '05-08',category:'图例二', sales: 45.2 },
]

const { Chart, Area, Legend, Tooltip, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'category',
  value: 'sales',
  text: 'date'
})

const area = new Area()
.style('point',{fillColor:'transparent',strokeColor:'transparent'})
.style('point:hover',{strokeColor:'#fff'})

const tooltip = new Tooltip({
  formatter: function(data) {
    return `${data.date} ${data.sales}`
  }
})

const axisBottom = new Axis()

const axisLeft = new Axis({ orient: 'left' })
.style('axis',false).style('scale',false)

const legend = new Legend({ align: ['center', 'bottom'] })
.style('icon',{borderRadius:10}).style('text',{fontSize:12})

chart.add([area, tooltip, axisBottom, axisLeft, legend])
chart.render()
```

:::
