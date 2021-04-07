<template>
  <Background
    @scrollPositionChanged="setPositionVw"
    v-bind:scroll-suspended="scrollSuspended"
  >
    <div class="flexx">
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
    </div>
  </Background>
</template>

<script>
import Background from "@/pages/public/sections/Background";
import InfoSection from "@/pages/public/sections/InfoSection/InfoSection";
import ResidenzSection from "@/pages/public/sections/ResidenzSection/ResidenzSection";

export default {
  name: "App",
  components: {
    ResidenzSection,
    InfoSection,
    Background,
  },

  data: function () {
    return {
      currentPositionVw: 0,
      scrollSuspended: false,
    };
  },

  methods: {
    setPositionVw(e) {
      this.currentPositionVw = e;
    },
    continueScroll() {
      this.scrollSuspended = false;
    },
    suspendScroll() {
      this.scrollSuspended = true;
    },
  },
  mounted() {
    this.$store.dispatch("fetchQuestions");
    this.$store.dispatch("fetchAssets");
    this.$store.commit("setScreenWidth");
  },
};
</script>

<style>
textarea:focus, input:focus, audio:focus{
  outline: none;
}
.flexx {
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
html,
body {
  margin: 0;
  font-family: Akzi;
  line-height: 2.333333333333333333333333333333333vw;
  font-size: 0.95vw;
  scroll-behavior: smooth;
  background: #b2b2b2;
}
.orange {
  background: #aa3500;
}
.inline {
  display: inline;
}
.grey {
  background: #b2b2b2;
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
  background: #22515b;
}
*::-webkit-scrollbar-thumb:hover {
  background: #22515b;
}
.alignRight {
  text-align: right;
}

p {
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
#paulaBIO {
  padding-top: 3.7rem;
  text-indent: 16vw;
}
a {
  color: black;
}
@font-face {
  font-family: "Akzi";
  src: url("../../assets/fonts/AkzidGroMed.woff") format("woff");
}
@font-face {
  font-family: "Narr";
  src: url("../../assets/fonts/Arial-Narrow.woff") format("woff");
}

@media all and (max-width: 1000px) {
  html,
  body {
    line-height: 7vw;
    font-size: 3.3vw;
  }
  #laraBIO {
    padding-top: 7rem;
    text-indent: 0;
  }
  #mickeyBIO {
    padding-top: 7rem;
    text-indent: 0;
  }
  #paulaBIO {
    padding-top: 7rem;
    text-indent: 0;
  }
}
</style>
