## 图表结构

图表由 chart、visual、plugin 组成

<p align="center"><img src="http://p6.qhimg.com/t0137055a27f367470b.png" alt="chart-structure" height="400"></p>

## 绘制图表

绘制图表与添加插件的方法均为：`chart.append(/* visual 实例 或者 plugin 实例 */)`。

```javascript
const data = [
  { date: '05-01', catgory: '图例一', sales: 15.2 },
  { date: '05-02', catgory: '图例一', sales: 39.2 },
  { date: '05-03', catgory: '图例一', sales: 31.2 },
  { date: '05-04', catgory: '图例一', sales: 65.2 },
  { date: '05-05', catgory: '图例一', sales: 55.2 }
]

const { Chart, Line, Legend, Tooltip, Axis } = qcharts
const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'catgory',
  value: 'sales',
  text: 'date'
})
const line = new Line()
const axisBottom = new Axis().style('grid', false)
const toolTip = new Tooltip()
const legend = new Legend()
const axisLeft = new Axis({ orient: 'left' })

chart.append([line, axisBottom, axisLeft, toolTip, legend])
```

在 `qcharts` 中将传统的图表类型（如：`pie` 和 `line`）区分为 `visual`，意为一种可视类型。可以在一个 `chart` 传入多个 `visual` 实例。

## 数据更新

在 `qcharts` 如果数据存在更新，可以直接更新数据，如下：

```javascript
chart.source(newData, {
  row: 'catgory',
  value: 'value',
  text: 'text'
})
```

如果更新的数据中，对应的字段名称都没有改变，直接

```javascript
chart.source(newData)
```
