## 数据更新

:::demo1

```javascript
const data0 = [
  { value: 542.64, label: '腾讯' },
  { value: 363.89, label: '百度' },
  { value: 56.06, label: '网易' },
  { value: 33.66, label: '新浪' },
  { value: 32.11, label: '360' },
  { value: 31.88, label: '新东方' },
  { value: 30.37, label: '携程' },
  { value: 18.27, label: '搜狐' },
  { value: 17.97, label: '搜房网' }
]
const data1 = [
  { value: 642.64, label: '腾讯' },
  { value: 463.89, label: '百度' },
  { value: 156.06, label: '网易' },
  { value: 100.66, label: '新浪' },
  { value: 132.11, label: '360' },
  { value: 88.88, label: '新东方' },
  { value: 70.37, label: '携程' },
  { value: 68.27, label: '搜狐' },
  { value: 27.97, label: '搜房网' }
]
const data2 = [
  { value: 1042.64, label: '腾讯' },
  { value: 863.89, label: '百度' },
  { value: 456.06, label: '网易' },
  { value: 333.66, label: '新浪' },
  { value: 232.11, label: '360' },
  { value: 231.88, label: '新东方' },
  { value: 130.37, label: '携程' },
  { value: 118.27, label: '搜狐' },
  { value: 37.97, label: '搜房网' }
]

let bool = true
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data0, {
  row: '*',
  value: 'value',
  text: 'label'
})
const bar = new Bar({
  pos: ['20%', '10%'],
  size: ['70%', '80%'],
  transpose: true,
  barWidth: 18
})
// bar.style('pillar', { fillColor: '#47A1FF' })
const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
})
const legend = new Legend({ align: ['center', 'bottom'] }).style('text', {
  text: '图例一'
})
const axisBottom = new Axis().style('scale', false).style('grid', true)
const axisLeft = new Axis({
  orient: 'left'
}).style('grid', false)
chart.add([bar, tooltip, legend, axisBottom, axisLeft])
chart.render()
// setTimeout(changeData, 3000)
let i = 1
let str = 'data'
function changeData() {
  let dataStr = str + (i % 3)
  chart.source(window[dataStr], {
    row: '*',
    value: 'value',
    text: 'label'
  })
  i++
  setTimeout(changeData, 5000)
}
```

:::
