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
    let renderData = this.getData()[renderAttrs.layoutBy]
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
    let attrs = deepObjectMerge({}, super.defaultAttrs(), {
      stack: false
    })
    return attrs
  }
  render(lines) {
    //console.log(renderAttrs, data)
    return (
      <Group ref="wrap" state={'mytest'}>
        <Label pos={[100, 100]} text="折线图"></Label>
      </Group>
    )
  }
}
export default Line
