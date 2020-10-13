(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[57],{219:function(_,v,t){"use strict";t.r(v);var render=function(){var _=this.$createElement;this._self._c;return this._m(0)};render._withStripped=!0;var r={components:{}},e=t(2),a=Object(e.a)(r,render,[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("section",[t("h3",[_._v("API 简述")]),_._v(" "),t("p",[_._v("1.所有的图表都是由 "),t("code",{pre:!0},[_._v("点")]),_._v("、"),t("code",{pre:!0},[_._v("线")]),_._v("、"),t("code",{pre:!0},[_._v("面")]),_._v("、"),t("code",{pre:!0},[_._v("文字")]),_._v(" 构成，其中，Qcharts 中的"),t("code",{pre:!0},[_._v("点")]),_._v("都是由"),t("code",{pre:!0},[_._v("面")]),_._v("来绘制。即 Qcharts 中只有三种类型图形 "),t("b",[t("code",{pre:!0},[_._v("线")]),_._v("、"),t("code",{pre:!0},[_._v("面")]),_._v("、"),t("code",{pre:!0},[_._v("文字")])]),_._v("。")]),_._v(" "),t("p",[_._v("2.Qcharts 中所有的 Visual 和 Plugin，都包含属性"),t("code",{pre:!0},[_._v("attr")]),_._v("和样式"),t("code",{pre:!0},[_._v("style")]),_._v("：")]),_._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[_._v("let")]),_._v(" line = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[_._v("new")]),_._v(" Line({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[_._v("smooth")]),_._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[_._v("true")]),_._v(" })\n")])]),_._v(" "),t("p",[_._v("如上代码：在初始化折线图的时候，"),t("code",{pre:!0},[_._v("{smooth:true}")]),_._v(" 就是属性 "),t("code",{pre:!0},[_._v("attr")]),_._v("。")]),_._v(" "),t("h5",[_._v("通用属性")]),_._v(" "),t("p",[_._v("Qcharts 中，Visual 与 Plugin 有一些通用属性 attr")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("clientRect")]),_._v(" "),t("td",[_._v("位置信息")]),_._v(" "),t("td",[_._v("可以设置 top,bottom,left,right,widh,height")])]),_._v(" "),t("tr",[t("td",[_._v("animation")]),_._v(" "),t("td",[_._v("动画属性")]),_._v(" "),t("td",[_._v("可以设置 duration,easing 等")])])])]),_._v(" "),t("p",[_._v("除了属性以外，visual 和 plugin 还有"),t("code",{pre:!0},[_._v("style")])]),_._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[_._v("//point是一个比较特殊的样式，它除了面的基本属性外，它还有pointType属性，point是由Point插件来完成渲染的,详情查看 Plugin → Point")]),_._v("\nline.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[_._v("'point'")]),_._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[_._v("pointType")]),_._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[_._v("'star'")]),_._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[_._v("angles")]),_._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[_._v("5")]),_._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[_._v("innerRadius")]),_._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[_._v("5")]),_._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[_._v("outerRadius")]),_._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[_._v("10")]),_._v(" })\n")])]),_._v(" "),t("p",[_._v("如上代码：上面的代码将折线图的 point 类型设置为"),t("code",{pre:!0},[_._v("star")]),_._v("，并设置了内外半径来控制大小。")]),_._v(" "),t("p",[_._v("对于有哪些属性"),t("code",{pre:!0},[_._v("attr")]),_._v("设置，请具体参考具体的 api 文档说明，对于样式"),t("code",{pre:!0},[_._v("style")]),_._v("的设置，"),t("code",{pre:!0},[_._v("线")]),_._v("、"),t("code",{pre:!0},[_._v("面")]),_._v("、"),t("code",{pre:!0},[_._v("文字")]),_._v(" 有一些通用属性，如下：")]),_._v(" "),t("h5",[_._v("线")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("strokeColor")]),_._v(" "),t("td",[_._v("线颜色")]),_._v(" "),t("td",[_._v("#f00 , rgba(0,0,0,0.5) , transparent")])]),_._v(" "),t("tr",[t("td",[_._v("lineDash")]),_._v(" "),t("td",[_._v("虚线设置(默认不设置，不设置为实线)")]),_._v(" "),t("td",[_._v("[6,6,6] 实线部分和白线部分的大小依次是 6,6,6")])]),_._v(" "),t("tr",[t("td",[_._v("lineCap")]),_._v(" "),t("td",[_._v("线条末端绘制样式")]),_._v(" "),t("td",[_._v("'round' ['butt','round','square'] // 平直边缘、圆形线冒、正方形线冒")])]),_._v(" "),t("tr",[t("td",[_._v("lineJoin")]),_._v(" "),t("td",[_._v("两线条交汇处样式")]),_._v(" "),t("td",[_._v("'miter' ['bevel','round','miter'] //斜角、圆角、尖角")])]),_._v(" "),t("tr",[t("td",[_._v("strokeColor")]),_._v(" "),t("td",[_._v("颜色值（支持 spritejs 中所有的颜色类型）")]),_._v(" "),t("td",[_._v("#f00 , rgba(0,0,0,0.5) , transparent")])]),_._v(" "),t("tr",[t("td",[_._v("lineWidth")]),_._v(" "),t("td",[_._v("线宽(像素 px)")]),_._v(" "),t("td",[_._v("1 , 2 , 10")])]),_._v(" "),t("tr",[t("td",[_._v("opacity")]),_._v(" "),t("td",[_._v("透明度(0~1)")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("translate")]),_._v(" "),t("td",[_._v("位置变换(像素数组)")]),_._v(" "),t("td",[_._v("[-10，-10]")])]),_._v(" "),t("tr",[t("td",[_._v("display")]),_._v(" "),t("td",[_._v("展现类型'none'为不渲染")]),_._v(" "),t("td",[_._v("'','none'")])])])]),_._v(" "),t("h5",[_._v("面")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("strokeColor")]),_._v(" "),t("td",[_._v("边框颜色值")]),_._v(" "),t("td",[_._v("#f00 , rgba(0,0,0,0.5) , transparent")])]),_._v(" "),t("tr",[t("td",[_._v("fillColor")]),_._v(" "),t("td",[_._v("填充颜色值")]),_._v(" "),t("td",[_._v("#f00 , rgba(0,0,0,0.5) , transparent")])]),_._v(" "),t("tr",[t("td",[_._v("lineWidth")]),_._v(" "),t("td",[_._v("线宽(像素)")]),_._v(" "),t("td",[_._v("1 , 2 , 10")])]),_._v(" "),t("tr",[t("td",[_._v("anchor")]),_._v(" "),t("td",[_._v("坐标中心")]),_._v(" "),t("td",[_._v("[0,0]")])]),_._v(" "),t("tr",[t("td",[_._v("opacity")]),_._v(" "),t("td",[_._v("透明度(0~1)")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("translate")]),_._v(" "),t("td",[_._v("位置变换(像素数组)")]),_._v(" "),t("td",[_._v("[-10，-10]")])]),_._v(" "),t("tr",[t("td",[_._v("display")]),_._v(" "),t("td",[_._v("展现类型'none'为不渲染")]),_._v(" "),t("td",[_._v("'','none'")])])])]),_._v(" "),t("h5",[_._v("文本")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("bgcolor")]),_._v(" "),t("td",[_._v("文本背景色")]),_._v(" "),t("td",[_._v("#f00 , rgba(0,0,0,0.5) , transparent")])]),_._v(" "),t("tr",[t("td",[_._v("fillColor")]),_._v(" "),t("td",[_._v("文本颜色")]),_._v(" "),t("td",[_._v("#f00 , rgba(0,0,0,0.5) , transparent")])]),_._v(" "),t("tr",[t("td",[_._v("fontSize")]),_._v(" "),t("td",[_._v("文本大小(px)")]),_._v(" "),t("td",[_._v("12")])]),_._v(" "),t("tr",[t("td",[_._v("fontFamily")]),_._v(" "),t("td",[_._v("字体")]),_._v(" "),t("td",[_._v("'Arial'")])]),_._v(" "),t("tr",[t("td",[_._v("fontWeight")]),_._v(" "),t("td",[_._v("文本加粗")]),_._v(" "),t("td",[_._v("'bold',800,300")])]),_._v(" "),t("tr",[t("td",[_._v("anchor")]),_._v(" "),t("td",[_._v("坐标中心")]),_._v(" "),t("td",[_._v("[0,0]")])]),_._v(" "),t("tr",[t("td",[_._v("padding")]),_._v(" "),t("td",[_._v("文字到包围盒边距(px),同 css[上，右，下，左]")]),_._v(" "),t("td",[_._v("[2,4,5,6]")])]),_._v(" "),t("tr",[t("td",[_._v("opacity")]),_._v(" "),t("td",[_._v("透明度(0~1)")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("translate")]),_._v(" "),t("td",[_._v("位置变换(像素数组)")]),_._v(" "),t("td",[_._v("[-10，-10]")])]),_._v(" "),t("tr",[t("td",[_._v("display")]),_._v(" "),t("td",[_._v("展现类型'none'为不渲染")]),_._v(" "),t("td",[_._v("'','none'")])])])])])}],!1,null,null,null);a.options.__file="website/views/doc/apiinfo.md";v.default=a.exports}}]);
//# sourceMappingURL=57.js.map?v=91aac3c