(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[39],{168:function(s,a,n){"use strict";n.r(a);var render=function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("section",[n("h2",[s._v("玉玦图")]),s._v(" "),n("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    type: '政法干部',\n    count: 6654\n  },\n\n  {\n    type: '平安志愿者',\n    count: 5341\n  },\n\n  {\n    type: '人民调解员',\n    count: 3546\n  },\n\n  {\n    type: '心理咨询师',\n    count: 4321\n  },\n\n  {\n    type: '法律工作者',\n    count: 3923\n  },\n\n  {\n    type: '网格员',\n    count: 5345\n  }\n].sort((a, b) => a.count - b.count)\n\nconst { Chart, RadialBar, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  row: 'type',\n  value: 'count'\n})\n\nconst radialBar = new RadialBar({\n  pos: ['-10%', '10%'],\n  min: 0,\n  max: 10000,\n  radius: 0.6,\n  innerRadius: 0.1,\n  lineWidth: 10\n})\n\n// radialBar.color(['rgba(195,51,51,1)', 'rgba(147,8,207,1)', 'rgba(79,24,217,1)', 'rgba(0,95,239,1)', 'rgba(26,216,210,1)', 'rgba(0,38,202,1)',])\n\nradialBar.style('arc', { lineCap: 'round' })\n\nconst legend = new Legend({\n  orient: 'vertical',\n  align: ['right', 'center'],\n  formatter: (name, da, i) => {\n    let d = da[0] // 也可以根据 name 查找 legend 与哪些源数据对应\n    return (\n      `${d.type}` +\n      Array(8 - d.type.length)\n        .fill(`   `)\n        .join('') +\n      `${d.count}`\n    )\n  }\n})\nlegend.style('icon', (attrs, d, i) => ({\n  marginTop: i > 0 ? 10 : 0\n}))\nlegend.style('text', (attrs, d, i) => ({\n  marginTop: i > 0 ? 10 : 0\n}))\n\nchart.append([radialBar, legend])\n"}},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'政法干部'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6654")]),s._v("\n  },\n\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'平安志愿者'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5341")]),s._v("\n  },\n\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'人民调解员'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3546")]),s._v("\n  },\n\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'心理咨询师'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4321")]),s._v("\n  },\n\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'法律工作者'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3923")]),s._v("\n  },\n\n  {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'网格员'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5345")]),s._v("\n  }\n].sort("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("a, b")]),s._v(") =>")]),s._v(" a.count - b.count)\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, RadialBar, Legend, Tooltip } = qcharts\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'type'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'count'")]),s._v("\n})\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" radialBar = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" RadialBar({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'-10%'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10%'")]),s._v("],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n})\n\n"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// radialBar.color(['rgba(195,51,51,1)', 'rgba(147,8,207,1)', 'rgba(79,24,217,1)', 'rgba(0,95,239,1)', 'rgba(26,216,210,1)', 'rgba(0,38,202,1)',])")]),s._v("\n\nradialBar.style("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'arc'")]),s._v(", { "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineCap")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'round'")]),s._v(" })\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("name, da, i")]),s._v(") =>")]),s._v(" {\n    "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" d = da["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("] "),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 也可以根据 name 查找 legend 与哪些源数据对应")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n      "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),n("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.type}")]),s._v("`")]),s._v(" +\n      "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Array")]),s._v("("),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(" - d.type.length)\n        .fill("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`   `")]),s._v(")\n        .join("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(") +\n      "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),n("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.count}")]),s._v("`")]),s._v("\n    )\n  }\n})\nlegend.style("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'icon'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\nlegend.style("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n}))\n\nchart.append([radialBar, legend])\n")])])])],1)};render._withStripped=!0;var t={components:{}},r=n(3),l=Object(r.a)(t,render,[],!1,null,null,null);l.options.__file="website/views/demo/radialBar/radialBar.md";a.default=l.exports}}]);
//# sourceMappingURL=39.js.map?v=3c9991c