import Base from './Base'
import theme from '../theme/default'
export default class BasePlugin extends Base {
  constructor(attrs) {
    super(attrs)
    this.theme = theme.plugins[this.constructor.name]
  }
  get componentType() {
    return 'plugin'
  }
}
