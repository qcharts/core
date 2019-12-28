<template>
  <div class="page">
    <aside :class="{'is-show':showMenu,'side-menu':1}">
      <nav>
        <ul>
          <template v-for="(item, i) in routes">
            <li v-if="!item.redirect&&!item.hidden" :key="i">
              <div v-if="item.children">
                <div class="menu menu-title" @click="menuTitleClick(item.path)">
                  <span>{{item.title}}</span>
                  <img src="./down.svg" :class="{transfrom0:item.path===showPath}" />
                </div>
                <transition name="collapse">
                  <ul v-show="item.path===showPath">
                    <template v-for="(subItem,index) in item.children">
                      <li v-if="!subItem.redirect&&!subItem.hidden" :key="index">
                        <router-link
                          :to="'/' + parentRoutePath +  '/'+item.path+'/' + subItem.path"
                          class="menu menu-item"
                        >{{ subItem.title }}</router-link>
                      </li>
                    </template>
                  </ul>
                </transition>
              </div>

              <div v-else>
                <router-link
                  :to="'/' + parentRoutePath +  '/'+item.path"
                  class="menu menu-title"
                >{{ item.title }}</router-link>
              </div>
            </li>
          </template>
        </ul>
      </nav>
      <button class="btn" @click="toggleShowMenu">
        <svg
          viewBox="0 0 1024 1024"
          class
          data-icon="bars"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"
          />
        </svg>
      </button>
    </aside>

    <article class="markdown-article">
      <router-view class="markdown-body"></router-view>
      <Top />
    </article>
  </div>
</template>


<script>
import Top from './Top.vue'

export default {
  props: ['parentRoutePath', 'routes'],

  components: {
    Top
  },

  data() {
    return {
      showMenu: false,
      showPath: 'pie'
    }
  },

  mounted() {
    const curPath = this.$route.path
    if (curPath) {
      this.showPath = curPath.split('/')[2]
    }
  },

  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu
    },
    menuTitleClick(path) {
      this.showPath = this.showPath === path ? '/' : path
    }
  }
}
</script>

<style lang="scss">
.page {
  position: relative;
  padding-left: 260px;
  display: flex;
  flex: 1;
  overflow: hidden;

  aside {
    position: absolute;
    left: 0;
    top: 1px;
    z-index: 10;
    width: 260px;
    height: 100%;
    border-right: 1px solid #e8e8e8;
    background-color: #fff;
    transition: all 0.25s cubic-bezier(0.78, 0.14, 0.15, 0.86);

    nav {
      color: #333;
      height: 100%;
      overflow: auto;
      padding-left: 40px;
      padding-top: 28px;
    }

    button {
      display: none;
      position: absolute;
      right: 0;
      top: 10px;
      transform: translateX(100%);
      width: 2.5rem;
      background: #fff;

      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
      border-radius: 0 4px 4px 0;
    }

    button:hover,
    button:focus {
      outline: none;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    }
    ul {
      overflow: hidden;
    }

    .menu {
      display: inline-block;
      width: 100%;
      font-family: PingFangSC-Regular;
    }

    .menu-title {
      font-size: 14px;
      font-weight: 500;
      padding-right: 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      color: rgba(32, 32, 32, 1);
      height: 46px;

      .transfrom0 {
        transform: rotate(0deg);
      }
      img {
        transform: rotate(180deg);
      }
    }

    .menu-item {
      padding: 14px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(125, 128, 133, 1);
    }

    .collapse-enter-active {
      animation: collapse-enter ease 0.3s;
    }

    .collapse-leave-active {
      animation: collapse-out ease 0.4s;
    }

    @keyframes collapse-enter {
      from {
        max-height: 0;
      }

      to {
        max-height: 500px;
      }
    }

    @keyframes collapse-out {
      from {
        max-height: 100px;
      }

      to {
        max-height: 0;
      }
    }
  }

  nav li a.router-link-active {
    color: #1890ff;
  }

  article {
    width: 100%;
    height: 100%;
    padding: 24px 20px 10px 50px;
    overflow: auto;

    .markdown-body {
      h2:first-child {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        font-size: 32px;
        font-weight: 400;
        color: rgba(77, 78, 82, 1);
        line-height: 46px;
        border-bottom: 0;
      }

      h2:first-child::before {
        content: '';
        display: inline-block;
        background: #1979ff;
        height: 32px;
        width: 5px;
        line-height: 46px;
        margin-right: 9px;
        margin-top: 0;
        visibility: visible;
      }

      tbody {
        tr {
          td:first-child {
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 107, 255, 1);
            line-height: 20px;
          }
        }
      }
    }

    .markdown-body .demo-menu {
      display: flex;
      border-bottom: 2px solid #f5f5f5;
      list-style: none;
      padding: 0 !important;
      margin-bottom: 1.4em;
      overflow-x: auto;
      overflow-y: hidden;

      li + li {
        margin-left: 1rem;
      }

      a {
        display: inline-block;
        padding: 0.5em 1em;
        word-break: keep-all;
      }

      a.router-link-active {
        border-bottom: 2px solid #3273dc;
        color: #3273dc !important;
      }
    }
  }

  @media (max-width: 768px) {
    article {
      padding: 15px;
    }

    aside {
      transform: translateX(-260px);

      button {
        display: block;
      }
    }

    aside.is-show {
      transform: translateX(0);
    }
  }
}

@media (max-width: 768px) {
  .page {
    padding-left: 0;
  }
}
</style>


