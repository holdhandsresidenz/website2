<template>
<div id="Biografie" v-if="currentSelection.bioTitle !== null">
  <OrangeFade></OrangeFade>
  <div class="text">{{currentSelection.bioText}}</div>
  <OrangeFade></OrangeFade>
</div>
</template>

<script>
import OrangeFade from "@/pages/public/components/OrangeFade";
export default {
name: "PostBio",
  components: {OrangeFade},
  data: function (){
  return{
    bioMonika: "Biodgrafie MOnika",
    bioSarafina: "Biografie Sarafina",
    bioSunny: "Biograafie Sunny"
  }
  },
  computed: {
    currentSelection() {
      let selection = this.$store.getters.getSelectedResidents
      let bioText = null
      let bioTitle = null
      if (selection.length !== 1) {
        return {bioText: bioText, bioTitle: bioTitle}
      } else {
        switch (selection[0]) {
          case 9:
            //Monika
                bioText = this.bioMonika
                bioTitle = "Monika Gabriela Dorniak"
                break
          case 10:
            bioTitle = "Sarafina McLeod"
                bioText = this.bioSarafina
                break
          case 11:
            bioText = this.bioSunny
                bioTitle = "Sunny Pfalzer"
                break
          default:


        }
        return {bioText: bioText, bioTitle: bioTitle}
      }

    }
  }
}
</script>

<style scoped>

</style>
