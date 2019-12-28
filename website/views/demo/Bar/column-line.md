## Bar-line Chart 柱状折线图

:::demo

```javascript
var data = [
  {
    name: 'London',
    月份: 'Jan',
    月均降雨量: 18.9
  },
  {
    name: 'London',
    月份: 'Feb',
    月均降雨量: 28.8
  },
  {
    name: 'London',
    月份: 'Mar',
    月均降雨量: 39.3
  },
  {
    name: 'London',
    月份: 'Apr',
    月均降雨量: 81.4
  },
  {
    name: 'London',
    月份: 'May',
    月均降雨量: 47
  },
  {
    name: 'London',
    月份: 'Jun',
    月均降雨量: 20.3
  },
  {
    name: 'London',
    月份: 'Jul',
    月均降雨量: 24
  },
  {
    name: 'London',
    月份: 'Aug',
    月均降雨量: 35.6
  },
  {
    name: 'Berlin',
    月份: 'Jan',
    月均降雨量: 12.4
  },
  {
    name: 'Berlin',
    月份: 'Feb',
    月均降雨量: 23.2
  },
  {
    name: 'Berlin',
    月份: 'Mar',
    月均降雨量: 34.5
  },
  {
    name: 'Berlin',
    月份: 'Apr',
    月均降雨量: 99.7
  },
  {
    name: 'Berlin',
    月份: 'May',
    月均降雨量: 52.6
  },
  {
    name: 'Berlin',
    月份: 'Jun',
    月均降雨量: 35.5
  },
  {
    name: 'Berlin',
    月份: 'Jul',
    月均降雨量: 37.4
  },
  {
    name: 'Berlin',
    月份: 'Aug',
    月均降雨量: 42.4
  }
]

const { Chart, Axis, Line, Bar, Legend } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'name',
  text: '月份',
  value: '月均降雨量'
})

const bar = new Bar({
  transpose: false,
  pos: ['10%', '10%'],
  size: ['80%', '80%'],
  barWidth: 20,
  mouseDisabled: true
})

const line = new Line({
  smooth: true,
  axisGap: true
})

const tooltip = new qcharts.Tooltip({
  formatter: d => `${d.name}: ${d['月份']}： ${d['月均降雨量']}`
})
const legend = new Legend({align: ['center', 'bottom']})

const axisBottom = new Axis()
const axisLeft = new Axis({ orient: 'left' })

chart.add([bar, line, tooltip, legend, axisBottom, axisLeft])
chart.render()
```

:::
