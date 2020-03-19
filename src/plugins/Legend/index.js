import Base from '../../base/BasePlugin'
import { debounce } from '@qcharts/utils'
class Legend extends Base {
  constructor(attrs) {
    super(attrs)
    this.$el = null
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    attrs.clientRect = {
      bottom: 0,
      width: '100%',
      left: 0,
      right: ''
    }
    return attrs
  }
  defaultAttrs() {
    return {}
  }
  beforeRender() {
    //let dataset = this.dataset
    return this.dataset.rows
  }
  itemClick() {
    console.log(click)
  }
  beforeUpdate() {}

  rendered() {
    let items = this.$el.querySelectorAll('.legend-item')
    let dataset = this.dataset
    let $el = this.$el
    $el.addEventListener(
      'click',
      e => {
        let target = e.target
        let $dom = getParent($el, target, '.legend-item')
        if ($dom) {
          let ind = $dom.getAttribute('data-id')
          let state = dataset.rows[ind].state
          dataset.rows[ind].state = state === 'disabled' ? 'default' : 'disabled'
        }
        this.render(dataset.rows)
      },
      false
    )
  }
  render(arr) {
    if (arr) {
      let { colors, clientRect } = this.renderAttrs
      let { left, top, width, height, right, bottom } = clientRect
      if (!this.$el) {
        this.$el = document.createElement('div')
        this.$el.className = 'qcharts-legend'
        this.$el.style.cssText = `text-align:center;position:absolute;font-size:12px;left:${left};top:${top};width:${width};height:${height};right:${right};bottom:${bottom}`
        this.chart.$el.appendChild(this.$el)
      }
      let html = ''
      arr.forEach((row, ind) => {
        let state = this.dataset.rows[ind].state
        let curColor = state !== 'disabled' ? colors[ind] : '#ddd'
        html += `<div style="cursor:pointer;display:inline-block;padding:0 4px" class="legend-item" data-id="${ind}"><span class="icon" style="margin-right:6px;display:inline-block;width:10px;height:10px;background-color:${curColor}"></span><span class="text" style="color:#666">${row.name}</span></div>`
      })
      this.$el.innerHTML = html
    }
  }
}
function getParent(wrap, dom, selector) {
  let arr = wrap.querySelectorAll(selector)
  if (dom === wrap) {
    return
  } else if ([].indexOf.call(arr, dom) !== -1) {
    return dom
  } else {
    return getParent(wrap, dom.parentNode, selector)
  }
}
export default Legend
