import { Group, Polygon, Arc, Polyline, Label } from 'spritejs'
import { BaseVisual } from '../../core'
import { flattern, isFunction, isString, isArray, isNumber } from '../../util'

function tickLine(radius, angle, tickLength, labelOffset, isInner) {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  // 起点
  const [x, y] = [cos * radius, sin * radius]
  // 中点
  const [cX0, cY0] = isInner
    ? [x - tickLength * cos, y - tickLength * sin]
    : [x + tickLength * cos, y + tickLength * sin]
  const labelPos = isInner
    ? [
      x - (tickLength + labelOffset) * cos,
      y - (tickLength + labelOffset) * sin
    ]
    : [
      x + (tickLength + labelOffset) * cos,
      y + (tickLength + labelOffset) * sin
    ]

  let anchorX = isInner ? cos : -cos
  let anchorY = isInner ? sin : -sin
  let anchor = [0.5, 0.5]

  if (Math.abs(anchorX) > Math.abs(anchorY)) {
    anchor[0] = anchorX < 0 ? 0 : anchorX
  } else {
    anchor[1] = anchorY > 0 ? anchorY : 0
  }
  return {
    points: [[x, y], [cX0, cY0]],
    labelPos,
    anchor
  }
}

export class Gauge extends BaseVisual {
  constructor(attrs = {}) {
    super(attrs)
    this.animations = []
    this.style('tickText', true)
    this.style('tickLine', true)
  }

  get name() {
    return 'Gauge'
  }

  getDefaultAttrs() {
    return {
      min: 0,
      max: 1,
      lineCap: 'round',
      lineWidth: 8,
      startAngle: Math.PI * 0.8,
      endAngle: Math.PI * 2.2,
      strokeBgcolor: '#dde3ea',
      hoverBg: '#f8f8f8',
      title: d => d,
      subTitle: d => d,

      tickStep: 0.1, // tick 步进，生成 tick 的数量为 (max - min) / tickStep
      tickLength: 5, // 刻度长度，为负值时向外绘制
      labelOffset: 5,
      tickFormatter: d => d // 刻度文本格式化
    }
  }

  get radius() {
    const size = this.attr('size')
    const lw = this.attr('lineWidth')
    const len = this.getData().length
    return ~~(
      (Math.min.apply(size, size.map(v => v / 2)) - lw * (len - 1) * 2) /
      len
    )
  }

  get pointerWidth() {
    return this.radius / 10
  }

  get center() {
    const { lineWidth } = this.attr()
    const radius = this.radius
    return [radius + lineWidth / 2, radius + lineWidth / 2]
  }

  get ticks() {
    let {
      min,
      max,
      startAngle,
      endAngle,
      lineWidth,
      tickStep,
      tickLength,
      labelOffset,
      tickFormatter
    } = this.attr()
    const count = Math.abs(max - min) / tickStep

    let total = endAngle - startAngle
    if (total > Math.PI * 2) {
      endAngle = startAngle + Math.PI * 2
      total = endAngle - startAngle
    }

    const isInner = tickLength > 0
    const perAngle = total / count
    const ticks = []
    let radius = isInner ? this.radius - lineWidth : this.radius
    let angle = 0
    let i = -1

    while (++i <= count) {
      angle = i * perAngle + startAngle
      const ret = tickLine(
        radius,
        angle,
        Math.abs(tickLength),
        Math.abs(labelOffset),
        isInner
      )

      ticks.push({
        points: ret.points,
        label: {
          text: tickFormatter(i * tickStep),
          pos: ret.labelPos,
          anchor: ret.anchor
        }
      })
    }

    if (
      (ticks[0].angle + ticks[ticks.length - 1].angle) % (Math.PI * 2) ===
      0
    ) {
      ticks.pop()
    }

    return ticks
  }

