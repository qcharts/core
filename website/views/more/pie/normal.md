## Donut Chart 动态环图

:::demo

```javascript
const data = [
  { name: '装备物资企业', value: 17 },
  { name: '通讯保障机构', value: 1 },
  { name: '存储仓库', value: 50 },
  { name: '医疗卫生机构', value: 182 },
  { name: '应急避难场所', value: 619 },
  { name: '运输机构', value: 1 }
]
const length = data.length
let counter = 0
const { Chart, Pie, Legend } = qcharts
const { Label } = spritejs
const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'name',
  value: 'value'
})

const pie = new Pie({
  startAngle: -90,
  endAngle: 270,
  innerRadius: 0.4,
  radius: 0.5,
  animation: { duration: 400 }
})
const legend = new Legend()
chart.append([pie, legend])
```

:::
