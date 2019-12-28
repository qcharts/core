<template>
  <div id="app" :data-from="from" :class="pageClass">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  watch: {
    $route: function (res) {
      let klass = res.path.split('/')[1]
      this.pageClass = klass
    }
  },
  data () {
    return {
      from: '',
      pageClass: ''
    }
  },
  created () {
    this.from = getQueryString('from')
  },
  components: {
    Header
  }
}

function getQueryString (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
</script>
<style class="from-clair">
#app[data-from='clair'] > header {
  display: none;
}
#app[data-from='clair'] > .page {
  margin: 0;
  padding: 0;
}
#app[data-from='clair'] .side-menu {
  display: none;
}
</style>
<style lang="scss">
@import './styles/index.scss';
#app {
  .block-demo {
    height: calc(100vh - 180px);
  }
  .markdown-body {
    padding-bottom: 0;
  }
}
#app.more {
  .side-menu {
    display: none;
  }
  .page {
    margin: 0;
    padding: 0;
  }
  .markdown-article {
    padding: 20px;
    background-color: #f8fafe;
  }
}
</style>
