<template>
  <div class="container">
    <textarea
      v-model="message"
      placeholder="Bitte Text eingeben. Für die Textformatierung können HTML-tags verwedent werden. (zb. <br> für einen Zeilenumbruch)"
    ></textarea>
    <button @click="createTextPost">Post veröffentlichen</button>
    <span v-if="success"
      >Upload Erfolgreich! Ein neuer Post wurde erstellt.</span
    >
  </div>
</template>

<script>
import { editPostMixin } from "../mixins/editPostMixin";
export default {
  name: "PostEditText",
  mixins: [editPostMixin],
  data: function () {
    return {
      message: "",
      success: null,
    };
  },
  methods: {
    createTextPost() {
      let authorID = this.$store.getters.getCurrentUser.idusers;
      this.createPostInDB("textLong", authorID, this.message);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background: gray;
}
</style>
