<template>
<div id="Residenz-Section">

  <div id="fade"></div>

  <div class="soon">
    <div class="soon1">
      <TitleBW title="DIE RESIDENZ"></TitleBW>
    </div>
    <div class="soon2">
      <TitleBW title="STARTET AM"></TitleBW>
    </div>
    <div class="soon3">
      <TitleBW title="1. APRIL 2021"></TitleBW>
    </div>
  </div>
</div>
</template>

<script>
import TitleBW from "@/pages/public/components/TitleBW";
export default {
name: "ResidenzSection",
  components: {
  TitleBW
  },
  methods: {

  }
}
</script>

<style scoped>
button {
  position: absolute;
  top: 40vh;
  left: 60vw;
}

#Residenz-Section{
  position: absolute;
  left: 291vw;
  top: 0;
  box-sizing: border-box;
  height: 100%;
  width: 30vw;
  min-width: 450px;
  background: #b2b2b2;
}

#fade {
  position: absolute;
  left: -0.9vw;
  width: 4vw;
  background: url("../../../../assets/Verlauf2.png");
  background-size: 100%;
  height: 100%;
  z-index: 100;
}

.soon1 {
  height: 4rem;
}
.soon2{
  height: 4rem;
}
.soon3 {
  height: 4rem;
  margin-left: 5rem;
}
.soon {
  display: flex;
  flex-direction: column;
  bottom: 45vh;
  z-index: 100;
  position: absolute;
  left: 8vw;
}

@media all and (max-width: 1000px) {
  #Residenz-Section{
  left: 820vw;
    width: 50vw;
  }
  .soon {
    left: 25vw;
  }
  #fade{
    width: 6vh;
    left: -1.5vw;
  }
  .soon {
    left: 10.5vw;
  }
}
</style>
