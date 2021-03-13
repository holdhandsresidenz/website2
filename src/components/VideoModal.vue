<template>
<div
v-bind:id="id + '-modal'"
class="modal"
>

  <div class="leftBorder"></div>
  <div class="rightBorder"></div>
</div>
</template>

<script>

export default {
  name: "VideoModal",

  props: {
    id: String,

  }
}
</script>

<style scoped>
.modal {
  z-index: 1000;
  position: fixed;
  top: 2vh;
  bottom: 2vh;
  left: 2.5vw;
  right: 4vw;
  background: #b2b2b2;
}
.leftBorder {
  position: absolute;
  width: 4vw;
  left: -0.8vw;
  height: 100%;
  background: url("../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;

}

.rightBorder {
  position: absolute;
  height: 100%;
  top: 0;
  right: -3vw;
  width: 4vw;
  background: url("../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;

}
</style>
