## 雷达图点样式

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
    size:[17,26],
    anchor: [0.5, 0.5],
    texture: 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'
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
    normalize: true,
    radiusX: 15,
    radiusY: 10,
    fillColor: 'green',
    pointType: 'ellipse'
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