  transform(data) {
    const { startAngle, endAngle, min, max } = this.attr()
    const total = Math.abs(max - min)
    const radius = this.radius

    return data.reduce((a, d, i) => {
      const value = d.__valueGetter__()
      const arc = {
        dataOrigin: d.dataOrigin,
        startAngle,
        radius,
        endAngle: d.disabled
          ? startAngle
          : ((endAngle - startAngle) * value) / total + startAngle,
        color: this.color(i)
      }
      a.push(arc)
      return a
    }, [])
  }

  beforeRender() {
    super.beforeRender()
    const data = flattern(this.getData())
    const arcs = this.transform(data)
    this.animations = arcs.reduce((a, c, i) => {
      a.push({
        from: { startAngle: c.startAngle, endAngle: c.startAngle },
        to: { startAngle: c.startAngle, endAngle: c.endAngle }
      })
      return a
    }, [])
    return arcs
  }

  beforeUpdate() {
    super.beforeUpdate()
    const data = flattern(this.getData())
    const arcs = this.transform(data)
    this.animations = arcs.map((arc, i) => {
      const animation = this.animations[i]
      if (animation) {
        return {
          from: animation.to,
          to: { startAngle: arc.startAngle, endAngle: arc.endAngle }
        }
      } else {
        return {
          from: { startAngle: arc.startAngle, endAngle: arc.startAngle },
          to: { startAngle: arc.startAngle, endAngle: arc.endAngle }
        }
      }
    })
    return arcs
  }

  color(i) {
    if (i && typeof i !== 'number') {
      this._useBuiltInColors = false
    }

    return super.color(i)
  }

  // 将 arc 弧度转为 transform 的 rotate角度，同时加上两者起始位置的偏差度
  transformArcAngle2Rotate(angel) {
    return (180 / Math.PI) * angel + 90
  }

  /**
   * 渲染指针
   * @param {Number} angle 角度
   */
  renderPointer(d, i, maxTickTextFontSize) {
    const style = this.style('pointer')(d, d.dataOrigin, i)
    if (style === false) {
      return
    }
    // 动画
    let { from, to } = this.animations[i]
    const fromRotate = this.transformArcAngle2Rotate(from.endAngle)
    const toRotate = this.transformArcAngle2Rotate(to.endAngle)
    const pointerAnimation = {
      from: { transform: { rotate: fromRotate } },
      to: { transform: { rotate: toRotate } }
    }
    // 半径
    const radius = this.radius
    const { tickLength, labelOffset, lineWidth, pointerWidth } = this.attr()
    // 指针顶部离仪表盘的距离
    let pointerTopOffset =
      tickLength + lineWidth + labelOffset + maxTickTextFontSize + 10
    if (tickLength < 0) {
      pointerTopOffset = pointerTopOffset - tickLength - labelOffset
    }
    // 指针长度
    const pointerLen = radius - pointerTopOffset
    // 指针宽度
    let pWidth = radius / 10
    if (isNumber(pointerWidth)) {
      pWidth = pointerWidth
    } else if (isArray(pointerWidth)) {
      pWidth =
        i < pointerWidth.length
          ? pointerWidth[i]
          : pointerWidth[pointerWidth.length - 1]
    }

    // 指针角度
    const pointerAngle = this.transformArcAngle2Rotate(d.endAngle)
    // 指针颜色
    const color = this.color(i)
    const attr = {
      fillColor: color,
      strokeColor: 'transparent',
      transform: { rotate: pointerAngle },
      zIndex: 11,
      anchor: [0.5, 1],
      pos: [radius, radius],
      points: [
        [pWidth / 2, pointerTopOffset],
        [pWidth, pointerTopOffset + pointerLen * 0.9],
        [pWidth / 2, radius],
        [0, pointerTopOffset + pointerLen * 0.9],
        [pWidth / 2, pointerTopOffset]
      ]
    }
    return (
      <Polygon
        {...attr}
        {...style}
        animation={this.resolveAnimation({
          ...pointerAnimation,
          duration: 300
        })}
      />
    )
  }

