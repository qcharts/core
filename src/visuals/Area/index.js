import Line from '../Line'
class Area extends Line {
  constructor(attrs) {
    super(attrs)
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
