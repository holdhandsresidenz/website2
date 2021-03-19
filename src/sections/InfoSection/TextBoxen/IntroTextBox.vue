<template>
  <TextBox
      id="IntroText"
      title="HOLD HANDS"
      v-bind:container-style=" this.smallScreen ?
      {position: 'absolute', top: '5vh', left: '177vw'} :
      {position: 'absolute', top: '16.5px', left: '64vw'}"
      v-bind:currentPositionVw="this.currentPositionVw"
      v-bind:height="this.smallScreen ? '45vh' : '27vh'"
      v-bind:mark="true"
      v-bind:maxWidthPx="800"
      v-bind:min-height-px="180"
      v-bind:open-at-vw="this.smallScreen ? 130 : 5"
      v-bind:close-at-vw="this.smallScreen ? 190:  70"
      v-bind:width-open="this.smallScreen ? '80vw' :'45vw'"
      v-bind:z-base="3"
      @suspend-scroll="suspendScroll"
      @continue-scroll="continueScroll"
  >
    <p class="ersterAbsatz">
      hat erstmalig im April 2016 in den Räumen des Kulturvereins Pracht e.V. Leipzig stattgefunden und wurde durch die
      Künstlerin Lissy Willberg initiiert. Es war eine Veranstaltung, die queere und weibliche* Positionen in
      Performance-, Poetry-, Video- und Installationskunst zusammenbrachte und ausstellte. Vier Studierende der
      Hochschule für Grafik und Buchkunst, sowie internationale Künstler:innen haben sich mit Beiträgen am Programm
      beteiligt. Die Idee von Hold Hands als Plattform für den Austausch und die Präsentation dieser Positionen sollte
      im Frühjahr 2020 fortgesetzt werden; eine öffentliche Veranstaltung konnte jedoch aufgrund der globalen Pandemie
      nicht stattfinden. Infolgedessen entstand der Gedanke das Projekt im Jahr 2021 um ein Online-Residenzprogramm zu
      erweitern.
    <p>
    <p class="alignRight">
      Viele Künstler:innen sehen sich aktuell vor der Herausforderung digitale Räume zu bespielen. Die Initiator:innen
      von Hold Hands Residenz sehen ein Defizit in der theoretischen und praktischen Beschäftigung mit dieser Thematik
      und möchten durch das Residenzprogramm einen digitalen Experimentierraum schaffen, der einen kollektiven Diskurs
      anregt und die Hinterfragung konventioneller Methodik fördert.
    </p>

  </TextBox>
</template>

<script>
import TextBox from "@/components/TextBox";

export default {
  name: "IntroTextBox",
  components: {
    TextBox
  },
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
  },
  computed: {
    smallScreen() {
      return screen.width <= 1000
    }
  }
}
</script>

<style scoped>
.ersterAbsatz {
 padding-top: 1rem;
  text-indent: 13.8rem
}
</style>
