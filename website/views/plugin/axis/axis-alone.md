## 基础坐标轴

坐标轴组件会自己根据 chart 的 source 数据进行 layout 计算，并且进行默认布局，也会根据 chart 中的 visual 进行适配

:::demo 基础坐标

```javascript
const data = [
  { month: 'Jan', city: 'London', value: 3.9 },
  { month: 'Feb', city: 'London', value: 4.2 },
  { month: 'Mar', city: 'London', value: 5.7 },
  { month: 'Apr', city: 'London', value: 8.5 },
  { month: 'May', city: 'London', value: 11.9 },
  { month: 'Jun', city: 'London', value: 15.2 }
]

const { Chart, Axis } = qcharts

const chart = new Chart({
  container: '#app',
  size: ['100%', '100%']
}).source(data, {
  row: 'city',
  value: 'value',
  text: 'month'
})

let xAxis = new Axis({ orient: 'bottom' })
let yAxis = new Axis({ orient: 'left' })

chart.append(xAxis).add(yAxis)
```

:::
