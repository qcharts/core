# Chart

创建 Chart 的方式如下：

```javascript
new qcharts.Chart()
```

创建并返回一个 chart 实例。

<!-- `new qcharts.Chart()` 的流程如图。 -->

<!-- <p align="center"><img src="http://dpxr-graph-bed.oss-cn-beijing.aliyuncs.com/chart-flow.png" alt="chart-flow"></p> -->

## 图表结构

<p align="center"><img src="http://p6.qhimg.com/t0137055a27f367470b.png" alt="chart-structure" height="400"></p>

## 绘制图表

绘制图表与添加插件的方法均为：`chart.add(/* visual 实例 或者 plugin 实例 */)`。

```javascript
const chart = new qcharts.Chart()
const pie = new qcharts.Pie()
const tooltip = new qcharts.Tooltip()

chart.add(pie).add(tootip)
chart.render()
```

在 `qcharts` 中将传统的图表类型（如：`pie` 和 `line`）区分为 `visual`，意为一种可视类型。可以在一个 `chart` 传入多个 `visual` 实例。

## 数据更新

在 `qcharts` 如果数据存在更新，可以直接更新数据，如下：

```javascript
chart.source(newData, {
  row: 'year',
  value: 'sales',
  text: 'product'
})
```

如果更新的数据中，对应的字段名称都没有改变，直接

```javascript
chart.source(newData)
```
