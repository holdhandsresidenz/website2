<template>
<div>
  <table>
    <thead>
    <tr>
      <th>Frage</th>
      <th>Datum</th>
      <th>Autor:in</th>
      <th>Freigegeben von</th>
    </tr>
    </thead>
<tbody>

<tr v-for="question in notAcceptedQuestions" v-bind:key="question.created">
  <th class="notAccepted" >{{question.question}}</th>
  <th class="notAccepted" >{{question.created}}</th>
  <th class="notAccepted" >{{question.author}}</th>
  <th class="notAccepted" >Noch nicht freigegeben</th>
  <th class="notAccepted" > <router-link :to="{name: 'acceptQuestion', params:{ question: question}}">Bearbeiten</router-link></th>
</tr>
   <tr v-for="question in acceptedQuestions" v-bind:key="question.created">
     <th>{{question.question}}</th>
     <th>{{question.created}}</th>
     <th>{{question.author}}</th>
     <th>{{question.acceptedBy}}</th>
     <th> <router-link :to="{name: 'acceptQuestion', params:{ question: question}}">Bearbeiten</router-link></th>
   </tr>

</tbody>
  </table>
</div>
</template>

<script>
export default {
name: "Questions",
  props: {
    currentUser: Object
  },
  data: function () {
  return {
    questions: [
      {
        question:"Wie gehts dir heute?",
        created: "2021-03-21 16:33:38",
        author: "Jonathan Schneider",
        acceptedBy: ""
      },
      {
        question:"In welchem Verhältnis steht Lyrik zu Metadaten?",
        created: "2021-03-21 16:17:38",
        author: "Jonathan Schneider",
        acceptedBy: "Jonathan Schneider"
      },
      {
        question:"Ist Performance stets geprägt von Virtualität",
        created: "2021-03-21 12:33:38",
        author: "Jonathan Schneider",
        acceptedBy: ""
      },
    ]
  }
  },
  computed: {
    notAcceptedQuestions() {
      return this.questions.filter(question => question.acceptedBy === "")
    },
    acceptedQuestions() {
      return this.questions.filter(question => question.acceptedBy !== "")
    }
  },
  methods: {
    acceptedBy(val) {
      return val ? val : "Noch nicht freigegeben"
    }
  }
}
</script>

<style>
thead th {
  background: blue;
  color: #b2b2b2;
}
table,th {
  border: 2px solid black;
  border-radius: 2vh;

}
th {
  box-shadow: 0vh 0vh 1vh 0vh black;
  background: #b2b2b2;
  font-size: 1.7vh;
  line-height: 100%;
  font-style: normal;
  font-weight: normal;
  padding: 1vh;
}
table {
border: 0;
  width: 100%;
}
.notAccepted {
  border: 0.5vh solid lime;
}
</style>
