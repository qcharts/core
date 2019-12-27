## Basic Pie Chart 基本饼图

:::demo

```javascript
const data = [
  {
    year: '2001',
    population: 41.8
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
    population: 28
  },
  {
    year: '2011',
    population: 42.5
  },
  {
    year: '2012',
    population: 30.3
  },
  {
    year: '2013',
    population: 56
  },
  {
    year: '2014',
    population: 74
  },
  {
    year: '2015',
    population: 80
  },
  {
    year: '2016',
    population: 74
  },
  {
    year: '2017',
    population: 62
  },
  {
    year: '2018',
    population: 54
  },
  {
    year: '2019',
    population: 27
  },
  {
    year: '2020',
    population: 41
  }
]

const { Chart, Pie, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  value: 'population'
})

const pie = new Pie({ radius: 0.7, pos: [0, 0], size: ['80%', '100%'] })
pie.style('sector', { lineWidth: 1, strokeColor: '#fff' })
pie.style('guideline', true)
pie.style('guideText', true)

const legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })
legend.style('icon', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0
}))
legend.style('text', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0
}))

chart.add([pie, legend])
chart.render()
```

:::
