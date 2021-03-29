<template>
<div id="Posts">
    <portalTarget name="residenzLogo"></portalTarget>
    <PostContainer
        v-for="post in $store.getters.getPosts"
        v-bind:key="post.idposts"
        v-bind:post="post"
    ></PostContainer>

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
  margin-right: 30vw;
  position: relative;

  min-width: 67vw;
  background: #b2b2b2;
}
#PostsArea {
  margin-left: 4vw;
  margin-right: 4vw;
  position: relative;

  min-width: 67vw;
  background: #b2b2b2;
}
</style>
