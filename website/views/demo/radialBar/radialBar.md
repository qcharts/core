## 玉玦图

:::demo

```javascript
const data = [
  {
    type: '政法干部',
    count: 6654
  },

  {
    type: '平安志愿者',
    count: 5341
  },

  {
    type: '人民调解员',
    count: 3546
  },

  {
    type: '心理咨询师',
    count: 4321
  },

  {
    type: '法律工作者',
    count: 3923
  },

  {
    type: '网格员',
    count: 5345
  }
].sort((a, b) => a.count - b.count)

const { Chart, RadialBar, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'type',
  text: 'type',
  value: 'count'
})

const radialBar = new RadialBar({
  min: 0,
  max: 10000,
  radius: 0.6,
  innerRadius: 0.1,
  lineWidth: 10
})

radialBar.style('arc', { lineCap: 'round' })

const legend = new Legend({
  orient: 'vertical',
  align: ['right', 'center'],
})

chart.append([radialBar, legend, new Tooltip()])
```

:::
