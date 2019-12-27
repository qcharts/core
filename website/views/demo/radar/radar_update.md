## 雷达图数据更新

:::demo 数据更新

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

chart.add(new Legend())

const data2 = [
  { label: '客服', category: '添加测试', value: 130 },
  { label: '研发', category: '添加测试', value: 92 },
  { label: '市场', category: '添加测试', value: 70 },
  { label: '扯淡', category: '添加测试', value: 65 },
  { label: '销售', category: '添加测试', value: 21 },
  { label: '管理', category: '添加测试', value: 66 },
  { label: '技术', category: '添加测试', value: 70 }
]

let change = true
setInterval(() => {
  if (change) {
    chart.source(data2)
  } else {
    chart.source(data)
  }
  change = !change
}, 3000)

chart.add(radar)
chart.render()
```

:::
