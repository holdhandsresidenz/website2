<template>
<div class="title-wrapper"  v-bind:style="{zIndex: zIndex}">
  <svg @click="$emit('title-clicked')" v-bind:style="{zIndex: zIndex, padding: 0, overflow: 'visible'}"
     >
    <text x = "5" y="00" class="back">{{title}}</text>
    <text x = "5" y="00" class="front">{{title}}</text>
  </svg>
</div>
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
  position: relative;
  top: 2.6rem;
}
.title-wrapper {
  z-index: 33333;
  position: absolute;
  width: 4vw;
  height: 1em;
  left: 0.4vw;
  top: 1vh;
  overflow: visible;
  transition: z-index 0s;
  transform: scaleX(0.85);
  transform-origin: top left;
  font-family: Narr,sans-serif;
  word-spacing: 0.6rem;
  font-size: 3rem
}

.back {
  cursor: pointer;
  transition: z-index 0s;
  display: block;
  width: 100%;
  stroke-width:1.2rem;
  stroke: #aa3500;
  stroke-linejoin: round;
}
.front {
  cursor: pointer;
  transition: z-index 0s;
  width: 100%;
  display: block;
  fill: #b2b2b2;
}

@media all and (max-width: 1000px) {
  .title-wrapper {
    font-size: 2.7rem;
    left: 3vw;
    top:-0.7vw;
  }
}
</style>
