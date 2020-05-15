import Base from '../../base/BaseVisual'
import { Group, Polyline, Node, Path } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
class Wave extends Base {
  constructor(attrs) {
    super(attrs)
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    //渲染前的处理函数，返回lines,继承base

    return []
  }
  beforeUpdate() {
    //更新前的处理函数，返回lines,继承base
    return []
  }
  getRenderData() {
    //根据line的特性返回需要数据
  }
  rendered() {
    //console.log(this.$refs['wrap'])
    let clipPath = this.$refs['clipPath']
    let wave = this.$refs['clipWave']
    console.log(wave)
    wave.attr('clipPath', 'M0,0A200,200,0,1,1,400,0A200,200,0,1,1,0,0Z')
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      amplitude: 50, //振幅
      wavelength: 100 //波长
    }
  }
  render(lines) {
    let { clientRect, animation } = this.renderAttrs
    console.log(animation)
    return (
      <Group zIndex={1} class="container" pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Polyline ref="clipWave" smooth={true} strokeColor={'#37c'} points={[0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0]}></Polyline>
        <Path ref="clipPath" d={'M0,0A200,200,0,1,1,400,0A200,200,0,1,1,0,0Z'} strokeColor={'#f37'}></Path>
      </Group>
    )
  }
}
export default Wave
