(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[22],{140:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Line Chart 基础折线图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  { date: '05-01', catgory: '图例一', sales: 15.2 },\n  { date: '05-02', catgory: '图例一', sales: 39.2 },\n  { date: '05-03', catgory: '图例一', sales: 31.2 },\n  { date: '05-04', catgory: '图例一', sales: 65.2 },\n  { date: '05-05', catgory: '图例一', sales: 55.2 },\n  { date: '05-06', catgory: '图例一', sales: 75.2 },\n  { date: '05-07', catgory: '图例一', sales: 95.2 },\n  { date: '05-08', catgory: '图例一', sales: 100 }\n]\n\nconst { Chart, Line, Legend, Tooltip, Axis } = qcharts\nconst chart = new Chart({\n  container: '#app'\n})\nchart.source(data, {\n  row: 'catgory',\n  value: 'sales',\n  text: 'date'\n})\nconst line = new Line()\nconst axisBottom = new Axis()\nconst toolTip = new Tooltip()\nconst legend = new Legend()\nconst axisLeft = new Axis({ orient: 'left' }).style('axis', false).style('scale', false)\n\nchart.append([line, axisBottom, axisLeft, toolTip, legend])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-01'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-02'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-03'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-04'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-05'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("55.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-06'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("75.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-07'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(" }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Line, Legend, Tooltip, Axis } = qcharts\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'catgory'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'date'")]),s._v("\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" line = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Line()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisBottom = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" toolTip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisLeft = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" }).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'axis'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(").style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'scale'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n\nchart.append([line, axisBottom, axisLeft, toolTip, legend])\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=t(1),e=Object(n.a)(r,render,[],!1,null,null,null);e.options.__file="website/views/demo/Line/line-default.md";a.default=e.exports}}]);
//# sourceMappingURL=22.js.map?v=f199d86