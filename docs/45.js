(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[45],{166:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("散点图数据更新")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    gender: 'female',\n    height: 167.6,\n    weight: 68.8,\n  },\n  {\n    gender: 'female',\n    height: 159.5,\n    weight: 50.6,\n  },\n  {\n    gender: 'female',\n    height: 175,\n    weight: 82.5,\n  },\n  {\n    gender: 'female',\n    height: 166.8,\n    weight: 57.2,\n  },\n  {\n    gender: 'male',\n    height: 181.6,\n    weight: 75.5,\n  },\n  {\n    gender: 'male',\n    height: 176.5,\n    weight: 73,\n  },\n  {\n    gender: 'male',\n    height: 175,\n    weight: 70.2,\n  },\n  {\n    gender: 'male',\n    height: 174,\n    weight: 73.4,\n  },\n]\n\nconst data2 = [\n  {\n    gender: 'female',\n    height: 155.8,\n    weight: 53.6,\n  },\n  {\n    gender: 'female',\n    height: 170,\n    weight: 59,\n  },\n  {\n    gender: 'female',\n    height: 159.1,\n    weight: 47.6,\n  },\n\n  {\n    gender: 'male',\n    height: 177.8,\n    weight: 64.1,\n  },\n  {\n    gender: 'male',\n    height: 180.3,\n    weight: 83.2,\n  },\n  {\n    gender: 'male',\n    height: 160.3,\n    weight: 83.2,\n  },\n]\n\nconst { Chart, Axis, Scatter, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app',\n})\nchart.source(data, {\n  row: 'gender',\n  text: 'height',\n  value: 'weight',\n})\n\nconst scatter = new Scatter({\n  showGuideLine: true,\n})\n\nconst axisBottom = new Axis()\n\nconst axisLeft = new Axis({ orient: 'left' })\n\nconst legend = new Legend({ align: ['center', 'bottom'] })\n\nchart.append([axisBottom, axisLeft, legend, scatter])\n\nlet count = 1\nconst inter = setInterval(() => {\n  if (count%2 ===0) {\n    chart.source(data2)\n  } else {\n    chart.source(data)\n  }\n  count+=1\n}, 5000)\n\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("167.6")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("68.8")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("159.5")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50.6")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("175")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("82.5")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("166.8")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("57.2")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("181.6")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("75.5")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("176.5")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("73")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("175")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("70.2")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("174")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("73.4")]),s._v(",\n  },\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data2 = [\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("155.8")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("53.6")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("170")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("59")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("159.1")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("47.6")]),s._v(",\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("177.8")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("64.1")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("180.3")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("83.2")]),s._v(",\n  },\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gender")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("160.3")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("83.2")]),s._v(",\n  },\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Axis, Scatter, Legend, Tooltip } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n})\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gender'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'height'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'weight'")]),s._v(",\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scatter = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scatter({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("showGuideLine")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisBottom = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis()\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisLeft = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n\nchart.append([axisBottom, axisLeft, legend, scatter])\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" count = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" inter = setInterval("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (count%"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" ==="),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n    chart.source(data2)\n  } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n    chart.source(data)\n  }\n  count+="),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n}, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5000")]),s._v(")\n\n")])])])],1)};render._withStripped=!0;var n={components:{}},r=a(2),e=Object(r.a)(n,render,[],!1,null,null,null);e.options.__file="website/views/demo/scatter/scatter_update.md";t.default=e.exports}}]);
//# sourceMappingURL=45.js.map?v=984a369