## Basic Gauge 仪表盘

:::demo

```javascript

const { Chart, Gauge } = qcharts

const chart = new Chart({ container: '#app' })

const gauge = new Gauge({
  min: 0,
  max: 100,
  percent:60,
  lineWidth: 20,
  tickStep: 10
})

gauge.style('title', { fontSize: 36 })

chart.append(gauge)

setTimeout(() => {
  gauge.attr({percent:45})
}, 3000)
```

:::
