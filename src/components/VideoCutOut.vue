<template>
  <div v-bind:id="id">
    <VideoModal
        @close="modalVisible = false"
        v-if="modalVisible"
        v-bind:id="id"
        v-bind:videoUrl="videoUrl"
        v-bind:biografie="biografie"
        v-bind:title="title"
    ></VideoModal>
    <div
        v-bind:id="id + '-cutout'"
        v-bind:style="{
        left: containerLeft,
        top: containerTop,
        bottom: containerBottom,
        height: containerHeight,
        width: containerWidth,
        }"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        @click="openVideo"
        class="cutout"
    >

    <img v-bind:src="titleImage">
      <img v-bind:src="maskPath" class="maskBorder">

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
    maskPath: String,
    titleImage: String,
    biografie: String,
    title: String
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
.maskBorder{
padding: 12px;
}
img {
  position: absolute;
  width: 100%;
  height: auto;
}

.cutout{
  position: absolute;
  cursor: pointer;
}

</style>
