<template>
  <div class="OrangeFade" v-bind:class="{mirrored:mirrored}">
    <img src="../../../assets/Verlauf.png">
  </div>
</template>

<script>
export default {
  props: {
    mirrored: Boolean
  },
  name: "BlueFade"
}
</script>

<style scoped>
img {
  position: relative;
  left: -0.63vw;
  width: 4vw;
  height: 100%;
  z-index: 100;
}
.OrangeFade {
  position: relative;
  width: 0;
  z-index: 100;
}
.mirrored { transform: scaleX(-1);}
@media all and (max-width: 1000px) {
  .OrangeFade {
    width: 6vh;
    left: -1.5vw;
  }
}
</style>
