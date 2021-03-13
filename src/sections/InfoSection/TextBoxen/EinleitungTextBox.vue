<template>
  <TextBox
      @suspend-scroll="suspendScroll"
      @continue-scroll="continueScroll"
      id="Einleitung"
      title="EINLEITUNG"
      v-bind:container-style="{position: 'absolute', top: '10vh', left: '92vw'}"
      v-bind:height="'33vh'"
      v-bind:width-open="'65vw'"
      v-bind:maxWidthPx="600"
      v-bind:min-height-px="180"
      v-bind:open-at-vw="38"
      v-bind:close-at-vw="80"
      v-bind:currentPositionVw="this.currentPositionVw"
  >
<p style="text-indent: 13vw">Zur Einleitung unseres Projektes möchten wir drei Positionen vorstellen, die innerhalb des künstlerischen Feldes arbeiten, das uns interessiert. In Form von Video-Interviews, die die Künstler:innen inhaltlich selbst gestalten durften, geben sie uns einen Einblick in ihre künstlerische Praxis und Gedanken, die sie in Hinblick auf das digitale Ausstellen oder die Begehung virtueller Räume haben. Ihre Herangehensweisen und Erfahrungen in diesem Bereich fallen ganz unterschiedlich aus. Im Gespräch war Hold Hands mit den Künstler:innen Paula Ábalos, Lara Dâmaso und Mickey Yang. Jede Woche werden wir auf unserer Website ein neues Interview veröffentlichen, um uns den Fragen der Residenz—zeitlich sowie inhaltlich—immer mehr zu nähern.</p>
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

</style>
