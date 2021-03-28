<template>
  <div id="shortText">
    {{post.category}}
  </div>
</template>

<script>
export default {
name: "PostTextShort",
  props: {
    post: Object
  }
}
</script>

<style scoped>

</style>
