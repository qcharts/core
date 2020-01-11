import Base from '../base/BaseVisual'
import { Group, Label } from 'spritejs'
class Line extends Base {
  constructor(attrs) {
    super(attrs)
  }
  beforeRender() {
    console.log(this.dataset)
    return this.renderAttrs
  }
  beforeUpdate() {
    return this.renderAttrs
  }
  rendered() {
    console.log(this.$refs['innerGroup'])
  }
  render(attrs) {
    let renderAttrs = attrs
    let rect = renderAttrs.clientRect
    return (
      <Group state={'mytest'} pos={[rect.left, rect.top]} size={[rect.width, rect.height]} bgcolor={'#f00'} clipOverflow={false}>
        <Group ref="innerGroup" state={'inner'} size={[rect.width / 2, rect.height / 2]} pos={['25%', '25%']} bgcolor={'#ff0'} clipOverflow={true}>
          <Label pos={[100, 100]} text="测试代码"></Label>
        </Group>
      </Group>
    )
  }
}
export default Line
