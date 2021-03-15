<template>
  <TextBox
      @suspend-scroll="suspendScroll"
      @continue-scroll="continueScroll"
      id="Impressum"
      title="IMPRESSUM"
      v-bind:container-style="{position: 'absolute', bottom: 0, left: '15vw'}"
      v-bind:height="'23vh'"
      v-bind:width-open="'32vw'"
      v-bind:maxWidthPx="600"
      v-bind:min-height-px="180"
      v-bind:open-at-vw="10000"
      v-bind:close-at-vw="0"
      v-bind:currentPositionVw="this.currentPositionVw"
      v-bind:mark="true"
      v-bind:z-base="2"
  >

      <br><br>
   <p class="rechts">Das Projekt  Hold Hands Residenz wird umgesetzt von:</p>

<p>
  Hjördis Lyn Behncken (Social Media und Öffentlichkeitsarbeit)
  Anne Dietzsch (gestalterisches Konzept und Typografie)<br>
  Jonathan Schneider (Programmierung)<br>
  Lissy Willberg (inhaltliches Konzept, Projektleitung und Videoproduktion)<br>
</p>
<p class="rechts">

   Gefördert wird das Projekt durch das Kulturamt Leipzig und das Support-Büro der HGB Leipzig.
</p>


    <address class="">
      Kontakt:
      <br>
      mail ( at ) hold-hands.net
      <br>
      Hold Hands Residenz   <br>
      c/o Lissy Willberg   <br>
      Herbartstr. 75   <br>
      04318 Leipzig
      <br><br><br>
    </address>
  </TextBox>
</template>

<script>
import TextBox from "@/components/TextBox";
export default {
  name: "ImpressumTextBox",
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

.links{
  text-align: left;
}
.rechts {
  text-align: right;
}
address {
  font-style: normal;
}
</style>
