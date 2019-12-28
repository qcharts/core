## Legend

当实例化 `chart` 后，向 `chart` 添加 `Legend` 插件即可，`chart.add(new Legend())`。

:::demo

```javascript
const data = [{ value: 2010 }, { value: 2011 }, { value: 2012 }]
const { Chart, Legend } = qcharts

const chart = new Chart({ container: '#app' })
chart.source(data, {
  value: 'value'
})

const l1 = new Legend({ orient: 'vertical', align: ['left', 'top'] })
const l2 = new Legend({ orient: 'vertical', align: ['left', 'bottom'] })
const l3 = new Legend({ orient: 'vertical', align: ['center', 'center'] })
const l4 = new Legend({ orient: 'vertical', align: ['right', 'top'] })
const l5 = new Legend({ orient: 'vertical', align: ['right', 'bottom'] })

chart.add([l1, l2, l3, l4, l5])

chart.render()
```

:::

### 属性

| 属性名      | 类型     | 默认值              | 描述                                                              |
| ----------- | -------- | ------------------- | ----------------------------------------------------------------- |
| `orient`    | String   | 'horizontal'        | legend 排列方式，默认水平排列，可取值：`horizontal` 、 `vertical` |
| `align`     | Array    | `['left', 'top']`   | legend 绘制位置，默认靠左靠顶                                     |
| `formatter` | Function | `d => d.value || d` | legend 文本格式化函数                                             |
