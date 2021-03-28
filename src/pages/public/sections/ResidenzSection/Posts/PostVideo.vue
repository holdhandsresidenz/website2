<template>
  <div id="video"
       class="trns"
       @click="toggleExpand"
       v-bind:style="{
               width: width + 'vw'
       }"
  >
    <div
        class="cutOut trns"
        v-bind:style="{
          width: isExpanded ? '100%' : widthClosed +'%',
          height: isExpanded ? '100vh' : heightClosed + 'vh',
        }"
    >
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
      width: 40,
      widthClosed: 40,
      heightClosed: 57
    }
  },
  mounted() {
    this.heightClosed = this.randomNumberBetween(10, 50)
    this.width =this.randomNumberBetween(30,50)
    this.widthClosed = this.randomNumberBetween(30, 60)
  }
}
</script>

<style scoped>
.cutOut {

  overflow: hidden;
}
#video {
  border: 1px solid coral;
}
img {

}
</style>
