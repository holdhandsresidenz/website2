<template>
<div id="Residenz-Section">

  <div id="fade"></div>

</div>
</template>

<script>
export default {
name: "ResidenzSection"
}
</script>

<style scoped>
#Residenz-Section{
  position: absolute;
  left: 200vw;
  top: 0;
  box-sizing: border-box;
  height: 100%;
  width: 50vw;
  background: #b2b2b2;
}

#fade {
  position: absolute;
  left: -0.9vw;
  width: 4vw;
  background: url("../../assets/Verlauf2.png");
  background-size: 100%;
  height: 100%;
  z-index: 100;
}
</style>
