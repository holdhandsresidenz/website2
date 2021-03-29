<template>
<div id="PostContainer" >
  <PostTextLong v-if="post.category === 'textLong'" v-bind:post="post"></PostTextLong>
  <PostTextShort v-if="post.category === 'textShort'" v-bind:post="post"></PostTextShort>
  <PostImage v-if="post.category === 'picture'" v-bind:post="post"></PostImage>
  <PostVideo v-if="post.category === 'video'" v-bind:post="post"></PostVideo>
  <PostSound v-if="post.category === 'sound'" v-bind:post="post"></PostSound>
</div>
</template>

<script>
import PostImage from "@/pages/public/sections/ResidenzSection/Posts/PostImage";
import PostTextLong from "@/pages/public/sections/ResidenzSection/Posts/PostTextLong";
import PostTextShort from "@/pages/public/sections/ResidenzSection/Posts/PostTextShort";
import PostVideo from "@/pages/public/sections/ResidenzSection/Posts/PostVideo";
import PostSound from "@/pages/public/sections/ResidenzSection/Posts/PostSound";
export default {
  name: "PostContainer",
  components: {PostSound, PostVideo, PostTextShort, PostTextLong, PostImage},
  props: {
    post: Object
  },
  data: function () {
    return {
      marginTop: 0,
      marginRight: 0
    }
  },
  mounted() {
    this.setRandomMarginTop()
    this.setRandomMarginRight()
  },
  methods: {
    setRandomMarginTop() {
      let min = 0
      let max = 50
      this.marginTop = (Math.random() * ( max - min )) + min
    },
    setRandomMarginRight() {
      let min = 0
      let max = 0
      this.marginRight = (Math.random() * ( max - min )) + min
    }
  }
}
</script>

<style scoped>
#PostContainer{
}

</style>
