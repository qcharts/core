(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[27],{255:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Donut Chart 环图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    year: '2001',\n    population: 4\n  },\n  {\n    year: '2002',\n    population: 38\n  },\n  {\n    year: '2003',\n    population: 33.7\n  },\n  {\n    year: '2004',\n    population: 30.7\n  },\n  {\n    year: '2005',\n    population: 25.8\n  },\n  {\n    year: '2006',\n    population: 31.7\n  },\n  {\n    year: '2007',\n    population: 33\n  },\n  {\n    year: '2008',\n    population: 46\n  },\n  {\n    year: '2009',\n    population: 38.3\n  },\n  {\n    year: '2010',\n    population: 2800\n  }\n]\n\nconst { Chart, Pie, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  row: 'year',\n  value: 'population',\n  //布局数据方式\n  layoutScale: 'sqrt'\n})\n\nconst pie = new Pie({\n  innerRadius: 0.4,\n  radius: 0.7,\n  clientRect: { top: '10%', left: '10%', right: '10%', bottom: '10%' }\n})\npie.style('sector', { lineWidth: 1, strokeColor: '#fff' })\npie.style('guideline', true)\npie.style('guideText', { fontSize: '12px' })\n\nconst legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })\n\nchart.append([pie, legend])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2001'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2002'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2003'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.7")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2004'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.7")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2005'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25.8")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2006'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.7")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2007'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2008'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2009'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38.3")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2010'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2800")]),s._v("\n  }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'population'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//布局数据方式")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layoutScale")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sqrt'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clientRect")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bottom")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10%'")]),s._v(" }\n})\npie.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sector'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v(" })\npie.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'guideline'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\npie.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'guideText'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'12px'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n\nchart.append([pie, legend])\n")])])])],1)};render._withStripped=!0;var n={components:{}},r=t(2),p=Object(r.a)(n,render,[],!1,null,null,null);p.options.__file="website/views/demo/Pie/dounght.md";a.default=p.exports}}]);
//# sourceMappingURL=27.js.map?v=4b1f4e8