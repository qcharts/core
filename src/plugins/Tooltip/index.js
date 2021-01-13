import Base from '../../base/BasePlugin'
import { throttle } from '@qcharts/utils'
import { getStyle } from '../../utils/getStyle'
class Tooltip extends Base {
  constructor(attrs) {
    super(attrs)
    this.$el = null
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    return attrs
  }
  defaultAttrs() {
    return {
      layer: 'tooltip'
    }
  }
  beforeRender() {}
  beforeUpdate() {}
  tipMousemove = throttle(
    e => {
      let maxLeft = window.innerWidth - this.$el.getBoundingClientRect().width - 5
      let maxTop = window.innerHeight - this.$el.getBoundingClientRect().height - 5
      let tarTop = e.y > maxTop ? maxTop : e.y
      let tarLeft = e.x > maxLeft ? maxLeft : e.x
      this.$el.style.left = tarLeft + 'px'
      this.$el.style.top = tarTop + 'px'
    },
    100,
    1
  )
  rendered() {
    let { colors, sort, formatter, title } = this.renderAttrs
    let styles = this.renderStyles
    this.chart.dataset.on('change', data => {
      let { option } = data
      this.$el.innerHTML = ''
      if (option.value === 'hover') {
        let arr = [].concat(this.chart.dataset).filter(item => item.state === 'hover')
        if (sort) {
          arr.sort(sort)
        }
        if (arr.length) {
          let $div = document.createElement('div')
          $div.style.cssText = 'white-space:nowrap;padding:6px 10px;background-color:rgba(0,0,0,0.5);color:#fff;'
          arr.forEach((item, ind) => {
            let text = `${item.text}：${item.value}`
            if (formatter) {
              text = formatter(item.data) || text
            }
            let style = getStyle(this, 'point', [{ 'background-color': colors[item.row] }, styles.point], [arr.map(item => item.data), ind])
            let styleText = getStyle(this, 'text', [styles.text], [arr.map(item => item.data), ind])
            let $html = document.createElement('div')
            $html.className = 'tooltip-item'
            $html.innerHTML = `<span class="icon" style="margin-right:6px;display:inline-block;width:10px;height:10px;background-color:${colors[item.row]}"></span><span class="text">${text}</span>`
            $div.append($html)
            let $icon = $html.querySelector('.icon')
            let $text = $html.querySelector('.text')
            Object.assign($icon.style, style)
            Object.assign($text.style, styleText)
          })
          if (title) {
            let str = title
            if (typeof title === 'function') {
              let formatterData = arr.map(cell => cell.data)
              str = title(formatterData)
            }
            let $title = document.createElement('div')
            $title.className = 'tooltip-title'
            $title.innerHTML = str || ''
            let styleTitle = getStyle(this, 'title', [styles.title], [arr.data])
            Object.assign($title.style, styleTitle)
            $div.prepend($title)
          }
          this.$el.appendChild($div)
        }
      } else if (option.name === 'reset') {
        this.$el.innerHTML = ''
      }
    })
    this.chart.$el.addEventListener('mousemove', this.tipMousemove)
  }
  render() {
    if (!this.$el) {
      this.$el = document.createElement('div')
      this.$el.className = 'qcharts-tooltip'
      this.$el.style.cssText = 'transition:top 300ms ease-out,left 300ms ease-out;position:absolute;pointEvents:none;pointer-events:none;font-size:14px;'
      document.body.appendChild(this.$el)
    }
  }
}
export default Tooltip
