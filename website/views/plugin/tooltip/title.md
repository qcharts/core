## 标题设置

`Tooltip` 的标题可以设置为 `string`，也可以设置为 `function`。两者区别：`string` 将固定标题为某字符串，`function` 则将 title 设置为函数返回值。

:::demo

```javascript
const data = [1, 2, 3, 4, 5].map(num => {
  return { value: num }
})

const { Chart, Pie, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app',
  size: ['100%', '100%']
})

chart.source(data, { value: 'value' })

const pie = new Pie()

const tooltip = new Tooltip({ title: '数字', formatter: d => d.value })

chart.add([pie, tooltip])
chart.render()
```

:::

:::demo

```javascript
const data = [1, 2, 3, 4, 5].map(num => {
  return { value: num }
})

const { Chart, Pie, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app',
  size: ['100%', '100%']
})

chart.source(data, { value: 'value' })

const pie = new Pie()

const tooltip = new Tooltip({
  title: d => {
    return `数组 ${d[0].value}`
  },
  formatter: d => d.value
})

chart.add([pie, tooltip])
chart.render()
```

:::
