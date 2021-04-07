<template>
  <div id="Biographies"
       v-bind:style="{width: widthOpen +'vw'}"
       ref="post"
  >

    <div
        v-if="$store.getters.isResidentSelected(9)"
        class="bioBox"
        @click="toggleMonika"
    >
      <TitleOrange v-bind:title="'MONIKA GABRIELA'"></TitleOrange>
      <div class="dorniak">
      <TitleOrange  v-bind:title="'DORNIAK'"></TitleOrange>
      </div>
      <OrangeFade></OrangeFade>
      <div
          id="BiografieMonika"
          class="text trns"
          @mouseenter="$store.commit('suspendScroll')"
          @mouseleave="$store.commit('activateScroll')"
          v-bind:style="{
            width: isExpandedMonika ? widthOpen + 'vw' : '0vw',
          }"
          v-html="bioMonika"
      >
      </div>
      <OrangeFade
          class="trns"
          v-bind:style="{
              opacity: isExpandedMonika ? '100' : '0'
          }"
      ></OrangeFade>
    </div>


    <div
        v-if="$store.getters.isResidentSelected(10)"
        class="bioBox"
        @click="toggleSarafina"
    >
      <TitleOrange v-bind:title="'SARAFINA MCLEOD'"></TitleOrange>
      <OrangeFade></OrangeFade>
      <div
          id="BiografieSarafina"
          class="text trns"
          @mouseenter="$store.commit('suspendScroll')"
          @mouseleave="$store.commit('activateScroll')"
          v-bind:style="{
            width: isExpandedSarafina ? widthOpen + 'vw' : '0vw',
          }"
          v-html="bioSarafina"
      >
      </div>
      <OrangeFade
          class="trns"
          v-bind:style="{
              opacity: isExpandedSarafina ? '100' : '0'
          }"
      ></OrangeFade>
    </div>


    <div
        v-if="$store.getters.isResidentSelected(11)"
        class="bioBox"
        @click="toggleSunny"
    >
      <TitleOrange v-bind:title="'SUNNY PFALZER'"></TitleOrange>
      <OrangeFade></OrangeFade>
      <div
          id="BiografieSunny"
          class="text trns"
          @mouseenter="$store.commit('suspendScroll')"
          @mouseleave="$store.commit('activateScroll')"
          v-bind:style="{
            width: isExpandedSunny ? widthOpen + 'vw' : '0vw',
          }"
          v-html="bioSunny"
      >
      </div>
      <OrangeFade
          class="trns"
          v-bind:style="{
              opacity: isExpandedSunny ? '100' : '0'
          }"
      ></OrangeFade>
    </div>
  </div>
</template>

