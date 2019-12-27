## 基础散点图

:::demo

```javascript
const data = [
  {
    gender: 'female',
    height: 161.2,
    weight: 51.6
  },
  {
    gender: 'female',
    height: 167.5,
    weight: 59
  },
  {
    gender: 'female',
    height: 159.5,
    weight: 49.2
  },
  {
    gender: 'female',
    height: 157,
    weight: 63
  },
  {
    gender: 'female',
    height: 155.8,
    weight: 53.6
  },
  {
    gender: 'female',
    height: 170,
    weight: 59
  },
  {
    gender: 'female',
    height: 159.1,
    weight: 47.6
  },
  {
    gender: 'female',
    height: 166,
    weight: 69.8
  },
  {
    gender: 'female',
    height: 176.2,
    weight: 66.8
  },
  {
    gender: 'female',
    height: 160.2,
    weight: 75.2
  },
  {
    gender: 'female',
    height: 172.5,
    weight: 55.2
  },
  {
    gender: 'female',
    height: 170.9,
    weight: 54.2
  },
  {
    gender: 'female',
    height: 172.9,
    weight: 62.5
  },
  {
    gender: 'female',
    height: 153.4,
    weight: 42
  },
  {
    gender: 'female',
    height: 160,
    weight: 50
  },
  {
    gender: 'female',
    height: 147.2,
    weight: 49.8
  },
  {
    gender: 'female',
    height: 168.2,
    weight: 49.2
  },
  {
    gender: 'female',
    height: 175,
    weight: 73.2
  },
  {
    gender: 'female',
    height: 157,
    weight: 47.8
  },
  {
    gender: 'female',
    height: 167.6,
    weight: 68.8
  },
  {
    gender: 'female',
    height: 159.5,
    weight: 50.6
  },
  {
    gender: 'female',
    height: 175,
    weight: 82.5
  },
  {
    gender: 'female',
    height: 166.8,
    weight: 57.2
  },
  {
    gender: 'male',
    height: 181.6,
    weight: 75.5
  },
  {
    gender: 'male',
    height: 176.5,
    weight: 73
  },
  {
    gender: 'male',
    height: 175,
    weight: 70.2
  },
  {
    gender: 'male',
    height: 174,
    weight: 73.4
  },
  {
    gender: 'male',
    height: 151.6,
    weight: 65.5
  },
  {
    gender: 'male',
    height: 167,
    weight: 53
  },
  {
    gender: 'male',
    height: 155,
    weight: 50
  },
  {
    gender: 'male',
    height: 166,
    weight: 77
  },
  {
    gender: 'male',
    height: 180.3,
    weight: 73.6
  },
  {
    gender: 'male',
    height: 167.6,
    weight: 74.1
  },
  {
    gender: 'male',
    height: 188,
    weight: 85.9
  },
  {
    gender: 'male',
    height: 180.3,
    weight: 73.2
  },
  {
    gender: 'male',
    height: 167.6,
    weight: 76.3
  },
  {
    gender: 'male',
    height: 183,
    weight: 65.9
  },
  {
    gender: 'male',
    height: 183,
    weight: 90.9
  },
  {
    gender: 'male',
    height: 179.1,
    weight: 89.1
  },
  {
    gender: 'male',
    height: 170.2,
    weight: 62.3
  },
  {
    gender: 'male',
    height: 177.8,
    weight: 82.7
  },
  {
    gender: 'male',
    height: 179.1,
    weight: 79.1
  },
  {
    gender: 'male',
    height: 190.5,
    weight: 98.2
  },
  {
    gender: 'male',
    height: 177.8,
    weight: 84.1
  },
  {
    gender: 'male',
    height: 180.3,
    weight: 83.2
  },
  {
    gender: 'male',
    height: 180.3,
    weight: 83.2
  }
]

const render = data => {
  const { Chart, Axis, Scatter, Legend, Tooltip } = qcharts

  const chart = new Chart({
    container: '#app'
  })
  chart.source(data, {
    row: 'gender',
    text: 'height',
    value: 'weight'
  })
  const scatter = new Scatter({
    showGuideLine: true
  })

  const axisBottom = new Axis()

  const axisLeft = new Axis({ orient: 'left' })

  const legend = new Legend({ align: ['center', 'bottom'] })

  chart.add(
    new Tooltip({
      title: data => data[0].gender,
      formatter: data => {
        return `身高：${data.height}CM  体重：${data.weight}KG `
      }
    })
  )

  chart.add([scatter, legend, axisBottom, axisLeft])

  chart.render()
}

render(data)
```

:::
