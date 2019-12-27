<template>
  <div :class="['block-demo', isFullscreen ? 'block-demo--fixed' : '']" ref="block">
    <div class="preview" ref="preview">
      <div class="demo" ref="demo"></div>
    </div>
    <div v-show="showEditor" class="editor" ref="editor">
      <div class="bock-demo__ctrl">
        <!-- <button>复制</button> -->
        <span title="运行" @click="syncCode" class="icon"><img src="./play.svg" alt="运行" /></span>
        <span v-if="!isFullscreen" title="全屏" @click="fullscreen" class="icon"><img src="./full-screen.svg" alt="全屏" /></span>
        <span v-if="isFullscreen" title="取消全屏" @click="fullscreen" class="icon"><img src="./recovery.svg" alt="取消全屏" /></span>
        <span @click="copyCode" class="icon"><img src="./code-copy.svg" alt="复制代码" /></span>
      </div>
      <div class="bock-demo__code">
        <textarea ref="textarea"></textarea>
      </div>
    </div>
    <textarea ref="copytxt" class="copytxt"></textarea>
  </div>
</template>
<script>
import CodeMirror from 'codemirror'
import Split from 'split.js'
import { unescape } from 'scapegoat'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import { throttle } from '../utils'

export default {
  props: {
    tip: String,
    source: String
  },

  data () {
    return {
      editor: null,
      visible: true,

      isJSON: false,
      isFullscreen: false,
      showEditor: true
    }
  },

  mounted () {
    let tip = this.tip.split(',')

    try {
      tip = JSON.parse(JSON.stringify(tip))
    } catch (e) { }

    let innerWidth = window.innerWidth
    this.isFullscreen = tip.indexOf('fullscreen') > -1
      ; (this.showEditor = innerWidth >= 768) && this.initSplit()

    this.initEditor()
    try {
      this.$nextTick(() => {
        this.syncCode()
      })
    } catch (e) {
      throw e
    }
  },

  methods: {
    copyCode () {
      let val = this.editor.getDoc().getValue();
      let $text = this.$refs['copytxt'];
      $text.value = val;
      $text.focus()
      $text.select()
      document.execCommand('copy')
      alert('复制成功！')
    },
    toggle () {
      this.visible = !this.visible
    },
    unescape (html) {
      return unescape(html)
    },

    initSplit () {
      Split([this.$refs['preview'], this.$refs['editor']], {
        sizes: [50, 50]
      })
    },

    initEditor () {
      this.editor = CodeMirror.fromTextArea(this.$refs['textarea'], {
        mode: 'application/javascript',
        extraKeys: {
          'Ctrl-Space': 'autocomplete'
        },
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        lineNumbers: true,
        lineWrapping: false
      })

      this.editor.getDoc().setValue(this.unescape(this.source))
    },

    syncCode () {
      const oDemo = this.$refs['demo']

      oDemo.innerHTML = `<iframe class="chart-frame" frameborder="0"></iframe>`

      // FIXME: 发布以后改地址
      let qchartsSrc =
        process.env.NODE_ENV === 'development'
          ? location.origin + '/qcharts.js'
          : 'https://s4.ssl.qhres.com/static/eee4270b9365f11e.js'
      const spritejsSrc =
        process.env.NODE_ENV === 'development'
          ? 'https://lib.baomitu.com/spritejs/2.29.4/spritejs.min.js'
          : 'https://lib.baomitu.com/spritejs/2.29.4/spritejs.min.js'

      const iframe = oDemo.querySelector('iframe')
      iframe.contentWindow.document.write(
        `<div id="app" style="width: 100%; height: 100%; overflow: hidden"><\/div>
        <script src=${spritejsSrc}><\/script>
        <script src=${qchartsSrc}><\/script>
        <script>${this.editor.getValue()}<\/script>`
      )
    },

    fullscreen () {
      this.isFullscreen = !this.isFullscreen;
      if (window.parent) {
        window.parent.postMessage({ fullScreen: this.isFullscreen }, '*');
      }
    }
  }
}
</script>

<style lang="scss">
.block-demo {
  position: relative;
  margin-top: 1.2em;
  box-sizing: border-box;

  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid #edeff1;
  background: #fff;

  font-size: 1.2rem;
}

.gutter {
  background: #efefef00;
  cursor: col-resize;
  position: relative;
  z-index: 100;
  left: 5px;
}

.block-demo button {
  padding: 0.15rem 0.5rem;
}

.block-demo--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  margin-top: 0 !important;
}

.block-demo + .block-demo {
  margin-top: 30px;
}

.block-demo > .editor,
.block-demo > .preview {
  box-sizing: border-box;
  width: 50%;
  height: 100%;
}

@media (max-width: 768px) {
  .block-demo > .preview {
    width: 100%;
  }
}

.block-demo > .preview {
  box-sizing: border-box;
  max-height: 100%;
  padding: 1rem;
  overflow: hidden;
}

.editor {
  background: #f8fafe;
  border-left: 1px solid #edeff1;
}

.bock-demo__ctrl {
  height: 45px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  text-align: right;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.block-demo--fixed .bock-demo__ctrl {
  padding-right: 88px;
}
.bock-demo__ctrl button + button {
  margin-left: 10px;
}

.bock-demo__code {
  height: calc(100% - 46px);
}

.block-demo .demo {
  height: 100%;
}

.block-demo .demo iframe.chart-frame {
  width: 100%;
  height: 100%;
}
.block-demo + h4 {
  margin-top: 0;
  padding-top: 3.6rem;
}

.CodeMirror {
  height: 100% !important;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 14px;
}
.CodeMirror-gutters {
  background-color: #f7f9fb;
  border-right: none;
}
.cm-s-default .cm-string {
  color: #f84e44ff;
}
.icon {
  cursor: pointer;
  opacity: 0.6;
  font-size: 20px;
  margin-left: 12px;
}
.icon:hover {
  opacity: 1;
}

.copytxt {
  width: 100%;
  height: 1px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
