<template>
  <header>
    <nav class="navbar">
      <router-link class="navbar-brand" to="/">
        <img src="https://p2.ssl.qhimg.com/t01aec2b6fbfbb68e03.png" height="40" alt="qchart" />
      </router-link>

      <button @click="toggleShowMenu" class="navbar-toggler">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
            <title>Menu</title>
            <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22" />
          </svg>
        </span>
      </button>

      <div :class="showMenu ? 'is-show' : ''">
        <Search />
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home">首页</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/doc">API文档</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/demo">图表示例</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/more">更多图例</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Search from './Search.vue'

export default {
  components: {
    Search
  },

  watch: {
    $route () {
      this.showMenu = false
    }
  },

  data () {
    return {
      showMenu: false
    }
  },

  methods: {
    toggleShowMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 100;
  padding: 0 40px 0 20px;
  height: 4rem;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(229, 229, 229, 0.5);
  nav {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;

    display: flex;
    flex-wrap: nowrap;

    a {
      color: #444;
    }

    button {
      position: absolute;
      right: 15px;
      z-index: 9999;
      display: none;
      cursor: pointer;
    }

    button:hover,
    button:focus {
      outline: none;
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;
    }

    ul {
      flex-direction: row;
    }

    li {
      display: inline-flex;
      align-items: center;
      margin-right: 3rem;

      a {
        padding: 1.3rem 0;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
        line-height: 1.375rem;
      }

      a.router-link-active {
        border-bottom: 2px solid #1890ff;
        color: #1890ff;
      }
    }
  }
}

@media (max-width: 768px) {
  header {
    padding: 0;

    nav {
      padding: 0 15px;
      background: #fff;
      justify-content: center;

      button {
        display: block;
        left: 15px;
        right: auto;
      }

      > div {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        transform: translateY(-100%);
        padding-bottom: 1.5rem;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        background: #fff;
        box-shadow: 0 2px 8px rgba(229, 229, 229, 0.5);

        transition: transform ease-in-out 0.3s;
      }

      ul {
        flex-direction: column;
        padding-left: 1.5rem;

        li {
          width: 100%;
          margin: 1rem 0;

          a {
            width: 100%;
          }

          a.router-link-active {
            border-bottom: 0;
            color: #3273dc !important;
          }
        }
      }

      > div.is-show {
        transform: translateY(100%);
      }
    }
  }
}
</style>
