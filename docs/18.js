(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[18],{269:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("样式调整")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:'const data = [\n  { value: 3350, label: "直接访问" },\n  { value: 1648, label: "搜索引擎" },\n  { value: 2440, label: "联盟广告" },\n  { value: 1550, label: "视频广告" },\n  { value: 3000, label: "邮件营销" },\n]\ndata.sort((a, b) => {\n  return b.value - a.value\n})\nconst { Chart, Funnel, Tooltip, Legend } = qcharts\n\nconst chart = new Chart({\n  container: "#app",\n})\n\nchart.source(data, {\n  row: "label",\n  value: "value",\n  text: "label",\n})\nconst tooltip = new Tooltip()\nconst rightFunnel = new Funnel({\n  clientRect: {\n    left: "22%",\n    top: "15%",\n    width: "25%",\n    height: "70%",\n  },\n  align: "right",\n  pyramid: true,\n})\n  .style("guideline", true)\n  .style("guideText", true)\n\nconst leftFunnel = new Funnel({\n  clientRect: {\n    left: "50%",\n    top: "15%",\n    width: "25%",\n    height: "70%",\n  },\n  align: "left",\n  pyramid: true,\n})\n  .style("guideline", true)\n  .style("guideText", true)\nconst legend = new Legend({ align: ["center", "bottom"] })\nchart.append([rightFunnel, leftFunnel, tooltip, legend])\n'}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3350")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"直接访问"')]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1648")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"搜索引擎"')]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2440")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"联盟广告"')]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1550")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"视频广告"')]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"邮件营销"')]),s._v(" },\n]\ndata.sort("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("a, b")]),s._v(") =>")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" b.value - a.value\n})\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Funnel, Tooltip, Legend } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n})\n\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"label"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"label"')]),s._v(",\n})\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" rightFunnel = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Funnel({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clientRect")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"22%"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"15%"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"25%"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"70%"')]),s._v(",\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pyramid")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n})\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideline"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideText"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" leftFunnel = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Funnel({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clientRect")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50%"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"15%"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"25%"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"70%"')]),s._v(",\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pyramid")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n})\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideline"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideText"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v("] })\nchart.append([rightFunnel, leftFunnel, tooltip, legend])\n")])])])],1)};render._withStripped=!0;var n={components:{}},r=a(2),l=Object(r.a)(n,render,[],!1,null,null,null);l.options.__file="website/views/demo/Funnel/funnel-others.md";t.default=l.exports}}]);
//# sourceMappingURL=18.js.map?v=91aac3c