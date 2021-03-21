<template>
<div class="title-wrapper"  v-bind:style="{zIndex: zIndex}">
  <svg v-bind:style="{zIndex: zIndex, padding: 0, overflow: 'visible'}">
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
svg{
  height: 3rem;
}
.title-wrapper {
  padding-top: 0;
  position: absolute;
  height: 3rem;
  left: 1vw;
  width: 3vw;
  overflow: visible;
  transition: z-index 0s;
  transform: scaleX(0.85);
  transform-origin: top left;
  font-family: Narr,sans-serif;
  font-size: 3rem
}

.back {
  transition: z-index 0s;
  display: block;
  width: 100%;
  stroke-width:1.2rem;
  fill:black;
  stroke: black;
  stroke-linejoin: round;
}
.front {
  transition: z-index 0s;
  width: 100%;
  display: block;
  fill: #b2b2b2;
}
@media all and (max-width: 1000px) {
  .title-wrapper {
    font-size: 3rem
  }

}
</style>
