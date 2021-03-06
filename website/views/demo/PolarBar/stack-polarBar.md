## Nightingale Stack Chart 堆叠图

:::demo

```javascript
const data = [
  {
    product: "05-08",
    year: "图例一",
    sales: 30,
  },
  {
    product: "05-08",
    year: "图例二",
    sales: 15,
  },
  {
    product: "05-08",
    year: "图例三",
    sales: 20,
  },
  {
    product: "05-09",
    year: "图例一",
    sales: 30,
  },
  {
    product: "05-09",
    year: "图例二",
    sales: 17,
  },
  {
    product: "05-09",
    year: "图例三",
    sales: 20,
  },

  {
    product: "05-10",
    year: "图例一",
    sales: 17.57,
  },
  {
    product: "05-10",
    year: "图例二",
    sales: 24,
  },
  {
    product: "05-10",
    year: "图例三",
    sales: 37.54,
  },

  {
    product: "05-11",
    year: "图例一",
    sales: 41,
  },
  {
    product: "05-11",
    year: "图例二",
    sales: 28,
  },
  {
    product: "05-11",
    year: "图例三",
    sales: 21,
  },

  {
    product: "05-12",
    year: "图例一",
    sales: 14,
  },
  {
    product: "05-12",
    year: "图例二",
    sales: 25,
  },
  {
    product: "05-12",
    year: "图例三",
    sales: 35,
  },

  {
    product: "05-13",
    year: "图例一",
    sales: 44,
  },
  {
    product: "05-13",
    year: "图例二",
    sales: 25,
  },
  {
    product: "05-13",
    year: "图例三",
    sales: 10,
  },

  {
    product: "05-14",
    year: "图例一",
    sales: 25,
  },
  {
    product: "05-14",
    year: "图例二",
    sales: 25,
  },
  {
    product: "05-14",
    year: "图例三",
    sales: 10,
  },
  {
    product: "05-15",
    year: "图例一",
    sales: 25,
  },
  {
    product: "05-15",
    year: "图例二",
    sales: 25,
  },
  {
    product: "05-15",
    year: "图例三",
    sales: 10,
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
  stack: true,
  radius: 0.8,
  groupPadAngle: 15,
}).style("pillar", {
  strokeColor: "#FFF",
  lineWidth: 1,
})
const tooltip = new Tooltip()
const legend = new Legend()

chart.append([bar, tooltip, legend])
```

:::
