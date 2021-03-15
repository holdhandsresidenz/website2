<template>
<div>

  <svg
      class="title-wrapper"
     >
    <text x = "0" y="50" class="back">{{title}}</text>
    <text x = "0" y="50" class="front">{{title}}</text>
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
  position: absolute;
  left: 2vw;
  top: -1.2vw;
  z-index: 120;
  white-space: nowrap;
  transform: scaleX(0.85);
  transform-origin: top left;
  font-family: Narr,sans-serif;
  font-size: 3rem

}
.back {  z-index: 10000;
  stroke-width:1.2rem;
  fill:black;
  stroke: blue;
  stroke-linejoin: round;
}
.front {  z-index: 10000;
  fill: #22515B;
}
</style>
