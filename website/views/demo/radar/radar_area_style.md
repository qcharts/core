## section 样式设置

:::demo area

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
  .style('section', (attr, data, i) => {
    const obj = {
      实际开销: '#00C8FB',
      节能减排: '#D77169'
    }
    return { fillColor: obj[data[0].category], opacity: 0.5 }
  })
  .style('section:hover', (attr, data, i) => ({ fillColor: 'red' }))

chart.add(radar)
chart.render()
```

:::

### section 可配置 style 说明

名称：section、section:hover

函数参数：

```json
{
  "attr": { fillColor, opacity },
  "data": { category },
  index
}
```

可配置属性

```json
{ fillColor, opacity }
```

返回 false 则不渲染
