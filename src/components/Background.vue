<template>
  <div
      id="background"
      ref="background"
      @scroll="scrolled"
      @wheel="wheel"
      class="red"
  >
    <slot></slot>
  </div>
</template>

<script>
import {PixelToViewport} from '@/mixins/PixelToViewport'
export default {
  name: "Background",
  mixins: [PixelToViewport],
  data: function () {
    return {
      scrollPos: 0,

    }
  },
  props: {
    scrollSuspended: Boolean
  },
  methods: {
    scrolled() {
      let px = this.$refs.background.scrollLeft
      this.scrollPos = px
      this.$emit('scrollPositionChanged', this.pxToVw(this.scrollPos) )
    },
    wheel(e) {
      if ( !this.scrollSuspended ) {
        let counter = e.deltaY * 1
        while (counter >= 0) {
          this.$refs.background.scrollLeft += 1
          counter--
        }
        while (counter <= 0) {
          this.$refs.background.scrollLeft -= 1
          counter++
        }
      }

    },
    deactivateScroll() {
      this.scrollSuspended = true
    },
    activateScroll() {
      this.scrollSuspended = false
    }
  },

}
</script>

<style scoped>
#background{
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: #3E2A33;
}
</style>
