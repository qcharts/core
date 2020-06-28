(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[57],{86:function(s,a,r){"use strict";r.r(a);var render=function(){var s=this.$createElement;this._self._c;return this._m(0)};render._withStripped=!0;var t={components:{}},e=r(1),p=Object(e.a)(t,render,[function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("section",[r("h1",[s._v("Chart")]),s._v(" "),r("p",[s._v("创建 Chart 的方式如下：")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Chart()\n")])]),s._v(" "),r("p",[s._v("创建并返回一个 chart 实例。")]),s._v(" "),r("h2",[s._v("图表结构")]),s._v(" "),r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:"http://p6.qhimg.com/t0137055a27f367470b.png",alt:"chart-structure",height:"400"}})]),s._v(" "),r("h2",[s._v("绘制图表")]),s._v(" "),r("p",[s._v("绘制图表与添加插件的方法均为："),r("code",{pre:!0},[s._v("chart.append(/* visual 实例 或者 plugin 实例 */)")]),s._v("。")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Chart()\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Pie()\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Tooltip()\n\nchart.append(pie).add(tootip)\n")])]),s._v(" "),r("p",[s._v("在 "),r("code",{pre:!0},[s._v("qcharts")]),s._v(" 中将传统的图表类型（如："),r("code",{pre:!0},[s._v("pie")]),s._v(" 和 "),r("code",{pre:!0},[s._v("line")]),s._v("）区分为 "),r("code",{pre:!0},[s._v("visual")]),s._v("，意为一种可视类型。可以在一个 "),r("code",{pre:!0},[s._v("chart")]),s._v(" 传入多个 "),r("code",{pre:!0},[s._v("visual")]),s._v(" 实例。")]),s._v(" "),r("h2",[s._v("数据更新")]),s._v(" "),r("p",[s._v("在 "),r("code",{pre:!0},[s._v("qcharts")]),s._v(" 如果数据存在更新，可以直接更新数据，如下：")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("chart.source(newData, {\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v(",\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'product'")]),s._v("\n})\n")])]),s._v(" "),r("p",[s._v("如果更新的数据中，对应的字段名称都没有改变，直接")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("chart.source(newData)\n")])])])}],!1,null,null,null);p.options.__file="website/views/doc/chart.md";a.default=p.exports}}]);
//# sourceMappingURL=57.js.map?v=d9b1db6