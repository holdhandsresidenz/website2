<template>
  <TextBox
      @suspend-scroll="suspendScroll"
      @continue-scroll="continueScroll"
      id="IntroText"
      title="HOLD HANDS"
      v-bind:container-style="{position: 'absolute', bottom: '12vh', left: '66vw'}"
      v-bind:height="'29vh'"
      v-bind:width-open="'35vw'"
      v-bind:maxWidthPx="600"
      v-bind:min-height-px="180"
      v-bind:open-at-vw="18"
      v-bind:close-at-vw="40"
      v-bind:currentPositionVw="this.currentPositionVw"
  >
    <p style="text-indent: 14vw" >
      hat erstmalig im April 2016 in den Räumen des Kulturvereins Pracht e.V. Leipzig stattgefunden und wurde durch die Künstlerin Lissy Willberg initiiert. Es war eine Veranstaltung, die queere und weibliche* Positionen in Performance-, Poetry-, Video- und Installationskunst zusammenbrachte und ausstellte. Vier Studierende der Hochschule für Grafik und Buchkunst, sowie internationale Künstler:innen haben sich mit Beiträgen am Programm beteiligt. Die Idee von Hold Hands als Plattform für den Austausch und die Präsentation dieser Positionen sollte im Frühjahr 2020 fortgesetzt werden; eine öffentliche Veranstaltung konnte jedoch aufgrund der globalen Pandemie nicht stattfinden. Infolgedessen entstand der Gedanke das Projekt im Jahr 2021 um ein Online-Residenzprogramm zu erweitern.
    <p>
    <p>
      Viele Künstler:innen sehen sich aktuell vor der Herausforderung digitale Räume zu bespielen. Die Initiator:innen von Hold Hands Residenz sehen ein Defizit in der theoretischen und praktischen Beschäftigung mit dieser Thematik und möchten durch das Residenzprogramm einen digitalen Experimentierraum schaffen, der einen kollektiven Diskurs anregt und die Hinterfragung konventioneller Methodik fördert.
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

</style>
