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
  background: url("../assets/Verlauf2.png");
  background-size: 100%;
  height: 16.5px;
  z-index: 100;
}
</style>
