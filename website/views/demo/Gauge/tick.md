## 刻度

可以通过 `tickStep` 和 `tickLength` 分别控制 tick 的生成数和长度。当 `tickLength` 为负值时，将在外圈绘制刻度。

:::demo

```javascript
const data = [
  {
    value: 7.3
  }
]

const { Chart, Gauge, Legend, Tooltip } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  value: 'value'
})

const colors = ['#49d088', '#FE5555', '#F4B30E', '#473C8B']

const gauge = new Gauge({
  min: 0,
  max: 10,
  tickStep: 1,
  tickLength: -10,
  title: d => `${d.value}`,
  subTitle: 'Hello'
})

gauge.style('title', { fontSize: 36 })

chart.add(gauge)

chart.render()
```

:::

### 刻度上文字

可以通过 `labelOffset` 设置文字和刻度之间的距离。

:::demo

```javascript
const data = [
  {
    value: 7.3
  }
]

const { Chart, Gauge, Legend, Tooltip } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  value: 'value'
})

const gauge = new Gauge({
  min: 0,
  max: 10,
  tickStep: 1,
  tickLength: 10,
  labelOffset: 20,
  title: d => `${d.value}`,
  subTitle: 'Hello'
})

gauge.style('title', { fontSize: 36 })

chart.add(gauge)

chart.render()
```

:::
