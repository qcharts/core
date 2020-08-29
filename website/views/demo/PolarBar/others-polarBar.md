## 其他

#### 负值图

:::demo

```javascript
const data = [
  {
    product: "05-08",
    year: "图例一",
    sales: 3000,
  },
  {
    product: "05-08",
    year: "图例二",
    sales: -1000,
  },
  {
    product: "05-08",
    year: "图例三",
    sales: 2000,
  },
  {
    product: "05-09",
    year: "图例一",
    sales: 3000,
  },
  {
    product: "05-09",
    year: "图例二",
    sales: -1000,
  },
  {
    product: "05-09",
    year: "图例三",
    sales: -2000,
  },

  {
    product: "05-10",
    year: "图例一",
    sales: -1700,
  },
  {
    product: "05-10",
    year: "图例二",
    sales: 2400,
  },
  {
    product: "05-10",
    year: "图例三",
    sales: 3700,
  },

  {
    product: "05-11",
    year: "图例一",
    sales: 4200,
  },
  {
    product: "05-11",
    year: "图例二",
    sales: 2800,
  },
  {
    product: "05-11",
    year: "图例三",
    sales: 3100,
  },

  {
    product: "05-12",
    year: "图例一",
    sales: 5100,
  },
  {
    product: "05-12",
    year: "图例二",
    sales: 2500,
  },
  {
    product: "05-12",
    year: "图例三",
    sales: -350,
  },
]
const { Chart, PolarBar, Tooltip, Legend } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  row: "year",
  value: "sales",
  text: "product",
})
const bar = new PolarBar({
  innerRadius: 0.1,
  radius: 0.9,
  groupPadAngle: 10,
})
const tooltip = new Tooltip()
const legend = new Legend()

chart.append([bar, tooltip, legend])
```

:::

#### 彩色样式

:::demo

```javascript
const data = [
  { value: 6100, label: "TOP1" },
  { value: 5200, label: "TOP2" },
  { value: 4400, label: "TOP3" },
  { value: 3700, label: "TOP4" },
  { value: 2800, label: "TOP5" },
  { value: 3000, label: "TOP6" },
  { value: 5300, label: "TOP7" },
  { value: 3400, label: "TOP8" },
]
const colors = [
  "#47A1FF",
  "#59CB74",
  "#FFB952",
  "#FC6980",
  "#6367EC",
  "#DA65CC",
  "#FBD54A",
  "#ADDF84",
]
const { Chart, PolarBar, Tooltip } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  value: "value",
  text: "label",
})
const bar = new PolarBar({
  innerRadius: 0.1,
  radius: 0.8,
}).style("pillar", (attr, data, i) => {
  return { fillColor: colors[i] }
})
const tooltip = new Tooltip().style("point", (attr, item, i) => {
  return { "background-color": colors[data.indexOf(item[0])] }
})
chart.append([bar, tooltip])
```

:::
