<template>
<div id="NavigationLine">
  <img src="../assets/Navigation/Seite_Info_kursiv.png" id="infoNav" class="navPos">
  <div id="blueLine" class="navLine"></div>
  <div id="orangeLine" class="navLine"></div>
  <a href="#residenzNav">
    <img
        id="blue-arrow-right" src="../assets/Navigation_bl_re.png"
        class="navPos"
        v-bind:style="{
      display: scrollPositionVW > 190 ? 'none' : '',
      opacity: scrollPositionVW > 190 ? '0' : '100%'
    }"
    >
  </a>



<a href="#infoNav">
  <img id="orange-arrow-left"
       src="../assets/Navigation/Seite_Pfeil_orange_li.png"
       class="navPos"
       v-bind:style="{
      display: scrollPositionVW < 120 ? 'none' : '',
      opacity: scrollPositionVW < 225 ? '0' : '100%'
      }"
  >
</a>
  <img src="../assets/Navigation/Seite_Residenz_kursiv.png" id="residenzNav" class="navPos">
  <div class="soon1">
    <TitleBW title="DIE RESIDENZ STARTET"></TitleBW>
    <div class="soon2">
      <TitleBW title="AM 1. APRIL 2021"></TitleBW>
    </div>
  </div>

</div>
</template>

<script>
import {PixelToViewport} from "@/mixins/PixelToViewport";
import TitleBW from "@/components/TitleBW";

export default {
name: "NavigationLine",
  components: {
  TitleBW
  },
  mixins: [PixelToViewport],
  props: {
   scrollPos: Number
  },
  computed: {
  scrollPositionVW() {
    return this.pxToVw(this.scrollPos)
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
  width: 281vw;
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
  transition: 0.3s;
  z-index: 101;
  transition: 0.8s;
}

#orangeLine{
  position: absolute;
  left: 291vw;
  background: #aa3500;
  z-index: 100;
  width: 50vw;
}

#residenzNav {
  position: absolute;
  left: 295vw;
  width:225px;
  padding-right: 20vw;
  z-index: 100;
}
.soon1{
  top: 30vh;
  z-index: 100;
  position: absolute;
  left: 303.5vw;
}
.soon2{
  top: 7vh;
  z-index: 100;

  position: absolute;
  left: 3vw;
}
</style>
