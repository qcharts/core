import Base from '../../base/BaseVisual'
import { Group, Polyline, Node, Path, requestAnimationFrame } from 'spritejs'
import ellipse2path from '../../utils/ellipse2path'
import { deepObjectMerge } from '@qcharts/utils'
class Wave extends Base {
  constructor(attrs) {
    super(attrs)
    //波纹振偏移量
    this.offsetR = 50
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    let clientRect = attrs.clientRect
    let width = Math.floor(clientRect.width)
    let height = Math.floor(clientRect.height)
    attrs.center = [width / 2, height / 2]
    if (!attrs.shape) {
      attrs.shape = ellipse2path(attrs.center[0], attrs.center[1], attrs.radius, attrs.radius)
    }
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
    //path的高宽
    this.wave()
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      amplitude: 10, //振幅
      wavelength: 200, //波长
      radius: 150,
      percent: 0.6
    }
  }
  wave() {
    let currentR = 0
    let per = 4
    let clipWave = this.$refs['clipWave']
    let clipPath = this.$refs['clipPath']
    let pathHeight = clipPath.originalContentRect[3]
    let { center, percent, wavelength, amplitude, clientRect, animation } = this.renderAttrs
    let perR = 24 / animation.duration
    let currentX = 0
    //以路径的top为起点，计算百分比
    let startY = pathHeight * (1 - percent) + clipPath.originalContentRect[1]
    requestAnimationFrame(_ => {
      this.offsetR += perR
      let points = [currentX, startY + pathHeight]
      points.push([currentX, startY + amplitude * Math.sin(currentR + this.offsetR)])
      while (currentX < clientRect.width) {
        points.push([currentX, startY + amplitude * Math.sin(currentR + this.offsetR)])
        currentX += wavelength / (per * 2)
        currentR += Math.PI / per
      }
      let lastY = amplitude * Math.sin(currentR + this.offsetR)
      points.push([currentX, startY + lastY])
      points.push([currentX, startY + lastY])
      points.push([currentX, startY + pathHeight])
      clipWave.attr({ points: points })
      if (this.offsetR >= 2 * Math.PI) {
        this.offsetR = this.offsetR % (2 * Math.PI)
      }
      this.wave()
    })
  }
  render(lines) {
    let { clientRect, animation, shape } = this.renderAttrs
    return (
      <Group zIndex={1} class="container" pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Polyline ref="clipWave" fillColor={'#37c'} clipPath={shape} smooth={true} strokeColor={'#37c'} />
        <Path ref="clipPath" d={shape} strokeColor={'#f37'} lineWidth={2} />
      </Group>
    )
  }
}
export default Wave
