<template>
  <div
    id="image"
    class="trns"
    ref="post"
    @click="toggleExpand"
    v-bind:style="{
      width: 44  + 'vw',
    }"
  >
    <div class="orange mark"></div>
    <div
      class="wrapper trns"
      v-if="assets.length > 0"
      v-bind:style="{
        marginTop: isExpanded ? (marginTop/3)+3 +'vh' : (marginTop + 3 ) * 1.6 + 'vh',
        height: isExpanded ? 78.3 + 'vh'
          : smallImageHeight * numberOfRows + 'vh',
      }"
    >
      <img
        class="trns"
        v-for="asset in assets"
        v-bind:src="asset.filepath"
        v-bind:key="asset.idpost_assets"
        v-bind:style="{
          height: 100 / numberOfRows + '%',
          top: isExpanded ? Math.random() * 2+ 'vw' :
            Math.random() * randomnessPosition - randomnessPosition / 2 + 'vw',
          left: isExpanded ? Math.random() * 2 + 'vw' :
            Math.random() * randomnessPosition - randomnessPosition / 2 + 'vw',
        }"
      />
    </div>
  </div>
</template>

<script>
import { postMixin } from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
export default {
  mixins: [postMixin],
  name: "PostImage",
  data: function () {
    return {
      smallImageHeight: 10,
      randomnessPosition: 4,
      numberOfPictures: 0,
    };
  },
  methods: {},
  computed: {
    numberOfRows() {
      return this.numberOfPictures > 2 ? 2 : 1;
    },
  },
  mounted() {
    this.setAssets();
    this.numberOfPictures = this.assets.length;
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}
#image {

}
img {
  z-index: 10001;
  display: block;
  position: relative;
}
.mark {
  position: absolute;
  top: 0;
  z-index: 222;
  height: 1.4rem;
  width: 1.4rem;
}
</style>