<script>
import OrangeFade from "@/pages/public/components/OrangeFade";
import TitleOrange from "@/pages/public/components/TitleOrange";
import {postMixin} from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
export default {
  name: "PostBio",
  mixins: [postMixin],
  components: {OrangeFade, TitleOrange},
  data: function () {
    return {
      bioMonika: "ist eine Deutsch-Polnische interdisziplinäre Künstlerin. Mit ihrem Hintergrund in Textilkunst, Psychologie und Choreographie, verbindet sie in ihrem Werk Performance, (Textil- & Holz-) Skulptur, Video, Photographie und Malerei.\n" +
          "In ihrer multimedialen Arbeit erforscht sie die Strukturen des Selbst durch eine vielschichtige Analyse von sich konstant verändernden Zuständen: Anatomie, Psychologie und Umwelt. Ihre Forschungen zu (generationsübergreifenden) Traumata entwickeln sich aus ihren Recherchen über die kollektive und individuelle Geschichte ihrer Polnisch-Deutschen Vorfahren.\n" +
          "In 2017 graduierte sie mit einem MA Art and Science vom Central Saint Martins in London, und wurde mit ihrer Abschlussarbeit für den Studio Makers Prize von Outset X Tiffany’s nominiert. Seither wurden ihre Arbeiten international präsentiert, u.a. am Arts Catalyst in London, Tate Exchange im Tate Modern, Foreign Affairs Festival in Berlin, Khalil Sakakini Kulturzentrum in Ramallah. Als Gastdozentin wurde sie für ihre tiefgehende Arbeit zu renommierten Institutionen wie dem Garage Museum in Moskau und Chelsea College of Arts in London eingeladen.\n" +
          "</br><a style='color: #3c2832' href='https://monikadorniak.com/' target='_blank'>www.monikadorniak.com</a></br>",
      bioSarafina: "(*1994 Eugene, Oregon, US) ist eine Deutsch-US-amerikanische Künstlerin, die in Leipzig lebt und arbeitet. Ihre interdisziplinären Arbeiten bilden performative und bildhafte Momente, die punktuell aus einem Prozess der Bewegungsarbeit und -recherche hervortreten und sich auf Zwischenbereiche des menschlichen Bewusstseins und Daseins beziehen. Sie studierte Freie Kunst bei Aurelia Mihai, Donna Kukama und Thomas Rentmeister an der HBK Braunschweig und der Malmö Art Academy, Schweden.\n" +
          "Ihre Werke wurden unter anderem im Mönchehaus Museum Goslar, Kunstschaufenster Wolfsburg, Keller Drei, auf dem Rittergut Lucklum und in Zusammenarbeit mit dem DIS-PLAY Kunstkollektiv in Braunschweig (DE), Hannover (DE), Timișoara (RO) und Los Angeles (US) gezeigt.\n" +
          "McLeod wurde von der Studienstiftung des deutschen Volkes gefördert und gewann 2013 den National Scholastic Art Award und den Scholastic Art Award State of Vermont.\n" +
          "</br><a style='color: #3c2832' href='https://sarafinamcleod.com/' target='_blank'>www.sarafinamcleod.com</a></br>",
      bioSunny: "(*1991, Wien, AT) ist Performance Künstlerin. Sunny studierte an der Akademie der bildende Künste Wien sowie in Mexiko-Stadt und entwirft Choreographien, Videos und textile Skulpturen. Mittels performativer Strategien untersucht Sunny verkörperte und repräsentative Elemente von Protest im öffentlichen Raum, sowie Sensibilität und Teen-Spirit von kollektiven Körpern. Pfalzer’s Arbeiten und Recherche wurden u.a. in den KW Berlin, Shedhalle Zürich, Ashley Berlin und Les Urbaines Lausanne gezeigt. Pfalzer kollaborierte in 2020 mit Young Boy Dancing Group und Perfocraze International Artist Residency Ghana. Zuletzt erhielt Pfalzer das österreichische Startstipendium. Sunny Pfalzer lebt in Berlin, Wien und Ternitz. </br><a style='color: #3c2832' href='https://sunnyp.net/' target='_blank'>www.sunnyp.net</a></br></br>",
      isExpandedMonika: false,
      isExpandedSarafina: false,
      isExpandedSunny: false,
      widthOpen: 33
    }
  },
 /* watch: {
    isExpanded: function (oldVal, newVal) {
      if (oldVal === false && newVal === true) {
        this.isExpandedSunny = false
        this.isExpandedSarafina = false
        this.isExpandedMonika = false
      } else if ( oldVal === true && newVal === false ) {
        this.isExpandedSunny = true
        this.isExpandedSarafina = true
        this.isExpandedMonika = true
      }
    }
  },

  */
  methods:{
    toggleSarafina() {
      this.isExpandedSarafina = !this.isExpandedSarafina
    },
    toggleMonika() {
      this.isExpandedMonika = !this.isExpandedMonika
    },
    toggleSunny() {
      this.isExpandedSunny = !this.isExpandedSunny
    },
  },
}
</script>

<style scoped>
*::-webkit-scrollbar {
  width: 0.7rem;
}
*::-webkit-scrollbar-track {
  z-index: 300;
  background: rgba(21,255,0,0);
  width: 3rem;
}
*::-webkit-scrollbar-thumb {
  z-index: 300;
  background: #3c2832;
  width: 3rem;
}
*::-webkit-scrollbar-thumb:hover {
  z-index: 300;
  background: #3c2832;
  width: 3rem;
}
a{
  color: #3c2832;
}
#Biographies {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 0vw;
  margin-left: 4vw;
  margin-top: 8vh;
}

.bioBox {
  position: relative;
  margin-top: 0.5vh;
  display: flex;
  flex-direction: row;
  height: 30.3vh
}

.text {
  margin: 0 0.2vw 0vw 1vw;
  overflow-x: hidden;
  overflow-y: auto;
  color: #3c2832;
}

#BiografieMonika {
  text-indent: 10vw;
  padding-top: 5rem;
}
.dorniak{
  position: relative;
  top: 4rem
}
#BiografieSarafina {
  text-indent: 20.5vw;
  padding-top: 1rem;
}

#BiografieSunny {
  text-indent: 18vw;
  padding-top: 1rem;
}

*::-webkit-scrollbar-track {
  z-index: 300;
  background: rgba(21,255,0,0);
  width: 3rem;
}
*::-webkit-scrollbar-thumb {
  z-index: 300;
  background: #3c2832;
  width: 3rem;
}
*::-webkit-scrollbar-thumb:hover {
  z-index: 300;
  background: #3c2832;
  width: 3rem;
}
</style>
