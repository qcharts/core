## 飞线

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

    const { Chart, Tooltip, Text, Map } = qcharts

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
      .style('normal', { fillColor: '#00186E', color: '#2b5bbd' })

    const from = mapData.features[14]
    const lines = {
      7: { from, to: mapData.features[7] },
      10: { from, to: mapData.features[10] },
      22: { from, to: mapData.features[22] },
      23: { from, to: mapData.features[23] },
      11: { from, to: mapData.features[11] },
      16: { from, to: mapData.features[16] }
    }

    map.add(Map.Scatter, {
      effect(attrs, data, i) {
        return lines[i] || false
      },

      style: {
        normal(attrs, data, i) {
          return {
            fillColor: '#46bee9',
            radius: 2 * data.gdp,
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

    const colors = ['#46bee9', '#ffa022', '#a6c84c'] // 航线的颜色

    map.add(Map.FlyLine, {
      symbol:
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z', // 指定符号类型，支持图片和 svg path（使用需加前缀：path://）
      symbolSize: 40, // 大小,
      symbolEffect(attrs, dataOrigin, i) {
        return { duration: 3000 }
      },
      symbolStyle: {
        normal(attrs, data, i) {
          return { rotate: 90, fillColor: colors[i % 3] }
        }
      },

      from(attrs, data, i) {
        return (lines[i] && lines[i].from) || false
      },

      to(attrs, data, i) {
        return (lines[i] && lines[i].to) || false
      },

      style: {
        normal(attrs, data, i) {
          return { color: colors[i % 3] }
        }
      }
    })

    const tooltip = new Tooltip()
    tooltip.formatter(data => `${data.name}`)

    chart
      .add(map)
      .add(tooltip)
      .add(new Text({ text: '中国部分航班航线' }))

    chart.setTheme('dark')
    chart.render()
  })
```

:::

:::demo

```javascript
fetch('http://s3.qhres.com/static/cc45789da954676b.json')
  .then(res => res.json())
  .then(mapData => {
    const data = [
      {
        name: 'Russia',
        value: 86.8
      },
      {
        name: 'China',
        value: 106.3
      },
      {
        name: 'Japan',
        value: 94.7
      },
      {
        name: 'Mongolia',
        value: 98
      },
      {
        name: 'Canada',
        value: 98.4
      },
      {
        name: 'United Kingdom',
        value: 97.2
      },
      {
        name: 'United States of America',
        value: 98.3
      },
      {
        name: 'Brazil',
        value: 96.7
      },
      {
        name: 'Argentina',
        value: 95.8
      },
      {
        name: 'Algeria',
        value: 101.3
      },
      {
        name: 'France',
        value: 94.8
      },
      {
        name: 'Germany',
        value: 96.6
      },
      {
        name: 'Ukraine',
        value: 86.3
      },
      {
        name: 'Egypt',
        value: 102.1
      },
      {
        name: 'South Africa',
        value: 101.3
      },
      {
        name: 'India',
        value: 107.6
      },
      {
        name: 'Australia',
        value: 99.9
      },
      {
        name: 'Saudi Arabia',
        value: 130.1
      },
      {
        name: 'Afghanistan',
        value: 106.5
      },
      {
        name: 'Kazakhstan',
        value: 93.4
      },
      {
        name: 'Indonesia',
        value: 101.4
      }
    ]

    const { Chart, Map, Text, Tooltip } = qcharts

    const chart = new Chart({
      container: '#app'
    })

    const map = new qcharts.Map({
      projection: 'geoMercator',
      scale: 0.2
    })

    map
      .setGeomData(mapData, { items: mapData.features })
      .mapGeomDataToBind((mapData, i) => {
        const target = data.filter(d => d.name === mapData.properties.name)
        return (
          (target && target[0]) || { name: mapData.properties.name, gdp: 0 }
        )
      })
      .style('normal', { fillColor: '#04284e', color: '#5bc1c9' })

    const to = mapData.features[30]
    const lines = {
      7: { to, from: mapData.features[7] },
      10: { to, from: mapData.features[10] },
      22: { to, from: mapData.features[22] },
      23: { to, from: mapData.features[23] },
      11: { to, from: mapData.features[11] },
      16: { to, from: mapData.features[16] },
      17: { to, from: mapData.features[17] },
      18: { to, from: mapData.features[18] },
      19: { to, from: mapData.features[19] },
      40: { to, from: mapData.features[40] },
      41: { to, from: mapData.features[41] },
      50: { to, from: mapData.features[50] },
      38: { to, from: mapData.features[38] }
    }

    map.add(Map.Scatter, {
      effect(attrs, data, i) {
        return lines[i] || false
      },

      style: {
        normal(attrs, data, i) {
          return {
            fillColor: '#46bee9',
            radius: lines[i] || i === 30 ? data.value / 10 : 0,
            color: 'transparent'
          }
        },
        hover(attrs, data, i) {
          return { radius: attrs.radius * 2 }
        }
      }
    })

    map.add(Map.Text, {
      style: {
        normal(attrs, data, i) {
          return {
            text: lines[i] || i === 30 ? data.name : '',
            color: '#fff',
            fontSize: '8px',
            anchor: [0, 0.5],
            translate: [8, 0]
          }
        }
      }
    })

    map.add(Map.FlyLine, {
      symbol: 'http://p3.qhimg.com/t012230aac4a55e48da.png', // 指定符号类型，支持图片和 svg path（使用需加前缀：path://）
      symbolSize: 20, // 大小,
      symbolStyle: {
        normal(attrs, data, i) {
          return { rotate: 90 }
        }
      },

      from(attrs, data, i) {
        return (lines[i] && lines[i].from) || false
      },

      to(attrs, data, i) {
        return (lines[i] && lines[i].to) || false
      },

      effect(attrs, data, i) {
        return { duration: 3000, trailLength: 5 }
      },

      style: {
        normal(attrs, data, i) {
          return { color: '#0bc7f3', lineWidth: 3 }
        }
      }
    })

    const tooltip = new Tooltip()
    tooltip.formatter(data => `${data.name}: ${data.value}`)

    chart
      .add(map)
      .add(tooltip)
      .add(new Text({ text: '攻击线世界地图' }))

    chart.setTheme('dark')
    chart.render()
  })
```

:::
