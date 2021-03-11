<template>
 <Background @scrollPositionChanged="setPositionVw" v-bind:scroll-suspended="scrollSuspended">
  <NavigationLine></NavigationLine>
    <InfoSection
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"

    v-bind:currentPositionVw="this.currentPositionVw"
    ></InfoSection>
   <ResidenzSection></ResidenzSection>
 </Background>
</template>

<script>
import Background from "@/components/Background";
import InfoSection from "@/sections/InfoSection/InfoSection";
import ResidenzSection from "@/sections/ResidenzSection/ResidenzSection";
import NavigationLine from "@/components/NavigationLine";
export default {
  name: 'App',
  components: {
    NavigationLine,
    ResidenzSection,
    InfoSection,
    Background,
  },
  data: function () {
    return {
      currentPositionVw: 0,
      scrollSuspended: false
    }
  },
  methods: {
    setPositionVw(e) {

      this.currentPositionVw = e

    },
    continueScroll() {
      this.scrollSuspended = false
    },
    suspendScroll() {
      this.scrollSuspended= true
    }
  },


}
</script>

<style>
.navPos {
  position: absolute;
  top: 10px;
  height: 20px;
}
.inline{
  display: inline;
}
.grey {
 background:  #b2b2b2
}
.red {
  background: #3c2832;
}
html,body {
  margin: 0;
  font-family: Akzi;
  line-height: 200%;
  font-size: 0.9vw;
  background:  #b2b2b2

}
*::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
*::-webkit-scrollbar-track {
  background: #b2b2b2;
}
*::-webkit-scrollbar-thumb {
  background: #3c2832;
}
*::-webkit-scrollbar-thumb:hover {
  background: #3c2832;
}


.navLine {
  position: absolute;
  top: 16.5px;
  height: 2px;
}

@font-face {
  font-family: 'Akzi';
  src: url('assets/fonts/AkzidGroMed.woff') format("woff");
}
@font-face {
  font-family: 'Narr';
  src: url("assets/fonts/Arial-Narrow.woff") format("woff");
}
@media all and (min-width: 1920px) {
  html,body {
    font-size: 14px;
  }
}
@media all and (max-width: 1000px) {
  html,body {
    font-size: 11px;

  }

}
</style>
