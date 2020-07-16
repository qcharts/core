import { Group, Polyline, Label, Arc, Gradient } from 'spritejs'
import { jsType } from '@qcharts/utils'
import BaseVisual from '../../base/BaseVisual'

// 数据拷贝
const flattern = (arr) => [].concat.apply([], arr)

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
      [cX0, cY0],
    ],
    labelPos,
    anchor,
  }
}

class Gauge extends BaseVisual {
  constructor(attrs) {
    super(attrs)
    this.gaugeAnimations = []
    this.type = 'Gauge'
    this.style('tickText', true)
    this.style('tickLine', true)
  }

  defaultAttrs() {
    return {
      layer: 'gauge',
      min: 0,
      max: 100,
      lineCap: 'round',
      _useBuiltInColors: false, // 默认颜色不使用渐变色
      lineWidth: 10, // 仪表盘圆弧宽度
      startAngle: 140, // 仪表盘弧度起始角度，arc 角度顺时针增加，0度为屏幕X轴方向
      endAngle: 400, // 仪表盘弧度终止角度
      strokeBgcolor: '#dde3ea', // 仪表盘弧度的背景色
      title: (d) => d,
      subTitle: (d) => d,

      tickStep: 10, // tick 步进，生成 tick 的数量为 (max - min) / tickStep
      tickLength: 10, // 刻度长度，为负值时向外绘制
      labelOffset: 5,
      tickFormatter: (d) => d, // 刻度文本格式化
    }
  }

