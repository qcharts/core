import Base from './Base'
import theme from '../theme/default'
import { emptyObject, deepObjectMerge } from '@qcharts/utils'
import filterClone from 'filter-clone'
export default class BaseVisual extends Base {
  constructor(attrs) {
    super(attrs)
    this.theme = theme.visuals[this.constructor.name]
    //如果当前对象设置了theme，不继承theme
    this.theme.set = (obj) => {
      if (this.theme === theme.visuals[this.constructor.name]) {
        this.theme = filterClone(this.theme)
      }
      this.theme = deepObjectMerge(this.theme, obj)
    }
  }
  get componentType() {
    return 'visual'
  }
}
