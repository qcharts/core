## 自定义

如果提供的 `Legend` 无法满足个性化需求。可以通过监听 `chart` 上的 `InteractionHooks` 来完成自定义。

```javascript
const { Chart, InteractionHooks } = qcharts

chart.on(InteractionHooks.renderLegend, createLegend)
chart.emit(InteractionHooks.toggleLegend, data)
```

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 3100, label: '邮件营销' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 1548, label: '搜索引擎' }
]

const { Chart, InteractionHooks } = qcharts

const chart = new Chart({ container: '#app' })

const pie = new qcharts.Pie({
  radius: 0.6,
  innerRadius: 0.2
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })

const oApp = document.querySelector('#app')
const total = data.reduce((a, c) => (a += c.value), 0)
const legends = []

const createLegend = data => {
  if (legends[data.index]) {
    // 已经创建
    return
  }

  const oDiv = document.createElement('div')

  oDiv.style = `
    position: relative;
    z-index: 1000;
  `

  const setInnerHTML = data => {
    const color1 = data.disabled ? '#ccc' : '#333'
    const color2 = data.disabled ? '#ccc' : data.color

    oDiv.innerHTML = `
      <span style="color: ${color2};">
        ${data.index}
      </span>
      <span style="margin-left: 10px; color: ${color1};">${data.label}</span>
      <span style="margin-left: 10px; color: ${color2};">
        ${((data.value / total) * 100).toFixed(2)}%
      </span>
      <span style="margin-left: 10px; color: ${color1};">${data.value}</span>
    `
  }

  setInnerHTML(data)

  oDiv.addEventListener('click', () => {
    data.disabled = !data.disabled
    setInnerHTML(data)
    // 发射交互钩子
    chart.emit(InteractionHooks.toggleLegend, data)
  })

  legends[data.index] = oDiv

  oApp.appendChild(oDiv)
}

// 监听交互钩子
chart.on(InteractionHooks.renderLegend, createLegend)

chart.add(pie)
chart.render()
```

:::
