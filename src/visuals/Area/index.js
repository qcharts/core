import Line from '../Line'
class Area extends Line {
  constructor() {
    super()
    this.type = 'area'
  }
  defaultAttrs() {
    return {
      stack: true,
      layer: 'area'
    }
  }
}
export default Area
