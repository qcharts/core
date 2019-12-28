## 基本使用

:::demo

```javascript
const data = [
  {
    text: 'goeiedag',
    value: 492
  },
  {
    text: 'mir\u00eb dita',
    value: 32
  },
  {
    text: 'gu\u00e0tertag',
    value: 797
  },
  {
    text: 'dana esteline',
    value: 788
  },
  {
    text: '\u0635\u0628\u0627\u062d \u0627\u0644\u062e\u064a\u0631 ',
    value: 722
  },
  {
    text: ' salam ',
    value: 854
  },
  {
    text: ' sab\u00e2hu al khair',
    value: 682
  },
  {
    text: 'chlomo',
    value: 345
  },
  {
    text: 'barev',
    value: 297
  },
  {
    text: 'servus',
    value: 650
  },
  {
    text: 'salam',
    value: 519
  },
  {
    text: 'ani sogomen',
    value: 938
  },
  {
    text: "me sha'she",
    value: 757
  },
  {
    text: "n'dja ar\u00e8 ",
    value: 608
  },
  {
    text: ' m\u00f4 ar\u00e8',
    value: 645
  },
  {
    text: 'egunon',
    value: 851
  },
  {
    text: 'meny\u00e9ga',
    value: 479
  },
  {
    text: 'vitaju',
    value: 773
  },
  {
    text: 'namaskar',
    value: 560
  },
  {
    text: 'ass-iyessbh\u00e8ne ',
    value: 16
  },
  {
    text: ' ass ameggaz ',
    value: 847
  },
  {
    text: ' azul',
    value: 496
  },
  {
    text: '(KANURI) inda wadou',
    value: 855
  },
  {
    text: 'ayo',
    value: 140
  },
  {
    text: 'ka tiana',
    value: 852
  },
  {
    text: 'zdravo ("hi")',
    value: 946
  },
  {
    text: 'demat',
    value: 187
  },
  {
    text: '\u0434\u043e\u0431\u044a\u0440 \u0434\u0435\u043d ',
    value: 95
  },
  {
    text: ' \u0417\u0434\u0440\u0430\u0432\u0435\u0439',
    value: 582
  },
  {
    text: 'mingalaba',
    value: 578
  },
  {
    text: 'bon dia ',
    value: 495
  },
  {
    text: ' hola',
    value: 295
  },
  {
    text: 'hafa adai',
    value: 171
  },
  {
    text: 'osiyo',
    value: 230
  },
  {
    text: '(MANDARIN) \u4f60\u597d ',
    value: 537
  },
  {
    text: ' \u60a8\u597d',
    value: 812
  },
  {
    text: 'myttyn da',
    value: 441
  },
  {
    text: 'bonghjornu ',
    value: 188
  },
  {
    text: ' salutu',
    value: 174
  },
  {
    text: 'bok ',
    value: 470
  },
  {
    text: ' dobar dan',
    value: 72
  },
  {
    text: 'dobr\u00fd den',
    value: 543
  },
  {
    text: 'goddag ',
    value: 887
  },
  {
    text: ' hej',
    value: 664
  },
  {
    text: 'sal\u00e2m',
    value: 22
  },
  {
    text: 'mat ni kani',
    value: 965
  },
  {
    text: 'anissoroma',
    value: 308
  },
  {
    text: 'alapiale',
    value: 176
  },
  {
    text: 'goede morgen ',
    value: 148
  },
  {
    text: ' goede middag ',
    value: 175
  },
  {
    text: ' goede avond',
    value: 965
  },
  {
    text: '\u00e9kooni',
    value: 393
  },
  {
    text: 'hello',
    value: 237
  },
  {
    text: 'bonan tagon ',
    value: 322
  },
  {
    text: ' saluton',
    value: 860
  },
  {
    text: 'tere ',
    value: 312
  },
  {
    text: ' tere hommikust',
    value: 294
  },
  {
    text: 'mbolo',
    value: 667
  },
  {
    text: 'hey',
    value: 557
  },
  {
    text: 'yadra',
    value: 310
  },
  {
    text: 'hyv\u00e4\u00e4 p\u00e4iv\u00e4\u00e4',
    value: 174
  },
  {
    text: "hoeien nuh'nt",
    value: 423
  },
  {
    text: 'bonjour',
    value: 879
  },
  {
    text: 'ha ',
    value: 116
  },
  {
    text: ' goeie ',
    value: 799
  },
  {
    text: ' hoi',
    value: 600
  },
  {
    text: 'bondi',
    value: 718
  },
  {
    text: 'diarama',
    value: 20
  },
  {
    text: 'ola',
    value: 103
  },
  {
    text: 'bonjou ',
    value: 215
  },
  {
    text: ' salu',
    value: 206
  },
  {
    text: 'gamarjoba',
    value: 724
  },
  {
    text: 'hallo ',
    value: 158
  },
  {
    text: ' guten Tag',
    value: 211
  },
  {
    text: 'hails',
    value: 47
  },
  {
    text: 'gia ',
    value: 97
  },
  {
    text: ' kalimera',
    value: 114
  },
  {
    text: "mba'\u00e9ichapa",
    value: 272
  },
  {
    text: 'kem cho',
    value: 588
  },
  {
    text: 'bonjou ',
    value: 257
  },
  {
    text: ' bon swa ',
    value: 826
  },
  {
    text: ' la rezone ',
    value: 357
  },
  {
    text: ' alo',
    value: 452
  },
  {
    text: 'ina kwana',
    value: 845
  },
  {
    text: 'aloha',
    value: 160
  },
  {
    text: 'shalom',
    value: 64
  },
  {
    text: 'namaste ',
    value: 949
  },
  {
    text: ' namaskaar',
    value: 531
  },
  {
    text: 'nyob zoo',
    value: 411
  },
  {
    text: 'j\u00f3 napot k\u00edv\u00e1nok ',
    value: 888
  },
  {
    text: ' szia',
    value: 135
  },
  {
    text: 'go\u00f0an dagin ',
    value: 340
  },
  {
    text: ' hall\u00f3',
    value: 607
  },
  {
    text: 'ndeewo ',
    value: 692
  },
  {
    text: ' i boola chi ',
    value: 640
  },
  {
    text: ' ututu oma',
    value: 197
  },
  {
    text: 'selamat pagi',
    value: 175
  },
  {
    text: 'ullaakkut',
    value: 513
  },
  {
    text: 'GAELIC Dia duit',
    value: 281
  },
  {
    text: 'ciao ',
    value: 842
  },
  {
    text: ' buongiorno',
    value: 924
  },
  {
    text: 'konnichi wa',
    value: 217
  },
  {
    text: "\u014bl\u0269wa'l\u025b (nliwal\u00e8)",
    value: 661
  },
  {
    text: 'azul',
    value: 582
  },
  {
    text: 'chumreap suor',
    value: 750
  },
  {
    text: 'mwaramuts\u00e9',
    value: 118
  },
  {
    text: 'anny\u01d2ng hashimnikka ',
    value: 937
  },
  {
    text: ' annyong haseyo',
    value: 977
  },
  {
    text: 'gna vin kaz\u00f4',
    value: 250
  },
  {
    text: 'rojbas ',
    value: 247
  },
  {
    text: ' silav',
    value: 342
  },
  {
    text: 'sabai di',
    value: 149
  },
  {
    text: 'salve, ave',
    value: 429
  },
  {
    text: 'labdien',
    value: 819
  },
  {
    text: 'ci\u00e2o ',
    value: 581
  },
  {
    text: ' scignor\u00eea',
    value: 404
  },
  {
    text: 'mbote',
    value: 158
  },
  {
    text: 'laba diena',
    value: 34
  },
  {
    text: 'SAXON hallo ',
    value: 187
  },
  {
    text: ' houje',
    value: 908
  },
  {
    text: 'moien ',
    value: 493
  },
  {
    text: ' gudde moien',
    value: 145
  },
  {
    text: 'dobar den ',
    value: 786
  },
  {
    text: ' zdravo',
    value: 575
  },
  {
    text: 'manao ahoana ',
    value: 747
  },
  {
    text: ' manahoana',
    value: 532
  },
  {
    text: 'selamat pagi',
    value: 206
  },
  {
    text: 'namaskaram',
    value: 262
  },
  {
    text: 'mer\u0127ba ',
    value: 330
  },
  {
    text: ' oj',
    value: 25
  },
  {
    text: 'befa',
    value: 69
  },
  {
    text: 'kia ora',
    value: 69
  },
  {
    text: 'mari-mari',
    value: 403
  },
  {
    text: 'oz\u00f4ng tch\u00ee',
    value: 885
  },
  {
    text: "m\u0259\u0301 c\u00e0't\u0259\u0300 \u016b",
    value: 397
  },
  {
    text: 'kia bo',
    value: 101
  },
  {
    text: 'doangouam',
    value: 969
  },
  {
    text: 'sain baina uu',
    value: 653
  },
  {
    text: 'n\u00e9 yib\u00e9ogo ',
    value: 776
  },
  {
    text: ' yib\u00e9',
    value: 415
  },
  {
    text: 'namaste',
    value: 245
  },
  {
    text: 'boujou ',
    value: 724
  },
  {
    text: ' warro',
    value: 541
  },
  {
    text: 'warro',
    value: 704
  },
  {
    text: 'wharro',
    value: 773
  },
  {
    text: 'god dag ',
    value: 30
  },
  {
    text: ' hei',
    value: 351
  },
  {
    text: 'bon jorn ',
    value: 913
  },
  {
    text: ' adieu',
    value: 955
  },
  {
    text: 'heil',
    value: 158
  },
  {
    text: 'bon dia',
    value: 815
  },
  {
    text: '\u0633\u0644\u0627\u0645',
    value: 559
  },
  {
    text: 'dzie\u0144 dobry ',
    value: 786
  },
  {
    text: ' dobry wiecz\u00f3r',
    value: 361
  },
  {
    text: 'bom dia',
    value: 130
  },
  {
    text: 'sat sri akal',
    value: 416
  },
  {
    text: 'latcho div\u00e8s',
    value: 180
  },
  {
    text: 'bun\u0103 ziua',
    value: 550
  },
  {
    text: '\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c',
    value: 796
  },
  {
    text: 'bures',
    value: 790
  },
  {
    text: 'talofa',
    value: 121
  },
  {
    text: 'bara mo',
    value: 153
  },
  {
    text: 'bona die',
    value: 483
  },
  {
    text: 'GAELIC hallo',
    value: 423
  },
  {
    text: 'dobar dan ',
    value: 695
  },
  {
    text: ' zdravo',
    value: 609
  },
  {
    text: 'j\u00e9j\u00e9',
    value: 720
  },
  {
    text: 'mhoro',
    value: 242
  },
  {
    text: 'acho saiin',
    value: 572
  },
  {
    text: 'ayubowan',
    value: 609
  },
  {
    text: 'dobr\u00e9 r\u00e1no',
    value: 67
  },
  {
    text: 'pozdravljen',
    value: 622
  },
  {
    text: 'dobar dan',
    value: 507
  },
  {
    text: 'an mou diom',
    value: 962
  },
  {
    text: 'buenos d\u00edas ',
    value: 427
  },
  {
    text: ' hola',
    value: 482
  },
  {
    text: 'yambo',
    value: 825
  },
  {
    text: 'god dag ',
    value: 699
  },
  {
    text: ' hej',
    value: 629
  },
  {
    text: 'guete tog ',
    value: 734
  },
  {
    text: ' gr\u00fcessech',
    value: 682
  },
  {
    text: 'chlomo',
    value: 876
  },
  {
    text: 'kumusta',
    value: 157
  },
  {
    text: "'ia ora na",
    value: 918
  },
  {
    text: 'wayi wan',
    value: 546
  },
  {
    text: 'azul',
    value: 424
  },
  {
    text: 'vanakam ',
    value: 766
  },
  {
    text: ' kalla\u00ef vannakam',
    value: 772
  },
  {
    text: 'namaskaram',
    value: 620
  },
  {
    text: '\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e48\u0e30',
    value: 405
  },
  {
    text: 'tashi delek',
    value: 811
  },
  {
    text: 'malo e lelei',
    value: 546
  },
  {
    text: 'wossoura',
    value: 472
  },
  {
    text: 'merhaba',
    value: 92
  },
  {
    text: 'dz\u00e9chbur',
    value: 922
  },
  {
    text: '\u0412\u0456\u0442\u0430\u044e',
    value: 383
  },
  {
    text: 'as salaamo alaikum',
    value: 789
  },
  {
    text: 'assalomu alaykum',
    value: 386
  },
  {
    text: 'ch\u00e0o',
    value: 892
  },
  {
    text: 'malo te mauli',
    value: 414
  },
  {
    text: 'bondjo\u00fb ',
    value: 13
  },
  {
    text: ' ay! ',
    value: 825
  },
  {
    text: ' Di\u00e8 w\u00e5de',
    value: 911
  },
  {
    text: 'hylo ',
    value: 541
  },
  {
    text: ' sut mae',
    value: 435
  },
  {
    text: 'INDIAN CREOLE bonjou',
    value: 244
  },
  {
    text: 'nangadef',
    value: 337
  },
  {
    text: 'e karo',
    value: 576
  },
  {
    text: 'sawubona',
    value: 777
  }
]

const { Chart, WordCloud, Tooltip } = qcharts
const chart = new Chart({ container: '#app' })
const colors = ['#3b90ff', '#f5cc00', '#8344e5', '#48c252']

const wordCloud = new WordCloud({
  padding: 0,
  font: 'Impact'
})
  .source(data.slice(0))
  .setDataFields({ x: 'text', y: 'value' })
  .rotate(d => (d.value % 90) - 45)
  .fontSize(d => d.value / 20)
  .style('normal', (attrs, d, i) => ({ color: colors[i % 4] }))

chart.add(wordCloud).add(new Tooltip().formatter(d => `${d.text}: ${d.value}`))

chart.render()
```

:::

### 属性

| 名称      | 说明     | 参数                      |
| --------- | -------- | ------------------------- |
| padding   | 间距     | `(val: Number)`           |
| font      | 字体     | `(val: String)`           |
| imageMask | 图片遮罩 | `(val: HTMLImageElement)` |

### 方法

| 名称     | 说明     | 参数             |
| -------- | -------- | ---------------- |
| fontSize | 字体大小 | `(fn: Function)` |
| rotate   | 旋转角度 | `(fn: Function)` |
