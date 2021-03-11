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
        let counter
        if(this.$browserDetect.isFirefox) {
          counter = e.deltaY * 10
        } else {
          counter = e.deltaY * 1
        }
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
#background::-webkit-scrollbar-track {
  background: #3c2832;
}
#background::-webkit-scrollbar-thumb {
  background: #0014ff;
}
#background::-webkit-scrollbar-thumb:hover {
  background: #0014ff;
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
    transform:rotate(90deg)  translateY(-100%);
    transform-origin: top left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vh;
    height: 100vw;

  }
}
</style>
