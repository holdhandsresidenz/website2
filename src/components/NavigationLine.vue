<template>
<div id="NavigationLine">
  <img src="../assets/Seite_Info_kursiv.png" id="infoNav" class="navPos">
  <div id="blueLine" class="navLine"></div>

  <img id="blue-arrow-left" src="../assets/Seite_Pfeil_blau_li.png" class="navPos">
  <img id="blue-arrow-right" src="../assets/Seite_Pfeil_rechts.png" class="navPos">




  <img id="orange-arrow-left" src="../assets/Seite_Pfeil_orange_li.png" class="navPos">
  <img id="orange-arrow-right" src="../assets/Seite_Pfeil_orange_re.png" class="navPos">

  <div id="orangeLine" class="navLine"></div>
  <img src="../assets/Seite_Residenz_kursiv.png" id="residenzNav" class="navPos">
</div>
</template>

<script>
export default {
name: "NavigationLine"
}
</script>

<style scoped>

#blueLine {
  background: blue;
  position: absolute;

  left: 115px;
  width: 200vw;
  z-index: 80;

}
#blue-arrow-left {
  position: sticky;
}

#orangeLine{
  left: 220vw;
  background: red;
  z-index: 100;
  width: 30vw;
}

#residenzNav {
  position: absolute;
  left: 205vw;
  width:225px;

  z-index: 100;
}
</style>
