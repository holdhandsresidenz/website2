<template>
    <div id="image"
         class="trns"
         ref="post"
         @click="toggleExpand"
         v-bind:style="{
           width: 30 * numberOfColumns + 'vw',
           marginRight: '-3vw'
         }"
    >
      <div
          class="wrapper trns"
          v-bind:style="{
            marginTop: isExpanded ? '2vh' : marginTop + 'vh',
            height: isExpanded ? 80 + (5 * numberOfColumns) + 'vh' : smallImageHeight * numberOfPictures + 'vh'
          }"
      >
        <img
            class="trns"
            v-for="asset in assets"
            v-bind:src="asset.filepath"
            v-bind:key="asset.idpost_assets"
            v-bind:style="{
            height: (100 / numberOfColumns) + '%',
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
     smallImageHeight: 10,
      randomnessPosition: 4,
      numberOfPictures: 0,
    }
  },
  methods: {

  },
  computed: {
    numberOfColumns() {
      return Math.ceil(Math.sqrt( this.numberOfPictures ))
    },
  },
  mounted() {
    this.setAssets()
    this.numberOfPictures = this.assets.length
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
}
#image {
  position: relative;
}
img{
  display: block;
  position: relative;
  align-self: center;
}
</style>
