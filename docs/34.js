(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[34],{173:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("自定义")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const shape =\n  'M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z'\n\nconst { Chart, Wave } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nconst wave = new Wave({\n  percent: 0.65,\n  shape: shape\n})\n// 不显示文本\nwave.style('text', false)\nchart.append(wave)\nsetTimeout(_ => {\n  wave.attr({ percent: 0.8 })\n}, 2000)\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" shape =\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Wave } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" wave = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Wave({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.65")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v(": shape\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 不显示文本")]),s._v("\nwave.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\nchart.append(wave)\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setTimeout")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("_")]),s._v(" =>")]),s._v(" {\n  wave.attr({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(" })\n}, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n")])])])],1)};render._withStripped=!0;var e={components:{}},n=t(2),c=Object(n.a)(e,render,[],!1,null,null,null);c.options.__file="website/views/demo/Wave/shape.md";a.default=c.exports}}]);
//# sourceMappingURL=34.js.map?v=7ed0cda