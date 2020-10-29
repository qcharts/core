## Donut Chart 环图

:::demo

```javascript
const data = [
  {
    year: '2001',
    population: 4
  },
  {
    year: '2002',
    population: 38
  },
  {
    year: '2003',
    population: 33.7
  },
  {
    year: '2004',
    population: 30.7
  },
  {
    year: '2005',
    population: 25.8
  },
  {
    year: '2006',
    population: 31.7
  },
  {
    year: '2007',
    population: 33
  },
  {
    year: '2008',
    population: 46
  },
  {
    year: '2009',
    population: 38.3
  },
  {
    year: '2010',
    population: 2800
  }
]

const { Chart, Pie, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  value: 'population',
  //布局数据方式
  layoutScale: 'sqrt'
})

const pie = new Pie({
  innerRadius: 0.4,
  radius: 0.7,
  clientRect: { top: '10%', left: '10%', right: '10%', bottom: '10%' }
})
pie.style('sector', { lineWidth: 1, strokeColor: '#fff' })
pie.style('guideline', true)
pie.style('guideText', { fontSize: '12px' })

const legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })

chart.append([pie, legend])
```

:::
