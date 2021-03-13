<template>
<span  v-bind:id="'title-' + title" class="title-wrapper" v-bind:style="{zIndex: zIndex}" >
  <h1  v-bind:id="title + '-black'" class="title-black">{{title}}</h1>
  <h1  v-bind:id="title + '-white'" class="title-white">{{title}}</h1>
</span>


</template>

<script>
export default {
name: "Title",
  props: {
  title: String,
    zIndex: Number
  }
}
</script>

<style scoped>
.title-wrapper {
  position: absolute;
  display: inline;
  left: 2vw;
  top: -1.2vw;
  z-index: 100;
  white-space: nowrap;

  transform-origin: top left;
  font-family: Narr,sans-serif;
  font-size: 1.4vw;

}
.title-black {
  display: inline-block;
  font-weight: normal;
  color: blue;

  -webkit-text-stroke: 1.2vw blue;
}
.title-white {
  display: inline-block;

  position: absolute;
  top: 0;
  left: 0;
  font-weight: lighter;
  color: #22515B;
}
</style>
