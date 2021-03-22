<template>
<div>{{posts}}</div>
</template>

<script>
export default {
  name: "Posts",
  data: function () {
    return {
      posts: {
        author: "Jonathan Schneider",
        content: "<p> <h1>Guten Tag</h1> Dies ist ein Test</p>",
        created: "2021-03-20 16:55:11",
        category: "text"
      }
    }
  }
}
</script>

<style scoped>

</style>
