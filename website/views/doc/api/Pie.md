### 图表介绍

Pie， 饼图。

### attrs

| 属性名      | 类型           | 默认值                               | 描述                                   |
| ----------- | -------------- | ------------------------------------ | -------------------------------------- |
| clientRect  | Object         | {top,right,bottom,left,width,height} | 设置了 width,heigh,优先与 bottom,right |
| startAngle  | Number         | `Math.PI * -0.5`                     | 起始角度                               |
| endAngle    | Number         | `Math.PI * 1.5`                      | 结束角度                               |
| radius      | Number         | `0.8`                                | 外半径比例                             |
| innerRadius | Number         | `0`                                  | 内半径比例                             |
| animation   | Boolean,Object | {easing:'',duration}                 | 动画配置                               |

### style

```javascript
const pie = new Pie()
pie.style('text', { color: '#fff' }
```

组件中可以自定义 css 属性的元素如下表：

| 名称      | 基础类型 | 描述           |
| --------- | -------- | -------------- |
| sector    | 面       | 扇形样式       |
| text      | 文本     | 扇形上文字样式 |
| guideline | 线       | 指导线样式     |
| guideText | 文本     | 指导文字样式   |
