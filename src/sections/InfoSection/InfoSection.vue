<template>
  <div id="Info-Section" >


    <img src="../../assets/Logo.png" id="logo">

    <Mark v-bind:position="{position: 'absolute', top: 0, left: '43vw'}"></Mark>
  <IntroTextBox v-bind:current-position-vw="currentPositionVw"
                @suspend-scroll="suspendScroll"
                @continue-scroll="continueScroll"
  ></IntroTextBox>

    <Mark v-bind:position="{position: 'absolute', top: 0, left: '72vw'}"></Mark>
    <ImpressumTextBox
        v-bind:current-position-vw="currentPositionVw"
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
    ></ImpressumTextBox>

    <Mark v-bind:position="{position: 'absolute', top: 0, left: '12vw'}"></Mark>
    <DatenschutzTextBox
        v-bind:current-position-vw="currentPositionVw"
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
    ></DatenschutzTextBox>

  </div>
</template>

<script>

import IntroTextBox from "@/sections/InfoSection/TextBoxen/IntroTextBox";
import Mark from "@/components/Mark";
import ImpressumTextBox from "@/sections/InfoSection/TextBoxen/EinleitungTextBox";
import DatenschutzTextBox from "@/sections/InfoSection/TextBoxen/DatenschutzTextBox";
export default {
name: "InfoSection",
  components: {DatenschutzTextBox, ImpressumTextBox, Mark, IntroTextBox},
  props: {
    currentPositionVw: Number
  },
  methods: {
    suspendScroll() {
      this.$emit('suspend-scroll')
    },
    continueScroll() {
      this.$emit('continue-scroll')
    }
  }
}
</script>

<style scoped>

#logo {
  position: absolute;
  top: 12vh;
  left:0vw;
  width: 60vw;
}
</style>
