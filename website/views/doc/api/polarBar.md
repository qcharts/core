### 图表介绍

PolarBar Chart, 极坐标柱状图。

### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名        | 类型    | 默认值  | 描述                                                                                |
| ------------- | ------- | ------- | ----------------------------------------------------------------------------------- |
| innerRadius   | Number  | `0`     | 内半径比例                                                                          |
| mouseDisabled | Boolean | `false` | 组件鼠标是否禁用                                                                    |
| radius        | Number  | `1`     | 外半径比例                                                                          |
| groupPadAngle | Number  | `0`     | 两组扇形之间间距,弧度表示，例如 Math.PI\*0.5                                        |
| splitNumber   | Number  | `0`     | 坐标轴的分割段数，用来计算柱子的最大高度，在设置坐标轴的 splitNumber 属性时同步加上 |
| stack         | Boolean | `false` | 是否设置为堆叠图，二维数据无法堆叠                                                  |
| stackGap      | Number  | `0`     | 堆叠图中柱子间距,单位为像素                                                         |
| padAngle      | Number  | `0`     | 扇形之间间距,弧度表示，例如 Math.PI\*0.5                                            |

### style 属性

组件中可以自定义 css 属性的元素如下表：

| 名称                   | 基本类型 | 描述                      |
| ---------------------- | -------- | ------------------------- |
| backgroundpillar       | 面       | 背景柱子样式              |
| backgroundpillar:hover | 面       | 鼠标 hover 时背景柱子样式 |
| pillar                 | 面       | 柱子样式                  |
| pillar:hover           | 面       | 鼠标 hover 时柱子样式     |

使用方法可在[样式调整 demo](#/demo/polarBar/others)中查看，用法如下：

style 设置方式可以是 Boolean、 obj 属性或者函数，例如：

```javascript
// 新建PolarBar组件
const bar = new PolarBar()

//设置spritejs的attr属性来设置样式
//设置鼠标移入柱子时样式
bar.style('pillarHover',{fillColor：'#f00', opacity:'0.5'})

//attrs为元素绘制属性，data为元素对应数据，i为元素序列
bar.style('pillarHover', (attrs, data, i) => {
    //将偶数序列的柱子设置圆角
    if (i % 2 === 0) {
      return {
        borderRadius: 10
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  })
```
