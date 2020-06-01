## 基本使用

:::demo

```javascript
const { Chart, Wave } = qcharts
const chart = new Chart({ container: '#app' })
const wave = new Wave({
  animation: {
    duration: 300
  },
  percent: 0.65
})
wave.style('wave', {
  fillColor: '#1890ff',
  strokeColor: '#1477d4',
  bgcolor: '#d3eaff'
})
chart.append(wave)
```

:::
