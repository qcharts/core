(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[12],{148:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Column Chart 基础柱状图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  { value: 22, label: '05-01' },\n  { value: 60, label: '05-02' },\n  { value: 56, label: '05-03' },\n  { value: 85, label: '05-04' },\n  { value: 136, label: '05-05' },\n  { value: 108, label: '05-06' },\n  { value: 64, label: '05-07' },\n  { value: 35, label: '05-08' }\n]\nconst { Chart, Bar, Tooltip, Axis, Legend } = qcharts\nconst chart = new Chart({\n  container: '#app'\n})\nchart.source(data, {\n  row: '*',\n  value: 'value',\n  text: 'label'\n})\nconst bar = new Bar({\n  animation: {\n    duration: 1000,\n    easing: 'elasticOut'\n  }\n})\nbar.style('pillar', { bgcolor: '#47A1FF' })\n// const tooltip = new Tooltip({\n//   formatter: d => `${d.label}: ${d.value}`\n// }).style('icon', { fillColor: '#47A1FF' })\n// const legend = new Legend({ align: ['center', 'bottom'] }).style('text', {\n//   text: '图例二'\n// })\nconst tooltip = new Tooltip()\nconst axisBottom = new Axis().style('grid', false)\nconst axisLeft = new Axis({ orient: 'left' }).style('axis', false).style('scale', false)\nchart.append([bar, tooltip, axisBottom, axisLeft])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("22")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-01'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-02'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("56")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-03'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-04'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("136")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-05'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-06'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("64")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-07'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(" }\n]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Bar, Tooltip, Axis, Legend } = qcharts\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'*'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v("\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Bar({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("easing")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'elasticOut'")]),s._v("\n  }\n})\nbar.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'pillar'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(" })\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// const tooltip = new Tooltip({")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   formatter: d => `${d.label}: ${d.value}`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// }).style('icon', { fillColor: '#47A1FF' })")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// const legend = new Legend({ align: ['center', 'bottom'] }).style('text', {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   text: '图例二'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// })")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisBottom = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis().style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'grid'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisLeft = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" }).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'axis'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(").style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'scale'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\nchart.append([bar, tooltip, axisBottom, axisLeft])\n")])])])],1)};render._withStripped=!0;var l={components:{}},r=t(1),n=Object(r.a)(l,render,[],!1,null,null,null);n.options.__file="website/views/demo/Column/default-column.md";a.default=n.exports}}]);
//# sourceMappingURL=12.js.map?v=45c3f14