<template>
  <div class="search-box">
    <input type="text"
           v-model="query"
           @blur="reset"
           placeholder="搜索组件.."
           @keyup.enter="go(null)">
    <transition name="fade">
      <ul v-show="suggestions.length > 0"
          @mouseleave="blur"
          class="suggestions">
        <li v-for="(s, i) in suggestions"
            :key="'suggestion' + i"
            @mouseenter="focus(i)"
            @mousedown="go(i)">
          <a :href="s.path"
             @click.prevent>{{ s.title }}</a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import router from '../router'

const routes = router.options.routes

const pages = routes.reduce((accumulate, route) => {
  if (route.children) {
    route.children.forEach(child => {
      if (child.title) {
        accumulate.push({
          ...child,
          path: route.path + '/' + child.path
        })
      }
    })
  }

  return accumulate
}, [])

export default {
  data() {
    return {
      query: '',
      focused: false,
      focusIndex: null
    }
  },

  computed: {
    suggestions() {
      const query = this.query.trim().toLowerCase()

      if (!query) {
        return []
      }

      const matches = pages.filter(
        page =>
          ((page.title && page.title.includes(query)) ||
            (page.path && page.path.includes(query))) &&
          page.path !== this.$router.currentRoute.path
      )

      return matches
    }
  },

  methods: {
    go(i) {
      const idx = (this.focused && i) || this.focusIndex

      if (idx <= -1) {
        return
      }

      const target = this.suggestions[idx]

      if (!target) {
        return
      }

      this.$router.push(target.path)

      this.reset()
    },

    focus(i) {
      this.focusIndex = i
      this.focused = true
    },

    blur() {
      this.focused = false
    },

    reset() {
      this.query = ''
      this.focusIndex = null
      this.blur()
    }
  }
}
</script>

<style>
.search-box {
  position: relative;
  display: inline-block;
  padding: 0 1.5rem 0 64px;
}

.search-box input {
  cursor: text;
  width: 10rem;
  color: #4e6e8e;
  display: inline-block;
  border: none;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: url('./search.svg') 0.6rem 0.5rem no-repeat;
  background-size: 1rem;
}

.search-box input:focus {
  color: #333;
  width: 14rem;
  border-bottom: 1px solid #1890ff;
}

.search-box .suggestions {
  position: absolute;
  right: 1.5rem;
  left: 10px;
  top: 30px;
  z-index: 2000;
  margin-top: 0.5rem;
  width: 20rem;
  padding: 0;
  border: 1px solid #cfd4db;
  border-radius: 4px;
  background: #fff;
  list-style-type: none;
  color: #333;
}

.search-box .suggestions li {
  cursor: pointer;
  margin-left: 0.4rem;
}

.search-box .suggestions li:first-of-type {
  margin-top: 0.4rem;
}

.search-box .suggestions li:last-of-type {
  margin-bottom: 0.4rem;
}

.search-box .suggestions li:hover {
  background-color: #f3f4f5;
  color: #3273dc;
}

.search-box .suggestions li a {
  display: block;
  color: inherit;
  width: 100%;
  padding: 0.4rem 0.6rem;
  line-height: 1.4;
  border-radius: 4px;
}

.fade-enter-active {
  animation: fade-enter ease 0.3s;
}

.fade-leave-active {
  animation: fade-out ease 0.3s;
}

@keyframes fade-enter {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .search-box input,
  .search-box input:focus {
    width: 100%;
  }

  .search-box .suggestions {
    width: auto;
    left: 1.5rem;
  }
}
</style>