## 折线图与柱状图组合

:::demo

```javascript
const data = [
  { date: '1月', category: '香蕉', val: 8.2 },
  { date: '2月', category: '香蕉', val: 13.2 },
  { date: '3月', category: '香蕉', val: 5.2 },
  { date: '4月', category: '香蕉', val: 9.2 },
  { date: '5月', category: '香蕉', val: 5.2 },
  { date: '6月', category: '香蕉', val: 15.2 },
  { date: '7月', category: '香蕉', val: 8.2 },
  { date: '8月', category: '香蕉', val: 20.2 },
  { date: '9月', category: '香蕉', val: 9.2 },
  { date: '10月', category: '香蕉', val: 14.2 },
  { date: '11月', category: '香蕉', val: 3.2 },
  { date: '12月', category: '香蕉', val: 8.6 },
  { date: '1月', category: '苹果', val: 15.2 },
  { date: '2月', category: '苹果', val: 19.2 },
  { date: '3月', category: '苹果', val: 11.2 },
  { date: '4月', category: '苹果', val: 15.2 },
  { date: '5月', category: '苹果', val: 10.2 },
  { date: '6月', category: '苹果', val: 25.2 },
  { date: '7月', category: '苹果', val: 15.2 },
  { date: '8月', category: '苹果', val: 18.2 },
  { date: '9月', category: '苹果', val: 12.2 },
  { date: '10月', category: '苹果', val: 16.2 },
  { date: '11月', category: '苹果', val: 8.2 },
  { date: '12月', category: '苹果', val: 15.2 },
  { date: '1月', category: '梨子', val: 12.2 },
  { date: '2月', category: '梨子', val: 3.2 },
  { date: '3月', category: '梨子', val: 15.2 },
  { date: '4月', category: '梨子', val: 6.2 },
  { date: '5月', category: '梨子', val: 18.2 },
  { date: '6月', category: '梨子', val: 12.2 },
  { date: '7月', category: '梨子', val: 25.2 },
  { date: '8月', category: '梨子', val: 13.2 },
  { date: '9月', category: '梨子', val: 24.2 },
  { date: '10月', category: '梨子', val: 6.2 },
  { date: '11月', category: '梨子', val: 12.2 },
  { date: '12月', category: '梨子', val: 6.6 }
]

const { Chart, Area, Bar, Legend, Axis, theme } = qcharts
const { Gradient } = spritejs
theme.set({ colors: ['#30FBAB', '#FBCB0B', '#F63766'] })
const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'category',
  value: 'val',
  text: 'date'
})

const area = new Area({
  stack: false,
  axisGap: true,
  smooth: true
})
  .style('guideline', false)
  .style('line', function(attr, data, i) {
    if (i !== 0) {
      return { lineDash: [6, 6] }
    }
  })
  .style('point', false)
  .style('area', function(attr, data, i) {
    if (i === 0) {
      return {
        fillColor: new Gradient({
          vector: [0, 0, 0, 280],
          colors: [
            { offset: 0, color: 'rgba(48, 251, 171,1)' },
            { offset: 0.5, color: 'rgba(48, 251, 171,0.5)' },
            { offset: 1, color: 'rgba(48, 251, 171,0)' }
          ]
        })
      }
    } else {
      return { fillColor: 'transparent', strokeColor: 'transparent' }
    }
  })

const axisLeft = new Axis({
  orient: 'left'
})
  .style('axis', false)
  .style('scale', false)
  .style('grid', { lineDash: [3, 3], strokeColor: 'rgba(48, 251, 171,0.7)' })
  .style('label', { fillColor: '#30FBAB' })

const axisBottom = new Axis()
  .style('scale', false)
  .style('label', { fillColor: '#30FBAB' })
  .style('grid', false)
  .style('axis', {
    strokeColor: '#30FBAB'
  })

function hideAxis(attrs, data, i) {
  if (i % 2 !== 0) {
    return false
  }
}
const legend = new Legend({ align: ['center', 'bottom'] }).style('icon', { borderRadius: 10 }).style('text', { fontSize: 12 })

chart.append([area, axisBottom, axisLeft, legend])
```

:::
