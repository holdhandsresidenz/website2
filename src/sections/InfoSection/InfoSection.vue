<template>
  <div id="Info-Section" >


    <img src="../../assets/Logo.png" id="logo">


  <IntroTextBox v-bind:current-position-vw="currentPositionVw"
                @suspend-scroll="suspendScroll"
                @continue-scroll="continueScroll"
  ></IntroTextBox>


    <EinleitungTextBox
        v-bind:current-position-vw="currentPositionVw"
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
    ></EinleitungTextBox>


    <DatenschutzTextBox
        v-bind:current-position-vw="currentPositionVw"
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
    ></DatenschutzTextBox>

  <ImpressumTextBox
      v-bind:current-position-vw="currentPositionVw"
      @suspend-scroll="suspendScroll"
      @continue-scroll="continueScroll">
  </ImpressumTextBox>
    <VideoCutOut
    id="videoLara"
    v-bind:container-top="'4vh'"
    v-bind:container-left="'107vw'"
    v-bind:container-width="'70vw'"

    ></VideoCutOut>
  </div>
</template>

<script>

import IntroTextBox from "@/sections/InfoSection/TextBoxen/IntroTextBox";

import EinleitungTextBox from "@/sections/InfoSection/TextBoxen/EinleitungTextBox";
import DatenschutzTextBox from "@/sections/InfoSection/TextBoxen/DatenschutzTextBox";
import ImpressumTextBox from "@/sections/InfoSection/TextBoxen/ImpressumTextBox";
import VideoCutOut from "@/components/VideoCutOut";
export default {
name: "InfoSection",
  components: {VideoCutOut, ImpressumTextBox, DatenschutzTextBox, EinleitungTextBox, IntroTextBox},
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
