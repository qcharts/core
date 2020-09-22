(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[53],{233:function(t,s,_){"use strict";_.r(s);var render=function(){var t=this.$createElement;this._self._c;return this._m(0)};render._withStripped=!0;var v={components:{}},r=_(2),a=Object(r.a)(v,render,[function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("section",[_("h3",[t._v("图表介绍")]),t._v(" "),_("p",[t._v("PolarBar Chart, 极坐标柱状图。")]),t._v(" "),_("h3",[t._v("attrs")]),t._v(" "),_("p",[t._v("attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("innerRadius")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("0")])]),t._v(" "),_("td",[t._v("内半径比例，0-1 之间")])]),t._v(" "),_("tr",[_("td",[t._v("radius")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("1")])]),t._v(" "),_("td",[t._v("外半径比例，0-1 之间")])]),t._v(" "),_("tr",[_("td",[t._v("groupPadAngle")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("0")])]),t._v(" "),_("td",[t._v("两组扇形之间间距,角度表示")])]),t._v(" "),_("tr",[_("td",[t._v("stack")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("false")])]),t._v(" "),_("td",[t._v("是否设置为堆叠图，二维数据无法堆叠")])]),t._v(" "),_("tr",[_("td",[t._v("stackGap")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("0")])]),t._v(" "),_("td",[t._v("堆叠图中柱子间距,单位为像素")])]),t._v(" "),_("tr",[_("td",[t._v("padAngle")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("0")])]),t._v(" "),_("td",[t._v("扇形之间间距,角度表示")])])])]),t._v(" "),_("h3",[t._v("style 属性")]),t._v(" "),_("p",[t._v("组件中可以自定义 css 属性的元素如下表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("基本类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("backgroundpillar")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("背景柱子样式")])]),t._v(" "),_("tr",[_("td",[t._v("pillar")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("柱子样式")])])])]),t._v(" "),_("p",[t._v("使用方法可在"),_("a",{attrs:{href:"#/demo/polarBar/others"}},[t._v("样式调整 demo")]),t._v("中查看，用法如下：")]),t._v(" "),_("p",[t._v("style 设置方式可以是 Boolean、 obj 属性或者函数，例如：")]),t._v(" "),_("pre",{pre:!0},[_("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 新建PolarBar组件")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" bar = "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" PolarBar()\n\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置spritejs的attr属性来设置样式")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置鼠标移入柱子时样式")]),t._v("\nbar.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'pillar'")]),t._v(",{fillColor："),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#f00'")]),t._v(", "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("opacity")]),t._v(":"),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'0.5'")]),t._v("})\n\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//attrs为元素绘制属性，data为元素对应数据，i为元素序列")]),t._v("\nbar.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'pillar'")]),t._v(", (attrs, data, i) => {\n    "),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//将偶数序列的柱子设置圆角")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (i % "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(" === "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") {\n      "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("borderRadius")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v("\n      }\n    }\n    "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("opacity")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(", "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fillColor")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'blue'")]),t._v(" }\n  })\n")])])])}],!1,null,null,null);a.options.__file="website/views/doc/api/polarBar.md";s.default=a.exports}}]);
//# sourceMappingURL=53.js.map?v=16c435a