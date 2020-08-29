### 图表介绍

PolarBar Chart, 极坐标柱状图。

### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名        | 类型    | 默认值  | 描述                               |
| ------------- | ------- | ------- | ---------------------------------- |
| innerRadius   | Number  | `0`     | 内半径比例，0-1 之间               |
| radius        | Number  | `1`     | 外半径比例，0-1 之间               |
| groupPadAngle | Number  | `0`     | 两组扇形之间间距,角度表示          |
| stack         | Boolean | `false` | 是否设置为堆叠图，二维数据无法堆叠 |
| stackGap      | Number  | `0`     | 堆叠图中柱子间距,单位为像素        |
| padAngle      | Number  | `0`     | 扇形之间间距,角度表示              |

### style 属性

组件中可以自定义 css 属性的元素如下表：

| 名称             | 基本类型 | 描述         |
| ---------------- | -------- | ------------ |
| backgroundpillar | 面       | 背景柱子样式 |
| pillar           | 面       | 柱子样式     |

使用方法可在[样式调整 demo](#/demo/polarBar/others)中查看，用法如下：

style 设置方式可以是 Boolean、 obj 属性或者函数，例如：

```javascript
// 新建PolarBar组件
const bar = new PolarBar()

//设置spritejs的attr属性来设置样式
//设置鼠标移入柱子时样式
bar.style('pillar',{fillColor：'#f00', opacity:'0.5'})

//attrs为元素绘制属性，data为元素对应数据，i为元素序列
bar.style('pillar', (attrs, data, i) => {
    //将偶数序列的柱子设置圆角
    if (i % 2 === 0) {
      return {
        borderRadius: 10
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  })
```
