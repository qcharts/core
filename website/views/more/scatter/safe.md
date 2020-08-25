## 散点图隐藏坐标轴

:::demo

```javascript
const data = [
  {
    value: 10,
    name: '危化品企业'
  },
  {
    value: 17,
    name: '危险源(库区储/罐区)'
  },
  {
    value: 13,
    name: '预警'
  },
  {
    value: 7,
    name: '报警数'
  }
]

const { Chart, Scatter, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  text: 'name',
  value: 'value'
})
const scatter = new Scatter({
  axisGap: true,
  areaField: 'value',
  labelField: 'name',
  areaRange: [20, 45]
})

scatter
  .style('point', (attr, data, i) => {
    return { fillColor: 'rgba(48, 251, 171,0.4)', strokeColor: 'rgba(48, 251, 171,1)' }
  })
  .style('label', (attr, data, i) => {
    return { text: data.value, fillColor: '#fff', fontSize: 20 }
  })

const axis = new Axis({ type: 'category' })
  .style('label', { width: 200, fillColor: 'rgba(48, 251, 171,1)' })
  .style('scale', false)
  .style('axis', { strokeColor: 'rgba(48, 251, 171,1)' })
  .style('grid', { strokeColor: 'rgba(48, 251, 171,1)' })
const axisTop = new Axis({ orient: 'top' })
  .style('label', false)
  .style('scale', false)
  .style('grid', false)
  .style('axis', { lineDash: [3, 3], strokeColor: 'rgba(48, 251, 171,1)' })
chart.append([scatter, axis, axisTop])
```

:::
