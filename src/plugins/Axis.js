import Base from '../../base/BasePlugin'
import { Group, Label, Polyline } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
class Aixs extends Base {
  constructor(attrs) {
    super(attrs)
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    let renderAttrs = this.renderAttrs
  }
  beforeUpdate() {
    let renderAttrs = this.renderAttrs

    return renderAttrs
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    return {
      layer: 'line'
    }
  }
  defaultStyles() {
    return {
      line: { lineWidth: 1 }
    }
  }
  render(lines) {
    let { clientRect } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    //当前主体颜色
    let colors = this.theme.colors
    this.renderLines = lines
    return (
      <Group class="container" ref="wrap">
        <Group ref="lines" class="lines-group" pos={[clientRect.left, clientRect.top]}>
          {lines.map((line, ind) => {
            let style = this.style('line')(this.dataset.rows[ind], ind)
            let lineStyle = deepObjectMerge({ strokeColor: colors[ind] }, styles.line, style)
            return line.state === 'disabled' || style === false ? null : <Polyline {...lineStyle} animation={{ from: line.from, to: line.to }} />
          })}
        </Group>
      </Group>
    )
  }
}
export default Line
