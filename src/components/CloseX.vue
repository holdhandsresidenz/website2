<template>
  <svg
      class="text-wrapper"
  >
    <text x = "10" y="50" class="back">{{text}}</text>
    <text x = "10" y="50" class="front">{{text}}</text>
  </svg>
</template>

<script>
export default {
name: "TextStrokeWidth",

  props: {
    text: String,
  }
}
</script>

<style scoped>
.text-wrapper {
  display: block;
  height: 100%;
  width: 100%;
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
