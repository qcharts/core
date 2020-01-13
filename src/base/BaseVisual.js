import Base from './Base'
import theme from '../theme/default'
export default class BaseVisual extends Base {
  constructor(attrs) {
    super(attrs)
    this.theme = theme.visuals[this.constructor.name]
  }
  get componentType() {
    return 'visual'
  }
}
