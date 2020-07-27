## 基本使用

:::demo

```javascript
const { Chart, Wave } = qcharts
const chart = new Chart({ container: '#app' })
const wave = new Wave({
  animation: {
    duration: 500
  },
  radius: 200,
  percent: 0.65,
  // 格式化文本
  formatter: per => {
    return '总占比：' + per * 100 + '%'
  }
})
// 波浪颜色
wave.style('wave', {
  fillColor: '#1890ff',
  strokeColor: '#1477d4'
})
// 背景图形颜色
wave.style('shape', {
  fillColor: '#d3eaff'
})
// 文字颜色
wave.style('text', {
  fillColor: '#fff'
})
chart.append(wave)
```

:::
