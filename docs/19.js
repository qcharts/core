(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[19],{272:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Basic Gauge 仪表盘")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:"\nconst { Chart, Gauge } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nconst gauge = new Gauge({\n  min: 0,\n  max: 100,\n  percent:60,\n  lineWidth: 20,\n  tickStep: 10\n})\n\ngauge.style('title', { fontSize: 36 })\n\nchart.append(gauge)\n\nsetTimeout(() => {\n  gauge.attr({percent:45})\n}, 3000)\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Gauge } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" gauge = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Gauge({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tickStep")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n})\n\ngauge.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v(" })\n\nchart.append(gauge)\n\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setTimeout")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n  gauge.attr({"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v("})\n}, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(")\n")])])])],1)};render._withStripped=!0;var n={components:{}},e=a(2),r=Object(e.a)(n,render,[],!1,null,null,null);r.options.__file="website/views/demo/Gauge/default.md";t.default=r.exports}}]);
//# sourceMappingURL=19.js.map?v=d2f1c2b