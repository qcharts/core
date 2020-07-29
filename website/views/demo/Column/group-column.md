## Group Column Chart 分组柱状图

:::demo

```javascript
const data = [
  {
    product: "05-08",
    year: "图例一",
    sales: 42,
  },
  {
    product: "05-08",
    year: "图例二",
    sales: 78.2,
  },
  {
    product: "05-08",
    year: "图例三",
    sales: 62,
  },
  {
    product: "05-09",
    year: "图例一",
    sales: 80,
  },
  {
    product: "05-09",
    year: "图例二",
    sales: 108,
  },
  {
    product: "05-09",
    year: "图例三",
    sales: 64,
  },
  {
    product: "05-10",
    year: "图例一",
    sales: 36,
  },
  {
    product: "05-10",
    year: "图例二",
    sales: 91,
  },
  {
    product: "05-10",
    year: "图例三",
    sales: 56,
  },
];
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts;
const chart = new Chart({
  container: "#app",
});
chart.source(data, {
  row: "year",
  value: "sales",
  text: "product",
});
const bar = new Bar({
  transpose: false,
  barWidth: 20,
});
const tooltip = new Tooltip();
// const tooltip = new Tooltip({
//   formatter: d => `${d.product} - ${d.year} - ${d.sales}`
// })
const colors = ["#F00", "#FF0", "#0FF"];
// const legend = new Legend()
//   .style("legend:hover", {
//     pointType: "star",
//     angles: 5,
//     innerRadius: 3,
//     outerRadius: 6,
//     fillColor: "red",
//     translate:[5,5]
//   })
//   .style("legend", (i, j, k) => {
//     return { translate:[0,0],bgcolor: colors[k] };
//   });
const legend = new Legend().style("legend", (i, j, k) => {
  return {
    pointType: "star",
    angles: 5,
    innerRadius: 4,
    outerRadius: 8,
    fillColor: colors[k],
    translate: [2, 5],
  };
});
const axisBottom = new Axis().style("grid", false);
const axisLeft = new Axis({ orient: "left" })
  .style("axis", false)
  .style("scale", false);
chart.append([bar, tooltip, axisBottom, axisLeft, legend]);
```

:::
