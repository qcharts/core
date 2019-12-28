## Nightingle Rose Chart 南丁格尔玫瑰图 - 数值变换

:::demo

```javascript
let data = [
  { value: 335, name: '直接访问' },
  { value: 210, name: '邮件营销' },
  { value: 2800, name: '联盟广告' },
  { value: 254, name: '视频广告' },
  { value: 200, name: '搜索引擎' }
]
const { Chart, Pie, Tooltip, Legend } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  row: 'name',
  value: 'value',
  layoutScale: 'log' //['log','log2','log10','sqrt','sqrt3','sqrt~n','pow','pow3','pow~n']
})

const pie = new Pie({
  radius: 0.7,
  pos: [0, 0],
  size: ['80%', '100%'],
  rose: true
})
pie.style('guideline', true)
pie.style('guideText', { fontSize: '12px' })

const legend = new Legend({
  formatter: function(name, data, i) {
    return name
    //console.log(data)
  },
  orient: 'vertical',
  align: ['right', 'center']
})
legend.style('icon', (attrs, d, i) => ({
  borderRadius: 10,
  marginTop: i > 0 ? 15 : 0
}))
legend.style('text', (attrs, d, i) => ({
  marginTop: i > 0 ? 15 : 0
}))

chart.add(pie)
chart.add(legend)

chart.render()
```

:::
