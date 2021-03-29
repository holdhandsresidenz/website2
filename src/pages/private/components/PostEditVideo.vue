<template>
  <div>{{ post }}</div>
</template>

<script>
export default {
  name: "PostEdit",
  data: function () {
    return {
      author: null,
      idposts: null,
      contentHTML: null,
      category: null,
      timestamp: null,
    };
  },
  props: {
    post: Object,
  },
  mounted() {
    this.author = this.post.author;
    this.idposts = this.post.idposts;
    this.contentHTML = this.post.contentHTML;
    this.category = this.post.category;
    this.timestamp = this.post.timestamp;
  },
};
</script>

<style scoped>
</style>
