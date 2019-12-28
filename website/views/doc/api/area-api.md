### 图表介绍

Area Chart, 面积图。

### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名      | 类型    | 默认值          | 描述                                                                                  |
| ----------- | ------- | --------------- | ------------------------------------------------------------------------------------- |
| pos         | Array   | `[10%, 10%]`    | 组件左上角偏移，可设置百分比或者像素                                                  |
| size        | Array   | `['80%','80%']` | 组件大小，可设置百分比或者像素                                                        |
| smooth      | Boolean | false           | 曲线是否平滑                                                                          |
| axisGap     | Boolean | false           | 开始绘图区域与坐标轴是否有间隙                                                        |
| splitNumber | Number  | 0               | 坐标轴的分割段数，用来计算面积图的最大高度，在设置坐标轴的 splitNumber 属性时同步加上 |
| strack      | Boolean | true            | 是否堆叠                                                                              |

### style 属性

```javascript
const area = new Area({ smooth: true })
area.style('area', function(attrs, data, i) {
  if (i === 0) {
    return { fillColor: 'transparent' }
  }
})
```

组件中可以自定义 css 属性的元素如下表：

| 名称        | 基础类型 | 描述                              |
| ----------- | -------- | --------------------------------- |
| guideline   | 线       | 指导线样式                        |
| line        | 线       | 线条样式                          |
| line:hover  | 线       | 鼠标 hover 时线条样式             |
| area        | 面       | 面积样式设置 （Polygon）          |
| area:hover  | 面       | 鼠标 hover 时面积样式 （Polygon） |
| point       | 面       | 线条上标记点样式                  |
| point:hover | 面       | hover 时线条上标记点样式          |
