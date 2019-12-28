### 图表介绍

Funnel Chart，漏斗图。

### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名  | 类型    | 默认值        | 描述                                 |
| ------- | ------- | ------------- | ------------------------------------ |
| align   | String  | 'center'      | 组件位置，可选值 left、center、right |
| pyramid | Boolean | false         | 漏斗形状是否为金字塔底               |
| pos     | Array   | ['10%','10%'] | 组件左上角偏移，可设置百分比或者像素 |
| size    | Array   | ['80%','80%'] | 组件大小，可设置百分比或者像素       |

### style 属性

组件中可以自定义属性的元素如下表：

| 名称            | 基本类型 | 描述                      |
| --------------- | -------- | ------------------------- |
| polygon         | 面       | 漏斗区块样式              |
| polygon:hover   | 面       | 鼠标 hover 时漏斗区块样式 |
| guideText       | 文本     | 组件上的文本样式          |
| guideText:hover | 文本     | 组件上的文本样式          |
| guideline       | 线       | 指示线样式                |
| guideline:hover | 线       | 鼠标 hover 时指示线样式   |

使用方法可在[样式调整 demo](#/demo/funnel/others)中查看，用法如下：

在 data 中定义元素样式，可以是 Boolean、 obj 属性或者函数，例如：

```javascript
// 新建funnel组件
const funnel = new Funnel()

//设置true或false来隐藏组件元素
//隐藏漏斗上的文字
funnel.style('text', false)

//参考spritejs的attr属性来设置样式
//设置指示线样式
funnel.style('guideline', { length: 20, color: '#000', lineDash: [2, 2] })

//参数polygon为绘制的polygon属性，dataOrigin为原始数据项，index是绘制索引
funnel.style('polygon', (polygon, dataOrigin, index) => {
  // 根据索引来给每个元素赋色
  if (index % 2 === 0) {
    return { fillColor: '#59CB74' }
  }
  return { fillColor: '#FBD54A' }
})
```
