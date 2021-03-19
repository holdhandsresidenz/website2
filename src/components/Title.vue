<template>
<div class="title-wrapper"  v-bind:style="{zIndex: zIndex}">

  <svg @click="$emit('title-clicked')" v-bind:style="{zIndex: zIndex, padding: 0, overflow: 'visible'}"
     >
    <text x = "5" y="00" class="back">{{title}}</text>
    <text x = "5" y="00" class="front">{{title}}</text>
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
svg{
height: 2.5rem;
  position: absolute;
  top:3rem;
}
.title-wrapper {
  padding-top: 0rem;
  position: absolute;
  left: 1.2vw;
  cursor: pointer;
  width: 0;
  overflow: visible;
  transition: z-index 0s;
  transform: scaleX(0.85);
  transform-origin: top left;
  font-family: Narr,sans-serif;
  font-size: 3rem
}

.back {
  cursor: pointer;

  transition: z-index 0s;
  display: block;
  width: 100%;
  stroke-width:1.2rem;
  fill:black;
  stroke: blue;
  stroke-linejoin: round;
}
.front {
  cursor: pointer;
  transition: z-index 0s;
  width: 100%;
  display: block;
  fill: #22515B;
}
</style>
