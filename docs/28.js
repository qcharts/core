(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[28],{157:function(s,a,n){"use strict";n.r(a);var render=function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("section",[n("h2",[s._v("Basic Pie Chart 基本饼图")]),s._v(" "),n("block-demo",{attrs:{tip:"",source:'const data = [\n  {\n    year: \'2010\',\n    population: 74\n  },\n  {\n    year: \'2011\',\n    population: 62\n  },\n  {\n    year: \'2012\',\n    population: 54\n  },\n  {\n    year: \'2013\',\n    population: 27\n  },\n  {\n    year: \'2014\',\n    population: 41\n  },\n  {\n    year: \'2015\',\n    population: 91\n  },\n  {\n    year: \'2016\',\n    population: 74\n  },\n  {\n    year: \'2017\',\n    population: 62\n  },\n  {\n    year: \'2018\',\n    population: 54\n  },\n  {\n    year: \'2019\',\n    population: 27\n  },\n  {\n    year: \'2020\',\n    population: 41\n  },\n  {\n    year: \'2021\',\n    population: 74\n  },\n  {\n    year: \'2022\',\n    population: 62\n  },\n  {\n    year: \'2023\',\n    population: 54\n  },\n  {\n    year: \'2024\',\n    population: 27\n  },\n  {\n    year: \'2025\',\n    population: 41\n  },\n  {\n    year: \'2026\',\n    population: 74\n  },\n  {\n    year: \'2027\',\n    population: 62\n  },\n  {\n    year: \'2028\',\n    population: 54\n  },\n  {\n    year: \'2029\',\n    population: 27\n  },\n  {\n    year: \'2030\',\n    population: 41\n  }\n]\n\nconst { Chart, Pie, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: \'#app\'\n})\n\nchart.source(data, {\n  row: \'year\',\n  value: \'population\',\n  text: \'year\'\n})\n\nconst pie = new Pie({\n  radius: 0.7,\n  animation: {\n    duration: 700,\n    easing: \'bounceOut\'\n    // 缓动类型\n    //["linear", "quadIn", "quadOut", "quadInOut", "cubicIn", "cubicOut", "cubicInOut", "quarticIn", "quarticOut", "quarticInOut", "quinticIn", "quinticOut", "quinticInOut", "sinusoidalIn", "sinusoidalOut", "sinusoidalInOut", "exponentialIn", "exponentialOut", "exponentialInOut", "circularIn", "circularOut", "circularInOut", "elasticIn", "elasticOut", "elasticInOut", "backIn", "backOut", "backInOut", "bounceIn", "bounceOut", "bounceInOut",]\n  }\n})\n\nconst legend = new Legend({ orient: \'vertical\', align: [\'right\', \'center\'] })\nconst toolTip = new Tooltip()\n\nchart.append([pie, legend, toolTip])\n'}},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2010'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2011'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2012'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("54")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2013'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("27")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2014'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2015'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("91")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2016'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("54")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2019'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("27")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2020'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2021'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2022'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2023'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("54")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2024'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("27")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2025'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2026'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2027'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2028'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("54")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2029'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("27")]),s._v("\n  },\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2030'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41")]),s._v("\n  }\n]\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend, Tooltip } = qcharts\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'population'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v("\n})\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("700")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("easing")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bounceOut'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 缓动类型")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//["linear", "quadIn", "quadOut", "quadInOut", "cubicIn", "cubicOut", "cubicInOut", "quarticIn", "quarticOut", "quarticInOut", "quinticIn", "quinticOut", "quinticInOut", "sinusoidalIn", "sinusoidalOut", "sinusoidalInOut", "exponentialIn", "exponentialOut", "exponentialInOut", "circularIn", "circularOut", "circularInOut", "elasticIn", "elasticOut", "elasticInOut", "backIn", "backOut", "backInOut", "bounceIn", "bounceOut", "bounceInOut",]')]),s._v("\n  }\n})\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" toolTip = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n\nchart.append([pie, legend, toolTip])\n")])])])],1)};render._withStripped=!0;var t={components:{}},r=n(2),p=Object(r.a)(t,render,[],!1,null,null,null);p.options.__file="website/views/demo/Pie/pie.md";a.default=p.exports}}]);
//# sourceMappingURL=28.js.map?v=7bbbedc