(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[36],{135:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("雷达图点样式")]),s._v(" "),t("block-demo",{attrs:{tip:"point",source:"const data = [\n  { label: 'sprite', category: '类别一', value: 39 },\n  { label: 'path', category: '类别一', value: 72 },\n  { label: 'ellipse', category: '类别一', value: 40 },\n  { label: 'rect', category: '类别一', value: 46 },\n  { label: 'triangle', category: '类别一', value: 20 },\n  { label: 'parallel', category: '类别一', value: 52 },\n  { label: 'regular', category: '类别一', value: 62 },\n  { label: 'star', category: '类别一', value: 45 }\n]\n\nconst { Chart, Radar, Tooltip, Legend } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\nchart.source(data, {\n  row: 'category',\n  value: 'value',\n  text: 'label'\n})\n\nconst radar = new Radar()\nconst pointObj = {\n  sprite: {\n    pointType: 'sprite',\n    anchor: [0.5, 0.5],\n    bgcolor: 'white',\n    borderWidth: 1,\n    borderRadius: 20,\n    texture: 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png',\n    textureRect: [0, 0, 19, 26],\n    textureRepeat: true\n  },\n  path: {\n    pointType: 'path',\n    d:\n      'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',\n    normalize: true,\n    fillColor: '#f37',\n    lineWidth: 20,\n    scale: 0.05\n  },\n  ellipse: {\n    normalize: true,\n    radiusX: 15,\n    radiusY: 10,\n    fillColor: 'green'\n  },\n  rect: {\n    normalize: true,\n    pointType: 'rect',\n    size: [15, 15],\n    fillColor: 'red'\n  },\n  triangle: {\n    normalize: true,\n    pointType: 'triangle',\n    sides: [15, 15],\n    angle: 60,\n    fillColor: '#7cc'\n  },\n  parallel: {\n    normalize: true,\n    pointType: 'parallel',\n    sides: [10, 10],\n    angle: 60,\n    rotate: 60,\n    fillColor: '#c7c'\n  },\n  regular: {\n    normalize: true,\n    pointType: 'regular',\n    edges: 7,\n    radius: 10,\n    fillColor: 'blue'\n  },\n  star: {\n    normalize: true,\n    pointType: 'star',\n    angles: 5,\n    innerRadius: 5,\n    outerRadius: 10,\n    fillColor: 'red'\n  }\n}\n\nradar.style('point', (d, data, i) => {\n  return pointObj[data.label]\n})\n.style('section', (d) => ({ opacity: 0.3 }))\n\nconst legend = new Legend({ align: ['center', 'bottom'] })\nchart.append([radar, legend])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sprite'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'path'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("72")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ellipse'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rect'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'triangle'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'parallel'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("52")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'regular'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(" }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Radar, Tooltip, Legend } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'category'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" radar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Radar()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pointObj = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sprite")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sprite'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("anchor")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v("],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'white'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("borderWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("texture")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("textureRect")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("19")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("26")]),s._v("],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("textureRepeat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'path'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v(":\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f37'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.05")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipse")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radiusX")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radiusY")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rect'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v("],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("triangle")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'triangle'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sides")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v("],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#7cc'")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("parallel")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'parallel'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sides")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotate")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#c7c'")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("regular")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'regular'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("edges")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("star")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angles")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n  }\n}\n\nradar.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d, data, i")]),s._v(") =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" pointObj[data.label]\n})\n.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'section'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(") =>")]),s._v(" ({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("opacity")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v(" }))\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\nchart.append([radar, legend])\n")])])])],1)};render._withStripped=!0;var r={components:{}},l=t(3),n=Object(l.a)(r,render,[],!1,null,null,null);n.options.__file="website/views/demo/radar/radar_pointSymbol.md";a.default=n.exports}}]);
//# sourceMappingURL=36.js.map?v=624bb2c