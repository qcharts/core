## 文字

目前 `labelPosition` 只支持 `top`、`right`、`bottom` 和 `left` 之一，如果需要作偏移，可以配合使用 `spritejs.Label` 的 `translate` 属性。

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

const chart = new Chart({ container: '#app'})

chart.source(data, {
  row: 'sex',
  text: 'sex',
  value: 'value'
})

const colors = ['#49d088', '#FE5555', '#F4B30E', 'red']

const progress = new Progress({
  min: 0,
  max: 100,
  label: true,
  labelPosition: 'top',
  formatter: d => `${d.value}`
})

chart.add(progress).add(new Tooltip({ formatter: d => `${d.value}` }))

chart.render()
```

:::

### 属性

| 名称          | 说明         | 参数                                         |
| ------------- | ------------ | -------------------------------------------- |
| label         | 是否显示文字 | `(flag: Boolean)`                            |
| labelPosition | 文字位置     | `(pos: 'top' | 'right' | 'bottom' | 'left')` |
