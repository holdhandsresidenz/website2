<template>
  <div id="image">
    <img
        v-for="asset in assets"
        v-bind:src="asset.filepath"
        v-bind:key="asset.idpost_assets"
    >
  </div>
</template>

<script>
import {postMixin} from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
export default {
  mixins: [postMixin],
name: "PostImage",
  data: function () {
    return {
    }
  },
  methods: {
  },
  mounted() {
    this.setAssets()
  }
}
</script>

<style scoped>
#image {
  border: 1px solid rebeccapurple;
}
img{
  width: 6vw;

}
</style>
