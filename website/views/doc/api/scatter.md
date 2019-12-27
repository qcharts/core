## 散点图

### 图表介绍

散点图根据数据的 x,y 确定散点的位置，气泡图是散点图的一种扩展，气泡图相较于散点图多一个维度，通过 **areaField** 字段可设置气泡的大小，默认为 areaField 值的大小，也可设置
**areaRange** 将 areaField 的值进行线性映射。气泡图还可以通过 **labelField** 字段来设置显示的 label 。

### attrs

| 属性          | 说明                                                      | 类型    | 默认值 |
| ------------- | --------------------------------------------------------- | ------- | ------ |
| areaField     | 气泡大小字段值，不设置此值则为散点图，可通过 style 自定义 | String  | null   |
| areaRange     | 面积映射，设置此值则将 areaField 进行线性映射             | Array   | null   |
| labelField    | 气泡图中显示 label 的字段，可通过 style 自定义            | String  | null   |
| showGuideLine | hover 时的辅助线,默认不显示辅助线                         | Boolean | false  |
| layoutWay     | 坐标轴的相关属性                                          | Object  | null   |

### 可设置 style 名称

| 名称        | 基本类型 | 说明                |
| ----------- | -------- | ------------------- |
| point       | 面       | 点的样式            |
| point:hover | 面       | 点 hover 样式       |
| label       | 文本     | label 样式          |
| label:hover | 文本     | label 的 hover 样式 |
| guideline   | 线       | 指导线样式          |
