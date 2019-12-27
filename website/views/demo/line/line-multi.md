## Multiple Line Chart 多折线图

:::demo

```javascript
const data = [
  { date: '05-01',catgory:'图例一', sales: 15.2 },
  { date: '05-02',catgory:'图例一', sales: 39.2 },
  { date: '05-03',catgory:'图例一', sales: 51.2 },
  { date: '05-04',catgory:'图例一', sales: 65.2 },
  { date: '05-05',catgory:'图例一', sales: 55.2 },
  { date: '05-06',catgory:'图例一', sales: 75.2 },
  { date: '05-07',catgory:'图例一', sales: 95.2 },
  { date: '05-08',catgory:'图例一', sales: 65.2 },
  { date: '05-01',catgory:'图例二', sales: 20.2 },
  { date: '05-02',catgory:'图例二', sales: 49.2 },
  { date: '05-03',catgory:'图例二', sales: 57.2 },
  { date: '05-04',catgory:'图例二', sales: 55.2 },
  { date: '05-05',catgory:'图例二', sales: 75.2 },
  { date: '05-06',catgory:'图例二', sales: 95.2 },
  { date: '05-07',catgory:'图例二', sales: 110.2 },
  { date: '05-08',catgory:'图例二', sales: 85.2 },
   { date: '05-01',catgory:'图例三', sales: 15.2 },
  { date: '05-02',catgory:'图例三', sales: 29.2 },
  { date: '05-03',catgory:'图例三', sales: 45.2 },
  { date: '05-04',catgory:'图例三', sales: 55.2 },
  { date: '05-05',catgory:'图例三', sales: 45.2 },
  { date: '05-06',catgory:'图例三', sales: 65.2 },
  { date: '05-07',catgory:'图例三', sales: 78.2 },
  { date: '05-08',catgory:'图例三', sales: 54.2 },
  { date: '05-01',catgory:'图例四', sales: 15.2 },
  { date: '05-02',catgory:'图例四', sales: 45.2 },
  { date: '05-03',catgory:'图例四', sales: 51.2 },
  { date: '05-04',catgory:'图例四', sales: 59.2 },
  { date: '05-05',catgory:'图例四', sales: 70.2 },
  { date: '05-06',catgory:'图例四', sales: 90.2 },
  { date: '05-07',catgory:'图例四', sales: 100.2 },
  { date: '05-08',catgory:'图例四', sales: 81.2 },
   { date: '05-01',catgory:'图例五', sales: 10.2 },
  { date: '05-02',catgory:'图例五', sales: 15.2 },
  { date: '05-03',catgory:'图例五', sales: 31.2 },
  { date: '05-04',catgory:'图例五', sales: 35.2 },
  { date: '05-05',catgory:'图例五', sales: 85.2 },
  { date: '05-06',catgory:'图例五', sales: 89.2 },
  { date: '05-07',catgory:'图例五', sales: 68.2 },
  { date: '05-08',catgory:'图例五', sales: 80.2 }
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
line.style('point',{strokeColor:'#fff'})

const tooltip = new Tooltip({
  title:function(data){
    return data[0].date
  },
  formatter: function(data) {
    return `${data.date} ${data.sales}`
  }
})

const axisBottom = new Axis()

const axisLeft = new Axis({ orient: 'left' })
.style('axis',false).style('scale',false)

const legend = new Legend({ align: ['center', 'bottom'] })
.style('icon',{borderRadius:10}).style('text',{fontSize:12})

chart.add([line, tooltip, axisBottom, axisLeft, legend])
chart.render()
```

:::
