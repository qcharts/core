(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[34],{276:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Nightingale Stack Chart 堆叠图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:'const data = [\n  {\n    product: "05-08",\n    year: "图例一",\n    sales: 30,\n  },\n  {\n    product: "05-08",\n    year: "图例二",\n    sales: 15,\n  },\n  {\n    product: "05-08",\n    year: "图例三",\n    sales: 20,\n  },\n  {\n    product: "05-09",\n    year: "图例一",\n    sales: 30,\n  },\n  {\n    product: "05-09",\n    year: "图例二",\n    sales: 17,\n  },\n  {\n    product: "05-09",\n    year: "图例三",\n    sales: 20,\n  },\n\n  {\n    product: "05-10",\n    year: "图例一",\n    sales: 17.57,\n  },\n  {\n    product: "05-10",\n    year: "图例二",\n    sales: 24,\n  },\n  {\n    product: "05-10",\n    year: "图例三",\n    sales: 37.54,\n  },\n\n  {\n    product: "05-11",\n    year: "图例一",\n    sales: 41,\n  },\n  {\n    product: "05-11",\n    year: "图例二",\n    sales: 28,\n  },\n  {\n    product: "05-11",\n    year: "图例三",\n    sales: 21,\n  },\n\n  {\n    product: "05-12",\n    year: "图例一",\n    sales: 14,\n  },\n  {\n    product: "05-12",\n    year: "图例二",\n    sales: 25,\n  },\n  {\n    product: "05-12",\n    year: "图例三",\n    sales: 35,\n  },\n\n  {\n    product: "05-13",\n    year: "图例一",\n    sales: 44,\n  },\n  {\n    product: "05-13",\n    year: "图例二",\n    sales: 25,\n  },\n  {\n    product: "05-13",\n    year: "图例三",\n    sales: 10,\n  },\n\n  {\n    product: "05-14",\n    year: "图例一",\n    sales: 25,\n  },\n  {\n    product: "05-14",\n    year: "图例二",\n    sales: 25,\n  },\n  {\n    product: "05-14",\n    year: "图例三",\n    sales: 10,\n  },\n  {\n    product: "05-15",\n    year: "图例一",\n    sales: 25,\n  },\n  {\n    product: "05-15",\n    year: "图例二",\n    sales: 25,\n  },\n  {\n    product: "05-15",\n    year: "图例三",\n    sales: 10,\n  },\n]\nconst { Chart, PolarBar, Tooltip, Legend } = qcharts\nconst chart = new Chart({\n  container: "#app",\n})\nchart.source(data, {\n  row: "year",\n  value: "sales",\n  text: "product",\n})\nconst bar = new PolarBar({\n  stack: true,\n  radius: 0.8,\n  groupPadAngle: 15,\n}).style("pillar", {\n  strokeColor: "#FFF",\n  lineWidth: 1,\n})\nconst tooltip = new Tooltip()\nconst legend = new Legend()\n\nchart.append([bar, tooltip, legend])\n'}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-08"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-08"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-08"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-09"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-09"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-09"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-10"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17.57")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-10"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("24")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-10"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("37.54")]),s._v(",\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-11"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-11"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-11"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(",\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-12"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-12"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-12"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(",\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-13"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("44")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-13"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-13"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-14"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-14"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-14"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-15"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例一"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-15"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例二"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"05-15"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"图例三"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n  },\n]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, PolarBar, Tooltip, Legend } = qcharts\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n})\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"year"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sales"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"product"')]),s._v(",\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bar = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PolarBar({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stack")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("groupPadAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(",\n}).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pillar"')]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FFF"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend()\n\nchart.append([bar, tooltip, legend])\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=t(2),l=Object(n.a)(r,render,[],!1,null,null,null);l.options.__file="website/views/demo/PolarBar/stack-polarBar.md";a.default=l.exports}}]);
//# sourceMappingURL=34.js.map?v=c9c582d