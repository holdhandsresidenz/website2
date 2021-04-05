<template>
  <div id="connnect">
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
            type="checkbox"
            v-bind:id="i"
            v-bind:value="question.id"
            v-model="selectedQuestions"
          />
        </th>
      </tr>
    </tbody>
    <button @click="createConnections" v-bind:disabled="isFetching">
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
      this.isFetching = true;
      this.message = "Bitte warten...";
      let queryDropAll =
        "DELETE FROM questions_posts WHERE post= " + this.postID;
      axios.get(this.$store.getters.getBaseURL + "query.php", {
        params: { query: queryDropAll },
      });
      let query;
      this.selectedQuestions.forEach((questionID) => {
        query =
          "INSERT INTO questions_posts (post, question) VALUES ( " +
          this.postID +
          ", " +
          questionID +
          " )";
        let data = new FormData();
        data.append("query", query);
        axios
          .get(this.$store.getters.getBaseURL + "query.php", {
            params: { query: query },
          })
          .then();
      });
      this.isFetching = false;
      this.message = "Erfolgreich";
      this.fetchConnectedQuestions();
    },
    fetchConnectedQuestions() {
      this.$store
        .dispatch("fetchConnectedQuestions", { postid: this.postID })
        .then(() => {
          this.$store.getters.getConnectedQuestions.forEach((conn) =>
            this.selectedQuestions.push(conn.question)
          );
        });
    },
  },
  computed: {
    getConnections() {
      return this.$store.getters.getConnectedQuestions;
    },
  },

  mounted() {
    this.fetchConnectedQuestions();
  },
};
</script>

<style scoped>
#connect {
  min-height: 40px;
  min-width: 40px;
  background: grey;
}
</style>
