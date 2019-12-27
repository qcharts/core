## 固定位置

使用 `Tooltip.position` 可以固定 `tooltip` 的位置。

:::demo

```javascript
const data = [
  { value: 1350, label: '直接访问' },
  { value: 2548, label: '搜索引擎' },
  { value: 3340, label: '联盟广告' },
  { value: 350, label: '视频广告' },
  { value: 2100, label: '邮件营销' }
]

const { Chart, Pie, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app',
  size: ['100%', '100%']
})

chart.source(data, { row: 'label', value: 'value' })

const pie = new Pie()

const tooltip = new Tooltip({ title: '网站流量来源', pos: ['0%', 20] })
tooltip.style('background', () => ({ bgcolor: 'rgba(0, 0, 0, .5)' }))
tooltip.style('title', () => ({ color: 'red' }))
tooltip.style('icon', () => ({ bgcolor: 'red' }))
tooltip.style('text', () => ({ color: 'blue' }))

chart.add(pie).add(tooltip)

chart.render()
```

:::
