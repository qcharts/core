import Base from '../../base/BaseVisual'
import { Group, Polyline, Label } from 'spritejs'
import { deepObjectMerge, throttle } from '@qcharts/utils'
import layout from './layout'
import { getStyle } from '../../utils/getStyle'
class Funnel extends Base {
  constructor(attrs) {
    super(attrs)
    this.type = 'funnel'
    this.polygons = null
    this.labels = null
    this.hoverIndex = -1
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    //渲染前的处理函数，返回lines,继承base---------before
    let { polygons, labels, guideLines, guideTexts } = this.getRenderData()
    polygons = polygons.map(plg => {
      return {
        attrs: { ...plg },
        from: {
          points: plg.points.length === 8 ? [plg.points[6], plg.points[7], plg.points[4], plg.points[5], plg.points[4], plg.points[5], plg.points[6], plg.points[7]] : [plg.points[4], plg.points[5], plg.points[4], plg.points[5], plg.points[4], plg.points[5]]
        },
        to: {
          // pos: [0, 0],
          points: plg.points
        }
      }
    })
    labels = labels.map(item => {
      return {
        attrs: { ...item }
      }
    })
    guideLines = guideLines.map(item => {
      return {
        attrs: { ...item }
      }
    })
    guideTexts = guideTexts.map(item => {
      return {
        attrs: { ...item }
      }
    })
    this.polygons = polygons
    this.labels = labels
    this.guideLines = guideLines
    this.guideTexts = guideTexts
    return { polygons, labels, guideTexts, guideLines }
  }
  beforeUpdate() {
    let oldPolygons = this.polygons
    let oldLabels = this.labels
    let oldTexts = this.guideTexts
    let oldLines = this.guideLines
    let { polygons, labels, guideLines, guideTexts } = this.getRenderData()
    polygons = polygons.map((polygon, i) => {
      return {
        attrs: { ...polygon },
        from: {
          points: oldPolygons[i].to.points
        },
        to: {
          points: polygon.points
        }
      }
    })
    labels = labels.map((label, i) => {
      return {
        attrs: { ...label },
        from: {
          pos: oldLabels[i].attrs.pos
        },
        to: {
          pos: label.pos
        }
      }
    })
    guideTexts = guideTexts.map((item, i) => {
      return {
        attrs: { ...item },
        from: {
          pos: oldTexts[i].attrs.pos
        },
        to: {
          pos: item.pos
        }
      }
    })
    guideLines = guideLines.map((item, i) => {
      return {
        attrs: { ...item },
        from: {
          points: oldLines[i].attrs.points
        },
        to: {
          points: item.points
        }
      }
    })
    this.polygons = polygons
    this.labels = labels
    this.guideLines = guideLines
    this.guideTexts = guideTexts
    return { polygons, labels, guideTexts, guideLines }
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let { polygons, labels, guideLines, guideTexts } = layout(renderData, renderAttrs)
    return { polygons, labels, guideLines, guideTexts }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: 'funnel',
      formatter: d => (d.value ? d.value : d)
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {}
  }
  onMousemove(event, el) {
    let ind = el.attr('_ind')
    this.dataset.resetState()
    this.dataset[this.renderAttrs.layoutBy][ind][0].state = 'hover'
  }

  onMouseleave(e, el) {
    this.dataset.resetState()
  }
  myClick = function() {
    console.log('myclick')
  }

  withText(attrs, cell) {
    let { labelAttrs } = attrs
    if (cell.state === 'disabled') {
      return
    }
    const textStyle = getStyle(this, 'text', [{}], [cell.data, cell.row])
    if (textStyle === false) {
      return
    }
    // let { textFrom, textTo } = this.fromTos[index]
    return <Label {...labelAttrs} {...textStyle} />
  }

  render(data) {
    let { clientRect, bgpillarState, states } = this.renderAttrs
    let { polygons, labels, guideLines, guideTexts } = data
    const styles = this.renderStyles
    const colors = this.theme.colors
    return (
      <Group class="container" ref="wrap" pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Group ref="pillars" class="pillars-group">
          {polygons.map((pillar, ind) => {
            const cell = this.dataset[this.renderAttrs.layoutBy][ind][0]
            let style = getStyle(this, 'polygon', [{ _ind: ind, fillColor: colors[ind] }, styles.polygon], [cell, ind])
            let styleHover = getStyle(this, 'polygon:hover', [{ _ind: ind, opacity: 0.8 }, styles.polygon], [cell, ind])
            if (cell.state === 'hover') {
              deepObjectMerge(style, styleHover)
            }
            return (
              <Group>
                <Polyline onMouseEvent={['click', cell, ind]} onMousemove={this.onMousemove} onMouseleave={this.onMouseleave} {...pillar.attrs} {...pillar.from} {...style} animation={{ from: pillar.from, to: pillar.to }} />
                {/* {withGuide(
                  this,
                  pillar.attrs,
                  this.dataset[this.renderAttrs.layoutBy][ind][0],
                  this.renderAttrs.formatter
                )} */}
              </Group>
            )
          })}
        </Group>
        <Group ref="guideLine">
          {guideLines.map((item, ind) => {
            let cell = this.dataset[this.renderAttrs.layoutBy][ind][0]
            if (cell.state === 'disabled') {
              return
            }
            const lineStyle = getStyle(this, 'guideline', [{}], [cell.data, cell.row])
            if (lineStyle === false) {
              return
            }
            return <Polyline {...item.attrs} {...item.from} {...lineStyle} animation={{ from: item.from, to: item.to }} />
          })}
        </Group>
        <Group ref="guideText">
          {guideTexts.map((item, ind) => {
            let cell = this.dataset[this.renderAttrs.layoutBy][ind][0]
            if (cell.state === 'disabled') {
              return
            }
            const textStyle = getStyle(this, 'guideText', [{}], [cell.data, cell.row])
            if (textStyle === false) {
              return
            }
            return <Label {...item.attrs} {...item.from} {...textStyle} animation={{ from: item.from, to: item.to }} />
          })}
        </Group>
        <Group ref="label">
          {labels.map((item, ind) => {
            let cell = this.dataset[this.renderAttrs.layoutBy][ind][0]
            if (cell.state === 'disabled') {
              return
            }
            const textStyle = getStyle(this, 'text', [{}], [cell.data, cell.row])
            if (textStyle === false) {
              return
            }
            return <Label {...item.attrs} {...item.from} {...textStyle} animation={{ from: item.from, to: item.to }} />
          })}
        </Group>
      </Group>
    )
  }
}
export default Funnel
