<template>
  <div id="Info-Section">
    <Mark v-bind:position="{position: 'absolute', bottom: 0, left: '43vw'}"></Mark>
  <IntroTextBox v-bind:current-position-vw="currentPositionVw"  @suspend-scroll="suspendScroll"
                @continue-scroll="continueScroll"></IntroTextBox>

  </div>
</template>

<script>

import IntroTextBox from "@/sections/InfoSection/TextBoxen/IntroTextBox";
import Mark from "@/components/Mark";
export default {
name: "InfoSection",
  components: {Mark, IntroTextBox},
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
#Info-Section {
  box-sizing: border-box;
  height: 100%;
  width: 400vw;
}
</style>
