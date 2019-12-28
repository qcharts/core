## axis 样式设置

:::demo 坐标轴

```javascript
const data = [
  { label: '客服', category: '实际开销', value: 2 },
  { label: '研发', category: '实际开销', value: 22 },
  { label: '市场', category: '实际开销', value: 69 },
  { label: '扯淡', category: '实际开销', value: 69 },
  { label: '销售', category: '实际开销', value: 66 },
  { label: '管理', category: '实际开销', value: 32 },
  { label: '技术', category: '实际开销', value: 24 },

  { label: '客服', category: '节能减排', value: 100 },
  { label: '研发', category: '节能减排', value: 47 },
  { label: '市场', category: '节能减排', value: 73 },
  { label: '扯淡', category: '节能减排', value: 48 },
  { label: '销售', category: '节能减排', value: 10 },
  { label: '管理', category: '节能减排', value: 41 },
  { label: '技术', category: '节能减排', value: 32 }
]

const { Chart, Radar, Tooltip, Legend } = qcharts

const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'category',
  value: 'value',
  text: 'label'
})

const radar = new Radar()

radar
  .style('axis', (attr, data, i) => {
    return i % 2 === 0
      ? { color: 'red' }
      : { color: 'green', lineDash: [2, 10] }
  })
  .style('axis:hover', (attr, data, i) => ({
    lineWidth: attr.lineWidth + 2
  }))

chart.add(radar)
chart.render()
```

:::

### axis 可配置 style 说明

名称：axis、axis:hover

函数参数：

```json
{
  "attr": { color, lineWidth, lineDash, renderAxisLabel },
  "data": { category, radian },
  index
}
```

可配置属性

```json
{ color, lineWidth, lineDash, renderAxisLabel }
```

返回 false 则不渲染
