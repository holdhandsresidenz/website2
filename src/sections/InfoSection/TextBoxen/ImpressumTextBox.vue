<template>
  <TextBox
      @suspend-scroll="suspendScroll"
      @continue-scroll="continueScroll"
      id="Impressum"
      title="IMPRESSUM"
      v-bind:container-style="{position: 'absolute', bottom: 0, left: '22vw'}"
      v-bind:height="'33vh'"
      v-bind:width-open="'65vw'"
      v-bind:maxWidthPx="600"
      v-bind:min-height-px="180"
      v-bind:open-at-vw="38"
      v-bind:close-at-vw="80"
      v-bind:currentPositionVw="this.currentPositionVw"
  >
    <p style="text-indent: 12.4vw"></p>
  </TextBox>
</template>

<script>
import TextBox from "@/components/TextBox";
export default {
  name: "ImpressumTextBox",
  components: {
    TextBox
  }

}
</script>

<style scoped>

</style>
