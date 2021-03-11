<template>
  <div id="Info-Section">
  <IntroTextBox v-bind:current-position-vw="currentPositionVw"></IntroTextBox>

  </div>
</template>

<script>

import IntroTextBox from "@/sections/InfoSection/TextBoxen/IntroTextBox";
export default {
name: "InfoSection",
  components: {IntroTextBox},
  props: {
    currentPositionVw: Number
  },
  methods: {
  passUp(e) {
    console.log(e)
  }
  }
}
</script>

<style scoped>
#Info-Section {
  box-sizing: border-box;
  height: 100%;
  width: 400vw;
}
</style>
