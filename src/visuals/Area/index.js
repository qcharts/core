import Line from '../Line'
import { deepObjectMerge } from '@qcharts/utils'
class Area extends Line {
  constructor(attrs) {
    super(attrs)
    this.type = 'area'
  }
  defaultAttrs() {
    return deepObjectMerge({}, super.defaultAttrs(), {
      stack: true,
      layer: 'area'
    })
  }
}
export default Area
