(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[30],{256:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Nightingle Rose Chart 南丁格尔玫瑰图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  { value: 335, name: '直接访问' },\n  { value: 310, name: '邮件营销' },\n  { value: 280, name: '联盟广告' },\n  { value: 254, name: '视频广告' },\n  { value: 200, name: '搜索引擎' }\n]\nconst { Chart, Pie, Tooltip, Legend } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nchart.source(data, {\n  row: 'name',\n  value: 'value'\n})\n\nconst pie = new Pie({\n  radius: 0.7,\n  pos: [0, 0],\n  size: ['80%', '100%'],\n  rose: true\n})\npie.style('guideline', true)\npie.style('guideText', { fontSize: '12px' })\n\nconst legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })\nlegend.style('icon', (attrs, d, i) => ({\n  borderRadius: 10,\n  marginTop: i > 0 ? 15 : 0\n}))\nlegend.style('text', (attrs, d, i) => ({\n  marginTop: i > 0 ? 15 : 0\n}))\n\nchart.append(pie)\nchart.append(legend)\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("335")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("310")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("280")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("254")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" }\n]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Tooltip, Legend } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rose")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n})\npie.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'guideline'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\npie.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'guideText'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'12px'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\nlegend.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'icon'")]),s._v(", (attrs, d, i) => ({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\nlegend.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", (attrs, d, i) => ({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\n\nchart.append(pie)\nchart.append(legend)\n")])])]),t("h3",[s._v("设定角度")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  { value: 335, name: '直接访问' },\n  { value: 310, name: '邮件营销' },\n  { value: 280, name: '联盟广告' },\n  { value: 254, name: '视频广告' },\n  { value: 200, name: '搜索引擎' }\n]\nconst { Chart, Pie, Axis, Tooltip, Legend } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nchart.source(data, {\n  row: 'name',\n  value: 'value'\n})\n\nconst pie = new Pie({\n  size: [360, 360],\n  radius: 1,\n  rose: true,\n  startAngle: Math.PI * 1,\n  endAngle: Math.PI * 1.5\n})\npie.style('text', true)\n\nconst legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })\nlegend.style('icon', (attrs, d, i) => ({\n  borderRadius: 10,\n  marginTop: i > 0 ? 15 : 0\n}))\nlegend.style('text', (attrs, d, i) => ({\n  marginTop: i > 0 ? 15 : 0\n}))\n\nconst axisBottom = new Axis()\nconst axisLeft = new Axis({\n  orient: 'right',\n  grid: true,\n  coord: 'polar',\n  coordPos: ['100%', '100%']\n})\n\nchart.append(pie)\nchart.append([legend, axisBottom, axisLeft])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("335")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("310")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("280")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("254")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" }\n]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Axis, Tooltip, Legend } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("360")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("360")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rose")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.5")]),s._v("\n})\npie.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\nlegend.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'icon'")]),s._v(", (attrs, d, i) => ({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\nlegend.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", (attrs, d, i) => ({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisBottom = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisLeft = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("grid")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("coord")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'polar'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("coordPos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n})\n\nchart.append(pie)\nchart.append([legend, axisBottom, axisLeft])\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=t(2),e=Object(n.a)(r,render,[],!1,null,null,null);e.options.__file="website/views/demo/Pie/rose.md";a.default=e.exports}}]);
//# sourceMappingURL=30.js.map?v=ce1424c