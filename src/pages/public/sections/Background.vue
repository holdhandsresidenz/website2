<template>
  <div
      id="background"
      ref="background"
      @scroll="scrolled"
      @wheel="wheel"
      class="red"
  >
<NavigationLine v-bind:scroll-pos="scrollPos"></NavigationLine>
    <slot></slot>
  </div>
</template>

<script>
import {PixelToViewport} from '@/mixins/PixelToViewport'
import NavigationLine from "@/pages/public/sections/NavigationLine";
import store from "@/pages/public/store";
export default {
  name: "Background",
  mixins: [PixelToViewport],
  components: {
    NavigationLine
  },
  data: function () {
    return {
      scrollPos: 0,
      scrollDirTwist: true
    }
  },
  props: {
    scrollSuspended: Boolean,
  },
  methods: {
    scrolled() {
      store.commit('updateScrollLeft',this.$refs.background.scrollLeft)

      let px = this.$refs.background.scrollLeft
      this.scrollPos = px
      this.$emit('scrollPositionChanged', this.pxToVw(this.scrollPos) )
    },
    wheel(e) {
      if (e.deltaY === 0) {
        this.scrollDirTwist = false
      }
      if (this.scrollDirTwist) {
        if ( !this.scrollSuspended ) {
          let counter
          if(this.$browserDetect.isFirefox) {
            counter = e.deltaY * 15
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
      }
    },
    deactivateTwist() {
      this.scrollDirTwist = false
      window.removeEventListener('touchstart', this.deactivateTwist)
    },
    autoscroll() {
      let self = this;
      setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        self.$refs.background.scrollLeft +=1
        self.autoscroll()
      }, 50)
    }
  },
  mounted() {
    window.addEventListener('touchstart', this.deactivateTwist);
  }
}
</script>

<style scoped>
#background{
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
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
/*
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

 */
</style>
