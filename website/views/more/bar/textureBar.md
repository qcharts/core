## 纹理条形图

:::demo

```javascript
const data = [
  { value: 43, label: "TOP1" },
  { value: 26, label: "TOP2" },
  { value: 24, label: "TOP3" },
  { value: 20, label: "TOP4" },
  { value: 10, label: "TOP5" },
]
const { Chart, Bar, Tooltip, Axis, Legend } = qcharts
const chart = new Chart({
  container: "#app",
})
chart.source(data, {
  value: "value",
  text: "label",
})
const bar = new Bar({
  transpose: true,
  barWidth: 30,
})

const texture1 = "https://p3.ssl.qhimg.com/t01128a717c0ff244f1.png"
const texture2 = "https://p5.ssl.qhimg.com/t01c5d76eabda023606.png"
bar
  .style("pillar", (attrs, data, i, j) => {
    if (i === 0) {
      return {
        texture: texture1,
        textureRect: [0, 0, 445, 40],
      }
    } else {
      return {
        texture: texture2,
        textureRect: [0, 0, 445, 40],
      }
    }
  })
  .style("text", (attrs, data, i, j) => {
    let size = attrs.barAttrs.size
    let points = attrs.barAttrs.points
    return {
      color: "#1DCE91",
      rotate: 0,
      text: data.value,
      anchor: [0, 0.5],
      pos: [points[1][0] + 5, (points[1][1] + points[2][1]) / 2],
    }
  })
const tooltip = new Tooltip({
  formatter: (d) => `${d.label}: ${d.value}`,
})
const legend = new Legend({ align: ["center", "bottom"] }).style("text", {
  text: "图例一",
})

const axisLeft = new Axis({
  orient: "left",
})
  .style("axis", { strokeColor: "#1DCE91" })
  .style("grid", false)
  .style("scale", false)
  .style("label", { color: "#1DCE91" })
chart.append([bar, axisLeft])
```

:::
