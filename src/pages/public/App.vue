<template>

  <Background @scrollPositionChanged="setPositionVw" v-bind:scroll-suspended="scrollSuspended">
    <InfoSection
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
        v-bind:currentPositionVw="this.currentPositionVw"
    ></InfoSection>
    <ResidenzSection
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
        v-bind:currentPositionVw="this.currentPositionVw"
    ></ResidenzSection>
  </Background>
</template>

<script>
import Background from "@/pages/public/sections/Background";
import InfoSection from "@/pages/public/sections/InfoSection/InfoSection";
import ResidenzSection from "@/pages/public/sections/ResidenzSection/ResidenzSection";

export default {
  name: 'App',
  components: {
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

html,body {
  margin: 0;
  font-family: Akzi;
  line-height: 2.33vw;
  font-size: 1vw;
  background:  #b2b2b2
}

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
*::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
*::-webkit-scrollbar-track {
  background: #b2b2b2;
}
*::-webkit-scrollbar-thumb {
  background: #22515B;
}
*::-webkit-scrollbar-thumb:hover {
  background: #22515B;
}
.alignRight{
  text-align: right;
}

p{
  margin-top: 0;
  margin-bottom: 0;
}
#mickeyBIO {
  padding-top: 3.6rem;
  text-indent: 14.7vw;
}
#laraBIO {
  padding-top: 3.7rem;
  text-indent: 15vw;
}
a{
  color: black;
}
@font-face {
  font-family: 'Akzi';
  src: url('../../assets/fonts/AkzidGroMed.woff') format("woff");
}
@font-face {
  font-family: 'Narr';
  src: url("../../assets/fonts/Arial-Narrow.woff") format("woff");
}

@media all and (max-width: 1000px) {
  html,body {
    line-height: 7vw;
    font-size: 3.3vw;
  }
  #laraBIO {
    padding-top: 7.0rem;
    text-indent: 0;
  }
  #mickeyBIO {
    padding-top: 7.0rem;
    text-indent: 0;
  }
}

</style>
