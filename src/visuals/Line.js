import Base from '../base/BaseVisual'
import { Group, Label, Polyline } from 'spritejs'

class Line extends Base {
  constructor(attrs) {
    super(attrs)
  }
  beforeRender() {
    return this.renderAttrs
  }
  beforeUpdate() {
    return this.renderAttrs
  }
  rendered() {
    console.log(this.$refs['innerGroup'])
  }
  render(attrs) {
    let renderAttrs = this.renderAttrs
    let data = this.getData()
    console.log(renderAttrs, data)
    return (
      <Group state={'mytest'}>
        <Group ref="innerGroup" state={'inner'}>
          <Label pos={[100, 100]} text="测试代码"></Label>
        </Group>
      </Group>
    )
  }
}
export default Line
