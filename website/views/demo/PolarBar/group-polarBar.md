## Nightingale Group Chart 分组图

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
    sales: 1000,
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
    sales: 1000,
  },
  {
    product: "05-09",
    year: "图例三",
    sales: 2000,
  },

  {
    product: "05-10",
    year: "图例一",
    sales: 1700,
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
    sales: 350,
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
  innerRadius: 0.3,
  radius: 0.7,
  groupPadAngle: 30,
})
const legend = new Legend()
const tooltip = new Tooltip()

chart.append([bar, tooltip, legend])
```

:::
