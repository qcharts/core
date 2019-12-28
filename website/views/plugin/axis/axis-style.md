## 基础坐标轴

:::demo 基础坐标

```javascript
const data = [
  { month: 'Jan', city: 'London', value: 3.9 },
  { month: 'Feb', city: 'London', value: 4.2 },
  { month: 'Mar', city: 'London', value: 5.7 },
  { month: 'Apr', city: 'London', value: 8.5 },
  { month: 'May', city: 'London', value: 11.9 },
  { month: 'Jun', city: 'London', value: 15.2 }
]

const { Chart, Axis ,Line } = qcharts

const chart = new Chart({
  container: '#app',
  size: ['100%', '100%']
}).source(data, {
  row: 'city',
  value: 'value',
  text: 'month'
})

const line = new Line().style('point',{color:'#fff'})

let xAxis = new Axis({ })
.style('label',function(attrs,data,i){
	if(i%2 === 0){
    	return false
    }else{
      if(data.text.indexOf('A')===0){
        return {
          rotate:45,
          translate:[-5,-5],
          anchor:[0,0],
          color:'#00f'
        }
      }else{
        return {color:'#f00'}
      }
    }
})
.style('scale',function(attrs,data,i){
	if(i%2 === 0){
    	return false
    }
})
let yAxis = new Axis({ orient: 'left' })

chart.add([line,xAxis,yAxis])
chart.render()
```

:::

