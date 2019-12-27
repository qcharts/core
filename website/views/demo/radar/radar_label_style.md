## label 样式设置 (x 轴)

:::demo label

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
  .style('label', (attr, data, i) => {
    const colors = ['red', 'green', 'blue', 'black']
    return i < 4 ? { color: colors[i], offset: 10 } : { color: colors[7 - i] }
  })
  .style('label:hover', (attr, data, i) => ({ font: '17px 宋体' }))

chart.add(radar)
chart.render()
```

:::

### label 可配置 style 说明

名称：label、label:hover

函数参数：

```json
{
  "attr": { color, font, radian },
  "data": { label },
  index
}
```

可配置属性

```json
{ color, font, offset }
```

offset 为偏移量
返回 false 则不渲染
