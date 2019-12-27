<template>
  <div>
    <div class="desr">
      QCharts 是一个基于
      <a href="https://www.spritejs.com/">spritejs</a>
      封装的图表库，可以让用户以组件的形式组合出各种图表。如果你使用Vue或者React，可以使用
      <a
        href="https://www.spritejs.com/cat-charts-vue/"
      >CatCharts-Vue</a> 或
      <a href="https://www.spritejs.com/cat-charts-react/">CatCharts-React</a>
      ，使用微信小程序
      <a href="https://github.com/spritejs/qcharts-wxapp-demo">QChart小程序版</a>
    </div>
    <section class="intro">
      <h5>折线图</h5>
      <ul>
        <li>
          <a href="./#/demo/line/default">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-line.png" alt="基础折线图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/line/double">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/double-line.png" alt="双折线图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/line/smooth">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/curve-line.png" alt="双曲线" />
          </a>
        </li>
        <li>
          <a href="./#/demo/line/multi">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/multi-line.png" alt="多折线" />
          </a>
        </li>
      </ul>
      <h5>面积图</h5>
      <ul>
        <li>
          <a href="./#/demo/area/default">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-area.png" alt="基础折线图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/area/stack">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/stack-area.png" alt="堆叠面积图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/area/range">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/range-area.png" alt="区间面积图" />
          </a>
        </li>
      </ul>
      <h5>柱状图</h5>
      <ul>
        <li>
          <a href="./#/demo/column/default">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-column.png" alt="基础柱状图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/column/group">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/group-column.png" alt="分组柱状图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/column/stack">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/stack-column.png" alt="堆叠柱状图" />
          </a>
        </li>
      </ul>
      <h5>条形图</h5>
      <ul>
        <li>
          <a href="./#/demo/bar/default">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/bar-chart.png" alt="基础条形图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/bar/group">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/group-bar-chart.png" alt="分组条形图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/bar/stack">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/stack-bar-chart.png" alt="堆叠条形图" />
          </a>
        </li>
      </ul>
      <h5>饼图</h5>
      <ul>
        <li>
          <a href="./#/demo/pie/default">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-pie.png" alt="基础饼图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/pie/nest">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/nested-pie.png" alt="嵌套饼图 " />
          </a>
        </li>
        <li>
          <a href="./#/demo/pie/dounght">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/dounght.png" alt="环形图" />
          </a>
        </li>
      </ul>
      <h5>雷达图</h5>
      <ul>
        <li>
          <a href="./#/demo/radar/default">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-radar.png" alt="基础雷达图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/radar/radarPoint">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/radar-double.png" alt="双色雷达图 " />
          </a>
        </li>
      </ul>
      <h5>散点图</h5>
      <ul>
        <li>
          <a href="./#/demo/scatter/scatter">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/scatter.png" alt="基础散点图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/scatter/bubble">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/scatter-bubble.png" alt="气泡图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/scatter/bubble2">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/scatter-bubble2.png" alt="文字气泡图" />
          </a>
        </li>
      </ul>
      <h5>漏斗图</h5>
      <ul>
        <li>
          <a href="./#/demo/funnel/default">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-funnel.png" alt="基础漏斗图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/funnel/others">
            <img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/funnel-other.png" alt="其它漏斗图" />
          </a>
        </li>
      </ul>
      <h5>仪表盘</h5>
      <ul>
        <li>
          <a href="./#/demo/gauge/default">
            <img src="https://p0.ssl.qhimg.com/t019a02888f6b738828.jpg" alt="仪表盘" />
          </a>
        </li>
        <li>
          <a href="./#/demo/gauge/tick">
            <img src="https://p3.ssl.qhimg.com/t01212f91f46fe5e82a.jpg" alt="其它" />
          </a>
        </li>
      </ul>
      <h5>极坐标柱状图</h5>
      <ul>
        <li>
          <a href="./#/demo/polarBar/default">
            <img src="https://p4.ssl.qhimg.com/t01a8ebbbb1be84b2bd.png" alt="基础柱状图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/polarBar/group">
            <img src="https://p5.ssl.qhimg.com/t019b534af0c9649b6b.png" alt="分组柱状图" />
          </a>
        </li>
        <li>
          <a href="./#/demo/polarBar/stack">
            <img src="https://p5.ssl.qhimg.com/t016cd0f3d3185f3026.png" alt="堆叠柱状图" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.desr {
  padding: 20px;
}
section {
  min-height: 600px;

  div.container {
    height: 100%;
    overflow: hidden;
  }

  .row {
    padding: 100px 0;

    display: flex;
    align-items: stretch;
    justify-content: center;

    > div {
      height: 100%;
    }
  }
}

section.intro {
  background-color: #f8fafe;
  padding: 20px;
  .col-md-5 {
    h1 {
      margin: 0 0 48px;
    }

    p {
      line-height: 24px;
      font-weight: 300;
    }

    button {
      margin-top: 48px;

      + button {
        margin-left: 20px;
      }
    }
  }
  h5 {
    clear: both;
  }
  ul {
    overflow: hidden;
    padding-bottom: 10px;
  }
  li {
    float: left;
    background-color: #fff;
    margin: 10px 5px;
    padding: 5px;
  }
  li a {
    display: block;
  }
  li a img {
    height: 280px;
    width: 310px;
  }
  .col-md-7 {
    text-align: center;
  }

  img {
    max-height: 400px;
  }
}
</style>
