<template>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Frage</th>
      <th>Datum</th>
      <th>Autor:in</th>
      <th>Freigegeben</th>
    </tr>
    </thead>
    <tbody>

    <tr>
      <th class="notAccepted">{{id_c}}</th>
      <th class="notAccepted" >
        <input v-model="question_c">
      </th>

      <th class="notAccepted" >{{datum_c}}</th>
      <th class="notAccepted" >{{autorin_c.realname}}</th>
      <th class="notAccepted" ><input type="checkbox" v-bind:value="currentUser" v-model="accepted" id="0"></th>
      <th class="notAccepted" @click="confirmQuestion"><router-link :to="{name: 'Questions'}" >BESTÄTIGEN</router-link></th>
      <th class="notAccepted" @click="deleteQuestion"><router-link :to="{name: 'Questions'}" >FRAGE LÖSCHEN</router-link></th>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'
export default {
name: "QuestionValidate",
  props: {
    question: Object
  },
  data: function (){
   return {
     id_c: "",
     question_c: "",
     datum_c: "",
     autorin_c: null,
     acceptedBy_c: null,
     accepted: null
   }
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser
    }
  },
  methods: {
    confirmQuestion() {
      if (this.id_c) {
        this.updateQuestion()
      } else {
        this.insertNewQuestion()
      }
    },
    insertNewQuestion() {
      let self = this
      let baseURL = this.$store.getters.getBaseURL
      let acceptedBy = this.currentUser.idusers

      axios.get(baseURL + 'insertQuestion.php',{params: {
          question: self.question_c,
          author: self.autorin_c.idusers,
          acceptedBy: acceptedBy}})
      this.$store.dispatch('fetchQuestions')
    },
    updateQuestion() {
      let self = this
      let baseURL = this.$store.getters.getBaseURL
      let acceptedBy
      if (this.accepted) {
        if (this.acceptedBy_c === null) {
          acceptedBy = this.currentUser.idusers
        } else {
          acceptedBy = this.acceptedBy_c.idusers
        }
      } else {
        acceptedBy = "null"
      }
      axios.get(baseURL + 'updateQuestion.php',{params: {
          question: self.question_c,
          id: self.id_c,
          author: self.autorin_c.idusers,
          acceptedBy: acceptedBy}})
      this.$store.dispatch('fetchQuestions')
    },
    deleteQuestion() {
      let self = this
      let baseURL = this.$store.getters.getBaseURL
      axios.get(baseURL + 'deleteQuestion.php',{params: {
          id: self.id_c,
         }})
      this.$store.dispatch('fetchQuestions')
    }
  },
  mounted() {
    this.autorin_c = this.question.author
    this.question_c = this.question.question
    this.datum_c = this.question.created
    this.acceptedBy_c = this.question.acceptedBy ? this.question.acceptedBy : null
    this.accepted = this.question.acceptedBy !== null
    this.id_c = this.question.id
  }

}
</script>

<style scoped>
.notAccepted {
  background: lime;
}
button {
width: 100%;
  height: 100%;
  background: lime;
  border-radius: 2vh;
  font-family: Akzi;
  font-size: 3vh;
  font-style: oblique;
  cursor: pointer;
}
input{
display: block;
  font-family: Akzi;
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
}
</style>
