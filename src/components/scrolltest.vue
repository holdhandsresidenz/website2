<template>

    <div @scroll="scrolled" @wheel="wheel" id="viewport"  ref="scroll">

       <div id="scroll-container">
         <div
             id="greenBox"
             v-bind:class="{
           closed: scrollPos < 300 || scrollPos > 600,
           opened: scrollPos >= 300 && scrollPos <= 600}"></div>
         <div
             id="greenBox2"
             v-bind:class="{
           closed: scrollPos < 100 || scrollPos > 400,
           opened: scrollPos >= 100 && scrollPos <= 400}">

           <div id="content">

             <p>
               Hold Hands hat erstmalig im April 2016 in den Räumen des Kulturvereins Pracht e.V. Leipzig stattgefunden und wurde durch die Künstlerin Lissy Willberg initiiert. Es war eine Veranstaltung, die queere und weibliche* Positionen in Performance-, Poetry-, Video- und Installationskunst zusammenbrachte und ausstellte. Vier Studierende der Hochschule für Grafik und Buchkunst, sowie internationale Künstler:innen haben sich mit Beiträgen am Programm beteiligt. Die Idee von Hold Hands als Plattform für den Austausch und die Präsentation dieser Positionen sollte im Frühjahr 2020 fortgesetzt werden; eine öffentliche Veranstaltung konnte jedoch aufgrund der globalen Pandemie nicht stattfinden. Infolgedessen entstand der Gedanke das Projekt im Jahr 2021 um ein Online-Residenzprogramm zu erweitern.

             </p>
             <p>
               Viele Künstler:innen sehen sich aktuell vor der Herausforderung digitale Räume zu bespielen. Die Initiator:innen von Hold Hands Residenz sehen ein Defizit in der theoretischen und praktischen Beschäftigung mit dieser Thematik und möchten durch das Residenzprogramm einen digitalen Experimentierraum schaffen, der einen kollektiven Diskurs anregt und die Hinterfragung konventioneller Methodik fördert.

             </p>
             <p>
               Das Projekt Hold Hands Residenz wird umgesetzt von:
               <br>

               Hjördis Lyn Behncken (Social Media und Öffentlichkeitsarbeit)<br>
               Anne Dietzsch (gestalterisches Konzept und Typografie)<br>
               Jonathan Schneider (Programmierung)<br>
               Lissy Willberg (inhaltliches Konzept, Projektleitung und Videoproduktion)<br>

               und gefördert durch das Kulturamt Leipzig und das Support-Büro der HGB Leipzig.

             </p>

             <address>
               Kontakt:
               <br>
               mail ( at ) hold-hands.net
               <br>
               Hold Hands Residenz   <br>
               c/o Lissy Willberg   <br>
               Herbartstr. 75   <br>
               04318 Leipzig
               <br><br><br>
             </address>

           </div>
         </div>
       </div>

    </div>




</template>

<script>

import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
export default {

name: "scrolltest",
  components: {

  },
  data: function (){
  return {
    scrollPos: 0
  }

  },
  methods: {
    scrolled() {
      let px = this.$refs.scroll.scrollLeft

      this.scrollPos =  px
    },
    wheel(e){
      console.log(e.deltaY)
      let counter = e.deltaY * 10
      while (counter >= 0) {
        this.$refs.scroll.scrollLeft += 1
        counter--
      }
      while (counter <= 0) {
        this.$refs.scroll.scrollLeft -= 1
        counter++
      }

    }
  },

  computed: {

  },
}
</script>

<style scoped>
#viewport{
  position: absolute;
  top: 0;

  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: #3E2A33;
}
#scroll-container {

  height: 100vh;
  width:400vw;
}
#greenBox {
  position: absolute;
  left: 60vw;
  top:0;
  background: lime ;
  height: 30vh;
  transition: 0.82s;
}

#greenBox2 {
  position: absolute;
  left: 30vw;
  bottom: 0;
  background: lime ;
  height: 30vh;
  transition: 0.82s;
}
.closed{
  width: 100px;

}
.opened{
  width: 500px;

}

#content{
  overflow: auto;
  background: gold;
  height: 100%;
  width: 100%;
  margin: auto;
}
</style>
