<template>
  <div id="Residenz-Section">
    <PortalTarget name="navResidenzSection"></PortalTarget>
      <OrangeFade v-bind:mirrored="true"></OrangeFade>
    <Questions></Questions>
    <OrangeFade></OrangeFade>
    <Posts></Posts>

  </div>
</template>

<script>
import Questions from "@/pages/public/sections/ResidenzSection/Questions/Questions";
import OrangeFade from "@/pages/public/components/OrangeFade";
import Posts from "@/pages/public/sections/ResidenzSection/Posts/Posts";
export default {
  name: "ResidenzSection",
  components: {Posts, OrangeFade, Questions},
  methods: {}
}
</script>

<style scoped>
#Residenz-Section {
  position: relative;
  box-sizing: border-box;
  height: 100%;

  background: #b2b2b2;
  display: flex;
  flex-direction: row;
}

</style>
