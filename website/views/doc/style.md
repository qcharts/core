### 原则

1. 图表上任意元素均可自定义样式、自定义显隐，自带默认样式
2. 布局相关属性从 Visual、Plugin 构造函数参数获取，样式相关属性从 style 中获取

### Visual 样式定义

以柱状图为例，柱状图包含三种元素：一是背景柱子 backgroundPillar，二是 value 展示柱子 pillar，三是文字 text，如下图：

![image](http://p2.qhimg.com/d/inn/a18963337cab/barExample2.jpg)

下表给出了柱状图元素绘制思路
| 元素 | 必须绘制 | 默认绘制 | 有默认值 | 有默认 hover | 可自定义 |
| ---------------- | ---- | -------- | ------ | ---------- | ------------ |
| backgroundPillar | x | √ | √ | √ | √ |
| pillar | √ | √ | √ | x | √ |
| text | x | x | √ | x | √ |

针对柱状图样式定义如下四点规则，其他 visual 类似

- 所有元素必须定义默认样式

```
//部分颜色样式可从默认主题挑选
bar.fillColor = this.themeColor(i)
```

- 部分元素默认展示，其他元素设置 style 为 ture 后展示，设置 false 则隐藏元素

```
bar.style('backgroundBar', false) //将默认展示的背景柱子隐藏
   .style('text', true) //显示文本，文本内置默认样式
```

- 自定义属性优先级高于默认属性，定义后覆盖对应默认属性。所有元素均可自定义样式，可传入 obj 属性或者函数

```
//传obj自定义value柱子样式
bar.style('bar', {fillColor：'#f00', opacity:'0.5'})
//传函数自定义value柱子样式
bar.style('bar', (attrs, data, i) => {
    //将偶数序列的柱子设置圆角
    if (i % 2 === 0) {
      return {
        borderRadius: 10
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  })
```

- 所有元素均可自定义 hover 样式，也可传入 obj 属性或者函数

```
//传obj自定义value柱子hover样式
bar.style('bar:hover', {fillColor：'#f00', opacity:'0.5'})
//传函数自定义value柱子hover样式
bar.style('bar:hover', (attrs, data, i) => {
    if (i % 2 === 0) {
      return {
        borderRadius: 10
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  })
```

##### 下面列出各种 Visual 需实现的自定义样式接口（英文单词可能使用不当，后续讨论）

###### 柱状图 Bar

```
pillar
pillar:hover
backgroundpillar
backgroundpillar:hover
text
text:hover
```

###### 饼图 Pie

```
sector
sertor:hover
text
text:hover
guideline
guideline:hover
guidetext
guidetext:hover
```

###### 折线图 Line

```
line
line:hover
guideline
guideline:hover
symbol
symbol:hover
area
area:hover
```

###### 雷达图 Radar

```
axis
axis:hover
border
border:hover
grid
grid:hover
label
label:hover
point
point:hover
section
section:hover
```

### Plugin 样式定义

Plugin 样式定义类似 Visual，以 Tooltip 为例进行说明，如下图：
![image](http://p0.qhimg.com/d/inn/c896895a2695/tooltip.jpg)

Tooltip 绘制元素包括背景框 background、标题 title、图标 icon、文本 text。在构造函数中定义布局相关属性，比如 Tooltip 位置、文字间距等；在 style 中定义各元素样式。

```
//在构造函数中定义text文字属性
let tooltip = new Tooltip({
    formatter: data => {
    return `${data.city}-${data.month}-${data.value}}
  })
```

另一种实现方式为 style 接口，将 text 属性返回给 label 元素

```
//在style接口中定义text文字属性
let tooltip = new Tooltip()
    tooltip.style('text',(attrs,i)=>{
        return {text:`${data.city}-${data.month}-${data.value}}
    })
```

##### 下面列出 Plugin 需要实现的样式接口（英文单词可能使用不当，后续讨论）

###### Tooltip(鼠标 hover 无需实现)

```
background
title
text
icon
```

###### Legend

```
icon
icon:hover
text
text:hover
```

###### Axis

```
scale
scale:hover
label
label:hover
line
line:hover
```

###### Grid

```
line
line:hover
```

### 思考

1. 有些元素没有使用 hover 接口场景，是否只需部分元素实现 hover？有了 hover 是否应该有 click 对应的样式呢？

2. 布局属性和样式属性可能有重合的地方，两处均可定义，例如 Tooltip，如何取舍？

3. 无法实现完全自定义，比如雷达图环有圆形和多边形两种，无法通过 style 自定义。目前的做法是在代码里绘制圆和多边形两种方式，在构造函数中给参数控制。
