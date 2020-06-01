## 散点图数据更新

:::demo

```javascript
const data = [
  {
    gender: 'female',
    height: 167.6,
    weight: 68.8,
  },
  {
    gender: 'female',
    height: 159.5,
    weight: 50.6,
  },
  {
    gender: 'female',
    height: 175,
    weight: 82.5,
  },
  {
    gender: 'female',
    height: 166.8,
    weight: 57.2,
  },
  {
    gender: 'male',
    height: 181.6,
    weight: 75.5,
  },
  {
    gender: 'male',
    height: 176.5,
    weight: 73,
  },
  {
    gender: 'male',
    height: 175,
    weight: 70.2,
  },
  {
    gender: 'male',
    height: 174,
    weight: 73.4,
  },
]

const data2 = [
  {
    gender: 'female',
    height: 155.8,
    weight: 53.6,
  },
  {
    gender: 'female',
    height: 170,
    weight: 59,
  },
  {
    gender: 'female',
    height: 159.1,
    weight: 47.6,
  },

  {
    gender: 'male',
    height: 177.8,
    weight: 64.1,
  },
  {
    gender: 'male',
    height: 180.3,
    weight: 83.2,
  },
  {
    gender: 'male',
    height: 160.3,
    weight: 83.2,
  },
]

const { Chart, Axis, Scatter, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app',
})
chart.source(data, {
  row: 'gender',
  text: 'height',
  value: 'weight',
})

const scatter = new Scatter({
  showGuideLine: true,
})

const axisBottom = new Axis()

const axisLeft = new Axis({ orient: 'left' })

const legend = new Legend({ align: ['center', 'bottom'] })

chart.append([axisBottom, axisLeft, legend, scatter])

let count = 1
const inter = setInterval(() => {
  if (count%2 ===0) {
    chart.source(data2)
  } else {
    chart.source(data)
  }
  count+=1
}, 5000)

```

:::
