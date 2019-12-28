## 柱状图颜色渐变

:::demo

```javascript
const data = [
  { value: 3350, label: '一般' },
  { value: 1548, label: '较大' },
  { value: 2340, label: '重大' },
  { value: 3000, label: '特大' }
]

const { Chart, Bar, Tooltip, Axis } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: '*',
  value: 'value',
  text: 'label'
})

const bar = new Bar({ barWidth: 12 })
  .style('pillar', (attrs, d, i) => {
    let size = attrs.size
    if (i === 0) {
      return {
        fillColor: {
          vector: [0, 0, size[0], size[1]],
          colors: [
            { color: '#007BF1', offset: 0 },
            { color: '#0046DF', offset: 1 }
          ]
        }
      }
    } else if (i === 1) {
      return {
        fillColor: {
          vector: [0, 0, size[0], size[1]],
          colors: [
            { color: '#BC9621', offset: 0 },
            { color: '#D58B00', offset: 1 }
          ]
        }
      }
    } else if (i === 2) {
      return {
        fillColor: {
          vector: [0, 0, size[0], size[1]],
          colors: [
            { color: '#E44E00', offset: 0 },
            { color: '#DF4900', offset: 1 }
          ]
        }
      }
    } else if (i === 3) {
      return {
        fillColor: {
          vector: [0, 0, size[0], size[1]],
          colors: [
            { color: '#F10000', offset: 0 },
            { color: '#9A0000', offset: 1 }
          ]
        }
      }
    }
  })
  .style('text', (attrs, data, i) => {
    let anchor = attrs.anchor || [0, 0]
    let size = attrs.size
    let pos = attrs.pos
    return {
      rotate: 0,
      text: '158',
      anchor: [0.5, 1],
      pos: [pos[0] + size[0] / 2, pos[1] - size[1] - 10]
    }
  })

const tooltip = new Tooltip({
  formatter: d => `${d.label}: ${d.value}`
})

const axisBottom = new Axis()
  .style('scale', false)
  .style('axis', false)
  .style('label', { padding: [20, 5] })

chart.add([bar, tooltip, axisBottom])
chart.render()
```

:::
