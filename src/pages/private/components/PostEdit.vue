<template>
  <div>
    <div v-if="post.category === null" class="newPost"></div>
    <div v-if="post.category !== null" class="editPost"></div>
  </div>
</template>

<script>
export default {
  name: "PostEdit",
  data: function () {
    return {};
  },
  props: {
    post: Object,
  },
};
</script>

<style scoped>
</style>
