(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[28],{257:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Nested Pie Chart 嵌套饼图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  { value: 204, name: '图例一' },\n  { value: 451, name: '图例二' },\n  { value: 347, name: '图例三' },\n  { value: 256, name: '图例四' },\n\n  { value: 2790, name: '图例1' },\n  { value: 2548, name: '图例2' },\n  { value: 1350, name: '图例3' },\n  { value: 3100, name: '图例4' },\n  { value: 2340, name: '图例5' },\n  { value: 1350, name: '图例6' },\n  { value: 2450, name: '图例7' },\n  { value: 1550, name: '图例8' },\n  { value: 3450, name: '图例9' },\n  { value: 2750, name: '图例10' }\n]\n\nconst { Chart, Pie, Legend, Tooltip, theme } = qcharts\nconst colors1 = ['#5982F6', '#59CB74', '#DA65CC', '#FC6980']\nconst colors2 = ['#47A1FF', '#6CD3FF', '#A2E5FF', '#4DCCCB', '#3FDDC7', '#ADDF84', '#FBD54A', '#FFB952', '#F79452', '#E37474']\nconst colors = colors1.concat(colors2)\ntheme.set({ colors })\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  row: 'name',\n  value: 'value'\n})\n\nconst ds = chart.dataset\n\nconst pie = new Pie({\n  radius: 0.4,\n  pos: [0, 0]\n}).source(ds.selectRows(data.slice(0, 4).map(d => d.name)))\n\n//可以通过设置单个visual的主题，设置样式和属性\npie.theme.set({\n  colors: colors1,\n  attrs: {},\n  styles: {\n    guideText: { borderRadius: 2, bgcolor: 'rgba(255,255,255,0.7)' }\n  }\n})\n\nconst pie2 = new Pie({\n  innerRadius: 0.5,\n  radius: 0.7\n}).source(ds.selectRows(data.slice(4).map(d => d.name)))\n\npie2.theme.set({ colors: colors2 })\nconst legend = new Legend({ orient: 'vertical', align: ['right', 'center'] })\n\nchart.append([pie2, pie, legend])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("204")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("451")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("347")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("256")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例四'")]),s._v(" },\n\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2790")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例1'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2548")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例2'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例3'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例4'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2340")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例5'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例6'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2450")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例7'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1550")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例8'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3450")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例9'")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2750")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例10'")]),s._v(" }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend, Tooltip, theme } = qcharts\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors1 = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#5982F6'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#59CB74'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#DA65CC'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FC6980'")]),s._v("]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors2 = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#6CD3FF'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#A2E5FF'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#4DCCCB'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3FDDC7'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ADDF84'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FBD54A'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FFB952'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#F79452'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#E37474'")]),s._v("]\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = colors1.concat(colors2)\ntheme.set({ colors })\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ds = chart.dataset\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]\n}).source(ds.selectRows(data.slice("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(").map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.name)))\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//可以通过设置单个visual的主题，设置样式和属性")]),s._v("\npie.theme.set({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colors")]),s._v(": colors1,\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {},\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("styles")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideText")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(255,255,255,0.7)'")]),s._v(" }\n  }\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie2 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v("\n}).source(ds.selectRows(data.slice("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(").map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.name)))\n\npie2.theme.set({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colors")]),s._v(": colors2 })\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n\nchart.append([pie2, pie, legend])\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=t(2),e=Object(n.a)(r,render,[],!1,null,null,null);e.options.__file="website/views/demo/Pie/nest.md";a.default=e.exports}}]);
//# sourceMappingURL=28.js.map?v=60daafc