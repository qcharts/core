## 散点图隐藏坐标轴

:::demo

```javascript
const data = [
  {
    x: 10,
    y: 10,
    z: 8,
    name: '盐井'
  },
  {
    x: 15,
    y: 17,
    z: 5,
    name: '云门'
  },
  {
    x: 25,
    y: 13,
    z: 7,
    name: '钓鱼城'
  },
  {
    x: 38,
    y: 7,
    z: 12,
    name: '合阳城'
  },
  {
    x: 38,
    y: 17,
    z: 5,
    name: '大石'
  },

  {
    x: 50,
    y: 17,
    z: 7,
    name: '钓鱼城'
  },
  {
    x: 55,
    y: 8,
    z: 7,
    name: '草街'
  },
  {
    x: 65,
    y: 13,
    z: 7,
    name: '云门'
  }
]

const { Chart, Axis, Scatter, Legend, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: '*',
  text: 'x',
  value: 'y'
})
const scatter = new Scatter({
  areaField: 'z',
  labelField: 'name',
  areaRange: [20, 45],
  showGuideLine: true,
  layoutWay: {
    x: { min: 0, max: 80 },
    y: { min: 0, max: 25 }
  }
})

scatter
  .style('point', (attr, data, i) => {
    const colorTable = {
      盐井: '#1B2EA0',
      云门: '#06373c',
      钓鱼城: '#1B77A0',
      合阳城: '#1B5EA0',
      大石: '#13266b',
      草街: '#20602A'
    }
    const { name, x } = data
    let fillColor = colorTable[name]
    if (x === 65) {
      fillColor = '#13516d'
    }
    return { fillColor, strokeColor: 'transparent' }
  })
  .style('label', (attr, data, i) => {
    let color = '#fff'
    let fontSize = 10
    const { name, x } = data
    if (name === '云门' && x !== 65) {
      color = '#757474'
    } else if (name === '大石') {
      color = '#adabab'
    } else if (x === 65) {
      color = '#a0a0a0'
    }
    if (name === '盐井' || name === '草街') {
      fontSize = 14
    } else if (name === '合阳城') {
      fontSize = 18
    }
    return { color, fontSize }
  })

const axisBottom = new Axis()

const axisLeft = new Axis({ orient: 'left' })

const tooltip = new Tooltip({
  formatter: data => {
    return `${data.name} x：${data.x} y：${data.y} `
  }
})

chart.add([scatter, axisBottom, axisLeft, tooltip])

chart.render()
```

:::
