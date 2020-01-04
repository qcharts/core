import Base from '../base/BaseVisual'
import { Group } from 'spritejs'
class Line extends Base {
  constructor(attrs) {
    super(attrs)
  }
  created() {
    super.created()
  }
  update() {}
  render(attrs) {
    const { opacity } = this.attr()
    return (
      <Group opacity={opacity} size={[100, 100]} bgcolor={'#f00'} clipOverflow={false}>
        {console.log('abc')}
      </Group>
    )
  }
}
export default Line
