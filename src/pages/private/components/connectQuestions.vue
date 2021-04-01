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
    <button @click="createConnections">Bestätigen</button>
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
    };
  },
  methods: {
    createConnections() {
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
        axios.get(this.$store.getters.getBaseURL + "query.php", data).then();
      });
    },
  },
  computed: {
    getConnections() {
      return this.$store.getters.getConnectedQuestions;
    },
  },

  mounted() {
    this.$store.dispatch("fetchConnectedQuestions", { postid: this.postID });
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
