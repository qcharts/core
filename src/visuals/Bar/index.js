import Base from '../../base/BaseVisual'
import { Group, Sprite } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
import filterClone from 'filter-clone'
class Bar extends Base {
  constructor(attrs) {
    super(attrs)
    this.type = 'bar'
    this.pillars = null
    this.groups = null
    this.fromTos = null
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    //渲染前的处理函数，返回lines,继承base
    let { arrLayout } = this.getRenderData()
    this.pillars = arrLayout.barData
    this.groups = arrLayout.groupData
    let barData = arrLayout.barData.map(item => {
      return {
        attrs: item,
        from: {
          size: this.renderAttrs.transpose
            ? [0, item.size[1]]
            : [item.size[0], 0]
        },
        to: {
          size: item.size
        }
      }
    })
    let groupData = arrLayout.groupData
    return { barData, groupData }
  }
  beforeUpdate() {
    const pillars = this.pillars
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
          size: prev.disable
            ? this.attr('transpose')
              ? [0, prev.size[1]]
              : [prev.size[0], 0]
            : prev.size,
          pos: prev.pos
        },
        to: {
          size: nextPillar.size,
          pos: nextPillar.pos
        }
      }
    })
    this.pillars = arrLayout.barData
    this.groups = arrLayout.groupData
    return { barData, groupData: arrLayout.groupData }
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs

    let renderData = this.dataset[renderAttrs.layoutBy]
    const dataLength =
      renderData.length > 1 ? renderData.length : renderData[0].length
    let arrLayout = layout(renderData, renderAttrs)
    let colors = this.theme.colors
    let styles = this.renderStyles
    arrLayout.barData = arrLayout.barData.map((bar, i) => {
      let style = this.style('pillar')(bar.attrs, this.dataset.rows[i], i)
      let barStyle = deepObjectMerge(
        { bgcolor: bar.bgcolor || colors[i % dataLength] },
        styles.bar,
        style
      )
      bar = deepObjectMerge(bar, barStyle)
      return bar
    })
    return { arrLayout }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    let renderData = this.dataset['rows']
    let stateArray = Array.from(
      { length: renderData[0].length },
      () => 'defalut'
    )
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: 'bar',
      bgpillarState: stateArray,
      states: {
        bgpillar: {
          default: { opacity: 0.01 },
          hover: { opacity: 0.1 }
        }
      }
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {}
  }
  onMouseenter(e, el, ind) {
    let { bgpillarState } = this.renderAttrs
    bgpillarState[ind] = 'hover'
    this.attr('bgpillarState', bgpillarState)
    this.dataset.resetState()
    this.dataset.cols[ind].state = 'hover'
  }

  onMouseleave(e, el, ind) {
    this.dataset.resetState()
    let { bgpillarState } = this.renderAttrs
    bgpillarState[ind] = 'defualt'
    this.attr('bgpillarState', bgpillarState)
  }
  render(data) {
    let { clientRect, bgpillarState, states } = this.renderAttrs
    return (
      <Group
        class="container"
        ref="wrap"
        pos={[clientRect.left, clientRect.top]}
      >
        <Group ref="pillars" class="pillars-group">
          {data.barData.map((pillar, ind) => {
            return (
              <Sprite
                {...pillar.attrs}
                size={pillar.from.size}
                animation={{ from: pillar.from, to: pillar.to }}
              />
            )
          })}
        </Group>
        <Group ref="bgpillar" class="bgpillars-group">
          {data.groupData.map((pillar, ind) => {
            return (
              <Sprite
                state={bgpillarState[ind]}
                states={states.bgpillar}
                {...pillar}
                onMouseenter={(e, el) => {
                  this.onMouseenter(e, el, ind)
                }}
                onMouseleave={(e, el) => {
                  this.onMouseleave(e, el, ind)
                }}
              />
            )
          })}
        </Group>
      </Group>
    )
  }
}
export default Bar
