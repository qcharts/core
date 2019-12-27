:::demo

```javascript
const data = Array.from({ length: 40 }, (_, i) => {
  return { value: 2000 + i }
})
const { Chart, Legend } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  text: 'value'
})

const l2 = new Legend({ orient: 'vertical', align: ['left', 'top'] })
const l3 = new Legend({ orient: 'vertical', align: ['center', 'top'] })
const l4 = new Legend({ orient: 'vertical', align: ['right', 'top'] })

chart.add([l2, l3, l4])

chart.render()
```

:::
