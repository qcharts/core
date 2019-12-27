### 图表介绍

Progress Chart, 进度图。

### 属性 attr

| 名称          | 说明                     | 默认值           |
| ------------- | ------------------------ | ---------------- |
| min           | 最小值                   | `0`              |
| max           | 最大值                   | `1`              |
| type          | 可视类型                 | `pie`            |
| hoverBg       | 鼠标经过时背景色         | `#f8f8f8`        |
| label         | 是否显示文字             | `true`           |
| labelPosition | 文字位置                 | `bottom`         |
| lineWidth     | 可视组件边框大小         | `0`              |
| padding       | 可视组件边框与父容器边距 | `5`              |
| offset        | 可视组件边框内外半径差   | `10`             |
| formatter     | 文本格式化               | `(fn: Function)` | `d => d` |

当 `type` 为 `pie` 时，额外支持：

| 名称          | 说明         | 默认值        |
| ------------- | ------------ | ------------- |
| startAngle    | 起始角度     | `Math.PI * 0` |
| endAngle      | 结束角度     | `Math.PI * 2` |
| strokeBgcolor | 背景圆环颜色 | `#ccc`        |

### 样式
