(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[43],{166:function(s,a,t){"use strict";t.r(a);var render=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("基础气泡图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    x: 95,\n    y: 95,\n    z: 13.8,\n    name: 'BE',\n    country: 'Belgium'\n  },\n  {\n    x: 86.5,\n    y: 102.9,\n    z: 14.7,\n    name: 'DE',\n    country: 'Germany'\n  },\n  {\n    x: 80.8,\n    y: 91.5,\n    z: 15.8,\n    name: 'FI',\n    country: 'Finland'\n  },\n  {\n    x: 80.4,\n    y: 102.5,\n    z: 12,\n    name: 'NL',\n    country: 'Netherlands'\n  },\n  {\n    x: 80.3,\n    y: 86.1,\n    z: 11.8,\n    name: 'SE',\n    country: 'Sweden'\n  },\n  {\n    x: 78.4,\n    y: 70.1,\n    z: 16.6,\n    name: 'ES',\n    country: 'Spain'\n  },\n  {\n    x: 74.2,\n    y: 68.5,\n    z: 14.5,\n    name: 'FR',\n    country: 'France'\n  },\n  {\n    x: 73.5,\n    y: 83.1,\n    z: 10,\n    name: 'NO',\n    country: 'Norway'\n  },\n  {\n    x: 71,\n    y: 93.2,\n    z: 24.7,\n    name: 'UK',\n    country: 'United Kingdom'\n  },\n  {\n    x: 69.2,\n    y: 57.6,\n    z: 10.4,\n    name: 'IT',\n    country: 'Italy'\n  },\n  {\n    x: 68.6,\n    y: 20,\n    z: 16,\n    name: 'RU',\n    country: 'Russia'\n  },\n  {\n    x: 65.5,\n    y: 126.4,\n    z: 35.3,\n    name: 'US',\n    country: 'United States'\n  },\n  {\n    x: 65.4,\n    y: 50.8,\n    z: 28.5,\n    name: 'HU',\n    country: 'Hungary'\n  },\n  {\n    x: 63.4,\n    y: 51.8,\n    z: 15.4,\n    name: 'PT',\n    country: 'Portugal'\n  },\n  {\n    x: 64,\n    y: 82.9,\n    z: 31.3,\n    name: 'NZ',\n    country: 'New Zealand'\n  }\n]\ndata.sort((a, b) => a.height - b.height)\nconst { Chart, Axis, Scatter, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\n\nchart.source(data, {\n  text: 'x',\n  value: 'y'\n})\nconst scatter = new Scatter({\n  areaField: 'z',\n  labelField: 'name',\n  layoutWay: {\n    x: { min: 60, max: 96 },\n    y: { min: 0, max: 165 }\n  }\n})\n\nconst axisBottom = new Axis()\n\nconst axisLeft = new Axis({ orient: 'left' })\n\nconst tooltip = new Tooltip({\n  formatter: (data) => {\n    return `${data.name}: ${data.y}`\n  }\n})\n\nchart.append([scatter, tooltip, axisBottom, axisLeft])\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13.8")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'BE'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Belgium'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("86.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.9")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14.7")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'DE'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Germany'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80.8")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("91.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.8")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'FI'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Finland'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80.4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'NL'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Netherlands'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80.3")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("86.1")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.8")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'SE'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Sweden'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("78.4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("70.1")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16.6")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ES'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Spain'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74.2")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("68.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'FR'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'France'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("73.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("83.1")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'NO'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Norway'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("71")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("93.2")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("24.7")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'UK'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'United Kingdom'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("69.2")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("57.6")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10.4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'IT'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Italy'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("68.6")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'RU'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Russia'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("126.4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.3")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'US'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'United States'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50.8")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28.5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'HU'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hungary'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("63.4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("51.8")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'PT'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Portugal'")]),s._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("64")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("82.9")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.3")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'NZ'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'New Zealand'")]),s._v("\n  }\n]\ndata.sort("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("a, b")]),s._v(") =>")]),s._v(" a.height - b.height)\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Axis, Scatter, Legend, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'x'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'y'")]),s._v("\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scatter = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scatter({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("areaField")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'z'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("labelField")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layoutWay")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("96")]),s._v(" },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("165")]),s._v(" }\n  }\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisBottom = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis()\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisLeft = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(") =>")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.name}")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.y}")]),s._v("`")]),s._v("\n  }\n})\n\nchart.append([scatter, tooltip, axisBottom, axisLeft])\n")])])])],1)};render._withStripped=!0;var n={components:{}},r=t(2),l=Object(r.a)(n,render,[],!1,null,null,null);l.options.__file="website/views/demo/scatter/bubble2.md";a.default=l.exports}}]);
//# sourceMappingURL=43.js.map?v=bddaf0a