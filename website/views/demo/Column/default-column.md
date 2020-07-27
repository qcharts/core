## Basic Column Chart 基础柱状图

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
];
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
];

let bool = true;
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts;
const chart = new Chart({
  container: "#app",
});
chart.source(data, {
  row: "year",
  col: "product",
  value: "sales",
  text: "product",
});
const bar = new Bar();
const tooltip = new Tooltip();
const legend = new Legend();
const axisBottom = new Axis();
const axisLeft = new Axis({ orient: "left" });
chart.append([bar, tooltip, axisBottom, axisLeft, legend]);

setTimeout(changeData, 3000);
function changeData() {
  if (bool) {
    chart.source(dataNew, {
      row: "year",
      col: "product",
      value: "sales",
      text: "product",
    });
    bool = false;
  } else {
    chart.source(data, {
      row: "year",
      col: "product",
      value: "sales",
      text: "product",
    });
    bool = true;
  }
  setTimeout(changeData, 5000);
}
```

:::
