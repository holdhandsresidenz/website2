<template>
  <div
      id="background"
      ref="background"
      @scroll="scrolled"
      @wheel="wheel"
      class="red"
  >
    <img src="../assets/Seite_Info.png" id="info">
    <div id="line"></div>
    <img src="../assets/Logo.png" id="logo">
    <slot></slot>
  </div>
</template>

<script>

import {PixelToViewport} from '@/mixins/PixelToViewport'
export default {
  name: "Background",
  mixins: [PixelToViewport],
  components: {

  },
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
#logo {
  position: absolute;
  top: 12vh;
  left:0vw;
  width: 60vw;
}
#background{
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: #3E2A33;
}
#line {
  background: blue;
  position: absolute;
  top: 16.5px;
  left: 115px;
  width: 400vw;
  height: 2px;

}
#info {
  position: absolute;
  top: 10px;
  width: 115px;

}
@media all and (max-width: 1000px) {
  #background {
    transform: rotate(90deg) translateY(25vw);
    width: 100vh;
    height: 100vw;
  }
}
</style>
