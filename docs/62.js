(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[62],{131:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h3",[s._v("Point 介绍")]),s._v(" "),s._m(0),s._v(" "),a("p",[s._v("配置方式为 ：")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("h4",[s._v("pointType")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),a("h3",[s._v("示例")]),s._v(" "),a("block-demo",{attrs:{tip:"point",source:"const data = [\n  { label: 'sprite', category: '类别一', value: 39 },\n  { label: 'path', category: '类别一', value: 72 },\n  { label: 'ellipse', category: '类别一', value: 40 },\n  { label: 'rect', category: '类别一', value: 46 },\n  { label: 'triangle', category: '类别一', value: 20 },\n  { label: 'parallel', category: '类别一', value: 52 },\n  { label: 'regular', category: '类别一', value: 62 },\n  { label: 'star', category: '类别一', value: 45 }\n]\n\nconst { Chart, Radar, Tooltip, Legend } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\nchart.source(data, {\n  row: 'category',\n  value: 'value',\n  text: 'label'\n})\n\nconst radar = new Radar()\nconst pointObj = {\n  sprite: {\n    pointType: 'sprite',\n    size: [17, 26],\n    anchor: [0.5, 0.5],\n    texture: 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'\n  },\n  path: {\n    pointType: 'path',\n    d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',\n    normalize: true,\n    fillColor: '#f37',\n    lineWidth: 20,\n    scale: 0.05\n  },\n  ellipse: {\n    radiusX: 15,\n    radiusY: 10,\n    fillColor: 'green'\n  },\n  rect: {\n    normalize: true,\n    pointType: 'rect',\n    size: [15, 15],\n    fillColor: 'red'\n  },\n  triangle: {\n    normalize: true,\n    pointType: 'triangle',\n    sides: [15, 15],\n    angle: 60,\n    fillColor: '#7cc'\n  },\n  parallel: {\n    normalize: true,\n    pointType: 'parallel',\n    sides: [10, 10],\n    angle: 60,\n    rotate: 60,\n    fillColor: '#c7c'\n  },\n  regular: {\n    normalize: true,\n    pointType: 'regular',\n    edges: 7,\n    radius: 10,\n    fillColor: 'blue'\n  },\n  star: {\n    normalize: true,\n    pointType: 'star',\n    angles: 5,\n    innerRadius: 5,\n    outerRadius: 10,\n    fillColor: 'red'\n  }\n}\n\nradar\n  .style('point', (d, data, i) => {\n    return pointObj[data.label]\n  })\n  .style('section', d => ({ opacity: 0.3 }))\n\nconst legend = new Legend({ align: ['center', 'bottom'] })\nchart.append([radar, legend])\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sprite'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'path'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("72")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ellipse'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rect'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'triangle'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'parallel'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("52")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'regular'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(" }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Radar, Tooltip, Legend } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'category'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" radar = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Radar()\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pointObj = {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sprite")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sprite'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("26")]),s._v("],\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("anchor")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v("],\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("texture")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'path'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f37'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.05")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipse")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radiusX")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radiusY")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rect'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v("],\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("triangle")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'triangle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sides")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v("],\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angle")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#7cc'")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("parallel")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'parallel'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sides")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("],\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angle")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotate")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#c7c'")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("regular")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'regular'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("edges")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("star")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angles")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outerRadius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n  }\n}\n\nradar\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(", (d, data, i) => {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" pointObj[data.label]\n  })\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'section'")]),s._v(", d => ({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("opacity")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v(" }))\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\nchart.append([radar, legend])\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=a(2),e=Object(n.a)(r,render,[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Point(点)，qcharts 中的"),t("strong",[this._v("点")]),this._v("属性配置，如折线图和雷达图中的点属性。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// visual为图表实例")]),s._v("\nvisual.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(", {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ellipse '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 默认值为“ellipse ”")]),s._v("\n})\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("qcharts 中 point 使用面绘制，因此，point 可配置属性除 "),t("a",{attrs:{href:"#/doc/apiinfo"}},[this._v("api 简介")]),this._v(" 中基本的面属性外，还有自己独有的可配置属性："),t("code",{pre:!0},[this._v("pointType")]),this._v("以及各个类型对应的属性。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("pointType")]),this._v(" 为"),t("code",{pre:!0},[this._v("String")]),this._v("类型，用于设置点的样式，可选项为"),t("a",{attrs:{href:"https://spritejs.org/#/"}},[this._v("SpriteJS")]),this._v("中的 8 种基本元素：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("可选项")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("sprite")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/sprite",target:"_blank"}},[s._v("精灵元素")]),s._v("，可设置"),a("code",{pre:!0},[s._v("texture")]),s._v("属性使用图片")])]),s._v(" "),a("tr",[a("td",[s._v("path")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/path",target:"_blank"}},[s._v("路径元素")]),s._v("，它可以通过设置"),a("code",{pre:!0},[s._v("d")]),s._v("属性来绘制 SVG Path")])]),s._v(" "),a("tr",[a("td",[s._v("ellipse")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/ellipse",target:"_blank"}},[s._v("椭圆形")]),s._v("(默认值)，可以通过设置 radius，或者 radiusX 和 radiusY 属性")])]),s._v(" "),a("tr",[a("td",[s._v("rect")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/rect",target:"_blank"}},[s._v("矩形")]),s._v("，可以直接设置"),a("code",{pre:!0},[s._v("width、height")]),s._v("属性（或"),a("code",{pre:!0},[s._v("size")]),s._v("属性）")])]),s._v(" "),a("tr",[a("td",[s._v("triangle")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/triangle",target:"_blank"}},[s._v("三角形")]),s._v("，只需要设置"),a("code",{pre:!0},[s._v("sides")]),s._v("和"),a("code",{pre:!0},[s._v("angle")]),s._v("属性")])]),s._v(" "),a("tr",[a("td",[s._v("parallel")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/parallel",target:"_blank"}},[s._v("平行四边形")]),s._v("，只需要设置"),a("code",{pre:!0},[s._v("sides")]),s._v("和"),a("code",{pre:!0},[s._v("angle")]),s._v("属性")])]),s._v(" "),a("tr",[a("td",[s._v("regular")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/regular",target:"_blank"}},[s._v("正多边形")]),s._v("，edges 表示边数，radius 表示半径，offsetAngle 表示旋转角度")])]),s._v(" "),a("tr",[a("td",[s._v("star")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://spritejs.org/#/zh-cn/api/star",target:"_blank"}},[s._v("多角星")]),s._v("，angles 表示角数，innerRadius 表示内半径，outerRadius 表示外半径，offsetAngle 表示旋转角度")])])])])}],!1,null,null,null);e.options.__file="website/views/doc/plugins/Point.md";t.default=e.exports}}]);
//# sourceMappingURL=62.js.map?v=984a369