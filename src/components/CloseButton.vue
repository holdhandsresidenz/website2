<template>
<button @click="$emit('close')"><TextStrokeWidth text="x"></TextStrokeWidth></button>
</template>

<script>
import TextStrokeWidth from "@/components/CloseX";
export default {
name: "CloseButton",
  components: {TextStrokeWidth}
}
</script>

<style scoped>
  button{
    position: absolute;
    background: rgba(52,35,48,0);
    right: 0;
    top: 0vh;
    height: 5vw;
    width: 5vw;
    border: 0;
    cursor: pointer;
    z-index: 50000;
  }
</style>
