<template>
<div
v-bind:id="id + '-modal'"
class="modal"
ref="modal"
v-bind:style="{top: top + 'px'}"
>
  <div class="leftBorder"></div>
  <div class="rightBorder"></div>
  <iframe
      v-bind:id="id + '-iframe'"
      v-bind:src="videoUrl + '?&autoplay=1&start=2'"
      frameborder="0"
      allowfullscreen></iframe>
  <div class="info">

  <Title z-index="6000" v-bind:title="title"></Title>
  </div>
<CloseButton @close="$emit('close')"></CloseButton>
  <TextBox
      v-bind:id="id + '-Biografie'"
      v-bind:height="'20.625vw'"
      v-bind:title="'INFO'"
      v-bind:open-at-vw="3000"
      v-bind:close-at-vw="3000"
      v-bind:current-position-vw="0"
      v-bind:container-style="{
        position: 'absolute', top: 0, left: '-4vw'}
      "
      v-bind:width-open="'60vw'"
      v-bind:mark="false"
      v-bind:z-base="5000"
  >
    <p v-html="biografie"></p>
  </TextBox>
</div>
</template>

<script>

import CloseButton from "@/components/CloseButton";
import TextBox from "@/components/TextBox";
import Title from "@/components/Title";
export default {
  name: "VideoModal",
  components: {Title, TextBox, CloseButton},
  props: {
    title: String,
    id: String,
    videoUrl: String,
    biografie: String
  },
  data: function (){
    return{
      top: 0
    }
  },
  methods: {
    setTop() {
      let modalHeight = window.innerWidth* 0.9 * 0.5625
      let freeHeight =window.innerHeight - modalHeight
      console.log('mHeight: ' + modalHeight +', freeHeight:' +freeHeight + ', screenH: ' + window.innerHeight)
      this.top= freeHeight < 0 ? 0 : freeHeight/2
    }
  },
  mounted() {
    window.addEventListener('resize', this.setTop)
    this.setTop()
  },
  destroyed() {
    window.removeEventListener('resize', this.setTop)
  }
}
</script>

<style scoped>
.modal {
  z-index: 135;
  position: fixed;
  width: 90vw;
  left:5vw;
  right: 5vw;
  height: 50.625vw;
  background: #b2b2b2;
}
.leftBorder {
  z-index: 200;
  position: absolute;
  width: 4vw;
  left: -0.8vw;
  height: 100%;
  background: url("../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;
}

.rightBorder {
  z-index: 200;
  position: absolute;
  height: 100%;
  top: 0;
  right: -3vw;
  width: 4vw;
  background: url("../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;
}

iframe {
  width: 100%;
  height: 100%;
  z-index: 80;
  position: absolute;
}
.info {
  position: absolute;
  top: 2.8vw;
  overflow: visible;
  left: -4vw;
}
</style>
