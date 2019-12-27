## 雷达图

### attrs

attrs 包含若干属性，可以初始化图表的时候对图表进行配置

| 属性        | 说明                                    | 类型          | 默认值          |
| ----------- | --------------------------------------- | ------------- | --------------- |
| pos         | 组件左上角偏移，可设置百分比或者像素    | Array         | [0,0]           |
| size        | 组件大小，可设置百分比或者像素          | Array         | ['100%','100%'] |
| padding     | 图表的 padding                          | Number，Array | [0,0,0,0]       |
| gridType    | 网格的类型，可选值为'polygon'和'circle' | String        | polygon         |
| splitNumber | 背景网格的层数                          | Number        | 4               |
| startAngle  | 坐标轴的起始角度                        | Number        | 270             |
| radius      | 雷达图的轴长,范围[0,1]                  | Number        | 0.6             |
| labelOffset | 雷达图轴标记偏移量                      | Number        | 6               |

### 可配置 Style 名称

```js
const radar = new Radar()
radar.style('point', { size: 5 })
// 或者函数模式
// radar.style('point',(attr,data,i)=>{return {size:5}})
```

style 方式支持链式调用，第一个参数为 style 名称，第二个参数为设置的样式 Object，也可以为函数形式，对样式进行详细设置

| 名称          | 基础类型 |                               |
| ------------- | -------- | ----------------------------- |
| guideline     | 线       | 指导线样式                    |
| axis          | 线       | 坐标轴的样式                  |
| axis:hover    | 线       | 坐标轴 hover 样式             |
| grid          | 线       | 雷达图背景网格样式            |
| grid:hover    | 线       | 雷达图背景网格 hover 样式     |
| label         | 文本     | 类别指示文字的样式(x 轴)      |
| label:hover   | 文本     | 类别指示文字的 hover 样式     |
| scale         | 文本     | 数值指示文字,(y 轴)           |
| scale:hover   | 文本     | 数值指示文字 hover 样式(y 轴) |
| section       | 面       | 雷达图数据区样式              |
| section:hover | 面       | 雷达图数据区 hover 样式       |
