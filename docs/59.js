(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[59],{155:function(s,t,a){"use strict";a.r(t);var render=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h3",[s._v("Symbol 介绍")]),s._v(" "),s._m(0),s._v(" "),a("p",[s._v("配置方式为 ：")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("h4",[s._v("pointType")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),a("h4",[s._v("size")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),a("h3",[s._v("示例")]),s._v(" "),a("block-demo",{attrs:{tip:"point",source:"const data = [\n  { label: 'image', category: '类别一', value: 39 },\n  { label: 'base64', category: '类别一', value: 72 },\n  { label: 'path', category: '类别一', value: 40 },\n  { label: 'circle', category: '类别一', value: 46 },\n  { label: 'triangle', category: '类别一', value: 40 },\n  { label: 'star', category: '类别一', value: 52 },\n  { label: 'rect', category: '类别一', value: 62 }\n]\n\nconst { Chart, Radar, Tooltip, Legend } = qcharts\n\nconst chart = new Chart({\n  container: '#app'\n})\nchart.source(data, {\n  row: 'category',\n  value: 'value',\n  text: 'label'\n})\n\nconst radar = new Radar()\nconst pointObj = {\n  image: {\n    pointType: 'https://s0.ssl.qhres.com/static/3f2adfd6acc2e390.svg',\n    size: [15, 20]\n  },\n  base64: {\n    pointType:\n      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB+CAMAAADyU9RSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkREMTE2MjNERjQ3NjExRTlCMjMxQjdBN0QyMUMwQUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkREMTE2MjNFRjQ3NjExRTlCMjMxQjdBN0QyMUMwQUFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REQxMTYyM0JGNDc2MTFFOUIyMzFCN0E3RDIxQzBBQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REQxMTYyM0NGNDc2MTFFOUIyMzFCN0E3RDIxQzBBQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CbbmAAAAAPFBMVEX+ZUj8ZUj9Zkn9Zkj9ZEj9ZUn8ZEj+ZUn7ZEj+Zkj8ZUf9ZEf+ZUf9ZUf9Zkf8ZUn+ZEj8ZEf9ZUgAAADk7rfyAAAAFHRSTlP/////////////////////////AE9P5xEAAAHJSURBVHja7NrZcsMgDAVQgY2XLE17+f9/7UOnD5l4XJDEzZRBH5AzUgyIRTI1ZHBHEbkcuJx0zWFwbtzE5YArkwtYmJxg5xYTTC5yOfTOBS4nXA487srlwOXWN2T3oHEJuk/Tkh0G58GFHy6ROECZno6LXA49c4DWU3HLr5Yo3MzNDu/iZgK3Qp2emJLrnZubcwJ9emJLrj03P3NLY+4OQ3pirCUQm3J4iY64V62qu3XgalY9sQzx+nKKg1bhVXEbYPTEITeUnwuIC1a8OBRynygLB25CTQi0HATaCFMpd09RLvAJuUQccLPX75/a8Tk7LGsb6H5SzPTlmFDhpxKimQp1X+Z19rb+GneTciRs6mH+qLYm46yyu2GFc+buhBVP0bsLVrEATebVoG69Wx20mtU8GAtZ2zycjPtbi9bow9I3KBq/G7XxO26iG3If1C76uJzcDVfLHdDB6ONulslcasst3JOHrNr6/JtDqqwdBQ5c5HKE88zE5bL6r7NykcGlrq8tsm5KyeP+7mzaJHHku9f8Fi53ygmXi9wHJJmbHfklVefcyuUCvZjMJ4W5/kWAkcuD8+ImLhek52JuG5VTLsuDG1xZfAswAIsT9uuvHsgMAAAAAElFTkSuQmCC',\n    size: 20\n  },\n  path: {\n    pointType: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',\n    scale: 0.4\n  },\n  circle: {\n    pointType: 'circle',\n    size: 5\n  },\n  triangle: {\n    pointType: 'triangle',\n    size: 5\n  },\n  star: {\n    pointType: 'star',\n    size: 5\n  },\n  rect: {\n    pointType: 'rect',\n    size: [5, 5]\n  }\n}\n\nradar.style('point', (d, data, i) => {\n  return pointObj[data.label]\n})\n\nconst legend = new Legend({ align: ['center', 'bottom'] })\nchart.append([radar, legend])\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'image'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'base64'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("72")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'path'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'circle'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'triangle'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("52")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rect'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'类别一'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v(" }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Radar, Tooltip, Legend } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n})\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'category'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" radar = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Radar()\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pointObj = {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://s0.ssl.qhres.com/static/3f2adfd6acc2e390.svg'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("]\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("base64")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(":\n      "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB+CAMAAADyU9RSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkREMTE2MjNERjQ3NjExRTlCMjMxQjdBN0QyMUMwQUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkREMTE2MjNFRjQ3NjExRTlCMjMxQjdBN0QyMUMwQUFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REQxMTYyM0JGNDc2MTFFOUIyMzFCN0E3RDIxQzBBQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REQxMTYyM0NGNDc2MTFFOUIyMzFCN0E3RDIxQzBBQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CbbmAAAAAPFBMVEX+ZUj8ZUj9Zkn9Zkj9ZEj9ZUn8ZEj+ZUn7ZEj+Zkj8ZUf9ZEf+ZUf9ZUf9Zkf8ZUn+ZEj8ZEf9ZUgAAADk7rfyAAAAFHRSTlP/////////////////////////AE9P5xEAAAHJSURBVHja7NrZcsMgDAVQgY2XLE17+f9/7UOnD5l4XJDEzZRBH5AzUgyIRTI1ZHBHEbkcuJx0zWFwbtzE5YArkwtYmJxg5xYTTC5yOfTOBS4nXA487srlwOXWN2T3oHEJuk/Tkh0G58GFHy6ROECZno6LXA49c4DWU3HLr5Yo3MzNDu/iZgK3Qp2emJLrnZubcwJ9emJLrj03P3NLY+4OQ3pirCUQm3J4iY64V62qu3XgalY9sQzx+nKKg1bhVXEbYPTEITeUnwuIC1a8OBRynygLB25CTQi0HATaCFMpd09RLvAJuUQccLPX75/a8Tk7LGsb6H5SzPTlmFDhpxKimQp1X+Z19rb+GneTciRs6mH+qLYm46yyu2GFc+buhBVP0bsLVrEATebVoG69Wx20mtU8GAtZ2zycjPtbi9bow9I3KBq/G7XxO26iG3If1C76uJzcDVfLHdDB6ONulslcasst3JOHrNr6/JtDqqwdBQ5c5HKE88zE5bL6r7NykcGlrq8tsm5KyeP+7mzaJHHku9f8Fi53ygmXi9wHJJmbHfklVefcyuUCvZjMJ4W5/kWAkcuD8+ImLhek52JuG5VTLsuDG1xZfAswAIsT9uuvHsgMAAAAAElFTkSuQmCC'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("circle")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'circle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("triangle")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'triangle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("star")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rect'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("]\n  }\n}\n\nradar.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(", (d, data, i) => {\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" pointObj[data.label]\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legend = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\nchart.append([radar, legend])\n")])])])],1)};render._withStripped=!0;var r={components:{}},n=a(2),e=Object(n.a)(r,render,[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Symbol(符号)，qcharts 中的"),t("strong",[this._v("点")]),this._v("属性配置，如折线图和雷达图中的点属性。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// visual为图表实例")]),s._v("\nvisual.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointType")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" })\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("qcharts 中 point 使用面绘制，因此，point 可配置属性除 "),t("a",{attrs:{href:"#/doc/apiinfo"}},[this._v("api 简介")]),this._v(" 中基本的面属性外，还有自己独有的可配置属性："),t("code",{pre:!0},[this._v("pointType")]),this._v("与"),t("code",{pre:!0},[this._v("size")]),this._v("。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("pointType")]),this._v(" 为"),t("code",{pre:!0},[this._v("String")]),this._v("类型，用于设置点的样式，可选项有以下 5 种：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("可选项")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("url 地址或者 base64")]),s._v(" "),a("td",[s._v("使用图片作为 point")])]),s._v(" "),a("tr",[a("td",[s._v("矢量路径")]),s._v(" "),a("td",[s._v("使用矢量路径作为 point")])]),s._v(" "),a("tr",[a("td",[s._v("circle")]),s._v(" "),a("td",[s._v("圆形(默认值)")])]),s._v(" "),a("tr",[a("td",[s._v("triangle")]),s._v(" "),a("td",[s._v("三角形")])]),s._v(" "),a("tr",[a("td",[s._v("rect")]),s._v(" "),a("td",[s._v("矩形")])]),s._v(" "),a("tr",[a("td",[s._v("star")]),s._v(" "),a("td",[s._v("五角星")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("size")]),this._v(" 为 "),t("code",{pre:!0},[this._v("Number")]),this._v(" 或者 "),t("code",{pre:!0},[this._v("Array")]),this._v(" 类型，用于设置点的大小，默认值[3,3],有以下两点需要注意：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("当 pointType 为 image 时，图片会根据 size 进行拉伸处理。")]),this._v(" "),t("li",[this._v("当 pointType 为 path 时，"),t("strong",[this._v("矢量图形设置 size 属性可能会发生裁剪")]),this._v("，可以通过"),t("code",{pre:!0},[this._v("scale")]),this._v("属性来进行保真缩放。")])])}],!1,null,null,null);e.options.__file="website/views/doc/plugins/Symbol.md";t.default=e.exports}}]);
//# sourceMappingURL=59.js.map?v=2dbd270