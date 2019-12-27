<template>
  <!-- <CollapseTransition> -->
  <button class="top" v-show="visible" @click="top" ref="top">
    <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path
        d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"
      ></path>
    </svg>
  </button>
  <!-- </CollapseTransition> -->
</template>

<script>
function throttle(fn, delay) {
  let inThrottle
  let lastTime
  let timer

  return function() {
    if (!inThrottle) {
      fn.apply(this, arguments)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (Date.now() - lastTime >= delay) {
          fn.apply(this, arguments)
          lastTime = Date.now()
        }
      }, Math.max(delay - (Date.now() - lastTime), 0))
    }
  }
}

export default {
  data() {
    return {
      visible: false,
      parent: null
    }
  },

  mounted() {
    const oTop = this.$refs['top']

    if (!this.parent) {
      this.parent = oTop.parentNode
    }

    this.parent.addEventListener(
      'scroll',
      throttle(() => {
        const currentScroll = this.parent.scrollTop

        if (currentScroll > 300) {
          this.visible = true
        } else {
          this.visible = false
        }
      }, 200)
    )
  },

  methods: {
    top() {
      if (!this.parent) {
        return
      }

      let timer = null

      const step = () => {
        let currentScroll = this.parent.scrollTop

        if (currentScroll > 0) {
          currentScroll -= currentScroll / 5
          this.parent.scrollTop = currentScroll

          timer = requestAnimationFrame(step)
        } else {
          cancelAnimationFrame(timer)
        }
      }

      timer = requestAnimationFrame(step)
    }
  }
}
</script>

<style scoped>
.top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;

  background: #fff;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  color: #8590a6;
  padding: 0;
}

button:hover,
button:focus {
  outline: none;
}
</style>