### 指针调整

可以通过 `pointerWidth` 调整指针的宽度，值为`Number`或者`Array`。值若为`Array`，维度与 data 的维度保持一致；如果为`Number`则所有仪表盘的`pointerWidth`都为相同值。

指针支持通过 `style('pointer')`对颜色及属性进行修改

:::demo

```javascript

const { Chart, Gauge, Legend, Tooltip } = qcharts

const chart = new Chart({ container: '#app' })

const gauge = new Gauge({
  min: 0,
  max: 100,
  percent:45,
  lineWidth: 20,
  // 修改指针宽度
  pointerWidth: 10,
  tickStep: 10
})

gauge
  .style('title', { fontSize: 36 })
  .style('arc', { strokeColor: '#006666' })
  .style('pointer', { fillColor: '#006666' })

chart.append(gauge)

setInterval(() => {
  const val = (Math.random() * 100).toFixed(0)
  gauge.attr({
    percent:val
  })
}, 3000)
```

:::
