import Base from '../../base/BasePlugin'
import { debounce } from '@qcharts/utils'
class Tooltip extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderList = []
    this.tipPos = [0, 0]
    this.$tooltip = null
    this.tipMousemove = debounce(
      e => {
        let maxLeft = window.innerWidth - this.$tooltip.getBoundingClientRect().width - 5
        let maxTop = window.innerWidth - this.$tooltip.getBoundingClientRect().height - 5
        let tarTop = e.y > maxTop ? maxTop : e.y
        let tarLeft = e.x > maxLeft ? maxLeft : e.x
        this.$tooltip.style.left = tarLeft + 'px'
        this.$tooltip.style.top = tarTop + 'px'
      },
      100,
      1
    )
  }

  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {}
  beforeUpdate() {}
  rendered() {
    let targetVisual = this.chart.visuals[0]
    let { colors, sort, formatter } = this.renderAttrs
    targetVisual.dataset.on('change', data => {
      let { option } = data
      this.$tooltip.innerHTML = ''
      if (option.value === 'hover') {
        let arr = []
        targetVisual.dataset.forEach(item => {
          if (item.state === 'hover') {
            arr.push(item)
          }
        })
        if (sort) {
          arr.sort(sort)
        }
        let $div = document.createElement('div')
        $div.style.cssText = 'white-space:nowrap;padding:6px 10px;background-color:rgba(0,0,0,0.5);color:#fff;'
        let innerHtml = ''
        arr.forEach((item, ind) => {
          let text = `${item.text}：${item.value}`
          if (formatter) {
            text = formatter(item.data) || text
          }
          let html = `<div class="tooltip-item"><span class="icon" style="margin-right:6px;display:inline-block;width:10px;height:10px;background-color:${colors[ind]}"></span><span class="text">${item.text}：${item.value}</span></div>`
          innerHtml += html
        })
        $div.innerHTML = innerHtml
        this.$tooltip.appendChild($div)
      } else if (option.name === 'reset') {
        this.$tooltip.innerHTML = ''
      }
    })
    document.body.addEventListener('mousemove', this.tipMousemove)
  }
  render() {
    if (!this.$tooltip) {
      this.$tooltip = document.createElement('div')
      this.$tooltip.className = 'qcharts-tooltip'
      this.$tooltip.style.cssText = 'transition:top 300ms ease-out,left 300ms ease-out;position:absolute;pointEvents:none;pointer-events:none;font-size:14px;'
    }
    document.body.append(this.$tooltip)
  }
}
export default Tooltip
