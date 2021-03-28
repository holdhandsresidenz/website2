<template>
  <div class="wrapper" >
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Frage</th>
        <th>Datum</th>
        <th>Autor:in</th>
        <th>Freigegeben von</th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      <th colspan="6" >
        <router-link
            :to="{
    name: 'acceptQuestion',
    params:{ question:
      {question: '',
      author: currentUser,
      acceptedBy: currentUser,
      }}}">Neue Frage erstellen
        </router-link>
      </th>
      <tr v-for="question in notAcceptedQuestions" v-bind:key="question.created">
        <th class="notAccepted">{{question.id}}</th>
        <th class="notAccepted">{{ question.question }}</th>
        <th class="notAccepted">{{ question.created }}</th>
        <th class="notAccepted">{{ question.author.realname }}</th>
        <th class="notAccepted">Noch nicht freigegeben</th>
        <th class="notAccepted">
          <router-link :to="{name: 'acceptQuestion', params:{ question: question}}">Bearbeiten</router-link>
        </th>
      </tr>
      <tr v-for="question in acceptedQuestions" v-bind:key="question.created">
        <th>{{question.id}}</th>
        <th>{{ question.question }}</th>
        <th>{{ question.created }}</th>
        <th>{{ question.author.realname }}</th>
        <th>{{ question.acceptedBy.realname }}</th>
        <th>
          <router-link :to="{name: 'acceptQuestion', params:{ question: question}}">Bearbeiten</router-link>
        </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "Questions",
  data: function () {
    return {}
  },
  methods: {
    acceptedBy(val) {
      return val ? val : "Noch nicht freigegeben"
    },
  },
  computed: {
    acceptedQuestions() {
      return this.$store.getters.getAcceptedQuestions
    },
    notAcceptedQuestions() {
      return this.$store.getters.getNotAcceptedQuestions
    },
    currentUser() {
      return this.$store.getters.getCurrentUser
    }
  },
}
</script>

<style>
.wrapper{
  height: 100%;
  overflow: auto;}
thead th {
  background: #3c2832;
  color: #b2b2b2;
}

table, th {
  background: rgba(21,255,0,0.31);
}

th {
  background: #b2b2b2;
  border: double 1px #3c2832;
  font-size: 1.7vh;
  font-style: normal;
  line-height: 125%;
  padding: 0.2rem;
  font-weight: normal;
}

table {

  width: 100%;
}

.notAccepted {
 box-shadow: inset 0 0 1rem 0 lime;
}
</style>
