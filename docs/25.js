(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[25],{154:function(s,n,t){"use strict";t.r(n);var render=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("section",[t("h2",[s._v("弧饼图")]),s._v(" "),t("p",[s._v("弧饼图继承至饼图，使用了不同的图形进行渲染。")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    type: '污染源',\n    count: 4454\n  },\n\n  {\n    type: '消防场所',\n    count: 1239\n  },\n\n  {\n    type: '安全生产',\n    count: 3758\n  },\n\n  {\n    type: '治安场所',\n    count: 4300\n  }\n]\n\nconst { Chart, Pie, Legend } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  row: 'type',\n  value: 'count'\n})\n\nconst pie = new Pie({\n  radius: 0.6,\n  innerRadius: 0.1,\n  startAngle: 180,\n  endAngle: 360\n})\n\nconst legend = new Legend()\n\nchart.append([pie, legend])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'污染源'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4454")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'消防场所'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1239")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'安全生产'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3758")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'治安场所'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4300")]),s._v("\n  }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'type'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'count'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("180")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("360")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend()\n\nchart.append([pie, legend])\n")])])])],1)};render._withStripped=!0;var a={components:{}},r=t(2),e=Object(r.a)(a,render,[],!1,null,null,null);e.options.__file="website/views/demo/Pie/arcPie.md";n.default=e.exports}}]);
//# sourceMappingURL=25.js.map?v=b758742