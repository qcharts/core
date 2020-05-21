## 基本使用

:::demo

```javascript
const data = [
  {
    sex: 'male',
    value: 63
  }
]

const data2 = [
  {
    sex: 'male',
    value: 87
  }
]

const { Chart, Wave } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  row: 'sex',
  value: 'value',
  text: 'sex'
})

const colors = ['#49d088', '#FE5555', '#F4B30E', '#473C8B']

const wave = new Wave({
  animation: {
    duration: 300
  },
  formatter: d => `${d.value}%`
})
chart.append(wave)
```

:::
