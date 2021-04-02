<template>
  <div id="filter">
    <img src="../../../assets/Filter_links.png" alt="" />
    <div id="sortierung">
      <span @click="sortByNew" v-bind:class="{ selected: neww }">neueste</span>
      <span @click="sortByOld" v-bind:class="{ selected: old }">älteste</span>
      <span @click="sortByRandom" v-bind:class="{ selected: random }"
        >zufällige</span
      >
    </div>
    <img src="../../../assets/Filter_links.png" alt="" class="mirrored" />
    <div>Beiträge von</div>
    <img src="../../../assets/Filter_links.png" alt="" />
    <div id="residents">
      <span @click="selectMonika" v-bind:class="{ selected: monika }"
        >Monika Gabriela Dorniak</span
      >
      <span @click="selectSarafina" v-bind:class="{ selected: sarafina }"
        >Sarafina McLeod</span
      >
      <span @click="selectSunny" v-bind:class="{ selected: sunny }"
        >Sunny Pfalzer</span
      >
    </div>
    <img src="../../../assets/Filter_links.png" class="mirrored" />
  </div>
</template>

<script>
export default {
  name: "ResidentsFilter",

  data: function () {
    return {
      old: false,
      neww: false,
      random: false,
      monika: false,
      sarafina: false,
      sunny: false,
    };
  },
  methods: {
    sortByNew() {
      this.old = false;
      this.random = false;
      this.neww = true;
      this.$store.commit("sortPostNew");
    },
    sortByOld() {
      this.neww = false;
      this.random = false;
      this.old = true;
      this.$store.commit("sortPostOld");
    },
    sortByRandom() {
      this.neww = false;
      this.old = false;
      this.random = true;
      this.$store.commit("sortPostRandom");
    },
    selectMonika() {
      this.monika = !this.monika;
      this.$store.commit("toggleSelectionOfResident", 9);
      this.$store.dispatch("updatePostList");
    },
    selectSarafina() {
      this.sarafina = !this.sarafina;

      this.$store.commit("toggleSelectionOfResident", 10);
      this.$store.dispatch("updatePostList");
    },
    selectSunny() {
      this.sunny = !this.sunny;
      this.$store.commit("toggleSelectionOfResident", 11);
      this.$store.dispatch("updatePostList");
    },
  },
};
</script>

<style scoped>
#filter {
  position: absolute;
  top: 16.5px;
  left: 18rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
}
span {
  color: #aa3500;
  margin: 0 0.3333rem;
  cursor: pointer;
}
div {
  color: #aa3500;
  z-index: 333;
}
img {
  height: 100%;
  width: auto;
  margin: 0 0.5vw;
}
.mirrored {
  transform: scaleX(-1);
}
.selected {
  text-decoration: underline;
  text-underline-offset: 0.7vw;
}
</style>
