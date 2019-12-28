### 插件介绍

Tooltip， 提示框。

### attrs

| 属性名    | 类型               | 默认值   | 描述                                 |
| --------- | ------------------ | -------- | ------------------------------------ |
| title     | String \| Function | `null`   | 标题                                 |
| pos       | Array              | `null`   | 一旦设置了此值，tooltip 的位置将固定 |
| formatter | Function           | `d => d` | 除标题外，其他文本格式化函数         |

### style

```javascript
const tooltip = new Tooltip()
tooltip.style('text', { color: '#fff' }
```

组件中可以自定义 css 属性的元素如下表：

| 名称  | 基础类型 | 描述     |
| ----- | -------- | -------- |
| title | 文本     | 标题样式 |
| icon  | 面       | 文字样式 |
| text  | 文本     | 文字样式 |
