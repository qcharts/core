### 主题

Qcharts 几乎所有的样式都在一个独立的配置文件中，通过修改这个配置文件，可以让 Qcharts 进行全局换肤，修改方式如下：

```js
const { theme } = qcharts
theme.set({
  colors: ['#71dac7', '#d57a77'],
  visuals: {
    Line: {
      //折线图
      styles: {
        point: { pointType: 'star' }
      },
      sttrs: {}
    },
    Area: {
      //面积图
      styles: {},
      sttrs: {}
    },
    Bar: {
      //柱状图
      styles: {},
      sttrs: {}
    }
    //...
  },
  plugins: {
    // 富矿提示
    Tooltip: {
      styles: {},
      attrs: {}
    },
    // 坐标轴
    Axis: {
      styles: {},
      attrs: {}
    }
    //...
  }
})
```

也可以单独设置某个组件的样式,单独通过 style 设置的优先级高于统一 theme 设置

```js
const line = new Line()
line.style('point', { pointType: 'star', angles: 5, innerRadius: 5, outerRadius: 10, strokeColor: '#fff' })
line.style('point:hover', { strokeColor: '#f0f' })
```
