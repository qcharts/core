(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[47],{103:function(t,v,_){"use strict";_.r(v);var render=function(){var t=this.$createElement;this._self._c;return this._m(0)};render._withStripped=!0;var r={components:{}},s=_(1),a=Object(s.a)(r,render,[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("section",[_("h3",[t._v("图表介绍")]),t._v(" "),_("p",[t._v("Area Chart, 面积图。")]),t._v(" "),_("h3",[t._v("attrs")]),t._v(" "),_("p",[t._v("attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("pos")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("[10%, 10%]")])]),t._v(" "),_("td",[t._v("组件左上角偏移，可设置百分比或者像素")])]),t._v(" "),_("tr",[_("td",[t._v("size")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[_("code",{pre:!0},[t._v("['80%','80%']")])]),t._v(" "),_("td",[t._v("组件大小，可设置百分比或者像素")])]),t._v(" "),_("tr",[_("td",[t._v("smooth")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("曲线是否平滑")])]),t._v(" "),_("tr",[_("td",[t._v("axisGap")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("开始绘图区域与坐标轴是否有间隙")])]),t._v(" "),_("tr",[_("td",[t._v("splitNumber")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("坐标轴的分割段数，用来计算面积图的最大高度，在设置坐标轴的 splitNumber 属性时同步加上")])]),t._v(" "),_("tr",[_("td",[t._v("strack")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("是否堆叠")])])])]),t._v(" "),_("h3",[t._v("style 属性")]),t._v(" "),_("pre",{pre:!0},[_("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" area = "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Area({ "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("smooth")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(" })\narea.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'area'")]),t._v(", "),_("span",{pre:!0,attrs:{class:"hljs-function"}},[_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),_("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("attrs, data, i")]),t._v(") ")]),t._v("{\n  "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (i === "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") {\n    "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fillColor")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'transparent'")]),t._v(" }\n  }\n})\n")])]),t._v(" "),_("p",[t._v("组件中可以自定义 css 属性的元素如下表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("基础类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("guideline")]),t._v(" "),_("td",[t._v("线")]),t._v(" "),_("td",[t._v("指导线样式")])]),t._v(" "),_("tr",[_("td",[t._v("line")]),t._v(" "),_("td",[t._v("线")]),t._v(" "),_("td",[t._v("线条样式")])]),t._v(" "),_("tr",[_("td",[t._v("line:hover")]),t._v(" "),_("td",[t._v("线")]),t._v(" "),_("td",[t._v("鼠标 hover 时线条样式")])]),t._v(" "),_("tr",[_("td",[t._v("area")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("面积样式设置 （Polygon）")])]),t._v(" "),_("tr",[_("td",[t._v("area:hover")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("鼠标 hover 时面积样式 （Polygon）")])]),t._v(" "),_("tr",[_("td",[t._v("point")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("线条上标记点样式")])]),t._v(" "),_("tr",[_("td",[t._v("point:hover")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("hover 时线条上标记点样式")])])])])])}],!1,null,null,null);a.options.__file="website/views/doc/api/area-api.md";v.default=a.exports}}]);
//# sourceMappingURL=47.js.map?v=aaefbf6