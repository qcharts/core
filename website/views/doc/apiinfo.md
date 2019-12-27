### API 简述

1.所有的图表都是由 `点`、`线`、`面`、`文字` 构成，其中，Qcharts 中的`点`都是由`面`来绘制。即 Qcharts 中只有三种类型图形 <b>`线`、`面`、`文字`</b>。

2.Qcharts 中所有的 Visual 和 Plugin，都包含属性`attr`和样式`style`：

```javascript
let line = new Line({ smooth: true })
```

如上代码：在初始化折线图的时候，`{smooth:true}` 就是属性 `attr`。

```javascript
//point是一个比较特殊的样式，它除了面的基本属性外，它还有pointType和size属性，point是由Symbol插件来完成渲染的,详情查看 Plugin → Symbol
line.style('point', { pointType: 'star', size: 8 })
```

如上代码：上面的代码将折线图的 point 类型设置为`star`，并将大小设置成 8。

对于有哪些属性`attr`设置，请具体参考具体的 api 文档说明，对于样式`style`的设置，`线`、`面`、`文字` 有一些通用属性，如下：

##### 线

| 名称        | 描述                                     | 值                                                                  |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------- |
| strokeColor | 线颜色                                   | #f00 , rgba(0,0,0,0.5) , transparent                                |
| lineDash    | 虚线设置(默认不设置，不设置为实线)       | [6,6,6] 实线部分和白线部分的大小依次是 6,6,6                        |
| lineCap     | 线条末端绘制样式                         | 'round' ['butt','round','square'] // 平直边缘、圆形线冒、正方形线冒 |
| lineJoin    | 两线条交汇处样式                         | 'miter' ['bevel','round','miter'] //斜角、圆角、尖角                |
| strokeColor | 颜色值（支持 spritejs 中所有的颜色类型） | #f00 , rgba(0,0,0,0.5) , transparent                                |
| lineWidth   | 线宽(像素 px)                            | 1 , 2 , 10                                                          |
| opacity     | 透明度(0~1)                              | 1                                                                   |
| translate   | 位置变换(像素数组)                       | [-10，-10]                                                          |
| display     | 展现类型'none'为不渲染                   | '','none'                                                           |

##### 面

| 名称        | 描述                   | 值                                   |
| ----------- | ---------------------- | ------------------------------------ |
| strokeColor | 边框颜色值             | #f00 , rgba(0,0,0,0.5) , transparent |
| fillColor   | 填充颜色值             | #f00 , rgba(0,0,0,0.5) , transparent |
| lineWidth   | 线宽(像素)             | 1 , 2 , 10                           |
| anchor      | 坐标中心               | [0,0]                                |
| opacity     | 透明度(0~1)            | 1                                    |
| translate   | 位置变换(像素数组)     | [-10，-10]                           |
| display     | 展现类型'none'为不渲染 | '','none'                            |

##### 文本

| 名称       | 描述                                        | 值                                   |
| ---------- | ------------------------------------------- | ------------------------------------ |
| bgColor    | 文本背景色                                  | #f00 , rgba(0,0,0,0.5) , transparent |
| color      | 文本颜色                                    | #f00 , rgba(0,0,0,0.5) , transparent |
| fontSize   | 文本大小(px)                                | 12                                   |
| fontFamily | 字体                                        | 'Arial'                              |
| fontWeight | 文本加粗                                    | 'bold',800,300                       |
| anchor     | 坐标中心                                    | [0,0]                                |
| padding    | 文字到包围盒边距(px),同 css[上，右，下，左] | [2,4,5,6]                            |
| opacity    | 透明度(0~1)                                 | 1                                    |
| translate  | 位置变换(像素数组)                          | [-10，-10]                           |
| display    | 展现类型'none'为不渲染                      | '','none'                            |
