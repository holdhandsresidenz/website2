<template>
  <div id="image">
    <div class="imageContainer"
         @click="toggleExpand"
         v-bind:style="{
            width: isExpanded ? '100vw' : ( singleImageWidth * numberOfColumns) + 'vw',
            position: isExpanded ? 'fixed' : 'relative'
         }"
    >
      <img
          v-for="asset in assets"
          v-bind:src="asset.filepath"
          v-bind:key="asset.idpost_assets"
          v-bind:style="{
            width: singleImageWidth + 'vw',
            top: ((Math.random() * randomnessPosition) - randomnessPosition/2) + 'vw',
            left: ((Math.random() * randomnessPosition) - randomnessPosition/2) + 'vw',
          }"
      >
    </div>

  </div>
</template>

<script>
import {postMixin} from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
export default {
  mixins: [postMixin],
name: "PostImage",
  data: function () {
    return {
      singleImageWidth: 6,
      randomnessPosition: 4
    }
  },
  methods: {

  },
  computed: {
    numberOfColumns() {
      return Math.ceil(Math.sqrt( this.assets.length ))
    }
  },
  mounted() {
    this.setAssets()
  }
}
</script>

<style scoped>
.imageContainer {
  position: relative;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px double firebrick;
}
#image {

  border: 1px solid rebeccapurple;
}
img{
  display: block;
position: relative;
}
</style>
