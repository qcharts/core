## 其它面积图

#### Data update 数据更新面积图

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

const newData = [
  { product: '茶叶', year: '2016', sales: 181.2 },
  { product: '茶叶', year: '2017', sales: 51.2 },
  { product: '茶叶', year: '2018', sales: 31.2 },
  { product: '牛奶', year: '2016', sales: 59.2 },
  { product: '牛奶', year: '2017', sales: 179.6 },
  { product: '牛奶', year: '2018', sales: 130.2 },
  { product: '咖啡', year: '2016', sales: 135.2 },
  { product: '咖啡', year: '2017', sales: 69.6 },
  { product: '咖啡', year: '2018', sales: 91.2 },
  { product: '椰汁', year: '2016', sales: 85.2 },
  { product: '椰汁', year: '2017', sales: 59.6 },
  { product: '椰汁', year: '2018', sales: 31.2 }
]


const { Chart, Area, Legend, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  value: 'sales',
  text: 'product'
})

const area = new Area()
.style('point',{fillColor:'transparent',strokeColor:'transparent'})
.style('point:hover',{strokeColor:'#fff'})

const axisBottom = new Axis()
const axisLeft = new Axis({ orient: 'left' })
.style('axis',false).style('scale',false)

area.style('symbol:hover', { fillColor: '#f00' })

const legend = new Legend({ align: ['center', 'bottom'] })

chart.add([area, axisBottom, axisLeft, legend])
chart.render()

setTimeout(()=>{
  chart.source(newData,{
    row: 'year',
    value: 'sales',
    text: 'product'
  })
},2000)
```

:::



## Range Area Chart 区间面积图

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

const area = new Area({stack:false,smooth:true,compositeOperation:'xor'})
.style('guideline',false)
.style('point',{fillColor:'transparent',strokeColor:'transparent'})
.style('point:hover',{strokeColor:'#fff'})

const axisBottom = new Axis()

const axisLeft = new Axis({ orient: 'left' })
.style('axis',false).style('scale',false)

const legend = new Legend({ align: ['center', 'bottom'] })
.style('icon',{borderRadius:10}).style('text',{fontSize:12})

chart.add([area, axisBottom, axisLeft, legend])
chart.render()
```

:::