  render(data = []) {
    const {
      title,
      subTitle,
      startAngle,
      endAngle,
      lineWidth,
      lineCap,
      strokeBgcolor,
      hoverBg
    } = this.attr()
    const center = this.center
    const radius = this.radius
    const labelCenter = [radius, radius * 1.4]
    const ticks = this.ticks
    const tickLine = this.isStyleExist('tickLine')
    const tickText = this.isStyleExist('tickText')

    let gradientColor = null // 默认使用内置的渐变配色方案

    if (this._useBuiltInColors !== false) {
      const colors = this.color().reverse()
      gradientColor = {
        vector: [0, 0, center[0] * 2, center[1] * 2],
        colors: [
          { color: colors[0], offset: 0 },
          { color: colors[1], offset: 0.3 },
          { color: colors[2], offset: 1 }
        ]
      }
    }

    let maxTickTextFontSize = 16
    if (tickText !== false) {
      data.map((d, i) => {
        ticks.map((tick, j) => {
          const style = this.style('tickText')(d, d.dataOrigin, j)
          if (style && style.fontSize) {
            if (
              isNumber(style.fontSize) &&
              maxTickTextFontSize < style.fontSize
            ) {
              maxTickTextFontSize = style.fontSize
            }
            if (isString(style.fontSize)) {
              const realSize = Number(style.fontSize.replace('px', ''))
              if (isNumber(realSize) && maxTickTextFontSize < realSize) {
                maxTickTextFontSize = realSize
              }
            }
          }
        })
      })
    }

    return (
      <Group
        display="flex"
        justifyContent={data.length === 1 ? 'center' : 'space-between'}
        alignItems={'center'}
        clipOverflow={false}
      >
        {data.map((d, i) => {
          return (
            <Group
              bgcolor="transparent"
              clipOverflow={false}
              hoverState={{ bgcolor: hoverBg }}
            >
              <Arc
                lineWidth={lineWidth}
                lineCap={lineCap}
                startAngle={startAngle}
                endAngle={endAngle}
                color={strokeBgcolor}
                radius={this.radius}
                zIndex={10}
              />
              <Arc
                lineCap={lineCap}
                lineWidth={lineWidth}
                {...d}
                zIndex={10}
                animation={this.resolveAnimation({
                  ...this.animations[i],
                  duration: 300
                })}
                {...(gradientColor
                  ? { strokeColor: gradientColor }
                  : { strokeColor: this.color[i] })}
                {...this.style('arc')(d, d.dataOrigin, i)}
              />
              {this.renderPointer(d, i, maxTickTextFontSize)}
              {title ? (
                <Label
                  text={isFunction(title) ? title(d.dataOrigin) : title}
                  pos={labelCenter}
                  textAlign="center"
                  zIndex={10}
                  anchor={[0.5, 1]}
                  {...this.style('title')(d, d.dataOrigin, i)}
                />
              ) : null}
              {subTitle ? (
                <Label
                  text={
                    isFunction(subTitle) ? subTitle(d.dataOrigin) : subTitle
                  }
                  pos={labelCenter}
                  textAlign="center"
                  zIndex={10}
                  color={strokeBgcolor}
                  anchor={[0.5, 0]}
                  {...this.style('subTitle')(d, d.dataOrigin, i)}
                />
              ) : null}

              {tickLine !== false || tickText !== false
                ? ticks.map((tick, j) => (
                  <Group
                    pos={center.map(v => v - lineWidth / 2)}
                    anchor={[0, 0]}
                    zIndex={1010}
                    size={[1, 1]}
                    clipOverflow={false}
                  >
                    {tickLine !== false ? (
                      <Polyline
                        points={tick.points}
                        strokeColor={strokeBgcolor}
                        {...this.style('tickLine')(d, d.dataOrigin, j)}
                      />
                    ) : null}
                    {tickText !== false ? (
                      <Label
                        {...tick.label}
                        {...this.style('tickText')(d, d.dataOrigin, j)}
                      />
                    ) : null}
                  </Group>
                ))
                : null}
            </Group>
          )
        })}
      </Group>
    )
  }

  rendered() {
    this.on('resize', () => this.forceUpdate())
  }
}
