<template>
  <div class="mark" v-bind:style="position"></div>
</template>

<script>
export default {
  name: "Mark",
  props: {
    position: Object
  }
}
</script>

<style scoped>
.mark {
  width: 4vw;
  background: url("../../../assets/Verlauf_blau.png") ;
  background-size: 100%;
  height: 1.5rem;
  z-index: 100;
}
@media all and (max-width: 1000px) {
  .mark {
    width: 6vh;
  }
}
</style>
