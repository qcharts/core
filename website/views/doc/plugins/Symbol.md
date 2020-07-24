### Symbol 介绍

Symbol(符号)，qcharts 中的**点**属性配置，如折线图和雷达图中的点属性。

配置方式为 ：

```js
// visual为图表实例
visual.style('point', { 
    pointType: 'ellipse ' , // 默认值为“ellipse ”
})
```

qcharts 中 point 使用面绘制，因此，point 可配置属性除 [api 简介](#/doc/apiinfo) 中基本的面属性外，还有自己独有的可配置属性：`pointType`以及各个类型对应的属性。

#### pointType

`pointType` 为`String`类型，用于设置点的样式，可选项为[SpriteJS]( https://spritejs.org/#/ )中的8种基本元素：

| 可选项   | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| sprite   | 精灵元素，可设置`texture`属性使用图片                        |
| path     | path是最基础的路径元素，它可以通过设置`d`属性来绘制SVG Path  |
| ellipse  | 椭圆形(默认值)，可以通过设置radius，或者radiusX和radiusY属性 |
| rect     | 矩形，可以直接设置`width、height`属性（或`size`属性）        |
| triangle | 三角形，只需要设置`sides`和`angle`属性                       |
| parallel | 平行四边形，只需要设置`sides`和`angle`属性                   |
| regular  | 正多边形，edges 表示边数，radius 表示半径，offsetAngle 表示旋转角度 |
| star     | 多角星，angles 表示角数，innerRadius 表示内半径，outerRadius 表示外半径，offsetAngle 表示旋转角度 |

### 示例

:::demo point

```javascript
const data = [
  { label: 'sprite', category: '类别一', value: 39 },
  { label: 'path', category: '类别一', value: 72 },
  { label: 'ellipse', category: '类别一', value: 40 },
  { label: 'rect', category: '类别一', value: 46 },
  { label: 'triangle', category: '类别一', value: 20 },
  { label: 'parallel', category: '类别一', value: 52 },
  { label: 'regular', category: '类别一', value: 62 },
  { label: 'star', category: '类别一', value: 45 }
]

const { Chart, Radar, Tooltip, Legend } = qcharts

const chart = new Chart({
  container: '#app'
})
chart.source(data, {
  row: 'category',
  value: 'value',
  text: 'label'
})

const radar = new Radar()
const pointObj = {
  sprite: {
    pointType: 'sprite',
    anchor: [0.5, 0.5],
    bgcolor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    texture: 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png',
    textureRect: [0, 0, 19, 26],
    textureRepeat: true
  },
  path: {
    pointType: 'path',
    d:
      'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
    normalize: true,
    fillColor: '#f37',
    lineWidth: 20,
    scale: 0.05
  },
  ellipse: {
    radiusX: 15,
    radiusY: 10,
    fillColor: 'green'
  },
  rect: {
    normalize: true,
    pointType: 'rect',
    size: [15, 15],
    fillColor: 'red'
  },
  triangle: {
    normalize: true,
    pointType: 'triangle',
    sides: [15, 15],
    angle: 60,
    fillColor: '#7cc'
  },
  parallel: {
    normalize: true,
    pointType: 'parallel',
    sides: [10, 10],
    angle: 60,
    rotate: 60,
    fillColor: '#c7c'
  },
  regular: {
    normalize: true,
    pointType: 'regular',
    edges: 7,
    radius: 10,
    fillColor: 'blue'
  },
  star: {
    normalize: true,
    pointType: 'star',
    angles: 5,
    innerRadius: 5,
    outerRadius: 10,
    fillColor: 'red'
  }
}

radar.style('point', (d, data, i) => {
  return pointObj[data.label]
})
.style('section', (d) => ({ opacity: 0.3 }))

const legend = new Legend({ align: ['center', 'bottom'] })
chart.append([radar, legend])

```

:::
