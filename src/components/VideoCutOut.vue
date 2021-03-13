<template>
  <iframe
      class="pos"
      id="iframe-lara"
      src="https://www.youtube.com/embed/lYUhY50DeR4"
      frameborder="0"
      allow="autoplay; fullscreen;"
      allowfullscreen></iframe>
</template>

<script>
export default {
name: "VideoCutOut",
  props: {
  containerStyle: Object,
    maskURL: String

  }
}
</script>

<style scoped>
.pos{
  position: absolute;
  left: 110vw;
  top: 3vw;
  height: 80vh;
  width: 80vw;
  background: gold;
  mask: url("../assets/Form_Mickey.svg") no-repeat;
}
</style>
