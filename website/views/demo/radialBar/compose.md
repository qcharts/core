## 组合

:::demo

```javascript
const data = [
  {
    question: '近 7 日睡眠状况',
    hour: [7, 8, 6, 7, 8, 7, 8]
  }
]

const { Plot, Chart, Tooltip } = qcharts

const plot = new Plot('.block-demo .demo', {})

const chart = new Chart()

chart.setTitle('图表组合', { color: 'red' })

chart
  .radialBar({
    radius: 0.5
    // axis: 'angle'
  })
  .source(data)
  .setDataFields({ x: 'question', y: 'hour' })
  .text({ color: '#fff' })

chart
  .pie({
    radius: 0.8,
    innerRadius: 0.6
  })
  .source(data[0].hour.map(d => ({ question: data[0].question, hour: d })))
  .setDataFields({ x: 'question', y: 'hour' })

chart.addPlugin(
  new Tooltip({ lineHight: 22 }).formatter(
    data => `${data.question}: ${data.percent}%`
  )
)

plot.addChart(chart)
plot.render()
```

:::
