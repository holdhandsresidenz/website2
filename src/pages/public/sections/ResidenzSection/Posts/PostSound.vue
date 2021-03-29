<template>
<div id="sound"
     ref="post"
     v-bind:style="{
        marginTop: marginTop + 'vh',
        marginLeft: '13vw',
        marginRight: '13vw',
     }"
>
  <audio v-if="audioSrc !== null"
      controls
         ref="audioPlayer"
      v-bind:src="audioSrc">
    Your browser does not support the
    <code>audio</code> element.
  </audio>
</div>
</template>

<script>
import {postMixin} from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";

export default {
  name: "PostSound",
  mixins: [postMixin],
  data: function () {
    return {
      audioSrc: null
    }
  },
  mounted() {
    this.setAssets()
    this.audioSrc = this.assets[0].filepath
  }

}
</script>

<style scoped>

</style>
