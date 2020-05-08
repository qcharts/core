import Base from "../../base/BaseVisual";
import { Group, Ring } from "spritejs";
import { deepObjectMerge, throttle } from "@qcharts/utils";
import layout from "./layout";
import filterClone from "filter-clone";
class PolarBar extends Base {
  constructor(attrs) {
    super(attrs);
    this.type = "polarbar";
    this.groups = [];
    this.pillars = [];
    this.$pillars = [];
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs;
    return attrs;
  }

  get pos() {
    let { height, width, top, left } = this.renderAttrs.clientRect;
    let [x, y] = [left + width / 2, top + height / 2];
    return [x, y];
  }

  beforeRender() {
    //渲染前的处理函数，返回lines,继承base
    let { arrLayout } = this.getRenderData();
    this.pillars = arrLayout.barData;
    this.groups = arrLayout.groupData;
    let barData = arrLayout.barData.map((item) => {
      return {
        attrs: item,
        from: {
          endAngle: item.startAngle,
        },
        to: {
          endAngle: item.endAngle,
        },
      };
    });
    let groupData = this.groups;
    return { barData, groupData };
  }
  beforeUpdate() {
    const pillars = this.pillars;
    let { arrLayout } = this.getRenderData();
    let barData = arrLayout.barData.map((nextPillar, i) => {
      let prev = pillars[i] ? pillars[i] : arrLayout.barData[i - 1];
      if (!prev) {
        prev = {
          size: [0, 0],
          pos: nextPillar.pos,
          labelAttrs: null,
        };
      }
      return {
        attrs: nextPillar,
        from: {
          size: prev.disable
            ? this.attr("transpose")
              ? [0, prev.size[1]]
              : [prev.size[0], 0]
            : prev.size,
          pos: prev.pos,
        },
        to: {
          size: nextPillar.size,
          pos: nextPillar.pos,
        },
      };
    });
    this.pillars = arrLayout.barData;
    this.groups = arrLayout.groupData;
    return { barData, groupData: arrLayout.groupData };
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs;
    let renderData = this.dataset[renderAttrs.layoutBy];
    if (!renderData || renderData.length === 0) {
      return { barData: [], groupData: [] };
    }
    const dataLength =
      renderData.length > 1 ? renderData.length : renderData[0].length;
    this.legendArr = Array.from({ length: renderData.length }, () => {
      return 1;
    });
    let arrLayout = layout(renderData, renderAttrs);
    let colors = this.theme.colors;
    let styles = this.renderStyles;
    arrLayout.barData.forEach((bar, i) => {
      let style = this.style("pillar")(bar.attrs, this.dataset.rows[i], i);
      bar.fillColor = bar.fillColor || colors[i % dataLength];
      bar.strokeColor = renderAttrs.strokeColor || "#FFF";
      bar.pos = this.pos;
      bar.lineWidth = 1;
      let barStyle = deepObjectMerge(
        { bgcolor: bar.bgcolor || colors[i % dataLength] },
        styles.bar,
        style
      );
      bar = deepObjectMerge(bar, barStyle);
      if (bar.lineWidth && bar.lineWidth >= 1) {
        // 避免只展示一个扇形时出现边框
        const { startAngle, endAngle } = bar;
        const angle = (startAngle + endAngle) % (Math.PI * 1);
        let groupBarNumber =
          arrLayout.barData.length / arrLayout.groupData.length;
        if (
          angle <= 0 &&
          arrLayout.barData.filter((ring) => !ring.disabled).length /
            groupBarNumber <=
            1
        ) {
          bar.lineWidth = 0;
        }
      }
    });
    return { arrLayout };
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: "bar",
    };
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {};
  }
  onMouseenter(e, el) {
    el.attr({ opacity: 0.1 });
  }
  onMouseleave(e, el) {
    el.attr({ opacity: 0.01 });
  }

  // onClick(e, el, attr) {
  //   console.log(e);
  //   console.log(el);
  //   console.log(attr);
  // }

  onClick = (evt, el, attrs) => {
    let isTranslated = el.isTranslated;
    const offset = Math.max(20, attrs.maxRadius * 0.1);
    const { startAngle, endAngle } = attrs;
    const angle = (startAngle + endAngle) / 2;
    const translate = [offset * Math.cos(angle), offset * Math.sin(angle)];

    // let target = el.parentNode
    let target = el;

    // if (target.attr('name') === 'pieRoot') {
    //   target = el
    // }

    if (isTranslated) {
      target.transition(0.3).attr("translate", [0, 0]);

      el.isTranslated = false;
    } else {
      target.transition(0.3).attr("translate", translate);

      el.isTranslated = true;
      for (let i = 0, len = this.$pillars.length; i < len; i++) {
        if (
          el.id !== this.$pillars[i].id &&
          this.$pillars[i].isTranslated === true
        ) {
          this.$pillars[i].transition(0.3).attr("translate", [0, 0]);
          this.$pillars[i].isTranslated = false;
        }
      }
    }
  };

  getRing = (ring, i, el) => {
    if (!el) {
      return;
    }
    this.$pillars[i] = el;
  };
  onMouseleave(e, el) {}

  onMousemove = throttle((event, el) => {});

  render(data) {
    let { clientRect } = this.renderAttrs;
    // console.log(data);
    return (
      <Group class="container" ref="wrap">
        <Group
          onMouseleave={this.onMouseleave}
          onMouseenter={this.onMousemove}
          onMousemove={this.onMousemove}
          onClick={(e, el) => {
            this.onClick(e, el, pillar.attrs);
          }}
        >
          {data.barData.map((pillar, i) => {
            return (
              <Ring
                ref={(el) => this.getRing(pillar, i, el)}
                {...pillar.attrs}
              />
            );
          })}
        </Group>
      </Group>
    );
  }
}
export default PolarBar;
