<template>
<div class="title-wrapper"  v-bind:style="{zIndex: zIndex}">

  <svg v-bind:style="{zIndex: zIndex, padding: 0}"
     >
    <text x = "5" y="50" class="back">{{title}}</text>
    <text x = "5" y="50" class="front">{{title}}</text>
  </svg>

</div>
   <!-- <h1  v-bind:id="title + '-black'" class="title-black">{{title}}</h1>
   <h1  v-bind:id="title + '-white'" class="title-white">{{title}}</h1>
   -->



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
  padding-top: 0;
  position: absolute;
  left: 1vw;
  overflow: visible;

  transform: scaleX(0.85);
  transform-origin: top left;
  font-family: Narr,sans-serif;
  font-size: 3rem
}

.back {
  display: block;
  width: 100%;
  stroke-width:1.2rem;
  fill:black;
  stroke: blue;
  stroke-linejoin: round;
}
.front {
  width: 100%;
  display: block;
  fill: #22515B;
}
</style>
