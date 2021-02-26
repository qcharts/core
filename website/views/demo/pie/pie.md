## Basic Pie Chart 基本饼图

:::demo

```javascript
const data = [
  {
    year: '2010',
    population: 74
  },
  {
    year: '2011',
    population: 62
  },
  {
    year: '2012',
    population: 54
  },
  {
    year: '2013',
    population: 27
  },
  {
    year: '2014',
    population: 41
  },
  {
    year: '2015',
    population: 91
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
  },
  {
    year: '2021',
    population: 74
  },
  {
    year: '2022',
    population: 62
  },
  {
    year: '2023',
    population: 54
  },
  {
    year: '2024',
    population: 27
  },
  {
    year: '2025',
    population: 41
  },
  {
    year: '2026',
    population: 74
  },
  {
    year: '2027',
    population: 62
  },
  {
    year: '2028',
    population: 54
  },
  {
    year: '2029',
    population: 27
  },
  {
    year: '2030',
    population: 41
  }
]

const { Chart, Pie, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  value: 'population',
  text: 'year'
})

const pie = new Pie({
  radius: 0.7,
  animation: {
    duration: 700,
    easing: 'bounceOut'
    // 缓动类型
    //["linear", "quadIn", "quadOut", "quadInOut", "cubicIn", "cubicOut", "cubicInOut", "quarticIn", "quarticOut", "quarticInOut", "quinticIn", "quinticOut", "quinticInOut", "sinusoidalIn", "sinusoidalOut", "sinusoidalInOut", "exponentialIn", "exponentialOut", "exponentialInOut", "circularIn", "circularOut", "circularInOut", "elasticIn", "elasticOut", "elasticInOut", "backIn", "backOut", "backInOut", "bounceIn", "bounceOut", "bounceInOut",]
  }
})

const legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })
const toolTip = new Tooltip()

chart.append([pie, legend, toolTip])
pie.dataset.on('mouseEvent', function(...params) {
  console.log(params)
})
pie.dataset.on('change', function(...params) {
  console.log(params)
})
```

:::
