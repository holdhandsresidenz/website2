<template>
  <div id="NavigationLine">
    <portal to="navInfoSection">
      <img id="info" class="navPos" src="../../../assets/Navigation/Seite_Info_kursiv.png">
      <div id="blueLine" class="navLine"></div>
      <a id="arrowToResidenz" href="#residenz">
        <img
            id="blueArrowRight" class="navPos arrowPos"
            src="../../../assets/Navigation_bl_re.png"
            v-bind:style="this.smallScreen ?
          {display: scrollPositionVW > 717 ? 'none' : '',
          opacity: scrollPositionVW > 689 ? '0' : '100%'} :
          {display: scrollPositionVW > 190 ? 'none' : '',
          opacity: scrollPositionVW > 190 ? '0' : '100%'}"
        >
      </a>
    </portal>

<portal to="navResidenzSection">
  <img id="residenz" class="navPos" src="../../../assets/Navigation/Seite_Residenz_kursiv.png">
  <div id="orangeLine" class="navLine"></div>
  <a id="arrowToInfo" href="#info">
    <img id="orangeArrowLeft"
         class="navPos arrowPos"
         src="../../../assets/Navigation/Seite_Pfeil_orange_li.png"
         v-bind:style="this.smallScreen ?
          {display: scrollPositionVW < 790 ? 'none' : '',
          opacity: scrollPositionVW < 190 ? '0' : '100%'} :
          {display: scrollPositionVW < 120 ? 'none' : '',
          opacity: scrollPositionVW < 220 ? '0' : '100%'}"
    >
  </a>
</portal>

  </div>
</template>

<script>
import {PixelToViewport} from "@/mixins/PixelToViewport";
export default {
  name: "NavigationLine",

  mixins: [PixelToViewport],
  props: {
    scrollPos: Number
  },
  computed: {
    scrollPositionVW() {
      return this.pxToVw(this.scrollPos)
    },
    smallScreen() {
      return screen.width <= 1000
    }
  }
}
</script>

<style scoped>
.navPos {
  position: relative;
  padding-top: 10px;
  height: 20px;
}
.navLine {
  top: 16.5px;
  height: 0.15rem;
  position: absolute;
  width: 100%;
}

#blueLine {
  background: blue;
  left: 115px;
  z-index: 80;
}
.arrowPos {
  position: fixed;
  right: 0;
}
#blueArrowRight {
  z-index: 99;
  transition: 0.8s;
}
#orangeArrowLeft {
  z-index: 107;
  transition: 0.8s;
}

#orangeLine {
  background: #aa3500;
  z-index: 100;
}

#residenz {
  position: absolute;
  padding-left: 4vw;
  padding-right: 12vw;
  z-index: 103;
}

.d2 {
  height: 100%;
}

@media all and (max-width: 1000px) {
#residenz {
  padding-left:8vw;
  padding-right: 33vw;
}

}
</style>
