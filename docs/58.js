(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[58],{85:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("dataset")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("使用")]),s._v(" "),s._m(2),s._v(" "),t("block-demo",{attrs:{tip:"hideEditor",source:"const data = [\n  {\n    product: '05-08',\n    year: '图例一',\n    sales: 42\n  },\n  {\n    product: '05-08',\n    year: '图例二',\n    sales: 78.2\n  },\n  {\n    product: '05-08',\n    year: '图例三',\n    sales: 62\n  },\n  {\n    product: '05-09',\n    year: '图例一',\n    sales: 80\n  },\n  {\n    product: '05-09',\n    year: '图例二',\n    sales: 108\n  },\n  {\n    product: '05-09',\n    year: '图例三',\n    sales: 64\n  },\n  {\n    product: '05-10',\n    year: '图例一',\n    sales: 36\n  },\n  {\n    product: '05-10',\n    year: '图例二',\n    sales: 91\n  },\n  {\n    product: '05-10',\n    year: '图例三',\n    sales: 56\n  }\n]\nconst { Chart, Bar, Axis, Legend } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  row: 'year',\n  value: 'sales'\n})\n\nconst bar = new Bar({})\nconst legend = new Legend({ align: ['center', 'top'] })\nconst xAxis = new Axis()\nconst yAxis = new Axis({ orient: 'left' })\n\nchart.append([bar, legend, xAxis, yAxis])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("42")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("78.2")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-09'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-09'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-09'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("64")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-10'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-10'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("91")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-10'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("56")]),s._v("\n  }\n]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Bar, Axis, Legend } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Bar({})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" xAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" yAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n\nchart.append([bar, legend, xAxis, yAxis])\n")])])]),t("h3",[s._v("datset 的维度")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),t("h3",[s._v("按行（或按列）映射")]),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    product: '茶叶',\n    year: '2016',\n    sales: 81.2\n  },\n\n  {\n    product: '茶叶',\n    year: '2017',\n    sales: 121.2\n  },\n\n  {\n    product: '茶叶',\n    year: '2018',\n    sales: 41.2\n  },\n\n  {\n    product: '牛奶',\n    year: '2016',\n    sales: 85.2\n  },\n\n  {\n    product: '牛奶',\n    year: '2017',\n    sales: 79.6\n  },\n\n  {\n    product: '牛奶',\n    year: '2018',\n    sales: 81.2\n  },\n\n  {\n    product: '咖啡',\n    year: '2016',\n    sales: 65.2\n  },\n\n  {\n    product: '咖啡',\n    year: '2017',\n    sales: 59.6\n  },\n\n  {\n    product: '咖啡',\n    year: '2018',\n    sales: 61.2\n  },\n\n  {\n    product: '椰汁',\n    year: '2016',\n    sales: 35.2\n  },\n\n  {\n    product: '椰汁',\n    year: '2017',\n    sales: 79.6\n  },\n\n  {\n    product: '椰汁',\n    year: '2018',\n    sales: 21.2\n  }\n]\n\nconst { Chart, Bar, Line, Axis, Legend } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  row: 'year',\n  col: 'product',\n  value: 'sales'\n})\n\n{\n  const bar = new Bar({\n    size: ['80%', '30%']\n  })\n  const legend = new Legend({ align: ['center', 'default'] })\n  const xAxis = new Axis({ target: bar })\n  const yAxis = new Axis({ target: bar, orient: 'left' })\n  chart.append([bar, legend, xAxis, yAxis])\n}\n\n{\n  const bar = new Bar({\n    layoutBy: 'col',\n    pos: ['10%', '60%'],\n    size: ['80%', '30%']\n  })\n  const legend = new Legend({ layoutBy: 'col', align: ['center', 'center'] })\n  const xAxis = new Axis({ target: bar, layoutBy: 'col' })\n  const yAxis = new Axis({ target: bar, layoutBy: 'col', orient: 'left' })\n  chart.append([bar, legend, xAxis, yAxis])\n}\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'茶叶'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2016'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("81.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'茶叶'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("121.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'茶叶'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'牛奶'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2016'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'牛奶'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("79.6")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'牛奶'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("81.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'咖啡'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2016'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'咖啡'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("59.6")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'咖啡'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("61.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'椰汁'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2016'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.2")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'椰汁'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("79.6")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'椰汁'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21.2")]),s._v("\n  }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Bar, Line, Axis, Legend } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("col")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'product'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v("\n})\n\n{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Bar({\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'30%'")]),s._v("]\n  })\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'default'")]),s._v("] })\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" xAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("target")]),s._v(": bar })\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" yAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("target")]),s._v(": bar, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n  chart.append([bar, legend, xAxis, yAxis])\n}\n\n{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Bar({\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layoutBy")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'col'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'60%'")]),s._v("],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'30%'")]),s._v("]\n  })\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layoutBy")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'col'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" xAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("target")]),s._v(": bar, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layoutBy")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'col'")]),s._v(" })\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" yAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("target")]),s._v(": bar, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layoutBy")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'col'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n  chart.append([bar, legend, xAxis, yAxis])\n}\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=t(1),e=Object(n.a)(r,render,[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("qcharts 内置了 "),a("code",{pre:!0},[this._v("数据集（dataset）")]),this._v(" 用于单独管理数据，从而使得多个组件可以复用一份数据以及数据驱动组件变化，同时还可以更加自由地指定数据到视觉的映射。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[a("code",{pre:!0},[this._v("dataset")]),this._v(" 属于内置组件，无需显式地声明调用。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("dataset")]),this._v(" 需要设置数据源，同时需要指定 "),a("code",{pre:!0},[this._v("row")]),this._v("、"),a("code",{pre:!0},[this._v("value")]),this._v(" 等特殊维度属性便可完成数据处理。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("dataset")]),this._v(" 在设置数据源的同时也需要指定一些维度，才能完成数据处理。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[t("strong",[s._v("row")]),s._v(": "),t("code",{pre:!0},[s._v("行数据")]),s._v(" 划分依据字段，"),t("code",{pre:!0},[s._v("dataset")]),s._v(" 会按照 "),t("code",{pre:!0},[s._v("row")]),s._v(" 字段的值对数据进行数据分组。例如上方的柱形图中指定 "),t("code",{pre:!0},[s._v("row")]),s._v(" 为 "),t("code",{pre:!0},[s._v("year")]),s._v("，则 "),t("code",{pre:!0},[s._v("dataset")]),s._v(" 会将 "),t("code",{pre:!0},[s._v("year")]),s._v(" 相同的数据聚为一组。")]),s._v(" "),t("li",[t("strong",[s._v("col")]),s._v(": "),t("code",{pre:!0},[s._v("列数据")]),s._v(" 划分依据字段，同 "),t("code",{pre:!0},[s._v("row")]),s._v("。")]),s._v(" "),t("li",[t("strong",[s._v("value")]),s._v(": "),t("code",{pre:!0},[s._v("dataset")]),s._v(" 处理数据数值的依据字段。不设置将导致 "),t("code",{pre:!0},[s._v("dataset")]),s._v(" 无法处理数据中的数值，从而导致后续图表无法渲染，故必须设置。")]),s._v(" "),t("li",[t("strong",[s._v("text")]),s._v(": 该字段用于标记数据的文本字段。默认情况下为 "),t("code",{pre:!0},[s._v("row")]),s._v(" （或 "),t("code",{pre:!0},[s._v("col")]),s._v("） 所指定的字段。")]),s._v(" "),t("li",[t("strong",[s._v("layoutScale")]),s._v(": 该字段用于对数据进行缩放处理。默认无缩放，可以指定"),t("code",{pre:!0},[s._v("sqrt")]),s._v("、"),t("code",{pre:!0},[s._v("sqrt+n")]),s._v("（开 n 次更号）、"),t("code",{pre:!0},[s._v("pow")]),s._v("、"),t("code",{pre:!0},[s._v("pow+n")]),s._v("（n 次方）、"),t("code",{pre:!0},[s._v("log")]),s._v("、"),t("code",{pre:!0},[s._v("log2")]),s._v("、"),t("code",{pre:!0},[s._v("log10")]),s._v("等方式。\n"),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("由于 "),t("code",{pre:!0},[s._v("qcharts")]),s._v(" 中的图表以及相关插件默认都是按照 "),t("code",{pre:!0},[s._v("行数据（layoutBy='row'）")]),s._v(" 进行渲染，所以 "),t("code",{pre:!0},[s._v("row")]),s._v(" 和 "),t("code",{pre:!0},[s._v("col")]),s._v(" 在大部分场景下是重复的，只需要设置 "),t("code",{pre:!0},[s._v("row")]),s._v("。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("dataset")]),this._v(" 可以同时指定 "),a("code",{pre:!0},[this._v("row")]),this._v(" 和 "),a("code",{pre:!0},[this._v("col")]),this._v(" 分组数据，所以图表的渲染便有了 2 种模式取值：")])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[a("strong",[this._v("row")]),this._v(": 默认值，取 dataset 的 行数据。")]),this._v(" "),a("li",[a("strong",[this._v("col")]),this._v(": 取 dataset 的 列数据。")])])}],!1,null,null,null);e.options.__file="website/views/doc/dataset.md";a.default=e.exports}}]);
//# sourceMappingURL=58.js.map?v=d9b1db6