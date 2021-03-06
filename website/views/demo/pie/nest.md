## Nested Pie Chart 嵌套饼图

:::demo

```javascript
const data = [
  { value: 204, name: '图例一' },
  { value: 451, name: '图例二' },
  { value: 347, name: '图例三' },
  { value: 256, name: '图例四' },

  { value: 2790, name: '图例1' },
  { value: 2548, name: '图例2' },
  { value: 1350, name: '图例3' },
  { value: 3100, name: '图例4' },
  { value: 2340, name: '图例5' },
  { value: 1350, name: '图例6' },
  { value: 2450, name: '图例7' },
  { value: 1550, name: '图例8' },
  { value: 3450, name: '图例9' },
  { value: 2750, name: '图例10' }
]

const { Chart, Pie, Legend, Tooltip, theme } = qcharts
const colors1 = ['#5982F6', '#59CB74', '#DA65CC', '#FC6980']
const colors2 = ['#47A1FF', '#6CD3FF', '#A2E5FF', '#4DCCCB', '#3FDDC7', '#ADDF84', '#FBD54A', '#FFB952', '#F79452', '#E37474']
const colors = colors1.concat(colors2)
theme.set({ colors })
const chart = new Chart({
  container: '#app'
})

chart.source(data, {
  row: 'name',
  value: 'value'
})

const ds = chart.dataset

const pie = new Pie({
  radius: 0.4,
  pos: [0, 0]
}).source(ds.selectRows(data.slice(0, 4).map(d => d.name)))

//可以通过设置单个visual的主题，设置样式和属性
pie.theme.set({
  colors: colors1,
  attrs: {},
  styles: {
    guideText: { borderRadius: 2, bgcolor: 'rgba(255,255,255,0.7)' }
  }
})

const pie2 = new Pie({
  innerRadius: 0.5,
  radius: 0.7
}).source(ds.selectRows(data.slice(4).map(d => d.name)))

pie2.theme.set({ colors: colors2 })
const legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })

chart.append([pie2, pie, legend])
```

:::
