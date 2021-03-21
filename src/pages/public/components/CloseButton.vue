<template>
<button @click="$emit('close')"><TextStrokeWidth text="X"></TextStrokeWidth></button>
</template>

<script>
import TextStrokeWidth from "@/pages/public/components/CloseX";
export default {
name: "CloseButton",
  components: {TextStrokeWidth}
}
</script>

<style scoped>
  button{
    position: absolute;
    background: rgba(52,35,48,0);
    right: -5.5vw;
    top: 0vh;
    height: 5vw;
    width: 5vw;
    border: 0;
    cursor: pointer;
    z-index: 50000;
  }
</style>
