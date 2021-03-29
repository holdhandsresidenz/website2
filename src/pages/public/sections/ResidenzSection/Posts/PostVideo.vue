<template>
  <div id="video"
       ref="post"
       v-bind:style="{
          marginTop: marginTop  + 'vh',
          width: width +'vw',
          marginRight: '-8vw'
       }"
  >
    <div
        class="trns cutOut"
        v-bind:style="{
          marginRight: isExpanded ? '-12vw' : '3vw',

          width: isExpanded ? width + 'vw' : widthClosed +'vw',
          height: isExpanded ? '100vh' : heightClosed + 'vh',
       }"
        @click="toggleExpand">
      <img
          class="trns"
          v-bind:src="shapes.lara"
          v-bind:style="{
            width: width + 'vw'
        }"
      >
    </div>

  </div>
</template>

<script>
import {postMixin} from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
import {ShapesMixin} from "@/mixins/ShapesMixin";

export default {
  mixins: [postMixin, ShapesMixin],
  name: "PostVideo",
  data: function () {
    return {
      width: 0,
      widthClosed: 40,
      heightClosed: 57
    }
  },
  mounted() {
    this.heightClosed = this.randomNumberBetween(40, 60)
    this.width = 80
    this.widthClosed = this.randomNumberBetween(25, 35)
  }
}
</script>

<style scoped>
.cutOut {
  overflow: hidden;
}
#video {
}
img {
}
</style>
