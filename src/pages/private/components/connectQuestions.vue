<template>
  <div id="connnect" v-if="postID">
    <span
    >Bitte alle Frage auswählen, bei denen der Beitrag auf der Website
      erscheinen soll</span
    >
    <thead>
    <tr>
      <th>Frage</th>
      <th>Ausgewählt</th>
    </tr>
    </thead>

    <tbody>
    <tr
        v-for="(question, i) in $store.getters.getAcceptedQuestions"
        v-bind:key="i"
    >
      <th>
        {{ question.question }}
      </th>
      <th>
        <input
            v-bind:id="i"
            v-model="selectedQuestions"
            v-bind:disabled="isFetching"
            type="checkbox"
            v-bind:value="question.id"/>
      </th>
    </tr>
    </tbody>
    <button v-bind:disabled="isFetching" @click="createConnections">
      Bestätigen
    </button>
    <br>
    <span>{{ message }}</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "connectQuestions",
  props: {
    postID: String,
  },
  data: function () {
    return {
      selectedQuestions: [],
      isFetching: false,
      message: "",
    };
  },
  methods: {
    createConnections() {
      this.isFetching = true
      this.message = "Erstelle Verbindungen..."
      const formData = new FormData()
      formData.append('postID', this.postID)
      Array.from(this.selectedQuestions).forEach(qID => {
        formData.append('questionIDs[]', qID)
      })
      let url = this.$store.getters.getBaseURL + 'insertConnection.php'
      axios.post(url, formData).then(resp => {
        let data = resp.data
        if (data === "failed") {
          this.message ="Es gab einen Fehler... Bitte erneut versuchen!"
          this.updateSelectedQuestions()
        } else {
          this.message = "Vorgang Erfolgreich!"
        }
      })
    },
    updateSelectedQuestions() {
      let self = this
      this.selectedQuestions = []
      this.isFetching = true
      this.message = "Hole bestehende Verbindungen..."
      let formData = new FormData()
      formData.append('id', this.postID)
      let url = this.$store.getters.getBaseURL + 'getConnectedQuestions.php'
      axios.post(url, formData).then(resp => {
        let data = resp.data
        console.log('Bestehende Verbindungen: ',data)
        data.forEach(conn => {
          self.selectedQuestions.push(conn.question)
        })
        this.message=""
        this.isFetching = false
      })
    }

  },
  mounted() {
    this.updateSelectedQuestions()
  }
}
</script>

<style scoped>
#connect {
  min-height: 40px;
  min-width: 40px;
  background: grey;
}
</style>
