(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[20],{119:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h3",[s._v("指针调整")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("block-demo",{attrs:{tip:"",source:"\nconst { Chart, Gauge, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nconst gauge = new Gauge({\n  min: 0,\n  max: 100,\n  percent:45,\n  lineWidth: 20,\n  // 修改指针宽度\n  pointerWidth: 10,\n  tickStep: 10\n})\n\ngauge\n  .style('title', { fontSize: 36 })\n  .style('arc', { strokeColor: '#006666' })\n  .style('pointer', { fillColor: '#006666' })\n\nchart.append(gauge)\n\nsetInterval(() => {\n  const val = (Math.random() * 100).toFixed(0)\n  gauge.attr({\n    percent:val\n  })\n}, 3000)\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Gauge, Legend, Tooltip } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" gauge = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Gauge({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 修改指针宽度")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointerWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tickStep")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n})\n\ngauge\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v(" })\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'arc'")]),s._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#006666'")]),s._v(" })\n  .style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'pointer'")]),s._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#006666'")]),s._v(" })\n\nchart.append(gauge)\n\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setInterval")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" val = ("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(").toFixed("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n  gauge.attr({\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(":val\n  })\n}, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(")\n")])])])],1)};render._withStripped=!0;var n={components:{}},r=a(2),e=Object(r.a)(n,render,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("可以通过 "),a("code",{pre:!0},[s._v("pointerWidth")]),s._v(" 调整指针的宽度，值为"),a("code",{pre:!0},[s._v("Number")]),s._v("或者"),a("code",{pre:!0},[s._v("Array")]),s._v("。值若为"),a("code",{pre:!0},[s._v("Array")]),s._v("，维度与 data 的维度保持一致；如果为"),a("code",{pre:!0},[s._v("Number")]),s._v("则所有仪表盘的"),a("code",{pre:!0},[s._v("pointerWidth")]),s._v("都为相同值。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("指针支持通过 "),t("code",{pre:!0},[this._v("style('pointer')")]),this._v("对颜色及属性进行修改")])}],!1,null,null,null);e.options.__file="website/views/demo/Gauge/pointer.md";t.default=e.exports}}]);
//# sourceMappingURL=20.js.map?v=c3fe04b