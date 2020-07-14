import Base from '../../base/BaseVisual'
import { Group, Ring } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
import { getStyle } from '@/utils/getStyle'
import filterClone from 'filter-clone'
class PolarBar extends Base {
  constructor(attrs) {
    super(attrs)
    this.type = 'polarbar'
    this.groups = []
    this.pillars = []
    this.$pillars = []
    this.hoverIndex = -1
    this.activeIndex = -1
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    let { height, width, top, left } = attrs.clientRect
    attrs.pos = [left + width / 2, top + height / 2]
    return attrs
  }

  // get pos() {
  //   let { height, width, top, left } = this.renderAttrs.clientRect;
  //   let [x, y] = [left + width / 2, top + height / 2];
  //   return [x, y];
  // }

  beforeRender() {
    //渲染前的处理函数，返回lines,继承base
    let { arrLayout } = this.getRenderData()
    this.pillars = arrLayout.barData
    this.groups = arrLayout.groupData
    let barData = arrLayout.barData.map(item => {
      return {
        // attrs: item,
        from: {
          endAngle: item.startAngle
        },
        to: item
      }
    })
    let groupData = this.groups
    return { barData, groupData }
  }
  beforeUpdate() {
    const pillars = this.pillars
    let { pos } = this.renderAttrs
    let { arrLayout } = this.getRenderData()
    let barData = arrLayout.barData.map((nextPillar, i) => {
      let curPos = [pos[0] + nextPillar.offsetPos[0], pos[1] + nextPillar.offsetPos[1]]
      let prev = pillars[i] ? pillars[i] : arrLayout.barData[i - 1]
      if (!prev) {
        prev = {}
      }
      return {
        from: { ...prev },
        to: { ...nextPillar, pos: curPos }
      }
    })
    this.pillars = arrLayout.barData
    this.groups = arrLayout.groupData
    return { barData, groupData: arrLayout.groupData }
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    if (!renderData || renderData.length === 0) {
      return { barData: [], groupData: [] }
    }
    const dataLength = renderData.length > 1 ? renderData.length : renderData[0].length
    this.legendArr = Array.from({ length: renderData.length }, () => {
      return 1
    })
    let arrLayout = layout(renderData, renderAttrs)
    let colors = this.theme.colors
    let styles = this.renderStyles
    arrLayout.groupData.forEach((bar, i) => {
      bar.pos = renderAttrs.pos
    })
    arrLayout.barData.forEach((bar, i) => {
      let style = this.style('pillar')(bar.attrs, this.dataset.rows[i], i)
      bar.fillColor = bar.fillColor || colors[i % dataLength]
      bar.strokeColor = renderAttrs.strokeColor || '#FFF'
      bar.pos = renderAttrs.pos
      if (!bar.hasOwnProperty('startAngle') || !bar.hasOwnProperty('endAngle')) {
        bar.lineWidth = 0
      } else {
        bar.lineWidth = 1
      }
      let barStyle = deepObjectMerge({ bgcolor: bar.bgcolor || colors[i % dataLength] }, styles.bar, style)
      bar = deepObjectMerge(bar, barStyle)
    })
    return { arrLayout }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: 'bar',
      //选中偏移量基数
      activeOffset: 10
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {}
  }

  mouseleave() {
    this.dataset.resetState()
    // this.dataset.forEach((row) => {
    //   if (row.state === "hover") {
    //     row.state = "default";
    //   }
    // });
    this.hoverIndex = -1
  }

  mousemove(e, el) {
    let renderData = this.renderData()
    let ind = el.attr('_index')
    if (ind !== this.hoverIndex) {
      this.dataset.resetState()
      this.dataset.cols[Math.floor(ind / this.dataset.rows.length)].state = 'hover'
      // let curData = this.dataset[ind];
      // renderData.forEach((row) => {
      //   if (row.state === "hover") {
      //     row.state = "default";
      //   }
      // });
      // curData.state = "hover";
      this.hoverIndex = ind
    }
  }
  groupMousemove(e, el) {
    console.log(el)
  }
  renderData() {
    let renderAttrs = this.renderAttrs
    return this.dataset[renderAttrs.layoutBy]
  }
  render(data) {
    let { clientRect, innerRadiusPx, radiusPx } = this.renderAttrs
    let colors = this.theme.colors
    let styles = this.renderStyles
    return (
      <Group class="container" ref="wrap">
        <Group class="rings-group">
          {data.barData.map((ring, ind) => {
            let style = getStyle(
              this,
              'sector',
              [
                {
                  _index: ind
                },
                styles.sector
              ],
              [this.dataset.rows[ind], ind]
            )
            return ring.state === 'disabled' || style === false ? <Node /> : <Ring onMouseleave={this.mouseleave} onMousemove={this.mousemove} {...style} animation={{ from: ring.from, to: ring.to }} />
            // return (
            //   <Ring
            //     ref={"pillar" + i}
            //     {...pillar.attrs}
            //     onMousemove={this.onMousemove}
            //     onClick={(e, el) => {
            //       this.onClick(e, el, i, pillar.attrs);
            //     }}
            //   />
            // );
          })}
        </Group>
        {/* <Group>
          {data.groupData.map((pillar, i) => {
            return <Ring {...pillar} onMousemove={this.groupMousemove} />;
          })}
        </Group> */}
      </Group>
    )
  }
}
export default PolarBar
