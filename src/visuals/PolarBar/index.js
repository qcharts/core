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
    arrLayout.groupData.forEach((bar, i) => {
      bar.pos = this.pos;
    });
    arrLayout.barData.forEach((bar, i) => {
      let style = this.style("pillar")(bar.attrs, this.dataset.rows[i], i);
      bar.fillColor = bar.fillColor || colors[i % dataLength];
      bar.strokeColor = renderAttrs.strokeColor || "#FFF";
      bar.pos = this.pos;
      if (
        !bar.hasOwnProperty("startAngle") ||
        !bar.hasOwnProperty("endAngle")
      ) {
        bar.lineWidth = 0;
      } else {
        bar.lineWidth = 1;
      }
      let barStyle = deepObjectMerge(
        { bgcolor: bar.bgcolor || colors[i % dataLength] },
        styles.bar,
        style
      );
      bar = deepObjectMerge(bar, barStyle);
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

  onClick = (evt, el, i, attrs) => {
    if (
      this.renderAttrs.stack ||
      !attrs.hasOwnProperty("startAngle") ||
      !attrs.hasOwnProperty("endAngle")
    ) {
      return;
    }
    let { width, height } = this.renderAttrs.clientRect;
    let isTranslated = el.isTranslated;
    const offset = Math.max(20, Math.min(width / 2, height / 2) * 0.1);
    const { startAngle, endAngle } = attrs;
    const angle = (Math.PI * (startAngle + endAngle)) / 360;
    const translate = [offset * Math.cos(angle), offset * Math.sin(angle)];
    let target = el;
    if (isTranslated) {
      target.transition(0.3).attr("translate", [0, 0]);
      el.isTranslated = false;
    } else {
      target.transition(0.3).attr("translate", translate);
      el.isTranslated = true;
      for (let i = 0, len = this.pillars.length; i < len; i++) {
        if (
          el.id !== this.$refs["pillar" + i].id &&
          this.$refs["pillar" + i].isTranslated === true
        ) {
          this.$refs["pillar" + i].transition(0.3).attr("translate", [0, 0]);
          this.$refs["pillar" + i].isTranslated = false;
        }
      }
    }
  };

  onMouseleave(index) {
    // this.dataset.resetState();
  }

  onMousemove = throttle(
    (index) => {
      console.log(index);
    },
    16,
    true
  );

  render(data) {
    let { clientRect } = this.renderAttrs;
    // console.log(data);
    return (
      <Group class="container" ref="wrap">
        <Group>
          {data.barData.map((pillar, i) => {
            return (
              <Ring
                ref={"pillar" + i}
                {...pillar.attrs}
                onClick={(e, el) => {
                  this.onClick(e, el, i, pillar.attrs);
                }}
              />
            );
          })}
        </Group>
        {/* <Group>
          {data.groupData.map((pillar, i) => {
            return <Ring {...pillar} />;
          })}
        </Group> */}
      </Group>
    );
  }
}
export default PolarBar;
