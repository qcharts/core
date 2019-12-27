:::demo

```javascript
const data = [
{ product: '茶叶', year: '2016', sales: 81.2 },
  { product: '茶叶', year: '2017', sales: 121.2 },
  { product: '茶叶', year: '2018', sales: 41.2 },
  { product: '牛奶', year: '2016', sales: 89.2 },
  { product: '牛奶', year: '2017', sales: 50.6 },
  { product: '牛奶', year: '2018', sales: 80.2 },
  { product: '咖啡', year: '2016', sales: 35.2 },
  { product: '咖啡', year: '2017', sales: 79.6 },
  { product: '咖啡', year: '2018', sales: 61.2 },
  { product: '椰汁', year: '2016', sales: 55.2 },
  { product: '椰汁', year: '2017', sales: 69.6 },
  { product: '椰汁', year: '2018', sales: 21.2 }
]

const { Chart, Area, Legend, Tooltip, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  value: 'sales',
  text: 'product'
})

const area = new Area({stack:false})

const tooltip = new Tooltip({
  formatter: function(data) {
    return `${data.product} ${data.year} ${data.sales}`
  }
})

const axisBottom = new Axis()
.style('point',{fillColor:'transparent'})
.style('point:hover',{color:'#fff'})

const axisLeft = new Axis({ orient: 'left' })
.style('axis',false).style('scale',false)

const legend = new Legend({ align: ['center', 'bottom'] })

chart.add([area, tooltip, axisBottom, axisLeft, legend])
chart.render()
```

:::


