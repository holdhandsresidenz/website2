<template>
  <div v-bind:id="id">
    <VideoModal
        @close="modalVisible = false; $emit('continue-scroll')"
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

    <img v-bind:src="titleImage" class="titleImage" v-show="mouseOver || this.smallScreen">
      <img v-bind:src="maskPath" class="maskPath">

    </div>

  </div>
  </template>

<script>

import VideoModal from "@/pages/public/components/VideoModal";
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
    },
    mouseLeave() {
      this.mouseOver = false
    },
    openVideo() {
      this.modalVisible = true
      this.$emit('suspend-scroll')
    }
  },
  computed: {
    smallScreen() {
      return screen.width <= 1000
    }
  }
}
</script>

<style scoped>
.maskPath{
z-index: 90;

}
.titleImage {

}
img {
  position: absolute;
  width: auto;
  height: 100%;
}

.cutout{
  position: absolute;
  cursor: pointer;
}

</style>
