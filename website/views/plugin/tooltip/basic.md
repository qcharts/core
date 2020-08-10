## Tooltip

当实例化 `chart` 后，向 `chart` 添加 `Tooltip` 插件即可，`chart.append(new Tooltip())`。

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

const tooltip = new Tooltip({ formatter: d => d.value })

chart.append([pie, tooltip])
```

:::

### 属性

| 属性名    | 类型               | 默认值   | 描述                         |
| --------- | ------------------ | -------- | ---------------------------- |
| title     | String \| Function | `null`   | 标题                         |
| formatter | Function           | `d => d` | 除标题外，其他文本格式化函数 |
