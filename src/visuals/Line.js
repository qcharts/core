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
    return <Group pos={[100, 100]} size={[100, 100]} bgcolor={'#f00'} clipOverflow={false}></Group>
  }
}
export default Line
