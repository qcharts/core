## 其他

#### 负值柱状图

:::demo

```javascript
const data = [
  {
    product: "茶叶",
    year: "2016",
    sales: -81.2,
  },
  {
    product: "茶叶",
    year: "2017",
    sales: 121.2,
  },
  {
    product: "茶叶",
    year: "2018",
    sales: -41.2,
  },
  {
    product: "牛奶",
    year: "2016",
    sales: 85.2,
  },
  {
    product: "牛奶",
    year: "2017",
    sales: 79.6,
  },
  {
    product: "牛奶",
    year: "2018",
    sales: 81.2,
  },
  {
    product: "咖啡",
    year: "2016",
    sales: -65.2,
  },
  {
    product: "咖啡",
    year: "2017",
    sales: -59.6,
  },
  {
    product: "咖啡",
    year: "2018",
    sales: -61.2,
  },
  {
    product: "椰汁",
    year: "2016",
    sales: 35.2,
  },
  {
    product: "椰汁",
    year: "2017",
    sales: 79.6,
  },
  {
    product: "椰汁",
    year: "2018",
    sales: 21.2,
  },
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  row: "year",
  value: "sales",
  text: "product",
})
const bar = new Bar({
  transpose: false,
  barWidth: 20,
})
const tooltip = new Tooltip()
const legend = new Legend()
const axisBottom = new Axis().style("grid", false)
const axisLeft = new Axis({ orient: "left" }).style("grid", function(
  attrs,
  ind
) {
  if (ind === 3) {
    return { strokeColor: "#999", lineDash: "" }
  }
})
chart.append([bar, tooltip, axisBottom, axisLeft, legend])
```

:::

#### 数据更新

:::demo

```javascript
const data = [
  {
    product: "茶叶",
    year: "2016",
    sales: 81.2,
  },
  {
    product: "茶叶",
    year: "2017",
    sales: 121.2,
  },
  {
    product: "茶叶",
    year: "2018",
    sales: 41.2,
  },
  {
    product: "牛奶",
    year: "2016",
    sales: 85.2,
  },
  {
    product: "牛奶",
    year: "2017",
    sales: 79.6,
  },
  {
    product: "牛奶",
    year: "2018",
    sales: 81.2,
  },
  {
    product: "咖啡",
    year: "2016",
    sales: 65.2,
  },
  {
    product: "咖啡",
    year: "2017",
    sales: 59.6,
  },
  {
    product: "咖啡",
    year: "2018",
    sales: 61.2,
  },
  {
    product: "椰汁",
    year: "2016",
    sales: 35.2,
  },
  {
    product: "椰汁",
    year: "2017",
    sales: 79.6,
  },
  {
    product: "椰汁",
    year: "2018",
    sales: 21.2,
  },
]
const dataNew = [
  {
    product: "茶叶",
    year: "2016",
    sales: 81.2,
  },
  {
    product: "茶叶",
    year: "2017",
    sales: 121.2,
  },
  {
    product: "茶叶",
    year: "2018",
    sales: 41.2,
  },
  {
    product: "茶叶",
    year: "2019",
    sales: 61.2,
  },
  {
    product: "牛奶",
    year: "2016",
    sales: 85.2,
  },
  {
    product: "牛奶",
    year: "2017",
    sales: 79.6,
  },
  {
    product: "牛奶",
    year: "2018",
    sales: 81.2,
  },
  {
    product: "牛奶",
    year: "2019",
    sales: 111.2,
  },
  {
    product: "咖啡",
    year: "2016",
    sales: 65.2,
  },
  {
    product: "咖啡",
    year: "2017",
    sales: 59.6,
  },
  {
    product: "咖啡",
    year: "2018",
    sales: 61.2,
  },
  {
    product: "咖啡",
    year: "2019",
    sales: 161.2,
  },
]

let bool = true
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  row: "year",
  value: "sales",
  text: "product",
})
const bar = new Bar()
const tooltip = new Tooltip()
const legend = new Legend()
const axisBottom = new Axis()
const axisLeft = new Axis({ orient: "left" })
chart.append([bar, tooltip, axisBottom, axisLeft, legend])

setTimeout(changeData, 3000)
function changeData() {
  if (bool) {
    chart.source(dataNew, {
      row: "year",
      value: "sales",
      text: "product",
    })
    bool = false
  } else {
    chart.source(data, {
      row: "year",
      value: "sales",
      text: "product",
    })
    bool = true
  }
  setTimeout(changeData, 5000)
}
```

:::

#### 开方数据柱状图

:::demo

```javascript
const data = [
  { abc: 25, label: "05-01" },
  { abc: 36, label: "05-02" },
  { abc: 49, label: "05-03" },
  { abc: 64, label: "05-04" },
  { abc: 81, label: "05-05" },
  { abc: 100, label: "05-06" },
  { abc: 400, label: "05-07" },
  { abc: 900, label: "05-08" },
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  value: "abc",
  text: "label",
  layoutScale: "sqrt",
})
const bar = new Bar({}).style("pillar", { bgcolor: "#47A1FF" })
const tooltip = new Tooltip()

const axisBottom = new Axis().style("grid", false)
const axisLeft = new Axis({ orient: "left" })
  .style("axis", false)
  .style("scale", false)
chart.append([bar, tooltip, axisBottom, axisLeft])
```

:::
