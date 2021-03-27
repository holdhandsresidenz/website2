<template>
<div>{{posts}}</div>
</template>

<script>
export default {
  name: "Posts",
  data: function () {
    return {

    }
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts
    }
  }
}
</script>

<style scoped>

</style>
