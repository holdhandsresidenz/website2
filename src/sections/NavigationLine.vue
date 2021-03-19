<template>
  <div id="NavigationLine">
    <img id="information" class="navPos" src="../assets/Navigation/Seite_Info_kursiv.png">
    <div id="blueLine" class="navLine"></div>
    <div id="orangeLine" class="navLine"></div>
    <a href="#residenz">
      <img
          id="blue-arrow-right" class="navPos"
          src="../assets/Navigation_bl_re.png"
          v-bind:style="this.smallScreen ?
          {display: scrollPositionVW > 717 ? 'none' : '',
          opacity: scrollPositionVW > 689 ? '0' : '100%'} :
          {display: scrollPositionVW > 190 ? 'none' : '',
          opacity: scrollPositionVW > 190 ? '0' : '100%'}"
      >
    </a>


    <a href="#information">
      <img id="orange-arrow-left"
           class="navPos"
           src="../assets/Navigation/Seite_Pfeil_orange_li.png"
           v-bind:style="this.smallScreen ?
          {display: scrollPositionVW < 790 ? 'none' : '',
          opacity: scrollPositionVW < 190 ? '0' : '100%'} :
          {display: scrollPositionVW < 120 ? 'none' : '',
          opacity: scrollPositionVW < 220 ? '0' : '100%'}"
      >
    </a>

    <img id="residenz" class="navPos" src="../assets/Navigation/Seite_Residenz_kursiv.png">

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
.navLine {
  top: 16.5px;
  height: 0.15rem;
}

#blueLine {
  background: blue;
  position: absolute;
  left: 115px;
  width: 291vw;
  z-index: 80;
}

#blue-arrow-right {
  position: fixed;
  right: 0;
  z-index: 99;
  transition: 0.8s;
}

#orange-arrow-left {
  position: fixed;
  right: 0;
  z-index: 101;
  transition: 0.8s;
}

#orangeLine {
  position: absolute;
  left: 291vw;
  background: #aa3500;
  z-index: 100;
  width: 30vw;
}

#residenz {
  position: absolute;
  left: 295vw;
  width: 225px;
  padding-right: 10vw;
  z-index: 100;
}

.d2 {
  height: 100%;
}

@media all and (max-width: 1000px) {
  #residenz {
    left: 830vw;
    padding-right: 30vw;
  }
  #orangeLine {
    left: 820vw;
    width: 79vw;
  }
  #blueLine {

    width: 821vw;
    z-index: 80;
  }

}
</style>
