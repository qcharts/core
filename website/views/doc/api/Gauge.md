### 图表介绍

Gauge， 仪表盘。

### attrs

| 属性名        | 类型               | 默认值          | 描述                                                   |
| ------------- | ------------------ | --------------- | ------------------------------------------------------ |
| title         | String \| Function | `d => d`        | 标题                                                   |
| subTitle      | String \| Function | `d => d`        | 副标题                                                 |
| min           | Number             | `0`             | 最小值                                                 |
| max           | Number             | `1`             | 最大值                                                 |
| startAngle    | Number             | `Math.PI * 0.8` | 起始角度                                               |
| endAngle      | Number             | `Math.PI * 2.2` | 结束角度                                               |
| strokeBgcolor | String             | `#eee`          | 背景色                                                 |
| lineWidth     | Number             | `0`             | 弧线宽度                                               |
| lineCap       | String             | `round`         | 弧线线帽                                               |
| tickStep      | Number             | `0.1`           | tick 步进，生成 tick 的数量为 `(max - min) / tickStep` |
| tickLength    | Number             | `5`             | 刻度长度，为负值时向外绘制                             |
| labelOffset   | Number             | `5`             | 刻度上文字与刻度线距离                                 |
| tickFormatter | Function           | `d => d`        | 刻度文本格式化                                         |

### style

组件中可以自定义 css 属性的元素如下表：

| 名称     | 基础类型 | 描述         |
| -------- | -------- | ------------ |
| arc      | 线       | 弧线样式     |
| pointer  | 面       | 仪表盘指针   |
| title    | 文本     | 标题样式     |
| subTitle | 文本     | 副标题样式   |
| tickLine | 文本     | 刻度线样式   |
| tickText | 文本     | 刻度文字样式 |
