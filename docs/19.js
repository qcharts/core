(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[19],{113:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Gauge 仪表盘")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"\nconst { Chart, Gauge } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nconst gauge = new Gauge({\n  min: 0,\n  max: 100,\n  percent:60,\n  lineWidth: 20,\n  tickStep: 10\n})\n\ngauge.style('title', { fontSize: 36 })\n\nchart.append(gauge)\n\nsetTimeout(() => {\n  gauge.attr({percent:45})\n}, 3000)\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Gauge } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" gauge = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Gauge({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tickStep")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n})\n\ngauge.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v(" })\n\nchart.append(gauge)\n\nsetTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n  gauge.attr({"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v("})\n}, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(")\n")])])])],1)};render._withStripped=!0;var n={components:{}},e=t(2),r=Object(e.a)(n,render,[],!1,null,null,null);r.options.__file="website/views/demo/Gauge/default.md";a.default=r.exports}}]);
//# sourceMappingURL=19.js.map?v=7bbbedc