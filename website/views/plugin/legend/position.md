## 位置调整

`Legend` 提供了 `top` 和 `left` 两种分别用于调整 **距离顶端** 和 **距离左端** 的距离的方法。传入要调整的数字或百分比即可。

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 3100, label: '邮件营销' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 1548, label: '搜索引擎' }
]

const { Chart, Legend } = qcharts

const chart = new Chart({ container: '#app' })

const pie = new qcharts.Pie({
  radius: 0.6
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })

const legend = new Legend()
legend.top(50)
legend.left('80%')

chart.add(pie).add(legend)

chart.render()
```

:::
