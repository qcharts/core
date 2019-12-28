## 基础坐标轴

:::demo 基础坐标

```javascript
const data = [
  { month: 'Jan', city: 'London', value: 3.9 },
  { month: 'Feb', city: 'London', value: 4.2 },
  { month: 'Mar', city: 'London', value: 5.7 },
  { month: 'Apr', city: 'London', value: 8.5 },
  { month: 'May', city: 'London', value: 11.9 },
  { month: 'Jun', city: 'London', value: 15.2 }
]

const { Chart, Axis, Line } = qcharts

const chart = new Chart({
  container: '#app',
  size: ['100%', '100%']
}).source(data, {
  row: 'city',
  value: 'value',
  text: 'month'
})

const line = new Line().style('point', { color: '#fff' })

let xAxis = new Axis({
  formatter: str => {
    return str + '-' + 1
  }
})
let yAxis = new Axis({ orient: 'left' })

chart.add([line, xAxis, yAxis])
chart.render()
```

:::

#### 方法：

| 名称   | 说明         | 类型 | 可选值                          | 默认值   |
| ------ | ------------ | ---- | ------------------------------- | -------- |
| orient | 坐标轴的方向 |      | ['top','right','bottom','left'] | 'bottom' |

#### style 属性：

| 名称  | 说明         | 类型                  |
| ----- | ------------ | --------------------- |
| axis  | 轴体的样式   | 轴体对应 Rect 类      |
| scale | 刻度的样式   | scale 对应 Rect 类    |
| label | 轴上文本样式 | label 对应的 label 类 |
