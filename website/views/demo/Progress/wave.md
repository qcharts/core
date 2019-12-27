## 水波进度

:::demo

```javascript
const data = [
  {
    sex: 'male',
    value: 63
  },
  {
    sex: 'middle',
    value: 16
  },
  {
    sex: 'female',
    value: 21
  }
]

const { Chart, Progress, Tooltip } = qcharts

const chart = new Chart({ container: '#app' })

const colors = ['#49d088', '#FE5555', '#F4B30E', 'red']

const progress = new Progress({
  min: 0,
  max: 100,
  type: 'wave',
  radius: 60,
  offset: 10,
  lineWidth: 10
})
  .source(data)
  .setDataFields({ x: 'sex', y: 'value' })
  .style('normal', (attrs, d, i) => {
    return { fillColor: colors[i], color: colors[3 - i] }
  })
  .formatter(d => `${d.value}`)

chart.add(progress).add(new Tooltip().formatter(d => `${d.value}`))

chart.render()
```

:::

### 属性

当 `type` 为 `wave` 时，相关属性如下。

| 名称      | 说明           | 参数            |
| --------- | -------------- | --------------- |
| radius    | 内圈圆半径     | `(val: Number)` |
| lineWidth | 外圈圆环宽度   | `(val: Number)` |
| offset    | 内外圈之间留白 | `(val: Number)` |
