## Bug

### 辅助线长度以及文字

:::demo

```javascript
const data = [
  {
    area: '上海迪士尼',
    visitors: 274,
    from: '一级城市'
  },

  {
    area: '黄山风景区',
    visitors: 140,
    from: '一级城市'
  },

  {
    area: '张家界',
    visitors: 136,
    from: '一级城市'
  },

  {
    area: '三亚亚龙湾',
    visitors: 115,
    from: '二级城市'
  },

  {
    area: '丽江古城',
    visitors: 114,
    from: '二级城市'
  },

  {
    area: '黄山风景区',
    visitors: 112,
    from: '二级城市'
  },

  {
    area: '杭州宋城',
    visitors: 148,
    from: '三级城市'
  },

  {
    area: '北京故宫',
    visitors: 126,
    from: '三级城市'
  },

  {
    area: '八达岭长城',
    visitors: 122,
    from: '三级城市'
  },

  {
    area: '西安永庆坊',
    visitors: 183,
    from: '四级城市'
  },

  {
    area: '丽江古城',
    visitors: 104,
    from: '四级城市'
  },

  {
    area: '八达岭长城',
    visitors: 100,
    from: '四级城市'
  }
]

// let data2 = data.reduce((a, c) => {
//   const from = c.from
//   a[from] = a[from] || 0
//   a[from] += c.visitors

//   return a
// }, {})

// data2 = Object.keys(data2).map(k => ({ from: k, sum: data2[k] }))

const { Chart, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

const pie = new qcharts.Pie({
  rose: true
})
  .source(data)
  .setDataFields({ x: 'area', y: 'visitors' })
  .style('guideline', true)
  .style('guideText', { font: '12px "宋体"' })

chart
  .add(pie)
  .add(
    new Tooltip({ lineHight: 22 }).formatter(
      data => `居民负债比：${data.area}: ${data.visitors}%`
    )
  )

chart.render()
```

:::

### 扇形上文字

是否可以将 **文字** 旋转一定角度？

:::demo

```javascript
const data = [
  {
    area: '上海迪士尼',
    visitors: 274,
    from: '一级城市'
  },

  {
    area: '黄山风景区',
    visitors: 140,
    from: '一级城市'
  },

  {
    area: '张家界',
    visitors: 136,
    from: '一级城市'
  },

  {
    area: '三亚亚龙湾',
    visitors: 115,
    from: '二级城市'
  },

  {
    area: '丽江古城',
    visitors: 114,
    from: '二级城市'
  },

  {
    area: '黄山风景区',
    visitors: 112,
    from: '二级城市'
  },

  {
    area: '杭州宋城',
    visitors: 148,
    from: '三级城市'
  },

  {
    area: '北京故宫',
    visitors: 126,
    from: '三级城市'
  },

  {
    area: '八达岭长城',
    visitors: 122,
    from: '三级城市'
  },

  {
    area: '西安永庆坊',
    visitors: 183,
    from: '四级城市'
  },

  {
    area: '丽江古城',
    visitors: 104,
    from: '四级城市'
  },

  {
    area: '八达岭长城',
    visitors: 100,
    from: '四级城市'
  }
]

const { Chart, Tooltip } = qcharts

const chart = new Chart({
  container: '#app'
})

const pie = new qcharts.Pie({
  // rose: true
})
  .source(data)
  .setDataFields({ x: 'area', y: 'visitors' })
  .style('text', true)

chart
  .add(pie)
  .add(
    new Tooltip({ lineHight: 22 }).formatter(
      data => `居民负债比：${data.area}: ${data.visitors}%`
    )
  )

chart.render()
```

:::
