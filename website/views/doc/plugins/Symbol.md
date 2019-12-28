### Symbol 介绍

Symbol(符号)，qcharts 中的**点**属性配置，如折线图和雷达图中的点属性。

配置方式为 ：

```js
// visual为图表实例
visual.style('point', { pointType: '', size: 3 })
```

qcharts 中 point 使用面绘制，因此，point 可配置属性除 [api 简介](#/doc/apiinfo) 中基本的面属性外，还有自己独有的可配置属性：`pointType`与`size`。

#### pointType

`pointType` 为`String`类型，用于设置点的样式，可选项有以下 5 种：

| 可选项              | 描述                  |
| ------------------- | --------------------- |
| url 地址或者 base64 | 使用图片作为point     |
| 矢量路径            | 使用矢量路径作为point |
| circle              | 圆形(默认值)          |
| triangle            | 三角形                |
| rect                | 矩形                  |
| star                | 五角星                |

#### size

`size` 为 `Number` 或者 `Array` 类型，用于设置点的大小，默认值[3,3],有以下两点需要注意：

- 当 pointType 为 image 时，图片会根据 size 进行拉伸处理。
- 当 pointType 为 path 时，**矢量图形设置 size 属性可能会发生裁剪**，可以通过`scale`属性来进行保真缩放。

### 示例

:::demo point

```javascript
const data = [
  { label: 'image', category: '类别一', value: 39 },
  { label: 'base64', category: '类别一', value: 72 },
  { label: 'path', category: '类别一', value: 40 },
  { label: 'circle', category: '类别一', value: 46 },
  { label: 'triangle', category: '类别一', value: 40 },
  { label: 'star', category: '类别一', value: 52 },
  { label: 'rect', category: '类别一', value: 62 }
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
  image: {
    pointType: 'https://s0.ssl.qhres.com/static/3f2adfd6acc2e390.svg',
    size: [15, 20]
  },
  base64: {
    pointType:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB+CAMAAADyU9RSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkREMTE2MjNERjQ3NjExRTlCMjMxQjdBN0QyMUMwQUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkREMTE2MjNFRjQ3NjExRTlCMjMxQjdBN0QyMUMwQUFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REQxMTYyM0JGNDc2MTFFOUIyMzFCN0E3RDIxQzBBQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REQxMTYyM0NGNDc2MTFFOUIyMzFCN0E3RDIxQzBBQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CbbmAAAAAPFBMVEX+ZUj8ZUj9Zkn9Zkj9ZEj9ZUn8ZEj+ZUn7ZEj+Zkj8ZUf9ZEf+ZUf9ZUf9Zkf8ZUn+ZEj8ZEf9ZUgAAADk7rfyAAAAFHRSTlP/////////////////////////AE9P5xEAAAHJSURBVHja7NrZcsMgDAVQgY2XLE17+f9/7UOnD5l4XJDEzZRBH5AzUgyIRTI1ZHBHEbkcuJx0zWFwbtzE5YArkwtYmJxg5xYTTC5yOfTOBS4nXA487srlwOXWN2T3oHEJuk/Tkh0G58GFHy6ROECZno6LXA49c4DWU3HLr5Yo3MzNDu/iZgK3Qp2emJLrnZubcwJ9emJLrj03P3NLY+4OQ3pirCUQm3J4iY64V62qu3XgalY9sQzx+nKKg1bhVXEbYPTEITeUnwuIC1a8OBRynygLB25CTQi0HATaCFMpd09RLvAJuUQccLPX75/a8Tk7LGsb6H5SzPTlmFDhpxKimQp1X+Z19rb+GneTciRs6mH+qLYm46yyu2GFc+buhBVP0bsLVrEATebVoG69Wx20mtU8GAtZ2zycjPtbi9bow9I3KBq/G7XxO26iG3If1C76uJzcDVfLHdDB6ONulslcasst3JOHrNr6/JtDqqwdBQ5c5HKE88zE5bL6r7NykcGlrq8tsm5KyeP+7mzaJHHku9f8Fi53ygmXi9wHJJmbHfklVefcyuUCvZjMJ4W5/kWAkcuD8+ImLhek52JuG5VTLsuDG1xZfAswAIsT9uuvHsgMAAAAAElFTkSuQmCC',
    size: 20
  },
  path: {
    pointType:
      'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
    scale: 0.4
  },
  circle: {
    pointType: 'circle',
    size: 5
  },
  triangle: {
    pointType: 'triangle',
    size: 5
  },
  star: {
    pointType: 'star',
    size: 5
  },
  rect: {
    pointType: 'rect',
    size: [5, 5]
  }
}

radar.style('point', (d, data, i) => {
  return pointObj[data.label]
})

const legend = new Legend({ align: ['center', 'bottom'] })
chart.add([radar, legend])
chart.render()
```

:::
