(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[64],{134:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Legend")]),s._v(" "),s._m(0),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const data = [{ value: 2010 }, { value: 2011 }, { value: 2012 }]\nconst { Chart, Legend } = qcharts\n\nconst chart = new Chart({ container: '#app' })\nchart.source(data, {\n  value: 'value'\n})\n\nconst l1 = new Legend({ orient: 'vertical', align: ['left', 'top'] })\nconst l2 = new Legend({ orient: 'vertical', align: ['left', 'bottom'] })\nconst l3 = new Legend({ orient: 'vertical', align: ['center', 'center'] })\nconst l4 = new Legend({ orient: 'vertical', align: ['right', 'top'] })\nconst l5 = new Legend({ orient: 'vertical', align: ['right', 'bottom'] })\n\nchart.append([l1, l2, l3, l4, l5])\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2010")]),s._v(" }, { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2011")]),s._v(" }, { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2012")]),s._v(" }]\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Legend } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l1 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l2 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l3 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l4 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l5 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n\nchart.append([l1, l2, l3, l4, l5])\n")])])]),a("h3",[s._v("属性")]),s._v(" "),s._m(1)],1)};render._withStripped=!0;var r={components:{}},e=a(1),n=Object(e.a)(r,render,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("当实例化 "),a("code",{pre:!0},[s._v("chart")]),s._v(" 后，向 "),a("code",{pre:!0},[s._v("chart")]),s._v(" 添加 "),a("code",{pre:!0},[s._v("Legend")]),s._v(" 插件即可，"),a("code",{pre:!0},[s._v("chart.append(new Legend())")]),s._v("。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("orient")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("'horizontal'")]),s._v(" "),a("td",[s._v("legend 排列方式，默认水平排列，可取值："),a("code",{pre:!0},[s._v("horizontal")]),s._v(" 、 "),a("code",{pre:!0},[s._v("vertical")])])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("align")])]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("['left', 'top']")])]),s._v(" "),a("td",[s._v("legend 绘制位置，默认靠左靠顶")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("formatter")])]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("d => d.value || d")])]),s._v(" "),a("td",[s._v("legend 文本格式化函数")])])])])}],!1,null,null,null);n.options.__file="website/views/plugin/legend/basic.md";t.default=n.exports}}]);
//# sourceMappingURL=64.js.map?v=45c3f14