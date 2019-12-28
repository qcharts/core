## Timeline

Timeline 简单 demo

:::demo

```javascript
const data = [
  {
    income: 815,
    life: 34.05,
    country: 'Australia',
    year: 1800
  },
  {
    income: 1314,
    life: 39,
    country: 'Canada',
    year: 1800
  },
  {
    income: 985,
    life: 32,
    country: 'China',
    year: 1800
  },
  {
    income: 864,
    life: 32.2,
    country: 'Cuba',
    year: 1800
  },
  {
    income: 1244,
    life: 36.5731262,
    country: 'Finland',
    year: 1800
  },
  {
    income: 1803,
    life: 33.96717024,
    country: 'France',
    year: 1800
  },
  {
    income: 1639,
    life: 38.37,
    country: 'Germany',
    year: 1800
  },
  {
    income: 926,
    life: 42.84559912,
    country: 'Iceland',
    year: 1800
  },
  {
    income: 834,
    life: 34.05,
    country: 'Australia',
    year: 1810
  },
  {
    income: 1400,
    life: 39.01496774,
    country: 'Canada',
    year: 1810
  },
  {
    income: 985,
    life: 32,
    country: 'China',
    year: 1810
  },
  {
    income: 970,
    life: 33.64,
    country: 'Cuba',
    year: 1810
  },
  {
    income: 1267,
    life: 36.9473378,
    country: 'Finland',
    year: 1810
  },
  {
    income: 1839,
    life: 37.4,
    country: 'France',
    year: 1810
  },
  {
    income: 1759,
    life: 38.37,
    country: 'Germany',
    year: 1810
  },
  {
    income: 928,
    life: 43.13915533,
    country: 'Iceland',
    year: 1810
  },
  {
    income: 853,
    life: 34.05,
    country: 'Australia',
    year: 1820
  },
  {
    income: 1491,
    life: 39.02993548,
    country: 'Canada',
    year: 1820
  },
  {
    income: 985,
    life: 32,
    country: 'China',
    year: 1820
  },
  {
    income: 1090,
    life: 35.04,
    country: 'Cuba',
    year: 1820
  },
  {
    income: 1290,
    life: 37.29122269,
    country: 'Finland',
    year: 1820
  },
  {
    income: 1876,
    life: 39.21,
    country: 'France',
    year: 1820
  },
  {
    income: 1887,
    life: 38.37,
    country: 'Germany',
    year: 1820
  },
  {
    income: 929,
    life: 36.56365268,
    country: 'Iceland',
    year: 1820
  },
  {
    income: 1399,
    life: 34.05,
    country: 'Australia',
    year: 1830
  },
  {
    income: 1651,
    life: 39.04490323,
    country: 'Canada',
    year: 1830
  },
  {
    income: 986,
    life: 32,
    country: 'China',
    year: 1830
  },
  {
    income: 1224,
    life: 35.74,
    country: 'Cuba',
    year: 1830
  },
  {
    income: 1360,
    life: 36.29644969,
    country: 'Finland',
    year: 1830
  },
  {
    income: 1799,
    life: 39.56,
    country: 'France',
    year: 1830
  },
  {
    income: 2024,
    life: 38.37,
    country: 'Germany',
    year: 1830
  },
  {
    income: 1036,
    life: 40.5022162,
    country: 'Iceland',
    year: 1830
  },
  {
    income: 2269,
    life: 34.05,
    country: 'Australia',
    year: 1840
  },
  {
    income: 1922,
    life: 40.19012,
    country: 'Canada',
    year: 1840
  },
  {
    income: 986,
    life: 32,
    country: 'China',
    year: 1840
  },
  {
    income: 1374,
    life: 36.48,
    country: 'Cuba',
    year: 1840
  },
  {
    income: 1434,
    life: 41.46900965,
    country: 'Finland',
    year: 1840
  },
  {
    income: 2184,
    life: 40.37,
    country: 'France',
    year: 1840
  },
  {
    income: 2102,
    life: 38.37,
    country: 'Germany',
    year: 1840
  },
  {
    income: 1155,
    life: 31.97,
    country: 'Iceland',
    year: 1840
  }
]

const { Chart, Pie, Legend, Text, Timeline, Toolbox, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'year',
  col: 'income',
  value: 'life'
})

const ds = chart.dataset

const pie = new Pie({ radius: 0.6 })
pie.source(ds.selectRows(1800))

const tl = new Timeline({
  timeline: [1800, 1810, 1820, 1830, 1840],
  autorun: true,
  playInterval: 2000,
  onChange: time => {
    pie.source(ds.selectRows(time))
  }
})

chart
  .add(pie)
  .add(tl)
  .add(new Text({ text: '各国人均寿命与人均收入关系演变', pos: [200, 10] }))
  .add(
    new Tooltip({ lineHight: 22 }).formatter(
      data =>
        `${data.year}年：${data.country} 收入${data.income} 寿命${data.life}`
    )
  )
  .add(new Toolbox())

chart.render()
```

:::
