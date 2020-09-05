import Base from './Base'
import theme from '../theme/default'
import { deepObjectMerge } from '@qcharts/utils'
import filterClone from 'filter-clone'
export default class BasePlugin extends Base {
  constructor(attrs) {
    super(attrs)
    this.theme = theme.plugins[this.constructorName]
    //如果当前对象设置了theme，不继承theme
    this.theme.set = obj => {
      if (this.theme === theme.plugins[this.constructorName]) {
        this.theme = filterClone(this.theme)
      }
      this.theme = deepObjectMerge({}, this.theme, obj)
    }
  }
}
