## Basic Pie Chart 基本饼图

:::demo

```javascript
const data = [
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

const pie = new Pie({ radius: 0.9 })
pie.style('sector', { lineWidth: 1, strokeColor: '#fff' })
pie.style('guideline', true)
pie.style('guideText', true)

const legend = new Legend()

chart.append([pie, legend])
```

:::
