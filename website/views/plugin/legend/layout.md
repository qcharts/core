## 位置调整

通过设置 `Legend` 的 `align` 属性，可以进行位置调整。

:::demo

```javascript
const data = [{ value: 2010 }, { value: 2011 }, { value: 2012 }]
const { Chart, Legend } = qcharts

const chart = new Chart({ container: '#app' })
chart.source(data, {
  value: 'value'
})

const l1 = new Legend({ orient: 'vertical', align: ['left', 'top'] })
const l2 = new Legend({ orient: 'vertical', align: ['left', 'center'] })
const l3 = new Legend({ orient: 'vertical', align: ['left', 'bottom'] })
const l4 = new Legend({ orient: 'vertical', align: ['center', 'top'] })
const l5 = new Legend({ orient: 'vertical', align: ['center', 'center'] })
const l6 = new Legend({ orient: 'vertical', align: ['center', 'bottom'] })
const l7 = new Legend({ orient: 'vertical', align: ['right', 'top'] })
const l8 = new Legend({ orient: 'vertical', align: ['right', 'center'] })
const l9 = new Legend({ orient: 'vertical', align: ['right', 'bottom'] })

const l00 = new Legend({ orient: 'vertical', align: ['25%', '25%'] })
const l01 = new Legend({ orient: 'vertical', align: ['75%', 130] })
const l02 = new Legend({ orient: 'vertical', align: ['25%', '75%'] })
const l03 = new Legend({ orient: 'vertical', align: ['75%', 375] })

chart.add([l1, l2, l3, l4, l5, l6, l7, l8, l9, l00, l01, l02, l03])

chart.render()
```

:::

### `align` 的取值

`align` 应当为一个数组。数组第 1 项控制水平方向位置，数组第 2 项控制垂直方向位置。

其中，第 1 项可取值：

`left`、`center`、`right` 分别代表着 左对齐、居中 、右对齐，此外也可设置为 **_数字_** 或 **_百分比_**。

第 2 项可取值：

`top`、`center`、`bottom` 分别代表着 靠顶、居中、靠底，此外也可设置为 **_数字_** 或 **_百分比_**。
