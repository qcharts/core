(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[71],{283:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("位置调整")]),s._v(" "),s._m(0),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const data = [{ value: 2010 }, { value: 2011 }, { value: 2012 }]\nconst { Chart, Legend } = qcharts\n\nconst chart = new Chart({ container: '#app' })\nchart.source(data, {\n  value: 'value'\n})\n\nconst l1 = new Legend({ orient: 'vertical', align: ['left', 'top'] })\nconst l2 = new Legend({ orient: 'vertical', align: ['left', 'center'] })\nconst l3 = new Legend({ orient: 'vertical', align: ['left', 'bottom'] })\nconst l4 = new Legend({ orient: 'vertical', align: ['center', 'top'] })\nconst l5 = new Legend({ orient: 'vertical', align: ['center', 'center'] })\nconst l6 = new Legend({ orient: 'vertical', align: ['center', 'bottom'] })\nconst l7 = new Legend({ orient: 'vertical', align: ['right', 'top'] })\nconst l8 = new Legend({ orient: 'vertical', align: ['right', 'center'] })\nconst l9 = new Legend({ orient: 'vertical', align: ['right', 'bottom'] })\n\nconst l00 = new Legend({ orient: 'vertical', align: ['25%', '25%'] })\nconst l01 = new Legend({ orient: 'vertical', align: ['75%', 130] })\nconst l02 = new Legend({ orient: 'vertical', align: ['25%', '75%'] })\nconst l03 = new Legend({ orient: 'vertical', align: ['75%', 375] })\n\nchart.append([l1, l2, l3, l4, l5, l6, l7, l8, l9, l00, l01, l02, l03])\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2010")]),s._v(" }, { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2011")]),s._v(" }, { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2012")]),s._v(" }]\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Legend } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l1 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l2 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l3 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l4 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l5 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l6 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l7 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l8 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l9 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l00 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'25%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'25%'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l01 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'75%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("130")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l02 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'25%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'75%'")]),s._v("] })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l03 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'75%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("375")]),s._v("] })\n\nchart.append([l1, l2, l3, l4, l5, l6, l7, l8, l9, l00, l01, l02, l03])\n")])])]),s._m(1),s._v(" "),s._m(2),s._v(" "),a("p",[s._v("其中，第 1 项可取值：")]),s._v(" "),s._m(3),s._v(" "),a("p",[s._v("第 2 项可取值：")]),s._v(" "),s._m(4)],1)};render._withStripped=!0;var r={components:{}},e=a(2),n=Object(e.a)(r,render,[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("通过设置 "),t("code",{pre:!0},[this._v("Legend")]),this._v(" 的 "),t("code",{pre:!0},[this._v("align")]),this._v(" 属性，可以进行位置调整。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("align")]),this._v(" 的取值")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("align")]),this._v(" 应当为一个数组。数组第 1 项控制水平方向位置，数组第 2 项控制垂直方向位置。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("left")]),s._v("、"),a("code",{pre:!0},[s._v("center")]),s._v("、"),a("code",{pre:!0},[s._v("right")]),s._v(" 分别代表着 左对齐、居中 、右对齐，此外也可设置为 "),a("strong",[a("em",[s._v("数字")])]),s._v(" 或 "),a("strong",[a("em",[s._v("百分比")])]),s._v("。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("top")]),s._v("、"),a("code",{pre:!0},[s._v("center")]),s._v("、"),a("code",{pre:!0},[s._v("bottom")]),s._v(" 分别代表着 靠顶、居中、靠底，此外也可设置为 "),a("strong",[a("em",[s._v("数字")])]),s._v(" 或 "),a("strong",[a("em",[s._v("百分比")])]),s._v("。")])}],!1,null,null,null);n.options.__file="website/views/plugin/legend/layout.md";t.default=n.exports}}]);
//# sourceMappingURL=71.js.map?v=ad0f159