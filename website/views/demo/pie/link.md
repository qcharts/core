## 图表联动

:::demo

```javascript
const data = [
  {
    type: '男性',
    value: 56.4
  },
  {
    type: '女性',
    value: 43.6
  }
]

const { Chart, Tooltip, InteractionHooks } = qcharts

const chart1 = new Chart({
  container: '#app',
  size: ['50%', '100%']
})

chart1.setTitle('短视频用户性别分布')

const pie1 = new qcharts.Pie({
  radius: 0.7,
  innerRadius: 0.2
})
  .source(data)
  .setDataFields({ x: 'type', y: 'value' })
  .style('sector', (attrs, data, i) => {
    return data.type === '男性'
      ? { fillColor: '#0a9afe' }
      : { fillColor: '#eceef1' }
  })
  .style('text', (attrs, data, i) => data.type === '男性')

chart1
  .add(pie1)
  .add(
    new Tooltip({ lineHight: 22 }).formatter(
      data => `访问来源：\n${data.type}: ${data.value}%`
    )
  )

const chart2 = new Chart({
  container: '#app',
  pos: ['50%', 0],
  size: ['50%', '100%']
})

const pie2 = new qcharts.Pie({
  radius: 0.7,
  innerRadius: 0.2
})
  .source(data.reverse())
  .setDataFields({ x: 'type', y: 'value' })
  .style('sector', (attrs, data, i) => {
    return data.type === '女性'
      ? { fillColor: '#f0657d' }
      : { fillColor: '#eceef1' }
  })
  .style('text', (attrs, data, i) => data.type === '女性')

chart2
  .add(pie2)
  .add(
    new Tooltip({ lineHight: 14 }).formatter(
      data => `访问来源：\n${data.type}: ${data.value}%`
    )
  )

chart1.on(InteractionHooks.showTooltip, e => {
  chart2.emit(InteractionHooks.showTooltip, {
    offsetX: e.offsetX + 200,
    offsetY: e.offsetY + 90,
    data: data[e.index]
  })
})

chart1.on(InteractionHooks.hideTooltip, e => {
  chart2.emit(InteractionHooks.hideTooltip)
})

chart1.render()
chart2.render()
```

:::
