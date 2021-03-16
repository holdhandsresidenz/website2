<template>
  <div id="Info-Section">


    <img id="logo" src="../../assets/Logo.png">


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
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
        id="VideoMickey"
        v-bind:biografie="'<p id=mickeyBIO>(*1988, Eindhoven, NL) lebt und arbeitet in Den Haag. Sie studierte Bildende Kunst an der Königlichen Akademie Den Haag und an der ArtEZ University of Arts in Arnhem, NL. Yang bezieht sich in ihren multimedialen Installationen oft auf Bilder eines kollektiven Gedächtnisses, um eine „Sprache der Dinge“ zu entwickeln, die sie als inklusiver und universeller empfindet. Von 2017 bis 2018 war sie Stipendiatin bei Beeldenstorm/Daglicht und 2019 bei De Fabriek. Mickey Yang zeigte ihre Arbeiten in verschiedenen Einzel- und Gruppenausstellungen, unter anderem bei P////AKT, Amsterdam (2019), bei Art Rotterdam (2019) und in der Kunstvereniging Diepenheim (2017). Ihre erste Einzelausstellung in Deutschland, „Upaya“ (2020) in der Kunsthalle Osnabrück, konnte aufgrund der Corona-Pandemie leider nicht eröffnet werden. Aktuell residiert Yang an der Jan van Eyck Academie in Maastricht, NL.</p>'"
        v-bind:container-height="'80vh'"
        v-bind:container-left="'120vw'"
        v-bind:container-top="'0vh'"
        v-bind:mask-path="require('@/assets/Form_Mickey.svg')"
        v-bind:title="'MICKEY YANG'"
        v-bind:title-image="require('@/assets/Mickey_Form.jpg')"
        v-bind:video-url="'https://www.youtube.com/embed/WwSfxtrDlJg'"
    ></VideoCutOut>

    <VideoCutOut
        @suspend-scroll="suspendScroll"
        @continue-scroll="continueScroll"
        id="VideoLara"
        v-bind:biografie="'<p id=laraBIO> (geb.1996) arbeitet und lebt in Zürich. Nach einer mehrjährigen intensiven Ausbildung in Ballett und zeitgenössischem Tanz, studierte sie an der Hochschule für Grafik und Buchkunst in Leipzig im Fachbereich Medienkunst und an der Zürcher Hochschule der Künste, ZHDK, wo sie ihren Bachelor of Fine Arts erwarb. Ihre künstlerische Praxis variiert zwischen Performances, Videos, Auftritten als Performerin für verschiedene Künstler:innen und DJ-Sets. Lara’s Arbeit balanciert zwischen fokussierter Kontrolle und sinnlichem Chaos. Sie strukturiert, um zu destrukturieren und eröffnet so intime Räume, in denen ein Dialog stattfinden kann. Ihre Arbeiten wurden in verschiedenen Institutionen und Off-Spaces gezeigt, wie dem Istituto Svizzero, Centre d’Art Contemporain Genève, Kunsthalle Zürich, Cabaret Voltaire, Plymouth Rock, Kunsthalle Bern, Centre Pasqu’Art. Sie wurde für den Kiefer-Hablitzel Göhner Kunstpreis 2020 nominiert und ist nominiert für die Plattform21. Als Performerin arbeitete sie mit und für Isabel Lewis, Nile Koetting, Nikima Jagudajev, Dora Garcia, Cally Spooner/Offshore, Debora Delmar corp. und Alicia Frankovich.</p>'"
        v-bind:container-height="'80vh'"
        v-bind:container-left="'190vw'"
        v-bind:container-bottom="'0vh'"
        v-bind:mask-path="require('@/assets/Form_Lara.svg')"
        v-bind:title="'LARA DÂMASO'"
        v-bind:title-image="require('@/assets/Lara_Form.jpg')"
        v-bind:video-url="'https://www.youtube.com/embed/lYUhY50DeR4'"
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
  left: 0vw;
  width: 60vw;
}
</style>
