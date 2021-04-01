<template>
  <div
    class="modalVideo trns"
    v-bind:style="{
      top: randomNumberBetween(-3, 0) + 'vh',
      left: randomNumberBetween(-4, 0) + 'vw',
      width: videoWidth + 'vw',
      height: videoHeight + 'vw',
      opacity: opacity,
    }"
    @click="show"
  >
    <template v-if="isVisible">
      <OrangeFade v-bind:style="{ opacity: opacity }"></OrangeFade>
      <iframe
        v-bind:src="testLink"
        v-bind:style="{ opacity: opacity }"
      ></iframe>
      <OrangeFade v-bind:style="{ opacity: opacity }"></OrangeFade>
    </template>
  </div>
</template>

<script>
import OrangeFade from "@/pages/public/components/OrangeFade";
export default {
  name: "PostVideoModal",
  data: function () {
    return {
      testLink: "https://www.youtube.com/embed/TXsNk03ygD4",
      videoWidth: 67,
      isVisible: false,
      opacity: 0,
    };
  },
  components: {
    OrangeFade,
  },
  props: {
    videoLink: String,
  },
  methods: {
    randomNumberBetween(a, b) {
      return Math.random() * (b - a) + a;
    },
    show() {
      this.isVisible = true;
      this.opacity = 100;
    },
  },
  computed: {
    videoHeight() {
      return this.videoWidth / (16 / 9);
    },
  },
  mounted() {
    this.videoWidth = this.randomNumberBetween(85, 94);
  },
};
</script>

<style scoped>
.modalVideo {
  display: flex;
  flex-direction: row;
  height: 100%;
  position: absolute;
  width: 100%;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
