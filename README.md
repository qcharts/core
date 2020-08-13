# QCharts

### 特点

QCharts 是一个基于 <a target="_blank" href="https://www.spritejs.com">spritejs</a> 封装的图表库，它以数据驱动，将图表以最小组件进行拆分，具有高度全面灵活的属性配置方法，可对图表绘制过程中所有的点、线、面的大小、位置、填充颜色、描边颜色、描边线型、透明度等属性进行配置，配置方法简单易懂，语义清晰，无论如何复杂的图表，qcharts 都能轻松胜任。 <a target="_blank" href="https://www.qcharts.cn">→ 详细文档</a>，Demo：<a target="_blank" href="https://github.com/qcharts/quickstart">Quickstart</a>

### 安装

1.通过 npm 获取 QCharts，我们提供了 QCharts npm 包，通过下面的命令即可完成安装

```shell
npm install @qcharts/core --save
```

```javascript
// 通过模块引入的方式使用CatCharts
import { Chart, Pie, Tooltip, Legend } from '@qcharts/core'
```

2.既可以下载脚本到本地，也可以通过 cdn 获取 QCharts；QCharts 依赖于 spritejs，需要先引入 spritejs。

```html
<script src="https://unpkg.com/spritejs@3/dist/spritejs.min.js"></script>
<script src="https://unpkg.com/@qcharts/core@1/dist/index.js"></script>
```

### 开始使用

1.创建 div 图表容器，qcharts 初始化 container 属性支持 id 选择器与 class 选择器

```html
<div id="app"></div>
```

2.编写绘图代码

```javascript
// 指定图表数据源
chart.source(data, {
  row: 'catgory', // 以catgory字段分组
  value: 'sales', // 以sales字段取值
  text: 'date' //  date为文本字段
})

// 创建折线对象
const line = new Line()
// 设置折线点的描边颜色为白色
line.style('point', { strokeColor: '#fff' })
// 创建提示框对象，格式化展示属性为：date scale
const tooltip = new Tooltip({
  formatter: function(data) {
    return `${data.date} ${data.sales}`
  }
})
// 创建底部坐标轴对象
const axisBottom = new Axis()
// 创建左侧坐标轴对象。隐藏轴体直线和刻度
const axisLeft = new Axis({ orient: 'left' }).style('axis', false).style('scale', false)
// 创建图例对象，设置位置以及图标和文本大小
const legend = new Legend({ align: ['center', 'bottom'] }).style('icon', { borderRadius: 10 }).style('text', { fontSize: 12 })
// 装载组件
chart.add([line, tooltip, axisBottom, axisLeft, legend])
// 渲染图表
```

一张折线图就绘制成功

<img src="https://p0.ssl.qhimg.com/d/inn/717a6a22789a/base-line.png" width="400">

## 在 React/Vue 中使用 qchart

基于 qchart 良好的组合性和扩展性，qchart 天然支持对 React 和 Vue 这两个常用框架的深度整合，在 React 环境下，我们推荐使用[qcharts-react](https://www.qcharts.cn/qcharts-react) ，在 Vue 环境下，我们推荐使用 [qcharts-vue](https://www.qcharts.cn/qcharts-vue)。这两个产品都是基于 qchart 的封装，与 qchart 有着一致的开发体验，可以前往官网获取详细的使用说明和示例。当然，你可以自己动手封装成其他框架下的组件，在 qchart 下，这些封装成本非常低。
