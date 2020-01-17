import Base from '../../base/BaseVisual'
import { Group, Label, Polyline } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
class Line extends Base {
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
    let renderData = this.dataset[renderAttrs.layoutBy]
    let lines = layout(renderData, renderAttrs)
    return lines
  }
  beforeUpdate() {
    return this.renderAttrs
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
    console.log(lines)
    return (
      <Group class="container" ref="wrap">
        <Group ref="lines" class="lines-group">
          {lines.map(line => {
            return <Polyline strokeColor={'#f00'} lineWidth={1} points={line.points} />
          })}
        </Group>
        <Label class="label" pos={[100, 100]} text="折线图"></Label>
      </Group>
    )
  }
}
export default Line
