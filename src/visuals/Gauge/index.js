import { Group, Polyline, Label, Arc, Gradient } from 'spritejs'
import { jsType } from '@qcharts/utils'
import BaseVisual from '../../base/BaseVisual'

/**
 * 根据给定参数，生成仪表盘刻度的坐标以及刻度文字标注的坐标
 * @param {Number} radius 仪表盘半径
 * @param {Number} angle 刻度的角度 单位度
 * @param {Number} tickLength 刻度的长度
 * @param {Number} labelOffset 刻度文字的偏移值
 * @param {Boolean} isInner 刻度是否在仪表盘内部
 */
function tickLine(radius, angle, tickLength, labelOffset, isInner) {
  const radian = (angle * Math.PI) / 180
  const cos = Math.cos(radian)
  const sin = Math.sin(radian)
  // 起点
  const [x, y] = [cos * radius, sin * radius]
  // 中点
  const [cX0, cY0] = isInner
    ? [x - tickLength * cos, y - tickLength * sin]
    : [x + tickLength * cos, y + tickLength * sin]
  const labelPos = isInner
    ? [x - (tickLength + labelOffset) * cos, y - (tickLength + labelOffset) * sin]
    : [x + (tickLength + labelOffset) * cos, y + (tickLength + labelOffset) * sin]

  let anchorX = isInner ? cos : -cos
  let anchorY = isInner ? sin : -sin
  let anchor = [0.5, 0.5]

  if (Math.abs(anchorX) > Math.abs(anchorY)) {
    anchor[0] = anchorX < 0 ? 0 : anchorX
  } else {
    anchor[1] = anchorY > 0 ? anchorY : 0
  }
  return {
    points: [
      [x, y],
      [cX0, cY0]
    ],
    labelPos,
    anchor
  }
}

class Gauge extends BaseVisual {
  constructor(attrs) {
    super(attrs)
    this.gaugeAnimations = []
    this.type = 'Gauge'
    this.oldPos = null
    this.style('tickText', true)
    this.style('tickLine', true)
  }

  defaultAttrs() {
    return {
      layer: 'gauge',
      min: 0, // 刻度最小值
      max: 100, // 刻度最大值
      percent: 50, // 指针值
      lineCap: 'round',
      _useBuiltInColors: false, // 默认颜色不使用渐变色
      lineWidth: 10, // 仪表盘圆弧宽度
      startAngle: 140, // 仪表盘弧度起始角度，arc 角度顺时针增加，0度为屏幕X轴方向
      endAngle: 400, // 仪表盘弧度终止角度
      strokeBgcolor: '#dde3ea', // 仪表盘弧度的背景色
      title: (d) => d,
      tickStep: 10, // tick 步进，生成 tick 的数量为 (max - min) / tickStep
      tickLength: 10, // 刻度长度，为负值时向外绘制
      labelOffset: 5,
      tickFormatter: (d) => d // 刻度文本格式化
    }
  }

  get renderAttrs() {
    const attrs = super.renderAttrs
    // 仪表盘半径
    const { clientRect } = attrs
    const { height, width } = clientRect
    const size = [width, height]

    const radius = ~~Math.min.apply(
      size,
      size.map((v) => v / 2)
    )
    // 指针宽度
    const pointerWidth = radius / 10
    // 绘图中心
    const center = [width / 2, height / 2]
    // Fixed: spriteJS bug, 起始角度差为360的时候位置会发生偏差
    if (attrs.endAngle - attrs.startAngle > 359.9) {
      attrs.endAngle = attrs.startAngle + 359.9
    }

    return {
      ...attrs,
      radius,
      pointerWidth,
      center
    }
  }

  get ticks() {
    let {
      min,
      max,
      radius,
      startAngle,
      endAngle,
      lineWidth,
      tickStep,
      tickLength,
      labelOffset,
      tickFormatter
    } = this.renderAttrs
    const count = Math.abs(max - min) / tickStep

    let total = endAngle - startAngle

    const isInner = tickLength > 0
    const perAngle = total / count
    const ticks = []
    let tickRadius = isInner ? radius - lineWidth / 2 : radius + lineWidth / 2
    let angle = 0
    let i = -1

    while (++i <= count) {
      angle = i * perAngle + startAngle
      const ret = tickLine(tickRadius, angle, Math.abs(tickLength), Math.abs(labelOffset), isInner)
      ticks.push({
        points: ret.points,
        label: {
          text: tickFormatter(i * tickStep + min).toFixed(0),
          pos: ret.labelPos,
          anchor: ret.anchor
        }
      })
    }

    if ((ticks[0].angle + ticks[ticks.length - 1].angle) % (Math.PI * 2) === 0) {
      ticks.pop()
    }

    return ticks
  }

  transform() {
    const { radius, startAngle, endAngle, min, max, percent } = this.renderAttrs
    const total = Math.abs(max - min)

    let attrEndAngle = ((endAngle - startAngle) * (percent - min)) / total + startAngle
    // 最大不可超过endAngle
    if (attrEndAngle > endAngle) {
      attrEndAngle = endAngle
    }

    return {
      dataOrigin: percent,
      startAngle,
      radius,
      endAngle: attrEndAngle,
      strokeColor: this.color(0)
    }
  }

  beforeRender() {
    super.beforeRender()
    const arc = this.transform()
    this.gaugeAnimations = {
      from: { startAngle: arc.startAngle, endAngle: arc.startAngle },
      to: { startAngle: arc.startAngle, endAngle: arc.endAngle }
    }
    return arc
  }

