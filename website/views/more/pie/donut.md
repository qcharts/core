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
  animation: { duration: 400 },
  formatter: function(str) {
    return `${str} %`
  }
})

chart.append([pie])

setInterval(changeData, 3000)
//数据被选中动画模拟，轮流设置数据的selected属性，同时移除上一个数据的selected属性
function changeData() {
  if (counter < 4) {
    counter++
  } else {
    counter = 0
  }
  pie.dataset.forEach((item, ind) => {
    if (item.state === 'hover' && ind !== counter) {
      item.state = 'default'
    }
  })
  pie.dataset[counter].state = 'hover'
}
```

:::
