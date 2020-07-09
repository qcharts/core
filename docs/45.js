(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[45],{149:function(t,_,v){"use strict";v.r(_);var render=function(){var t=this.$createElement;this._self._c;return this._m(0)};render._withStripped=!0;var e={components:{}},d=v(1),r=Object(d.a)(e,render,[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("section",[v("h3",[t._v("图表介绍")]),t._v(" "),v("p",[t._v("Pie， 饼图。")]),t._v(" "),v("h3",[t._v("attrs")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("pos")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("[10%, 10%]")])]),t._v(" "),v("td",[t._v("组件左上角偏移，可设置百分比或者像素")])]),t._v(" "),v("tr",[v("td",[t._v("size")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("['80%','80%']")])]),t._v(" "),v("td",[t._v("组件大小，可设置百分比或者像素")])]),t._v(" "),v("tr",[v("td",[t._v("startAngle")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("Math.PI * -0.5")])]),t._v(" "),v("td",[t._v("起始角度")])]),t._v(" "),v("tr",[v("td",[t._v("endAngle")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("Math.PI * 1.5")])]),t._v(" "),v("td",[t._v("结束角度")])]),t._v(" "),v("tr",[v("td",[t._v("padAngle")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("Math.PI * 1.5")])]),t._v(" "),v("td",[t._v("两扇形之间间距")])]),t._v(" "),v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0.8")])]),t._v(" "),v("td",[t._v("外半径比例")])]),t._v(" "),v("tr",[v("td",[t._v("innerRadius")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0")])]),t._v(" "),v("td",[t._v("内半径比例")])]),t._v(" "),v("tr",[v("td",[t._v("translateOnClick")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[t._v("控制扇形被点击时是否移动")])]),t._v(" "),v("tr",[v("td",[t._v("rose")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("false")])]),t._v(" "),v("td",[t._v("是否渲染玫瑰图")])]),t._v(" "),v("tr",[v("td",[t._v("animation")]),t._v(" "),v("td",[t._v("Boolean,Object")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[t._v("是否使用动画，可使用 Object 设置 spritejs 动画")])])])]),t._v(" "),v("h3",[t._v("style")]),t._v(" "),v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" pie = "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Pie()\npie.style("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(", { "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#fff'")]),t._v(" }\n")])]),t._v(" "),v("p",[t._v("组件中可以自定义 css 属性的元素如下表：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("基础类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("sector")]),t._v(" "),v("td",[t._v("面")]),t._v(" "),v("td",[t._v("扇形样式，支持 animation 属性且默认开启，设置 type 为 "),v("code",{pre:!0},[t._v("translate")]),t._v(" 或 "),v("code",{pre:!0},[t._v("slide")]),t._v(" 更换动画类型,默认为"),v("code",{pre:!0},[t._v("translate")])])]),t._v(" "),v("tr",[v("td",[t._v("sector:hover")]),t._v(" "),v("td",[t._v("面")]),t._v(" "),v("td",[t._v("鼠标经过时扇形样式")])]),t._v(" "),v("tr",[v("td",[t._v("text")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("扇形上文字样式")])]),t._v(" "),v("tr",[v("td",[t._v("text:hover")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("鼠标经过时扇形上文字样式")])]),t._v(" "),v("tr",[v("td",[t._v("guideline")]),t._v(" "),v("td",[t._v("线")]),t._v(" "),v("td",[t._v("指导线样式")])]),t._v(" "),v("tr",[v("td",[t._v("guideline:hover")]),t._v(" "),v("td",[t._v("线")]),t._v(" "),v("td",[t._v("鼠标经过时指导线样式")])]),t._v(" "),v("tr",[v("td",[t._v("guideText")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("指导文字样式")])]),t._v(" "),v("tr",[v("td",[t._v("guideText:hover")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("鼠标经过时指导文字样式")])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("标题样式，若有数字则附带数字滚动动画，支持 animation 属性设置动画，动画默认开启")])]),t._v(" "),v("tr",[v("td",[t._v("subtitle")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("副标题样式，附带旋转动画，支持 animation 属性设置动画，动画默认开启")])])])]),t._v(" "),v("p",[t._v("sector、title 和 subtitle 均支持 animation 属性，设置 Boolean 值来开启关闭动画，优先级高于 attrs 中 animation 属性，若未设置读取 attrs 中 animation 属性。设置 Object 可配置动画参数，可参考 "),v("a",{attrs:{href:"#/examples/pie-donut"}},[t._v("动态环图 demo")])]),t._v(" "),v("h4",[t._v("弧饼图")]),t._v(" "),v("p",[t._v("弧饼图继承至饼图，渲染所用的图形不同于饼图，并额外支持了 "),v("strong",[t._v("标题")]),t._v(" 与 "),v("strong",[t._v("副标题")]),t._v(" 的设置。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("基础类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("arc")]),t._v(" "),v("td",[t._v("面")]),t._v(" "),v("td",[t._v("弧线样式")])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("标题样式")])]),t._v(" "),v("tr",[v("td",[t._v("subTitle")]),t._v(" "),v("td",[t._v("文本")]),t._v(" "),v("td",[t._v("副标题样式")])])])])])}],!1,null,null,null);r.options.__file="website/views/doc/api/Pie.md";_.default=r.exports}}]);
//# sourceMappingURL=45.js.map?v=58aee08