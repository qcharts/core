## 日历

:::demo

```javascript
const days = Array.from({ length: 28 }, (d, i) => `2月${i + 1}日`)
const data = days.reduce((a, c) => {
  const data = ['工作', '娱乐', '睡觉'].map(type => ({
    day: c,
    type,
    value: Math.round(Math.random() * 24)
  }))
  a.push.apply(a, data)
  return a
}, [])

const data2 = days.reduce((a, c) => {
  const data = ['工作', '娱乐', '睡觉'].map(type => ({
    day: c,
    type,
    value: Math.round(Math.random() * 24)
  }))
  a.push.apply(a, data)
  return a
}, [])

const { Chart, Pie, Legend, Text, Toolbox } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'day',
  col: 'type',
  value: 'value'
})

const ds = chart.dataset

const weekdays = ['一', '二', '三', '四', '五', '六', '日']

days.slice(0, 7).forEach((d, i) => {
  const pos = [14 * (i % 7) + 10 + '%', 15 * ~~(i / 7) + 10 + '%']
  const text = new Text({
    text: '星期' + weekdays[i],
    pos
  })
  chart.add(text)
})

days.forEach((d, i) => {
  const size = ['8%', '8%']
  const pos = [14 * ((i + 2) % 7) + 8 + '%', 14 * ~~((i + 2) / 7) + 20 + '%']

  const pie = new Pie({ size, pos })
  pie.source(ds.selectRows(d))
  pie.style('text', { color: '#fff' })

  const text = new Text({
    text: i + 1,
    pos,
    anchor: [1.5, 1.0]
  })

  chart.add([text, pie])
})

const legend = new Legend({
  layout: 'horizontal',
  pos: ['35%', '90%'],
  layoutBy: 'cols',

  horizontal: 'center',
  vertical: 'bottom'
})
legend.source(['工作', '娱乐', '睡觉'])

chart.add([legend])
chart.render()
```

:::
