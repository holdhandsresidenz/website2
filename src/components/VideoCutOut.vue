<template>
  <div class="pos">
    <iframe
        class="inner"
        height="98%"
        width="98%"
        id="iframe-lara"
        src="https://www.youtube.com/embed/lYUhY50DeR4"
        frameborder="0"
        allow="autoplay; fullscreen;"
        allowfullscreen></iframe>
  </div>

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
.inner {

  position: relative;
  top:1%;
  left:1%;
  mask: url('../assets/Form_Mickey.svg') center;
  
}
.pos{
  position: absolute;
  left: 110vw;
  top: 3vw;
  height: 80vh;
  width: 80vw;
  background: blue;

  mask:  url("../assets/Form_Mickey.svg") ;
  box-shadow: 21px 3px 12px 128px #0014ff ;
}
</style>
