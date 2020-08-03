import Base from "../../base/BasePlugin";
import { debounce } from "@qcharts/utils";
class Tooltip extends Base {
  constructor(attrs) {
    super(attrs);
    this.$el = null;
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs;
    return attrs;
  }
  beforeRender() {}
  beforeUpdate() {}
  tipMousemove = debounce(
    (e) => {
      let maxLeft =
        window.innerWidth - this.$el.getBoundingClientRect().width - 5;
      let maxTop =
        window.innerWidth - this.$el.getBoundingClientRect().height - 5;
      let tarTop = e.y > maxTop ? maxTop : e.y;
      let tarLeft = e.x > maxLeft ? maxLeft : e.x;
      this.$el.style.left = tarLeft + "px";
      this.$el.style.top = tarTop + "px";
    },
    100,
    1
  );
  rendered() {
    let { colors, sort, formatter } = this.renderAttrs;
    this.chart.dataset.on("change", (data) => {
      let { option } = data;
      this.$el.innerHTML = "";
      let reverse = (param) => {
        return typeof this.dataset.datasetReverse === "function"
          ? this.dataset.datasetReverse(param)
          : param;
      };
      if (option.value === "hover") {
        let arr = []
          .concat(this.chart.dataset)
          .filter((item) => item.state === "hover");
        if (sort) {
          arr.sort(sort);
        }
        if (arr.length) {
          let innerHtml = "";
          let $div = document.createElement("div");
          $div.style.cssText =
            "white-space:nowrap;padding:6px 10px;background-color:rgba(0,0,0,0.5);color:#fff;";
          arr.forEach((item, ind) => {
            let text = `${item.text}：${item.value}`;
            if (formatter) {
              text = formatter(item.data) || text;
            }
            let html = `<div class="tooltip-item"><span class="icon" style="margin-right:6px;display:inline-block;width:10px;height:10px;background-color:${colors[ind]}"></span><span class="text">${text}</span></div>`;
            innerHtml += html;
          });
          $div.innerHTML = innerHtml;
          this.$el.appendChild($div);
        }
      } else if (option.name === "reset") {
        this.$el.innerHTML = "";
      }
    });
    document.body.addEventListener("mousemove", this.tipMousemove);
  }
  render() {
    if (!this.$el) {
      this.$el = document.createElement("div");
      this.$el.className = "qcharts-tooltip";
      this.$el.style.cssText =
        "transition:top 300ms ease-out,left 300ms ease-out;position:absolute;pointEvents:none;pointer-events:none;font-size:14px;";
    }
    document.body.appendChild(this.$el);
  }
}
export default Tooltip;
