(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[17],{123:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Funnel Chart 基础漏斗图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:'const data = [\n  { value: 3721, label: "浏览网站" },\n  { value: 3006, label: "放入购入车" },\n  { value: 2505, label: "生成订单" },\n  { value: 2151, label: "支付订金" },\n  { value: 1782, label: "完成订单" },\n  { value: 1503, label: "完成交易" },\n  { value: 1204, label: "未完成交易" },\n]\n\nconst { Chart, Funnel, Tooltip, Legend } = qcharts\n\nconst chart = new Chart({\n  container: "#app",\n})\n\nchart.source(data, {\n  row: "label",\n  value: "value",\n  text: "label",\n})\nconst tooltip = new Tooltip()\nconst funnel = new Funnel({\n  clientRect: {\n    left: "25%",\n    top: "10%",\n    width: "50%",\n    height: "80%",\n  },\n  align: "center",\n  formatter: (d) => `${d.value}`,\n})\n  .style("guideline", true)\n  .style("guideText", true)\n  .style("polygon:hover", (polygon, dataOrigin, index) => {\n    return { opacity: 0.5 }\n  })\nconst legend = new Legend()\nchart.append([funnel, tooltip, legend])\n'}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3721")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"浏览网站"')]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3006")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"放入购入车"')]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2505")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"生成订单"')]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2151")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"支付订金"')]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1782")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"完成订单"')]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1503")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"完成交易"')]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1204")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"未完成交易"')]),s._v(" },\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Funnel, Tooltip, Legend } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"label"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"label"')]),s._v(",\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" funnel = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Funnel({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clientRect")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"25%"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10%"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50%"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"80%"')]),s._v(",\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(") =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v(",\n})\n  .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideline"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n  .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideText"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n  .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygon:hover"')]),s._v(", (polygon, dataOrigin, index) => {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("opacity")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(" }\n  })\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend()\nchart.append([funnel, tooltip, legend])\n")])])])],1)};render._withStripped=!0;var n={components:{}},r=t(2),l=Object(r.a)(n,render,[],!1,null,null,null);l.options.__file="website/views/demo/Funnel/funnel-default.md";a.default=l.exports}}]);
//# sourceMappingURL=17.js.map?v=7bbbedc
