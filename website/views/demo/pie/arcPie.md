## 弧饼图

弧饼图继承至饼图，使用了不同的图形进行渲染。

:::demo

```javascript
const data = [
  {
    type: '污染源',
    count: 4454
  },

  {
    type: '消防场所',
    count: 1239
  },

  {
    type: '安全生产',
    count: 3758
  },

  {
    type: '治安场所',
    count: 4300
  }
]

const { Chart, Pie, Legend } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'type',
  value: 'count'
})

const pie = new Pie({
  radius: 0.6,
  innerRadius: 0.1,
  startAngle: 180,
  endAngle: 360
})

const legend = new Legend()

chart.append([pie, legend])
```

:::
