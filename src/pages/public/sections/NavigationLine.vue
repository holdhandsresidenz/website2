<template>
  <div id="NavigationLine" ref="navLine">
    <portal to="navInfoSection">
      <img
        id="info"
        class="navPos"
        src="../../../assets/Navigation/Seite_Info_kursiv.png"
      />
      <div id="blueLine" class="navLine"></div>
      <img
        @click="scrollToPostSection"
        id="blueArrowRight"
        class="navPos arrowPos"
        src="../../../assets/Navigation_bl_re.png"
        v-bind:style="
          this.smallScreen
            ? {
                display: scrollPositionVW > 865 ? 'none' : '',
                opacity: scrollPositionVW > 865 ? '0' : '100%',
              }
            : {
                display: scrollPositionVW > 263 ? 'none' : '',
                opacity: scrollPositionVW > 263 ? '0' : '100%',
              }
        "
      />
    </portal>
    <portal to="residenzLogo">
      <img
        id="residenz"
        class="navPos"
        src="../../../assets/Navigation/Seite_Residenz_kursiv.png"
      />
      <ResidentsFilter></ResidentsFilter>
    </portal>
    <portal to="navResidenzSection">
      <div id="posts" ref="posts"></div>
      <div id="orangeLine" class="navLine"></div>
      <img
        v-if="!atPostSectionStart"
        @click="scrollToPostSection"
        class="orangeArrowLeft navPos arrowPos"
        src="../../../assets/Navigation/Seite_Pfeil_orange_li.png"
        v-bind:style="
          this.smallScreen
            ? {
                display: scrollPositionVW < 926 ? 'none' : '',
                opacity: scrollPositionVW < 190 ? '0' : '100%',
              }
            : {
                display: scrollPositionVW < 220 ? 'none' : '',
                opacity: scrollPositionVW < 285 ? '0' : '100%',
              }
        "
      />
      <img
        v-else
        @click="scrollToInfoSection"
        class="orangeArrowLeft navPos arrowPos"
        src="../../../assets/Navigation/Seite_Pfeil_orange_li.png"
        v-bind:style="
          this.smallScreen
            ? {
                display: scrollPositionVW < 926 ? 'none' : '',
                opacity: scrollPositionVW < 190 ? '0' : '100%',
              }
            : {
                display: scrollPositionVW < 220 ? 'none' : '',
                opacity: scrollPositionVW < 285 ? '0' : '100%',
              }
        "
      />
    </portal>
  </div>
</template>

<script>
import { PixelToViewport } from "@/mixins/PixelToViewport";
import ResidentsFilter from "../sections/ResidentsFilter";
export default {
  name: "NavigationLine",
  components: {
    ResidentsFilter,
  },
  mixins: [PixelToViewport],
  props: {
    scrollPos: Number,
  },
  computed: {
    scrollPositionVW() {
      return this.pxToVw(this.scrollPos);
    },
    atPostSectionStart() {
      return this.scrollPositionVW < 380 && this.scrollPositionVW > 350;
    },
    smallScreen() {
      return screen.width <= 1000;
    },
  },
  methods: {
    scrollSmooth() {
      window.scroll({ left: 0, behavior: "smooth" });
    },
    scrollToInfoSection() {
      this.$refs.navLine.scrollIntoView({ behavior: "smooth" });
    },
    scrollToPostSection() {
      this.$refs.posts.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    setTimeout(() => {
      this.scrollToPostSection();
    }, 2000);
  },
};
</script>

<style scoped>
.navPos {
  position: relative;
  padding-top: 10px;
  height: 20px;
}
.navLine {
  top: 16.5px;
  height: 0.17rem;
  position: absolute;
  width: 100%;
}
#posts {
  left: -4vh;
  width: 100vw;
  position: absolute;
}
#blueLine {
  background: blue;
  left: 115px;
  z-index: 80;
}
.arrowPos {
  cursor: pointer;
  position: fixed;
  right: 0;
}
#blueArrowRight {
  z-index: 99;
  transition: 0.8s;
}
.orangeArrowLeft {
  z-index: 107;
  transition: 0.8s;
}

#orangeLine {
  background: #aa3500;
  z-index: 100;
}

#residenz {
  position: absolute;
  padding-left: 2vw;
  padding-right: 12vw;
  z-index: 103;
}

.d2 {
  height: 100%;
}

@media all and (max-width: 1000px) {
  #residenz {
    padding-left: 8vw;
    padding-right: 33vw;
  }
}
</style>
