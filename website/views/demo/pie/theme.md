## 主题切换

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 3100, label: '邮件营销' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 1548, label: '搜索引擎' }
]

const chart = new qcharts.Chart({ container: '#app' })

chart.setTheme('dark')

const pie = new qcharts.Pie({
  radius: 0.6,
  innerRadius: 0.2
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })

const step = () => {
  setTimeout(() => {
    chart.setTheme('default')
    setTimeout(() => {
      chart.setTheme('dark')
      requestAnimationFrame(step)
    }, 3000)
  }, 3000)
}

requestAnimationFrame(step)

chart.add(pie)
chart.render()
```

:::
