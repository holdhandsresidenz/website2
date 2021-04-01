<template>
  <div
    id="video"
    ref="post"
    v-bind:style="{
      marginTop: marginTop + 'vh',
      width: width + 'vw',
      marginRight: '-8vw',
    }"
  >
    <div class="orange mark"></div>
    <div
      class="trns cutOut"
      v-bind:style="{
        marginRight: isExpanded ? '-12vw' : '3vw',

        width: isExpanded ? width + 'vw' : widthClosed + 'vw',
        height: isExpanded ? '100vh' : heightClosed + 'vh',
      }"
      @click="expand"
    >
      <img
        class="trns"
        v-bind:src="shapes.lara"
        v-bind:style="{
          width: width + 'vw',
        }"
      />

      <PostVideoModal
        v-if="isExpanded"
        v-bind:link="post.contentHTML"
      ></PostVideoModal>
    </div>
  </div>
</template>

<script>
import { postMixin } from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
import { ShapesMixin } from "@/mixins/ShapesMixin";
import PostVideoModal from "@/pages/public/sections/ResidenzSection/Posts/PostVideoModal";
export default {
  mixins: [postMixin, ShapesMixin],
  name: "PostVideo",
  components: {
    PostVideoModal,
  },
  data: function () {
    return {
      width: 0,
      widthClosed: 40,
      heightClosed: 57,
      modalVisible: false,
    };
  },
  methods: {
    expand() {
      this.toggleExpand;
    },
  },
  mounted() {
    this.heightClosed = this.randomNumberBetween(40, 60);
    this.width = 80;
    this.widthClosed = this.randomNumberBetween(25, 35);
  },
};
</script>

<style scoped>
.cutOut {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

#video {
}
img {
  cursor: pointer;
  z-index: 44444;
}
.mark {
  position: absolute;
  top: 0;
  height: 16.5px;
  width: 4px;
}
</style>
