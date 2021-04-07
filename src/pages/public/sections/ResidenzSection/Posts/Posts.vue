<template>
  <div id="Posts" >
    <portalTarget name="residenzLogo"></portalTarget>
    <PostBio></PostBio>
      <PostContainer
          v-for="post in $store.getters.getPosts"
          v-bind:key="post.idposts"
          v-bind:post="post"
      ></PostContainer>

    <div class="placeholder"></div>
  </div>
</template>
<script>
import PostContainer from "@/pages/public/sections/ResidenzSection/Posts/PostContainer";
import PostBio from "@/pages/public/sections/ResidenzSection/Posts/PostBio";
export default {
  name: "Posts",
  components: {PostBio, PostContainer },
};
</script>

<style>
.trns {
  transition: 1.7s;
}
#Posts {
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  min-width: 67vw;
  background: #b2b2b2;
}
#PostsArea {
  margin-left: 4vw;
  margin-right: 4vw;
  position: relative;
  min-width: 70vw;
  background: #b2b2b2;
}
.placeholder {
  height: 100%;
  width: 24vw;
}
</style>
