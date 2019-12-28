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
  value: 'count'
})

const radialBar = new RadialBar({
  pos: ['-10%', '10%'],
  min: 0,
  max: 10000,
  radius: 0.6,
  innerRadius: 0.1,
  lineWidth: 10
})

// radialBar.color(['rgba(195,51,51,1)', 'rgba(147,8,207,1)', 'rgba(79,24,217,1)', 'rgba(0,95,239,1)', 'rgba(26,216,210,1)', 'rgba(0,38,202,1)',])

radialBar.style('arc', { lineCap: 'round' })

const legend = new Legend({
  orient: 'vertical',
  align: ['right', 'center'],
  formatter: (name, da, i) => {
    let d = da[0] // 也可以根据 name 查找 legend 与哪些源数据对应
    return (
      `${d.type}` +
      Array(8 - d.type.length)
        .fill(`   `)
        .join('') +
      `${d.count}`
    )
  }
})
legend.style('icon', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0
}))
legend.style('text', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0
}))

chart.add([radialBar, legend])
chart.render()
```

:::
