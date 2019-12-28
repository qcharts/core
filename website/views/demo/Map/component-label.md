## 文字

:::demo

```javascript
fetch('http://s5.qhres.com/static/81bf507dbbc7c08d.json')
  .then(res => res.json())
  .then(mapData => {
    const { Chart, Tooltip, Text, Map } = qcharts

    const chart = new Chart({
      container: '#app'
    })

    const map = new qcharts.Map({
      projection: 'geoMercator'
    })

    map
      .setGeomData(mapData, { items: mapData.features })
      .style('normal', { fillColor: '#214882', color: '#479cd3' })

    map.add(Map.Text, {
      style: {
        normal(attrs, data, i) {
          return {
            text: data.properties.name,
            color: '#fff',
            fontSize: '8px',
            anchor: [0, 0.5],
            translate: [8, 0]
          }
        }
      }
    })

    const tooltip = new Tooltip()
    tooltip.formatter(data => `${data.properties.name}`)

    chart
      .add(map)
      .add(tooltip)
      .add(new Text({ text: '中国各省市' }))

    chart.setTheme('dark')
    chart.render()
  })
```

:::
