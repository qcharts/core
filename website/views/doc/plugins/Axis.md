### 插件介绍

Axis， 坐标轴。

#### attr 属性：

| 名称        | 说明         | 类型     | 可选值                                                  | 默认值   |
| ----------- | ------------ | -------- | ------------------------------------------------------- | -------- |
| orient      | 坐标轴的方向 |          | ['top','right','bottom','left']                         | 'bottom' |
| name        | 坐标轴名称   |          |                                                         |          |
| splitNumber | Number       | 0        | 坐标轴的分割段数，同时须设置 visual 的 splitNumber 属性 |
| formatter   | Function     | `d => d` | 文本格式化函数                                          |

#### style 样式：

```javascript
const axis = new Axis({ orient: 'left' })
axis.style('scale', false)
```

| 名称  | 基本类型 | 说明             |
| ----- | -------- | ---------------- |
| axis  | 线       | 坐标轴样式       |
| name  | 文本     | 坐标轴名字       |
| scale | 线       | 坐标轴上的刻度   |
| label | 文本     | 坐标轴上文本类型 |
