## 散点

散点支持动效，当 `effect(attrs, data, i)` 的返回结果为 `true` 时，该即可开启动效。

:::demo

```javascript
fetch('http://s5.qhres.com/static/81bf507dbbc7c08d.json')
  .then(res => res.json())
  .then(mapData => {
    const data = [
      {
        name: '海南省',
        value: 29925.73
      },
      {
        name: '河南省',
        value: 17737.01
      },
      {
        name: '河北省',
        value: 13177.64
      },
      {
        name: '湖北省',
        value: 12174.96
      },
      {
        name: '广东省',
        value: 8230.15
      },
      {
        name: '湖南省',
        value: 8173.05
      },
      {
        name: '江西省',
        value: 7423.08
      },
      {
        name: '黑龙省江',
        value: 6829.69
      },
      {
        name: '四川省',
        value: 6158.43
      },
      {
        name: '安徽省',
        value: 5930.8
      }
    ]

    const { Chart, Tooltip, Text, Map } = qcharts

    const chart = new Chart({
      container: '#app'
    })

    const map = new qcharts.Map({
      tooltip: false,
      projection: 'geoMercator'
    })

    map
      .setGeomData(mapData, { items: mapData.features })
      .mapGeomDataToBind((mapData, i) => {
        const target = data.filter(d => d.name === mapData.properties.name)
        return (
          (target && target[0]) || { name: mapData.properties.name, gdp: 0 }
        )
      })
      .style('normal', (attrs, dataOrigin, i) => ({
        fillColor: data.includes(dataOrigin) ? '#25243f' : '#0f0c29',
        color: '#3B5077'
      }))

    map.add(Map.Scatter, {
      effect(attrs, data, i) {
        return data.value > 10000
      },

      style: {
        normal(attrs, data, i) {
          return {
            fillColor: 'yellow',
            radius: data.value / 5000,
            color: 'transparent',

            shadow: {
              color: '#333',
              blur: 10
            }
          }
        },
        hover(attrs, data, i) {
          return { radius: attrs.radius * 2 }
        }
      }
    })

    const tooltip = new Tooltip()
    tooltip.formatter(data => `${data.name} 购买力 ${data.value}`)

    chart
      .add(map)
      .add(tooltip)
      .add(new Text({ text: '201X 双十一中国各省购买力' }))

    chart.render()
  })
```

:::
