import Base from '../../base/BaseVisual'
import { Group, Polyline, Path, requestAnimationFrame, Label, Node } from 'spritejs'
import ellipse2path from '../../utils/ellipse2path'
import { getStyle } from '../../utils/getStyle'
class Wave extends Base {
  constructor(attrs) {
    super(attrs)
    //波纹振偏移量
    this.offsetR = 50
    this.tickId = ''
    this.oldAttr = {}
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    let clientRect = attrs.clientRect
    let width = Math.floor(clientRect.width)
    let height = Math.floor(clientRect.height)
    let radius = attrs.radius
    attrs.pos = [0, 0]
    if (!attrs.shape) {
      attrs.pos = [width / 2 - radius, height / 2 - radius]
      attrs.shape = ellipse2path(radius, radius, attrs.radius, attrs.radius)
    }
    return attrs
  }
  rendered() {
    //path的高宽
    this.wave()
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: 'wave',
      amplitude: 8, //振幅
      wavelength: 300, //波长`
      radius: 150,
      percent: 65,
      formatter: per => {
        return per + '%'
      }
    }
  }
  wave() {
    let currentR = 0
    let per = 4
    let clipWave = this.$refs['clipWave']
    let clipPath = this.$refs['clipPath'] || clipWave
    let pathHeight = clipPath.originalContentRect[3]
    let { percent, wavelength, amplitude, clientRect, animation, shape } = this.renderAttrs
    let perR = 24 / animation.duration
    let currentX = 0 - clientRect.left
    //以路径的top为起点，计算百分比
    let startY = (pathHeight * (100 - percent)) / 100 + clipPath.originalContentRect[1]
    this.tickId = requestAnimationFrame(_ => {
      this.offsetR += perR
      let points = [[currentX, startY + pathHeight]]
      points.push([currentX, startY + amplitude * Math.sin(currentR + this.offsetR)])
      while (currentX < clientRect.width + clientRect.left + clientRect.right) {
        points.push([currentX, startY + amplitude * Math.sin(currentR + this.offsetR)])
        currentX += wavelength / (per * 2)
        currentR += Math.PI / per
      }
      let lastY = amplitude * Math.sin(currentR + this.offsetR)
      points.push([currentX, startY + lastY])
      points.push([currentX, startY + lastY])
      points.push([currentX, startY + pathHeight])
      clipWave.attr({ points: points, clipPath: ' ' + shape })
      if (this.offsetR >= 2 * Math.PI) {
        this.offsetR = this.offsetR % (2 * Math.PI)
      }
      this.wave()
    })
  }
  render() {
    let { clientRect, shape, pos, formatter, percent, radius } = this.renderAttrs
    let renderStyles = this.renderStyles
    let waveStyle = getStyle(this, 'wave', renderStyles.wave)
    let shapeStyle = getStyle(this, 'shape', renderStyles.shape)
    let textStyle = getStyle(this, 'text', [{ pos: [radius, radius], anchor: [0.5, 0.5] }, renderStyles.text])
    let animation = {
      from: {
        pos: this.oldAttr.pos || pos
      },
      to: {
        pos: pos
      }
    }
    this.oldAttr = { ...this.renderAttrs }
    return (
      <Group zIndex={1} class="container" pos={[clientRect.left, clientRect.top]}>
        <Group animation={animation}>
          <Path ref="clipPath1" d={shape} fillColor={shapeStyle.fillColor} />
          <Polyline ref="clipWave" {...waveStyle} clipPath={shape} smooth={true} />
          <Path ref="clipPath" d={shape} strokeColor={shapeStyle.strokeColor} lineWidth={shapeStyle.lineWidth} />
          {textStyle === false ? <Node /> : <Label text={formatter(percent)} {...textStyle} />}
        </Group>
      </Group>
    )
  }
}
export default Wave
