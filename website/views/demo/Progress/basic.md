## 基本使用

:::demo

```javascript
const data = [
  {
    sex: 'male',
    value: 63
  }
]

const data2 = [
  {
    sex: 'male',
    value: 87
  }
]

const { Chart, Progress, Tooltip } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  row: 'sex',
  value: 'value',
  text: 'sex'
})

const colors = ['#49d088', '#FE5555', '#F4B30E', '#473C8B']

const progress = new Progress({
  min: 0,
  max: 100,
  formatter: d => `${d.value}%`,
  labelPosition: 'top',
  startAngle: Math.PI * 0.8,
  endAngle: Math.PI * 2.2
})

chart
  .add(progress)
  .add(new qcharts.Legend())
  .add(new Tooltip({ formatter: d => `${d.value}` }))

chart.render()
;(function step() {
  setTimeout(() => {
    chart.source(data2)
    setTimeout(() => {
      chart.source(data)
      requestAnimationFrame(step)
    }, 3000)
  }, 3000)
})()
```

:::

### 切换可视类型

目前支持 2 种类型进度图：`pie | wave`。通过 `type` 属性控制。

:::demo

```javascript
const data = [
  {
    sex: 'male',
    value: 63
  }
]
const { Chart, Progress, Tooltip } = qcharts
const chart = new Chart({ container: '#app' })

chart.source(data, {
  row: 'sex',
  value: 'value',
  text: 'sex'
})

const colors = ['#49d088', '#FE5555', '#F4B30E', '#473C8B']

const progress = new Progress({
  min: 0,
  max: 100,
  type: 'wave',
  formatter: d => `${d.value}%`
})

chart
  .add(progress)
  .add(new qcharts.Legend())
  .add(new Tooltip({ formatter: d => `${d.value}` }))

chart.render()
```

:::
