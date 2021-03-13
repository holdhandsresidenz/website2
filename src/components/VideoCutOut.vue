<template>
  <div>
    <VideoModal
        v-if="modalVisible"
        v-bind:id="id"
    ></VideoModal>
    <div
        v-bind:id="id"
        v-bind:style="{
        left: containerLeft,
        top: containerTop,
        bottom: containerBottom,
        height: containerHeight,
        width: containerWidth,
        }"
        class="container"

    >
      <div
          id="inner"
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
          @click="openVideo"

      >
        <img src="../assets/Form_Mickey_kontur.svg" v-bind:id="id + '-kontur'" class="kontur">
      </div>
    </div>

  </div>
  </template>

<script>

import VideoModal from "@/components/VideoModal";
export default {
name: "VideoCutOut",
  components: {VideoModal},
  props: {
  id: String,
    containerLeft: String,
    containerTop: String,
    containerBottom: String,
    containerHeight: String,
    containerWidth: String,
    videoUrl: String,
    maskPath: String
  },
  data: function () {
  return {
    mouseOver: false,
    modalVisible: false
  }
  },
  methods: {
    mouseEnter() {
      this.mouseOver = true
      console.log('enter')
    },
    mouseLeave() {
      this.mouseOver = false
      console.log('leave')
    },
    openVideo() {
      this.modalVisible = true
      console.log('triggered modal', this.modalVisible)
    }
  }
}
</script>

<style scoped>
#inner {
 background: url("../assets/Mickey_Deckblatt.jpg");
  background-size: contain;
}
.kontur {
  width: 100%;
  height: 100%;
}

.container{
  position: absolute;
  mask: url('../assets/Form_Mickey.svg') no-repeat;

}

</style>
