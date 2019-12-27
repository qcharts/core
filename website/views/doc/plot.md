# Plot

绘制图表前，需要指定图表的绘制区域，该项工作由 `qcharts.Plot` 完成。创建绘制区域的方式如下：

```javascript
new qcharts.Plot('#app', {
  viewport: [400, 360]
})
```

其中主要的参数：挂载点（DOM 节点）、视图大小（viewport）。

## 绑定图表实例

创建绘制区域后，可将图表实例绑定到该绘制区域，然后进行渲染。

```javascript
const plot = new qcharts.Plot('#app', {
  viewport: [400, 360]
})

plot.addChart(/* chart 实例 */)
```

## 划分子区域

如果需要在绘制区域上绘制多个图表实例，这时候就需要划分子区域。划分子区域的方式：

```javascript
const plot = new qcharts.Plot('#app', {
  viewport: [400, 360]
})

plot.subPlot(0, 0, 200, 360)
plot.subPlot(200, 0, 200, 360)
```

`subPlot` 接收的参数为：`(x, y, width, height)`，其中 `x` 和 `y` 指定子区域的位置，`width` 和 `height` 指定子区域宽高。

需要注意的是，如果想要把某个图表实例指定到子区域进行绘制，使用方式应当为：

```javascript
plot.subPlot(0, 0, 200, 360).addChart(chart)
```

## 渲染图表

如果已经进行了相关图表的绑定，只需使用 `plot.render()` 即可渲染绑定的所有图表实例。

## `Plot` 和 `subPlot` 做了什么？

当实例化一个 `Plot` 时，实际上是渲染了一个 `canvas`，该 `canvas` 便是之后所有图形渲染的载体。而 `subPlot` 则是进一步实例化了一个 [`Group` (`spritejs.Group`)]() 实例来做图表的容器。
