## Basic Funnel Chart 基础漏斗图

:::demo

```javascript
const data = [
  { value: 3721, label: "浏览网站" },
  { value: 3006, label: "放入购入车" },
  { value: 2505, label: "生成订单" },
  { value: 2151, label: "支付订金" },
  { value: 1782, label: "完成订单" },
  { value: 1503, label: "完成交易" },
  { value: 1204, label: "未完成交易" },
];

const { Chart, Funnel, Tooltip, Legend } = qcharts;

const chart = new Chart({
  container: "#app",
});

chart.source(data, {
  row: "label",
  col: "value",
  value: "value",
  text: "label",
});
const tooltip = new Tooltip();
const funnel = new Funnel({
  clientRect: {
    left: "25%",
    top: "10%",
    width: "50%",
    height: "80%",
  },
  align: "center",
  formatter: (d) => `${d.value}`,
})
  .style("guideline", true)
  .style("guideText", true)
  .style("polygon:hover", (polygon, dataOrigin, index) => {
    return { opacity: 0.5 };
  });
const legend = new Legend();
chart.append([funnel, tooltip, legend]);
```

:::
