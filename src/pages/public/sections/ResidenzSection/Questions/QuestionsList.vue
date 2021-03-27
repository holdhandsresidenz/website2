<template>
<div id="QuestionList" @mouseenter="$store.commit('suspendScroll')" @mouseleave="$store.commit('activateScroll')">
<div  class="Question" v-for="(question, i) in questions" v-bind:key="i" v-bind:class="{odd: (i % 2) == 0, even: (i % 2) != 0}">{{question.question}}</div>
</div>
</template>

<script>
export default {
  name: "QuestionsList",
  computed: {
    questions() {
      return this.$store.getters.getQuestions
    }
  }
}
</script>

<style scoped>
.even {
  margin-right: 4rem;
}
.odd {
  margin-left: 4rem;
  text-align: right;
}
.Question {
 padding: 0.3rem 0;
}
#QuestionList {
  overflow: auto;
  box-sizing: border-box;
  position: relative;
 width: 99%;
  flex: 5;
  padding: 0.5rem;

}
#QuestionList::-webkit-scrollbar-track {
  z-index: 300;
  background: #3c2832;
  width: 3rem;
}
#QuestionList::-webkit-scrollbar-thumb {
  z-index: 300;
  background: #0014ff;
  width: 3rem;
}
#QuestionList::-webkit-scrollbar-thumb:hover {
  z-index: 300;
  background: #0014ff;
  width: 3rem;
}
</style>
