## Donut Chart 动态环图

:::demo

```javascript
const data = [
  {
    year: '2016',
    sales: 17,
    selected: true
  },
  {
    year: '2017',
    sales: 28
  },
  {
    year: '2018',
    sales: 25
  },
  {
    year: '2019',
    sales: 7
  },
  {
    year: '2020',
    sales: 22
  }
]
const length = data.length
let counter = 0
const { Chart, Pie } = qcharts
const { Label } = spritejs
const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  value: 'sales'
})

const pie = new Pie({
  innerRadius: 0.4,
  radius: 0.5,
  animation: { duration: 1000 },
  formatter: function(str) {
    return `${str} %`
  }
})
pie.style('sector', {
  animation: { type: 'slide' },
  lineWidth: 1,
  strokeColor: '#fff'
})
pie.style('title', rings => {
  let center = rings[0].center
  return {
    animation: false,
    pos: center,
    text: rings[counter % length].sales,
    anchor: [0.5, 0.5]
  }
})
pie.style('subtitle', rings => {
  let center = rings[0].center
  return {
    animation: { duration: 500 },
    fontSize: 20,
    text: rings[counter % length].year + '年: ' + rings[counter % length].sales,
    anchor: [0.5, 0.5],
    pos: [center[0], center[1] + 30]
  }
})
chart.add([pie])
chart.render()

setInterval(changeData, 3000)
//数据被选中动画模拟，轮流设置数据的selected属性，同时移除上一个数据的selected属性
function changeData() {
  counter++
  let last =
    (counter % length) - 1 < 0 ? data.length - 1 : (counter % length) - 1
  delete data[last].selected
  data[counter % length].selected = true

  //设置图标数据，数据驱动动画
  chart.source(data, {
    row: 'year',
    value: 'sales'
  })
}
```

:::