  get renderAttrs() {
    const attrs = super.renderAttrs
    // 仪表盘半径
    const { clientRect, lineWidth: lw = 10 } = attrs
    const { height, width } = clientRect
    const size = [width, height]

    const len = this.dataset.length
    const radius = ~~(
      (Math.min.apply(
        size,
        size.map((v) => v / 2)
      ) -
        lw * (len - 1) * 2) /
      len
    )
    // 指针宽度
    const pointerWidth = radius / 10
    // 绘图中心
    const center = [width / 2, height / 2]

    return {
      ...attrs,
      radius,
      pointerWidth,
      center,
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
      tickFormatter,
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
          text: tickFormatter(i * tickStep).toFixed(0),
          pos: ret.labelPos,
          anchor: ret.anchor,
        },
      })
    }

    if ((ticks[0].angle + ticks[ticks.length - 1].angle) % (Math.PI * 2) === 0) {
      ticks.pop()
    }

    return ticks
  }

  transform(data) {
    const { radius, startAngle, endAngle, min, max } = this.renderAttrs
    const total = Math.abs(max - min)

    return data.reduce((a, d, i) => {
      const value = d.value
      const arc = {
        dataOrigin: d.data,
        startAngle,
        radius,
        endAngle: d.disabled ? startAngle : ((endAngle - startAngle) * value) / total + startAngle,
        strokeColor: this.color(i),
      }
      a.push(arc)
      return a
    }, [])
  }

  beforeRender() {
    super.beforeRender()
    const data = flattern(this.dataset)
    const arcs = this.transform(data)
    this.gaugeAnimations = arcs.reduce((a, c, i) => {
      a.push({
        from: { startAngle: c.startAngle, endAngle: c.startAngle },
        to: { startAngle: c.startAngle, endAngle: c.endAngle },
      })
      return a
    }, [])
    return arcs
  }

  beforeUpdate() {
    super.beforeUpdate()
    const data = flattern(this.dataset)
    const arcs = this.transform(data)
    this.gaugeAnimations = arcs.map((arc, i) => {
      const animation = this.gaugeAnimations[i]
      if (animation) {
        return {
          from: animation.to,
          to: { startAngle: arc.startAngle, endAngle: arc.endAngle },
        }
      } else {
        return {
          from: { startAngle: arc.startAngle, endAngle: arc.startAngle },
          to: { startAngle: arc.startAngle, endAngle: arc.endAngle },
        }
      }
    })
    return arcs
  }

  color(i) {
    return this.theme.colors[i]
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
    let { from, to } = this.gaugeAnimations[i]
    // rotate角度起始位置为屏幕Y轴方向，arc角度为X轴方向
    const fromRotate = from.endAngle + 90
    const toRotate = to.endAngle + 90
    const pointerAnimation = {
      from: { rotate: fromRotate },
      to: { rotate: toRotate },
    }
    // 半径
    const { radius, pointerWidth, center, tickLength, labelOffset, lineWidth } = this.renderAttrs
    // 指针顶部离仪表盘的距离
    let pointerTopOffset = tickLength + lineWidth + labelOffset + maxTickTextFontSize
    if (tickLength < 0) {
      pointerTopOffset = pointerTopOffset - tickLength - labelOffset
    }
    // 指针长度
    const pointerLen = radius - pointerTopOffset
    // 指针宽度
    let pWidth = radius / 10
    if (jsType(pointerWidth) === 'boolean') {
      pWidth = pointerWidth
    } else if (jsType(pointerWidth) === 'array') {
      pWidth = i < pointerWidth.length ? pointerWidth[i] : pointerWidth[pointerWidth.length - 1]
    }

    // 指针颜色
    const color = this.color(i)

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
        [x, y],
      ],
      close: true,
    }
    return (
      <Polyline
        {...attr}
        {...style}
        animation={{
          ...pointerAnimation,
          duration: 300,
        }}
      />
    )
  }

  isStyleExist(name) {
    const style = this.style(`${name}`)
    return Boolean(style)
  }

  render(data = []) {
    const {
      _useBuiltInColors,
      title,
      subTitle,
      center,
      radius,
      startAngle,
      endAngle,
      lineWidth,
      lineCap,
      strokeBgcolor,
      clientRect,
    } = this.renderAttrs
    const labelCenter = [center[0], center[1] * 1.25]
    const ticks = this.ticks
    const tickLine = this.isStyleExist('tickLine')
    const tickText = this.isStyleExist('tickText')

    let gradientColor = null // 默认使用内置的渐变配色方案

    if (_useBuiltInColors !== false) {
      const colors = this.theme.colors.reverse()
      const gradientOpt = {
        vector: [0, 0, center[0] * 2, center[1] * 2],
        colors: [
          { color: colors[0], offset: 0 },
          { color: colors[1], offset: 0.3 },
          { color: colors[2], offset: 1 },
        ],
      }
      gradientColor = new Gradient(gradientOpt)
    }

    let maxTickTextFontSize = 16
    if (tickText !== false) {
      data.map((d, i) => {
        ticks.map((tick, j) => {
          const style = this.style('tickText')(d, d.dataOrigin, j)
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
      })
    }
    const gPos = [clientRect.left, clientRect.top]
    const gSize = [clientRect.width, clientRect.height]
    return (
      <Group pos={gPos} size={gSize}>
        {data.map((d, i) => {
          return (
            <Group bgcolor="transparent">
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
                {...d}
                animation={{
                  ...this.gaugeAnimations[i],
                  duration: 300,
                }}
                {...(gradientColor ? { strokeColor: gradientColor } : { strokeColor: this.color(i) })}
                {...this.style('arc')(d, d.dataOrigin, i)}
                zIndex={11}
              />
              {this.renderPointer(d, i, maxTickTextFontSize)}
              {title ? (
                <Label
                  text={jsType(title) === 'function' ? title(d.dataOrigin) : title}
                  pos={labelCenter}
                  textAlign="center"
                  zIndex={10}
                  anchor={[0.5, 1]}
                  {...this.style('title')(d, d.dataOrigin, i)}
                />
              ) : null}
              {subTitle ? (
                <Label
                  text={jsType(subTitle) === 'function' ? subTitle(d.dataOrigin) : subTitle}
                  pos={labelCenter}
                  textAlign="center"
                  zIndex={10}
                  anchor={[0.5, 0]}
                  fillColor={strokeBgcolor}
                  {...this.style('subTitle')(d, d.dataOrigin, i)}
                />
              ) : null}

              {tickLine !== false || tickText !== false
                ? ticks.map((tick, j) => (
                    <Group pos={center} anchor={[0, 0]} zIndex={1010}>
                      {tickLine !== false ? (
                        <Polyline
                          points={tick.points}
                          strokeColor={strokeBgcolor}
                          {...this.style('tickLine')(d, d.dataOrigin, j)}
                        />
                      ) : null}
                      {tickText !== false ? (
                        <Label {...tick.label} {...this.style('tickText')(d, d.dataOrigin, j)} />
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

export default Gauge
