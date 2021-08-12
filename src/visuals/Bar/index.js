import Base from '../../base/BaseVisual'
import { Group, Label, Polyline } from 'spritejs'
import { getStyle } from '../../utils/getStyle'
import { deepObjectMerge, throttle } from '@qcharts/utils'
import layout from './layout'
import filterClone from 'filter-clone'
class Bar extends Base {
  constructor(attrs) {
    super(attrs)
    this.type = 'bar'
    this.pillars = null
    this.texts = null
    this.groups = null
    this.fromTos = null
    this.hoverIndex = -1
    this.bgpillarState = null
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    //渲染前的处理函数，返回lines,继承base---------before
    let { transpose } = this.renderAttrs
    let { arrLayout } = this.getRenderData()
    this.bgpillarState = Array.from({ length: arrLayout.length }, () => 'defalut')
    let textData = arrLayout.textData.map(item => {
      return {
        attrs: item,
        from: {
          pos: item.pos
        },
        to: {
          pos: item.pos
        }
      }
    })
    let barData = arrLayout.barData.map((item, ind) => {
      let fromPoints = null
      let value = parseFloat(textData[ind].attrs.text)

      fromPoints = filterClone(item.points)
      if (transpose) {
        if (value < 0) {
          fromPoints[0][0] = fromPoints[1][0]
          fromPoints[3][0] = fromPoints[2][0]
        } else {
          fromPoints[1][0] = fromPoints[0][0]
          fromPoints[2][0] = fromPoints[3][0]
        }
      } else {
        if (value < 0) {
          fromPoints[3][1] = fromPoints[0][1]
          fromPoints[2][1] = fromPoints[1][1]
        } else {
          fromPoints[0][1] = fromPoints[3][1]
          fromPoints[1][1] = fromPoints[2][1]
        }
      }

      return {
        attrs: item,
        from: {
          points: fromPoints
        },

        to: { points: item.points }
      }
    })

    this.pillars = barData
    this.groups = arrLayout.groupData
    this.texts = textData
    return { barData, textData, groupData: arrLayout.groupData }
  }
  beforeUpdate() {
    const pillars = this.pillars
    const texts = this.texts
    let { arrLayout } = this.getRenderData()
    let barData = arrLayout.barData.map((nextPillar, i) => {
      let prev = pillars[i] ? pillars[i] : arrLayout.barData[i - 1]
      if (!prev) {
        prev = {
          size: [0, 0],
          pos: nextPillar.pos,
          labelAttrs: null
        }
      }
      return {
        attrs: nextPillar,
        from: {
          points: prev.attrs.points
        },
        to: {
          points: nextPillar.points
        }
      }
    })
    let textData = arrLayout.textData.map((nextText, i) => {
      let prev = texts[i] ? texts[i] : arrLayout.textData[i - 1]
      if (!prev) {
        prev = {
          pos: nextPillar.pos
        }
      }
      return {
        attrs: nextText,
        from: {
          pos: prev.attrs.pos
        },
        to: {
          pos: nextText.pos
        }
      }
    })
    this.pillars = barData
    this.groups = arrLayout.groupData
    this.texts = textData
    return { barData, textData, groupData: arrLayout.groupData }
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    const dataLength = renderData.length > 1 ? renderData.length : renderData[0].length
    let arrLayout = layout.call(this, renderData, renderAttrs)
    let colors = this.theme.colors
    let styles = this.renderStyles
    arrLayout.barData = arrLayout.barData.map((bar, i) => {
      // let style = this.style("pillar")(bar.attrs, this.dataset.rows[i], i);
      // let barStyle = deepObjectMerge(
      //   { bgcolor: bar.bgcolor || colors[i % dataLength] },
      //   styles.bar,
      //   style
      // );
      // bar = deepObjectMerge(bar, barStyle);
      return bar
    })
    return { arrLayout }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    return {
      layer: 'bar',
      states: {
        bgpillar: {
          animation: { duration: 20 },
          default: { opacity: 0.0001 },
          hover: { opacity: 0.1 }
        }
      }
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {
      text: { fontSize: 12, fillColor: '#666' }
    }
  }
  getIndexByCoord(event, el) {
    if (this.groups.length && !isNaN(event.x) && !isNaN(event.y)) {
      let bgpillarState = this.bgpillarState
      let curInd = 0
      let [x, y] = el.getOffsetPosition(event.x, event.y)
      if (!this.renderAttrs.transpose) {
        //获取 x轴坐标的刻度
        let width = this.groups[0].size[0]
        //转换canvas坐标到当前group的相对坐标
        curInd = Math.floor(x / width)
      } else {
        let width = this.groups[0].size[1]
        //转换canvas坐标到当前group的相对坐标
        curInd = this.groups.length - Math.floor(y / width) - 1
      }
      if (curInd < 1) {
        curInd = 0
      } else if (curInd > this.groups.length - 1) {
        curInd = this.groups.length - 1
      }
      return curInd
    } else {
      return Number.NEGATIVE_INFINITY
    }
  }
  onMousemove(event, el) {
    let curInd = this.getIndexByCoord(event, el)
    if (curInd === Number.NEGATIVE_INFINITY) {
      return
    }
    if (this.hoverIndex !== curInd) {
      this.bgpillarState[curInd] = 'hover'
      if (this.hoverIndex > -1) {
        this.bgpillarState[this.hoverIndex] = 'defualt'
      }
      this.dataset.resetState()
      this.dataset.cols[curInd].state = 'hover'
      this.hoverIndex = curInd
    }
  }
  onMouseleave(e, el) {
    this.dataset.resetState()
    this.bgpillarState[this.hoverIndex] = 'defualt'
    this.hoverIndex = -1
  }
  myClick = function (e, el) {
    //console.log('click')
    let curInd = this.getIndexByCoord(e, el)
    if (curInd === Number.NEGATIVE_INFINITY) {
      return
    }
    getStyle(this, 'click', curInd)
  }

  render(data) {
    let { clientRect, states, layoutBy } = this.renderAttrs

    const styles = this.renderStyles
    let renderData = this.dataset[layoutBy]
    const dataLength = renderData.length > 1 ? renderData.length : renderData[0].length
    let colors = this.theme.colors
    return (
      <Group
        zIndex={1}
        pos={[clientRect.left, clientRect.top]}
        size={[clientRect.width, clientRect.height]}
        onMouseleave={this.onMouseleave}
        onMouseenter={this.onMousemove}
        onMousemove={this.onMousemove}
        onClick={this.myClick}
      // onMousemove={throttle(this.onMousemove)}
      >
        <Group ref="bgpillar">
          {data.groupData.map((pillar, ind) => {
            let style = getStyle(this, 'backgroundpillar', [{ ...pillar }, styles.groupBar], [this.dataset.rows[ind % renderData.length], Math.floor(ind / renderData.length)])
            style.points = style.points.flat()
            return style === false ? null : (
              <Polyline
                state={this.bgpillarState[ind]}
                states={states.bgpillar}
                {...pillar}
                {...style}
                animation={{
                  from: { points: style.points },
                  to: { points: style.points },
                  duration: 0
                }}
              />
            )
          })}
        </Group>
        <Group ref="pillars" class="pillars-group">
          {data.barData.map((pillar, ind) => {
            let cell = this.dataset[layoutBy][ind % renderData.length][Math.floor(ind / renderData.length)]
            const style = getStyle(
              this,
              'pillar',
              [
                {
                  fillColor: colors[cell.row],
                  bgcolor: colors[cell.row],
                  ...pillar.attrs
                },
                styles.bar
              ],
              [cell.data, Math.floor(ind / renderData.length), ind % renderData.length]
            )
            const hoverStyle = getStyle(this, 'pillar:hover', [], [cell.data, Math.floor(ind / renderData.length), ind % renderData.length])
            if (cell.state === 'hover') {
              deepObjectMerge(style, hoverStyle)
            }
            return <Polyline onMouseEvent={['click', cell, ind]} {...pillar.attrs} {...pillar.from} {...style} animation={{ from: pillar.from, to: pillar.to }} />
          })}
          {data.textData.map((text, ind) => {
            let barAttrs = filterClone(data.barData[ind].attrs, ['anchor', 'points', 'size', 'pos'])
            let textStyle = getStyle(this, 'text', [{ barAttrs: barAttrs }, styles.text], [this.dataset.rows[ind % renderData.length][Math.floor(ind / renderData.length)].data, Math.floor(ind / renderData.length), ind % renderData.length])
            textStyle = filterClone(textStyle, [], ['barAttrs'])
            if (textStyle.pos) {
              this.texts[ind].attrs.pos = textStyle.pos
              text.to.pos = textStyle.pos
            }

            return textStyle === false ? null : (
              <Label {...text.attrs} {...textStyle} animation={{ from: text.from, to: text.to }} />
            )
          })}
        </Group>
      </Group>
    )
  }
}
export default Bar