  beforeUpdate() {
    super.beforeUpdate()
    const arc = this.transform()
    const animation = {
      from: { startAngle: arc.startAngle, endAngle: arc.startAngle },
      to: { startAngle: arc.startAngle, endAngle: arc.endAngle }
    }
    if (this.gaugeAnimations) {
      animation.from = { ...this.gaugeAnimations.to }
    }

    this.gaugeAnimations = { ...animation }
    return arc
  }

  color(i) {
    return this.theme.colors[i]
  }

  /**
   * 渲染指针
   * @param {Number} angle 角度
   */
  renderPointer(d, maxTickTextFontSize) {
    const style = this.style('pointer')(d, d.dataOrigin, 0)
    if (style === false) {
      return
    }
    // 动画
    let { from, to } = this.gaugeAnimations
    // rotate角度起始位置为屏幕Y轴方向，arc角度为X轴方向
    const fromRotate = from.endAngle + 90
    const toRotate = to.endAngle + 90
    const pointerAnimation = {
      from: { rotate: fromRotate },
      to: { rotate: toRotate }
    }
    // 半径
    const { radius, center, tickLength, labelOffset, lineWidth } = this.renderAttrs
    // 指针顶部离仪表盘的距离
    let pointerTopOffset = tickLength + lineWidth + labelOffset + maxTickTextFontSize
    if (tickLength < 0) {
      pointerTopOffset = pointerTopOffset - tickLength - labelOffset
    }
    // 指针长度
    const pointerLen = radius - pointerTopOffset
    // 指针宽度
    let pWidth = radius / 10

    // 指针颜色
    const color = this.color(0)

    const [x, y] = center
    const attr = {
      fillColor: color,
      rotate: fromRotate,
      transformOrigin: center,
      zIndex: 11,
      points: [
        [x, y],
        [x - pWidth / 2, y - pointerLen * 0.1],
        [x, y - pointerLen],
        [x + pWidth / 2, y - pointerLen * 0.1],
        [x, y]
      ],
      close: true
    }
    return <Polyline {...attr} {...style} animation={pointerAnimation} />
  }

  isStyleExist(name) {
    const style = this.style(`${name}`)
    return Boolean(style)
  }

  render(data = {}) {
    const {
      _useBuiltInColors,
      title,
      percent,
      center,
      radius,
      startAngle,
      endAngle,
      lineWidth,
      lineCap,
      strokeBgcolor,
      clientRect
    } = this.renderAttrs
    const labelCenter = [center[0], center[1] * 1.25]
    const ticks = this.ticks
    const tickLine = this.isStyleExist('tickLine')
    const tickText = this.isStyleExist('tickText')
    const realTitle = title || percent

    let gradientColor = null // 默认使用内置的渐变配色方案

    if (_useBuiltInColors !== false) {
      const colors = this.theme.colors.reverse()
      const gradientOpt = {
        vector: [0, 0, center[0] * 2, center[1] * 2],
        colors: [
          { color: colors[0], offset: 0 },
          { color: colors[1], offset: 0.3 },
          { color: colors[2], offset: 1 }
        ]
      }
      gradientColor = new Gradient(gradientOpt)
    }

    let maxTickTextFontSize = 16
    if (tickText !== false) {
      ticks.map((tick, j) => {
        const style = this.style('tickText')(data, data.dataOrigin, j)
        if (style && style.fontSize) {
          if (jsType(style.fontSize) === 'number' && maxTickTextFontSize < style.fontSize) {
            maxTickTextFontSize = style.fontSize
          }
          if (jsType(style.fontSize) === 'string') {
            const realSize = Number(style.fontSize.replace('px', ''))
            if (jsType(realSize) === 'number' && maxTickTextFontSize < realSize) {
              maxTickTextFontSize = realSize
            }
          }
        }
      })
    }
    const gPos = [clientRect.left, clientRect.top]
    const gSize = [clientRect.width, clientRect.height]

    const gAnimation = {
      from: { pos: this.oldPos ? this.oldPos : gPos },
      to: { pos: gPos }
    }
    this.oldPos = gPos
    return (
      <Group pos={gPos} size={gSize} animation={gAnimation}>
        <Arc
          pos={center}
          lineWidth={lineWidth}
          lineCap={lineCap}
          startAngle={startAngle}
          endAngle={endAngle}
          strokeColor={strokeBgcolor}
          radius={radius}
          zIndex={10}
        />
        <Arc
          pos={center}
          lineCap={lineCap}
          lineWidth={lineWidth}
          {...data}
          animation={this.gaugeAnimations}
          {...(gradientColor ? { strokeColor: gradientColor } : { strokeColor: this.color(0) })}
          {...this.style('arc')(data, data.dataOrigin, 0)}
          zIndex={11}
        />
        {this.renderPointer(data, maxTickTextFontSize)}
        {realTitle ? (
          <Label
            text={jsType(realTitle) === 'function' ? realTitle(data.dataOrigin) : realTitle}
            pos={labelCenter}
            textAlign="center"
            zIndex={10}
            anchor={[0.5, 1]}
            {...this.style('title')(data, data.dataOrigin, 0)}
          />
        ) : null}
        {tickLine !== false || tickText !== false
          ? ticks.map((tick, j) => (
              <Group pos={center} anchor={[0, 0]} zIndex={1010}>
                {tickLine !== false ? (
                  <Polyline
                    points={tick.points}
                    strokeColor={strokeBgcolor}
                    {...this.style('tickLine')(data, data.dataOrigin, j)}
                  />
                ) : null}
                {tickText !== false ? (
                  <Label {...tick.label} {...this.style('tickText')(data, data.dataOrigin, j)} />
                ) : null}
              </Group>
            ))
          : null}
      </Group>
    )
  }
  
  rendered(){}
}

export default Gauge
