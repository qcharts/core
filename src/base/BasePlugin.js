import Base from './Base'

export default class BasePlugin extends Base {
  constructor(attrs) {
    super(attrs)
    this.theme = theme.plugins[this.constructor.name]
  }
  get componentType() {
    return 'plugin'
  }
}
