<template>
<div id="PostsArea">
  <portalTarget name="residenzLogo"></portalTarget>
  <div id="Posts">
    <PostContainer
        v-for="post in $store.getters.getPosts"
        v-bind:key="post.idposts"
        v-bind:post="post"
    ></PostContainer>

  </div>
</div>
</template>
<script>

import PostContainer from "@/pages/public/sections/ResidenzSection/Posts/PostContainer";
export default {
name: "Posts",
  components: {PostContainer},
  mounted() {
    this.$store.dispatch('fetchAssets')
  }
}
</script>

<style>
.trns {
  transition: 1.7s;
}
#Posts{
  height: 100%;
  display: flex;
  flex-direction: row;
}
#PostsArea {
  margin-left: 4vw;
  margin-right: 4vw;
  position: relative;
  height: 100%;
  min-width: 67vw;
  background: #b2b2b2;
}
</style>
