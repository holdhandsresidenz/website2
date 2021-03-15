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
      display: scrollPositionVW > 100 ? 'none' : '',
      opacity: scrollPositionVW > 92 ? '0' : '100%'
    }"
    >
  </a>



<a href="#infoNav">
  <img id="orange-arrow-left"
       src="../assets/Navigation/Seite_Pfeil_orange_li.png"
       class="navPos"
       v-bind:style="{
      display: scrollPositionVW < 120 ? 'none' : '',
      opacity: scrollPositionVW < 129 ? '0' : '100%'
      }"
  >
</a>


  <img src="../assets/Navigation/Seite_Residenz_kursiv.png" id="residenzNav" class="navPos">
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
  width: 276vw;
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
  left: 280vw;
  background: #aa3500;
  z-index: 100;
  width: 50vw;
}

#residenzNav {
  position: absolute;
  left: 285vw;
  width:225px;
  padding-right: 10vw;
  z-index: 100;
}
</style>
