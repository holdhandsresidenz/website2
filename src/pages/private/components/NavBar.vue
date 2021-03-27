<template>
  <div id="nav">
    <router-link tag="button" :to="{name: 'Questions'}">Fragen</router-link>
  <router-link tag="button" :to="{name: 'Posts'}">Posts</router-link>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
#nav {
  display: flex;
}
button {
  cursor: pointer;
  box-shadow: 0vh 0vh 1vh 0vh black;
  font-family: Akzi;
  font-size: 1.6vw;
  border: 2px solid black;
  border-radius: 2vh;
  background: blue;
  color: #b2b2b2;
  height: 5vh;
  width: 15vw;
  margin: 1vw 0vw;
}
</style>
