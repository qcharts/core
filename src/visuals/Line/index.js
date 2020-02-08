import Base from '../../base/BaseVisual'
import { Group, Label, Polyline } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
class Line extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderLines = []
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let arrLayout = layout(renderData, renderAttrs)
    let { height, width } = renderAttrs.clientRect
    //对角线长度的1.5保证会大于曲线的长度
    let maxLen = Math.sqrt(height ** 2, width ** 2) * 1.5
    let lines = arrLayout.map(item => {
      return {
        from: { points: item.points, lineDash: [4, maxLen] },
        to: { points: item.points, lineDash: [maxLen, maxLen] }
      }
    })
    return lines
  }
  beforeUpdate() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let arrLayout = layout(renderData, renderAttrs)
    let renderLines = this.renderLines
    let { height, width } = renderAttrs.clientRect
    //对角线长度的1.5保证会大于曲线的长度
    let maxLen = Math.sqrt(height ** 2, width ** 2) * 1.5
    let lines = arrLayout.map((item, i) => {
      let from = { points: item.points }
      if (renderLines[i]) {
        from = { points: renderLines[i].to.points }
      }
      if (!renderLines[i] || renderLines[i].state === 'disabled') {
        from.lineDash = [4, maxLen]
      }
      return {
        state: item.state,
        from,
        to: {
          points: item.points,
          lineDash: [maxLen, maxLen]
        }
      }
    })
    return lines
  }
  rendered() {
    console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    return {
      stack: false
    }
  }
  render(lines) {
    let { clientRect, smooth } = this.renderAttrs
    this.renderLines = lines
    return (
      <Group class="container" ref="wrap">
        <Group ref="lines" class="lines-group" pos={[clientRect.left, clientRect.top]}>
          {lines.map(line => {
            return line.state === 'disabled' ? null : <Polyline strokeColor={'#f00'} smooth={smooth} lineWidth={1} animation={{ from: line.from, to: line.to, duration: 1000 }} />
          })}
        </Group>
      </Group>
    )
  }
}
export default Line
