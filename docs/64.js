(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[64],{113:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this.$createElement;this._self._c;return this._m(0)};render._withStripped=!0;var r={components:{}},n=a(3),e=Object(n.a)(r,render,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h3",[s._v("主题")]),s._v(" "),a("p",[s._v("Qcharts 几乎所有的样式都在一个独立的配置文件中，通过修改这个配置文件，可以让 Qcharts 进行全局换肤，修改方式如下：")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { theme } = qcharts\ntheme.set({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colors")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#71dac7'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#d57a77'")]),s._v("],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visuals")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Line")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//折线图")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("styles")]),s._v(": {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("point")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(" }\n      },\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sttrs")]),s._v(": {}\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Area")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//面积图")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("styles")]),s._v(": {},\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sttrs")]),s._v(": {}\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Bar")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//柱状图")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("styles")]),s._v(": {},\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sttrs")]),s._v(": {}\n    }\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//...")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 富矿提示")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Tooltip")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("styles")]),s._v(": {},\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {}\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 坐标轴")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Axis")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("styles")]),s._v(": {},\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {}\n    }\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//...")]),s._v("\n  }\n})\n")])]),s._v(" "),a("p",[s._v("通过 "),a("code",{pre:!0},[s._v("qcharts.theme")]),s._v(" 可以获取到默认的全局 theme 配置，方便对属性进行查看修改")]),s._v(" "),a("img",{attrs:{src:"https://p0.ssl.qhimg.com/t018869aae1d36f086b.jpg",width:"572"}}),s._v(" "),a("p",[s._v("也可以单独设置某个组件的样式,单独通过 style 设置的优先级高于统一 theme 设置")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" line = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Line()\nline.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angles")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outerRadius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v(" })\nline.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point:hover'")]),s._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f0f'")]),s._v(" })\n")])])])}],!1,null,null,null);e.options.__file="website/views/doc/theme.md";t.default=e.exports}}]);
//# sourceMappingURL=64.js.map?v=5b5634e