<template>
 <Background @scrollPositionChanged="setPositionVw">
    <InfoSection
    v-bind:currentPositionVw="this.currentPositionVw"
    ></InfoSection>
 </Background>
</template>

<script>
import Background from "@/components/Background";
import InfoSection from "@/sections/InfoSection";
export default {
  name: 'App',
  components: {
    InfoSection,
    Background,

  },
  data: function () {
    return {
      currentPositionVw: 0
    }
  },
  methods: {
    setPositionVw(e) {

      this.currentPositionVw = e

    }
  }

}
</script>

<style>
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
}
*::-webkit-scrollbar {
  width: 11px;
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

@font-face {
  font-family: 'Akzi';
  src: url('assets/fonts/AkzidGroMed.woff') format("woff");
}
@font-face {
  font-family: 'Narr';
  src: url("assets/fonts/Arial-Narrow.woff") format("woff");
}

</style>
