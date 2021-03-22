<template>
  <table>
    <thead>
    <tr>
      <th>Frage</th>
      <th>Datum</th>
      <th>Autor:in</th>
      <th>Freigegeben</th>
    </tr>
    </thead>
    <tbody>

    <tr>
      <th class="notAccepted" >
        <input v-model="this.question_c">
      </th>
      <th class="notAccepted" >{{this.datum_c}}</th>
      <th class="notAccepted" >{{this.autorin_c}}</th>
      <th class="notAccepted" ><input type="checkbox" v-bind:value="currentUser.realname" v-model="acceptedBy_c" id="0"></th>
      <th class="notAccepted" @click="confirmQuestion"><router-link :to="{name: 'Questions'}" >BESTÄTIGEN</router-link></th>
    </tr>
    </tbody>
  </table>
</template>

<script>
import store from "@/pages/private/store";
export default {
name: "QuestionValidate",
  props: {
    question: Object
  },
  data: function (){
   return {
     question_c: null,
     datum_c: null,
     autorin_c: null,
     acceptedBy_c: []
   }
  },
  computed: {
    currentUser() {
      return store.state.currentUser
    }
  },
  methods: {
    confirmQuestion() {
      console.log(this.question)
    }
  },
  mounted() {
    this.autorin_c = this.question.author
    this.question_c = this.question.question
    this.datum_c = this.question.created
    this.acceptedBy_c = this.question.acceptedBy ? [this.question.acceptedBy ]: []
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
  margin: 0;
  font-family: Akzi;
  border-radius: 2vh;
  padding: 0.2vw;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
