## 地图

不同于其他图表类型，地图的渲染需要两份数据。

- 必要的：地图地理信息数据，该数据用于渲染地图主体
- 可选的：当需要利用地图可视化某些数据时，这时候将需要传入其他数据与地图地理信息绑定

### 1. 基本地图渲染

当实例化 `qcharts.Map` 后可以使用 `setGeomData` 传入用于渲染地图的地理信息。

`setGeomData` 接收两个参数，第一个参数为 **必须值** ，第二个参数为 **可选值**。当不传入第二个参数时，`qcharts.Map` 将会把 第一个参数 传入的地理信息用于渲染一个整体。

例如，下面的 DEMO 渲染了中国各个省市，如果不设置第二个参数，那么将不会有省市的区别，而是整个中国地图整体而已。

:::demo

```javascript
fetch('http://s5.qhres.com/static/81bf507dbbc7c08d.json')
  .then(res => res.json())
  .then(mapData => {
    const { Chart, Map, Text, Tooltip } = qcharts

    const chart = new Chart({
      container: '#app'
    })

    const map = new qcharts.Map({
      projection: 'geoMercator'
    })

    map
      .setGeomData(mapData, { items: mapData.features })
      .style('normal', { fillColor: '#214882', color: '#479cd3' })

    const tooltip = new Tooltip()
    tooltip.formatter(data => `${data.properties.name}`)

    chart
      .add(map)
      .add(tooltip)
      .add(new Text({ text: '中国各省市地图' }))

    chart.render()
  })
```

:::

### 2. 地理信息数据可视化

如果需要利用地图的地理信息做某些数据可视化，可以使用 `mapGeomDataToBind` 完成 **地理信息** 与 **数据** 的绑定。

:::demo

```javascript
fetch('http://s5.qhres.com/static/81bf507dbbc7c08d.json')
  .then(res => res.json())
  .then(mapData => {
    const data = [
      {
        name: '新疆维吾尔自治区',
        gdp: 0
      },

      {
        name: '贵州省',
        gdp: '0.663'
      },

      {
        name: '云南省',
        gdp: '0.701'
      },

      {
        name: '江西省',
        gdp: '1.102'
      },

      {
        name: '陕西省',
        gdp: '1.07'
      },

      {
        name: '安徽省',
        gdp: '1.462'
      },

      {
        name: '四川省',
        gdp: '1.833'
      },

      {
        name: '福建省',
        gdp: '1.484'
      },

      {
        name: '湖南省',
        gdp: '1.641'
      },

      {
        name: '湖北省',
        gdp: '1.796'
      },

      {
        name: '河南省',
        gdp: '2.224'
      },

      {
        name: '宁夏回族自治区',
        gdp: '0.16'
      },

      {
        name: '浙江省',
        gdp: '2.567'
      },

      {
        name: '广东省',
        gdp: '4.63'
      },

      {
        name: '江苏省',
        gdp: '4.486'
      },

      {
        name: '上海市',
        gdp: '1.556'
      },

      {
        name: '山西省',
        gdp: '0.748'
      },

      {
        name: '北京市',
        gdp: '1.405'
      },

      {
        name: '山东省',
        gdp: '3.966'
      },

      {
        name: '重庆市',
        gdp: '0.982'
      },

      {
        name: '河北省',
        gdp: '1.66'
      },

      {
        name: '广西壮族自治区',
        gdp: '0.876'
      },

      {
        name: '青海省',
        gdp: '0.12'
      },

      {
        name: '海南省',
        gdp: '0.243'
      },

      {
        name: '辽宁省',
        gdp: '1.138'
      },

      {
        name: '黑龙江省',
        gdp: '0.624'
      },

      {
        name: '甘肃省',
        gdp: '0.35'
      },

      {
        name: '内蒙古自治区',
        gdp: '0.778'
      },

      {
        name: '吉林省',
        gdp: '0.63'
      },

      {
        name: '天津市',
        gdp: '0.993'
      }
    ]

    const { Chart, Map, Text, Tooltip } = qcharts

    const chart = new Chart({
      container: '#app'
    })

    const map = new qcharts.Map({
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
      .style('normal', (attrs, data, i) => {
        const gdp = +data.gdp || 0
        let fillColor = '#ddb926'

        if (gdp > 0 && gdp <= 0.5) {
          fillColor = '#fad4d5'
        } else if (gdp > 0.5 && gdp <= 0.8) {
          fillColor = '#facf00'
        } else if (gdp > 0.8 && gdp <= 1.2) {
          fillColor = '#90cefd'
        } else if (gdp > 1.2 && gdp <= 1.6) {
          fillColor = '#9ed5d9'
        } else if (gdp > 1.6 && gdp <= 2) {
          fillColor = '#f66900'
        } else if (gdp > 2) {
          fillColor = '#f64600'
        }

        return {
          fillColor,
          color: '#479cd3'
        }
      })

    const tooltip = new Tooltip({ title: '2018上半年全国各省GDP' })
    tooltip.formatter(data => `${data.name}: ${data.gdp}万亿元`)

    chart
      .add(map)
      .add(tooltip)
      .add(new Text({ text: '2018 年中国上半年各省市 GDP 数据可视化' }))

    chart.render()
  })
```

:::

### 属性

| 名称       | 说明                                 | 参数              |
| ---------- | ------------------------------------ | ----------------- |
| projection | 设置投影类型                         | `(type: String)`  |
| tooltip    | 控制 地图主体是否参与 Tooltip 的交互 | `(flag: Boolean)` |
| scale      | 控制 地图主体缩放比例                | `(val: Number)`   |
