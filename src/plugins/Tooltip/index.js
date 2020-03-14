import Base from '../../base/BasePlugin'
class Tooltip extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderList = []
    this.tipPos = [0, 0]
    this.$tooltip = null
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
    targetVisual.dataset.on('change', data => {
      let { option } = data
      if (option.name === 'col') {
        option.data.forEach(item => {
          let $label = document.createElement('div')
          $label.innerHTML = item.text
          this.$tooltip.appendChild($label)
        })
      } else if (option.name === 'reset') {
        this.$tooltip.innerHTML = ''
      }
    })
    document.body.addEventListener('mousemove', e => {
      this.$tooltip.style.left = e.x + 5 + 'px'
      this.$tooltip.style.top = e.y + 5 + 'px'
    })
  }
  tipMousemove(event, el) {
    let { x, y } = event
    this.tipPos = el.getOffsetPosition(x, y)
  }
  render() {
    if (!this.$tooltip) {
      this.$tooltip = document.createElement('div')
      this.$tooltip.className = 'qcharts-tooltip'
      this.$tooltip.style.position = 'absolute'
      this.$tooltip.style.pointerEvents = 'none'
      this.$tooltip.style.border = '1px solid #ddd'
    }
    document.body.append(this.$tooltip)
  }
}
export default Tooltip
