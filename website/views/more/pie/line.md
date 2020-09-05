## Donut Chart 动态环图

:::demo

```javascript
const data = [
  { name: '存储仓库', value: 50 },
  { name: '装备物资企业', value: 17 },
  { name: '运输机构', value: 1 },
  { name: '通讯保障机构', value: 0 },
  { name: '医疗卫生机构', value: 182 },
  { name: '应急避难场所', value: 619 }
]
const { Chart, Pie, Legend, Tooltip } = qcharts

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
  radius: 0.7,
  clientRect: { top: '10%', left: '10%', right: '10%', bottom: '10%' }
})
pie.style('sector', { lineWidth: 1, strokeColor: '#fff' })
pie.style('guideline', true)
pie.style('guideText', { fontSize: '12px' })
const legend = new Legend()
chart.append([pie, legend])
```

:::
