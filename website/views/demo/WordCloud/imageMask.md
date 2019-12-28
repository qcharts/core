## 图片遮罩

可以使用 **图片遮罩** 增强词云的设计美感。

下面的例子使用的图片遮罩为：<img src="http://p5.qhimg.com/t01bf5867049198aa0b.png" alt="图片遮罩" />

:::demo

```javascript
const data = [
  '佯装',
  '瞰舒',
  '纯真',
  '灰烬',
  '段情',
  '何以',
  '苦笑',
  '纠结',
  '远昔',
  '桥雨',
  '卡拉',
  '漏朽',
  '聚夜',
  '亦难',
  '造梦',
  '旧景',
  '雪鬓',
  '冷咖',
  '流转',
  '一线',
  '流逝',
  '囚活',
  '悲切',
  '暧昧',
  '擒拿',
  '紊乱',
  '心死',
  '君颜',
  '倒戈',
  '佘温',
  '遗忘',
  '空位',
  '成活',
  '注缘',
  '慢性',
  '素锦',
  '失温',
  '诠释',
  '禾锄',
  '相思'
].map(t => ({ name: t, value: ~~(Math.random() * 10000) }))

const imageMask = new Image()
imageMask.crossOrigin = ''
imageMask.src = 'http://p5.qhimg.com/t01bf5867049198aa0b.png'

imageMask.onload = () => {
  const ds = data.map(d => d.value)
  const min = Math.min.apply(null, ds)
  const max = Math.max.apply(null, ds)
  const colors = ['#3b90ff', '#f5cc00', '#8344e5', '#48c252']

  const { Chart, WordCloud, Tooltip } = qcharts
  const chart = new Chart({ container: '#app', size: [500, 400] })

  const wordCloud = new WordCloud({
    padding: 0,
    font: 'Impact',
    imageMask: imageMask
  })
    .source(data.slice(0))
    .setDataFields({ x: 'name', y: 'value' })
    .fontSize(d => {
      if (d.value) {
        return ((d.value - min) / (max - min)) * 14 + 4
      }
      return 0
    })
    .style('normal', (attrs, d, i) => {
      return { color: colors[i % 4] }
    })

  chart
    .add(wordCloud)
    .add(new Tooltip().formatter(d => `${d.name}: ${d.value}`))
  chart.render()
}
```

:::

:::demo

```javascript
var presents = [
  '圣诞树',
  '贺卡',
  '圣诞礼盒',
  '围巾',
  '袜子',
  '苹果',
  '手链',
  '巧克力',
  '玫瑰',
  '香水',
  '乐高',
  '芭比',
  '项链',
  '抱枕',
  '变形金刚',
  '摆件',
  '魔方',
  '文具',
  '棒棒糖',
  '蓝牙耳帽',
  '超级飞侠',
  '暖手宝',
  '夜灯',
  '堆袜',
  '耳钉',
  '公仔',
  '手机壳',
  '八音盒',
  '剃须刀',
  '打火机',
  '手表',
  '巴克球',
  '模型',
  '音响',
  '蒙奇奇',
  '保温杯'
]

var data = []
for (var i = 0; i < presents.length; ++i) {
  data.push({
    name: presents[i],
    value: (presents.length - i) * 20
  })
}
for (var i = 10; i < presents.length; ++i) {
  var cnt = Math.floor(Math.random() * 10)
  for (var j = 0; j < cnt; ++j) {
    data.push({
      name: presents[i],
      value: Math.random() * 10
    })
  }
}

const imageMask = new Image()
imageMask.crossOrigin = ''
imageMask.src = 'http://p6.qhimg.com/t01cd27d4a0fdcac94e.png'

imageMask.onload = () => {
  const ds = data.map(d => d.value)
  const min = Math.min.apply(null, ds)
  const max = Math.max.apply(null, ds)
  const colors = ['#3b90ff', '#f5cc00', '#8344e5', '#48c252']

  const { Chart, WordCloud, Tooltip } = qcharts
  const chart = new Chart({ container: '#app', size: [500, 400] })

  const wordCloud = new WordCloud({
    padding: 0,
    font: 'Impact',
    imageMask: imageMask
  })
    .source(data.slice(0))
    .setDataFields({ x: 'name', y: 'value' })
    .fontSize(d => {
      if (d.value) {
        return ((d.value - min) / (max - min)) * 14 + 4
      }
      return 0
    })
    .style('normal', (attrs, d, i) => {
      return { color: colors[i % 4] }
    })

  chart
    .add(wordCloud)
    .add(new Tooltip().formatter(d => `${d.name}: ${d.value}`))
  chart.render()
}
```

:::
