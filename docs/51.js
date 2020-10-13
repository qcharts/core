(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[51],{230:function(t,s,_){"use strict";_.r(s);var render=function(){var t=this.$createElement;this._self._c;return this._m(0)};render._withStripped=!0;var v={components:{}},a=_(2),e=Object(a.a)(v,render,[function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("section",[_("h3",[t._v("图表介绍")]),t._v(" "),_("p",[t._v("Funnel Chart，漏斗图。")]),t._v(" "),_("h3",[t._v("attrs")]),t._v(" "),_("p",[t._v("attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("align")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'center'")]),t._v(" "),_("td",[t._v("组件位置，可选值 left、center、right")])]),t._v(" "),_("tr",[_("td",[t._v("pyramid")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("漏斗形状是否为金字塔底")])]),t._v(" "),_("tr",[_("td",[t._v("clientRect")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("{top,right,bottom,left,width,height}")]),t._v(" "),_("td",[t._v("设置了 width,heigh,优先与 bottom,right")])])])]),t._v(" "),_("h3",[t._v("style 属性")]),t._v(" "),_("p",[t._v("组件中可以自定义属性的元素如下表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("基本类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("polygon")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("漏斗区块样式")])]),t._v(" "),_("tr",[_("td",[t._v("polygon:hover")]),t._v(" "),_("td",[t._v("面")]),t._v(" "),_("td",[t._v("鼠标 hover 时漏斗区块样式")])]),t._v(" "),_("tr",[_("td",[t._v("guideText")]),t._v(" "),_("td",[t._v("文本")]),t._v(" "),_("td",[t._v("组件上的文本样式")])]),t._v(" "),_("tr",[_("td",[t._v("guideline")]),t._v(" "),_("td",[t._v("线")]),t._v(" "),_("td",[t._v("指示线样式")])])])]),t._v(" "),_("p",[t._v("使用方法可在"),_("a",{attrs:{href:"#/demo/funnel/others"}},[t._v("样式调整 demo")]),t._v("中查看，用法如下：")]),t._v(" "),_("p",[t._v("在 data 中定义元素样式，可以是 Boolean、 obj 属性或者函数，例如：")]),t._v(" "),_("pre",{pre:!0},[_("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 新建funnel组件")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" funnel = "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Funnel()\n\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置true或false来隐藏组件元素")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//隐藏漏斗上的文字")]),t._v("\nfunnel.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(", "),_("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(")\n\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//参考spritejs的attr属性来设置样式")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置指示线样式")]),t._v("\nfunnel.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"guideline"')]),t._v(", { "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(", "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#000"')]),t._v(", "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lineDash")]),t._v(": ["),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(", "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v("] })\n\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//参数polygon为绘制的polygon属性，dataOrigin为原始数据项，index是绘制索引")]),t._v("\nfunnel.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"polygon"')]),t._v(", (polygon, dataOrigin, index) => {\n  "),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 根据索引来给每个元素赋色")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (index % "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(" === "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") {\n    "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fillColor")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#59CB74"')]),t._v(" }\n  }\n  "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fillColor")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#FBD54A"')]),t._v(" }\n})\n")])])])}],!1,null,null,null);e.options.__file="website/views/doc/api/funnel-api.md";s.default=e.exports}}]);
//# sourceMappingURL=51.js.map?v=91aac3c