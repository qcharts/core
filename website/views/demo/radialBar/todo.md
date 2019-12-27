## 存在的问题

## 1. axis 到底代表什么？

:::demo

```javascript
const data = [
  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '没有需要的功能',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  }
]

const { Plot, Chart, Tooltip } = qcharts

const plot = new Plot('.block-demo .demo', {})

const chart = new Chart()

const radial = chart
  .radialBar({
    radius: 0.6,
    innerRadius: 0.2,
    padAngle: 1
  })
  .source(data)
  .setDataFields({ x: 'reason', y: 'value' })
  .useStyle('hover', { opacity: 0.5 })

plot.addChart(chart)
plot.render()
```

:::

:::demo

```javascript
const data = [
  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '没有需要的功能',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  },

  {
    reason: '1',
    value: [1, 1, 1, 1, 1, 1, 1, 1]
  }
]

const { Plot, Chart, Tooltip } = qcharts

const plot = new Plot('.block-demo:nth-of-type(2) .demo', {})

const chart = new Chart()

const radial = chart
  .radialBar({
    radius: 0.6,
    innerRadius: 0.2,
    padAngle: 1,
    axis: 'angle'
  })
  .source(data)
  .setDataFields({ x: 'reason', y: 'value' })
  .useStyle('hover', { opacity: 0.5 })

plot.addChart(chart)
plot.render()
```

:::

相同数据，因为 `axis` 的不同而产生了不同的效果，布局方式是否有问题？概念是否清晰？是否足够简单去使用？

## 2. 传入的数据为 二维数组，是否应降到 一维数组？

## 3. 应重构一次
