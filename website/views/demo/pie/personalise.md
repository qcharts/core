## 个性化

如果需要对图表某部分进行个性化定义，只需要在该处的回调函数（方法签名为：(attrs, data, i) => any）处 return false 即可，其他自定义。

:::demo

```javascript
const data = [
  {
    sex: '男',
    proportion: 0.58
  },
  {
    sex: '女',
    proportion: 0.42
  }
]

const { Chart, Tooltip } = qcharts

const chart = new Chart({
  container: '#app',
  width: 400,
  height: 360
})

const oDemo = document.querySelector('#app')

const pie = new qcharts.Pie({
  radius: 0.6,
  innerRadius: 0.2
})
  .source(data)
  .setDataFields({ x: 'sex', y: 'proportion' })
  .style('guideText', (attrs, d, i) => {
    const { dataOrigin, pos, startAngle, endAngle } = attrs
    const isFemale = dataOrigin.sex === '女'

    const img = document.createElement('img')
    img.style.position = 'absolute'
    img.style.left = (isFemale ? pos[0] - 32 : pos[0]) + 'px'
    img.style.top = pos[1] - 32 / 2 + 'px'
    img.style.width = 32 + 'px'
    img.style.height = 32 + 'px'

    img.src = isFemale
      ? 'https://user-images.githubusercontent.com/26452939/51729951-b08eeb00-20b0-11e9-87fb-1b4360c79ec4.png'
      : 'https://user-images.githubusercontent.com/26452939/51741061-c44a4980-20d0-11e9-8666-08075f5de98a.png'

    oDemo.appendChild(img)
    return false // 返回 false ，图表便不会进行该部分的渲染
  })
  .style('guideline', true)
  .style('text', { color: '#fff' })
  .on('select', (attrs, d, i) => {
    console.log('click', attrs, d, i)
  })

chart
  .add(pie)
  .add(
    new Tooltip({ lineHight: 22 }).formatter(
      data =>
        `男女员工占比：\n${data.sex} ${(data.proportion * 100).toFixed(0)}%`
    )
  )

chart.render()
```

:::

### 自定义组件渲染时机

在方法签名为：(attrs, data, i) => any）处 return false ，该处视图便不会进行渲染。

:::demo

```javascript
const data = [
  {
    type: '硕士',
    value: 0.4
  },
  {
    type: '本科',
    value: 0.21
  },
  {
    type: '博士',
    value: 0.17
  },
  {
    type: '初中',
    value: 0.009
  },
  {
    type: '未知',
    value: 0.08
  },
  {
    type: '专科',
    value: 0.013
  }
]

const { Chart, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

const pie = new qcharts.Pie({
  radius: 0.7
})
  .source(data)
  .setDataFields({ x: 'type', y: 'value' })
  .style('guideline', (attrs, d, i) => d.value < 0.08)
  .style('guideText', true)
  .style('text', (attrs, d, i) => d.value > 0.08)

chart.add(pie)

chart.render()
```

:::

### 限定角度范围

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 3100, label: '邮件营销' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 1548, label: '搜索引擎' }
]

const { Chart, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

const pie = new qcharts.Pie({
  radius: 0.7,
  startAngle: Math.PI * 1,
  endAngle: Math.PI * 1.5
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })
  .style('guideline', (attrs, d, i) => {
    return {
      color: attrs.fillColor,
      offset: 10,
      length: 5,
      length2: 20
    }
  })
  .style('guideText', (attrs, d, i) => {
    return { font: '12px "楷体"' }
  })

chart.add(pie)

chart.render()
```

:::

### 事件监听

通过监听图表上的事件，可以获得更加丰富的个性化能力。
将鼠标在图表上滑动，查看图表变化。

:::demo

```javascript
const data = [
  {
    type: '教育',
    value: 1853
  },
  {
    type: '居住',
    value: 7140
  },
  {
    type: '食品',
    value: 3875
  },
  {
    type: '交通',
    value: 2267
  },

  {
    type: '医疗',
    value: 1685
  },
  {
    type: '衣着',
    value: 1179
  }
]

const total = data.reduce((a, c) => (a += c.value), 0)

const { InteractionHooks, Chart, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

const pie = new qcharts.Pie({
  radius: 0.6,
  innerRadius: 0.3
})
  .source(data)
  .setDataFields({ x: 'type', y: 'value' })
  .style('text', (attrs, data, i) => {
    i === 0 && createText()
    return {
      color: '#fff',
      text: ((data.value / total) * 100).toFixed(1) + '%'
    }
  })

chart.add(pie)

chart.on(InteractionHooks.showTooltip, e => {
  const { data } = e
  updateText(data)
})

chart.on('resize', () => {
  const oDemo = document.querySelector('#app')
  oDemo.removeChild(oDemo.querySelector('div'))
})

chart.on(InteractionHooks.hideTooltip, e => {
  updateText({ type: '总共', value: total })
})

function createText(attrs) {
  const oDemo = document.querySelector('#app')

  if (!oDemo) {
    return
  }

  const oDiv = document.createElement('div')
  oDiv.style.position = 'absolute'
  oDiv.style.top = '50%'
  oDiv.style.left = '50%'
  oDiv.style.transform = 'translate(-50%, -50%)'

  oDiv.innerHTML = `
    <span>总共</span>
    <span>${total}</span>
  `
  oDemo.appendChild(oDiv)
}

function updateText(data) {
  const oDiv = document.querySelector('#app div')
  oDiv.innerHTML = `
    <span>${data.type}</span>
    <span>${data.value}</span>
  `
}

chart.render()
```

:::

### 自定义样式

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 3100, label: '邮件营销' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 1548, label: '搜索引擎' }
]

const { Chart, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

const pie = new qcharts.Pie({
  radius: 0.6,
  innerRadius: 0.2
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })
  .style('normal', {
    color: '#fff',
    fillColor: '#00a1ff',
    lineWidth: 2
  })

chart.add(pie)

chart.render()
```

:::
