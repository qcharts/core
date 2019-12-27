<p></p>

:::demo

```javascript
const data = [
  {
    reason: '用的人太多，不够个性化',
    value: 2.6
  },

  {
    reason: '自拍不够美',
    value: 4.5
  },

  {
    reason: '没有需要的功能',
    value: 6.2
  },

  {
    reason: '电池不耐用',
    value: 8.3
  },

  {
    reason: '其他',
    value: 14.8
  },

  {
    reason: '尝试一下安卓',
    value: 27.2
  },

  {
    reason: '价格贵',
    value: 36.4
  }
]

const { Plot, Chart, Tooltip } = qcharts

const plot = new Plot('.block-demo .demo', {})

const chart = new Chart()

chart.setTitle('iPhone 换机用户不再选择 iPhone 的原因')

const radial = chart
  .radialBar({
    radius: 0.8,
    innerRadius: 0.2,
    padAngle: 0,
    offsetRadius: 2
  })
  .source(data)
  .setDataFields({ x: 'reason', y: 'value' })
  .useStyle('hover', { opacity: 0.5 })

chart.addPlugin(
  new Tooltip({ lineHight: 22 }).formatter(data => {
    return `${data.reason}: ${data.value}%`
  })
)

plot.addChart(chart)
plot.render()
```

:::

:::demo

```javascript
const data = [
  {
    reason: '用的人太多，不够个性化',
    value: 2.6
  },

  {
    reason: '自拍不够美',
    value: 4.5
  },

  {
    reason: '没有需要的功能',
    value: 6.2
  },

  {
    reason: '电池不耐用',
    value: 8.3
  },

  {
    reason: '其他',
    value: 14.8
  },

  {
    reason: '尝试一下安卓',
    value: 27.2
  },

  {
    reason: '价格贵',
    value: 36.4
  }
]

const { Plot, Chart, Tooltip } = qcharts

const plot = new Plot('.block-demo:nth-of-type(2) .demo', {})

const chart = new Chart()

chart.setTitle('iPhone 换机用户不再选择 iPhone 的原因')

const radial = chart
  .radialBar({
    radius: 0.6,
    innerRadius: 0.2,
    axis: 'angle'
  })
  .source(data)
  .setDataFields({ x: 'reason', y: 'value' })
  .useStyle('hover', { opacity: 0.5 })

chart.addPlugin(
  new Tooltip({ lineHight: 22 }).formatter(data => {
    return `${data.reason}: ${data.value}%`
  })
)

plot.addChart(chart)
plot.render()
```

:::
