(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[14],{143:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Group Column Chart 分组柱状图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:'const data = [\n  {\n    product: "05-08",\n    year: "图例一",\n    sales: 42,\n  },\n  {\n    product: "05-08",\n    year: "图例二",\n    sales: 78.2,\n  },\n  {\n    product: "05-08",\n    year: "图例三",\n    sales: 62,\n  },\n  {\n    product: "05-09",\n    year: "图例一",\n    sales: 80,\n  },\n  {\n    product: "05-09",\n    year: "图例二",\n    sales: 108,\n  },\n  {\n    product: "05-09",\n    year: "图例三",\n    sales: 64,\n  },\n  {\n    product: "05-10",\n    year: "图例一",\n    sales: 36,\n  },\n  {\n    product: "05-10",\n    year: "图例二",\n    sales: 91,\n  },\n  {\n    product: "05-10",\n    year: "图例三",\n    sales: 56,\n  },\n]\nconst { Chart, Bar, Tooltip, Axis, Legend } = qcharts\nconst chart = new Chart({\n  container: "#app",\n})\nchart.source(data, {\n  row: "year",\n  value: "sales",\n  text: "product",\n})\nconst bar = new Bar({\n  transpose: false,\n  barWidth: 20,\n})\nconst tooltip = new Tooltip()\nconst colors = ["#F00", "#FF0", "#0FF"]\nconst legend = new Legend().style("point", (i, j, k) => {\n  return {\n    pointType: "star",\n    angles: 5,\n    innerRadius: 4,\n    outerRadius: 8,\n    fillColor: colors[k],\n    translate: [2, 5],\n  }\n})\nconst axisBottom = new Axis().style("grid", false)\nconst axisLeft = new Axis({ orient: "left" })\n  .style("axis", false)\n  .style("scale", false)\nchart.append([bar, tooltip, axisBottom, axisLeft, legend])\n'}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-08"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("42")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-08"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("78.2")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-08"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-09"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-09"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-09"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("64")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-10"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-10"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("91")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-10"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("56")]),s._v(",\n  },\n]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Bar, Tooltip, Axis, Legend } = qcharts\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n})\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"year"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sales"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"product"')]),s._v(",\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Bar({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("transpose")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("barWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#F00"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FF0"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#0FF"')]),s._v("]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend().style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"point"')]),s._v(", (i, j, k) => {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"star"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angles")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": colors[k],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("translate")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("],\n  }\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisBottom = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis().style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grid"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisLeft = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(" })\n  .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"axis"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n  .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scale"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\nchart.append([bar, tooltip, axisBottom, axisLeft, legend])\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=t(3),l=Object(n.a)(r,render,[],!1,null,null,null);l.options.__file="website/views/demo/Column/group-column.md";a.default=l.exports}}]);
//# sourceMappingURL=14.js.map?v=0fe6e63