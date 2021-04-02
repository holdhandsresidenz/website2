<template>
  <div id="nav">
    <router-link
      @click.native="fetchQuestions"
      tag="button"
      :to="{ name: 'Questions' }"
      >Fragen</router-link
    >
    <router-link @click.native="fetchPosts" tag="button" :to="{ name: 'Posts' }"
      >Posts</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    fetchPosts() {
      this.$store.dispatch("fetchPosts");
    },
    fetchQuestions() {
      this.$store.dispatch("fetchQuestions");
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
}
button {
  cursor: pointer;
  font-family: Akzi;
  font-size: 1.6vw;
  border: 1px double black;
  background: blue;
  color: #b2b2b2;
  height: 5vh;
  width: 15vw;
  margin: 1vw 0vw;
}
</style>
