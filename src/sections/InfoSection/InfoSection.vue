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
    id="VideoMickey"
    v-bind:title="'MICKEY YANG'"
    v-bind:container-top="'4vh'"
    v-bind:container-left="'120vw'"
    v-bind:container-height="'30vw'"
    v-bind:container-width="'79vw'"
    v-bind:mask-path="require('@/assets/Form_Mickey.svg')"
    v-bind:title-image="require('@/assets/Mickey_Form.jpg')"
    v-bind:video-url="'https://www.youtube.com/embed/WwSfxtrDlJg'"
    v-bind:biografie="'Mickey Yang (*1988, Eindhoven, NL) lebt und arbeitet in Den Haag. Sie studierte Bildende Kunst an der Königlichen Akademie Den Haag und an der ArtEZ University of Arts in Arnhem, NL. Yang bezieht sich in ihren multimedialen Installationen oft auf Bilder eines kollektiven Gedächtnisses, um eine &quotSprache der Dinge&quot zu entwickeln, die sie als inklusiver und universeller empfindet. Von 2017 bis 2018 war sie Stipendiatin bei Beeldenstorm/Daglicht und 2019 bei De Fabriek. Mickey Yang zeigte ihre Arbeiten in verschiedenen Einzel- und Gruppenausstellungen, unter anderem bei P////AKT, Amsterdam (2019), bei Art Rotterdam (2019) und in der Kunstvereniging Diepenheim (2017). Ihre erste Einzelausstellung in Deutschland, &quotUpaya&quot (2020) in der Kunsthalle Osnabrück, konnte aufgrund der Corona-Pandemie leider nicht eröffnet werden. Aktuell residiert Yang an der Jan van Eyck Academie in Maastricht, NL.'"
    ></VideoCutOut>

    <VideoCutOut
        id="VideoLara"
        v-bind:title="'LARA DÂMASO'"
        v-bind:container-top="'13vh'"
        v-bind:container-left="'170vw'"
        v-bind:container-height="'30vw'"
        v-bind:container-width="'79vw'"
        v-bind:mask-path="require('@/assets/Form_Lara.svg')"
        v-bind:title-image="require('@/assets/Lara_Form.jpg')"
        v-bind:video-url="'https://www.youtube.com/embed/WwSfxtrDlJg'"
        v-bind:biografie="'Mickey Yang (*1988, Eindhoven, NL) lebt und arbeitet in Den Haag. Sie studierte Bildende Kunst an der Königlichen Akademie Den Haag und an der ArtEZ University of Arts in Arnhem, NL. Yang bezieht sich in ihren multimedialen Installationen oft auf Bilder eines kollektiven Gedächtnisses, um eine &quotSprache der Dinge&quot zu entwickeln, die sie als inklusiver und universeller empfindet. Von 2017 bis 2018 war sie Stipendiatin bei Beeldenstorm/Daglicht und 2019 bei De Fabriek. Mickey Yang zeigte ihre Arbeiten in verschiedenen Einzel- und Gruppenausstellungen, unter anderem bei P////AKT, Amsterdam (2019), bei Art Rotterdam (2019) und in der Kunstvereniging Diepenheim (2017). Ihre erste Einzelausstellung in Deutschland, &quotUpaya&quot (2020) in der Kunsthalle Osnabrück, konnte aufgrund der Corona-Pandemie leider nicht eröffnet werden. Aktuell residiert Yang an der Jan van Eyck Academie in Maastricht, NL.'"
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
