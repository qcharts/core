(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[65],{223:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("基础坐标轴")]),s._v(" "),a("p",[s._v("坐标轴组件会自己根据 chart 的 source 数据进行 layout 计算，并且进行默认布局，也会根据 chart 中的 visual 进行适配")]),s._v(" "),a("block-demo",{attrs:{tip:"基础坐标",source:"const data = [\n  { month: 'Jan', city: 'London', value: 3.9 },\n  { month: 'Feb', city: 'London', value: 4.2 },\n  { month: 'Mar', city: 'London', value: 5.7 },\n  { month: 'Apr', city: 'London', value: 8.5 },\n  { month: 'May', city: 'London', value: 11.9 },\n  { month: 'Jun', city: 'London', value: 15.2 }\n]\n\nconst { Chart, Axis } = qcharts\n\nconst chart = new Chart({\n  container: '#app',\n  size: ['100%', '100%']\n}).source(data, {\n  row: 'city',\n  value: 'value',\n  text: 'month'\n})\n\nlet xAxis = new Axis({ orient: 'bottom' })\nlet yAxis = new Axis({ orient: 'left' })\n\nchart.append(xAxis).add(yAxis)\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Axis } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n}).source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'city'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" xAxis = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v(" })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" yAxis = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n\nchart.append(xAxis).add(yAxis)\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=a(2),l=Object(n.a)(r,render,[],!1,null,null,null);l.options.__file="website/views/plugin/axis/axis-alone.md";t.default=l.exports}}]);
//# sourceMappingURL=65.js.map?v=9075a83