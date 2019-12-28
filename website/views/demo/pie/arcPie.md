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

const { Chart, ArcPie, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'type',
  value: 'count'
})

const arcPie = new ArcPie({
  pos: ['-10%', '10%'],
  radius: 0.6,
  innerRadius: 0.1,
  lineWidth: 15,
  padAngle: 0.02,
  title: d => `${d[0].dataOrigin.type}`,
  subTitle: d => `${d[0].dataOrigin.count}`
})

arcPie.style('arc', { lineCap: 'round' })
arcPie.style('title', { fontSize: 24 })

const legend = new Legend({
  orient: 'vertical',
  align: ['right', 'center'],
  formatter: (_, da, i) => {
    let d = da[0]
    return (
      `${d.type}` +
      Array(8 - d.type.length)
        .fill(`   `)
        .join('') +
      `${d.count}`
    )
  }
})
legend.style('icon', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0
}))
legend.style('text', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0
}))

chart.add([arcPie, legend])
chart.render()
```

:::
