<template>
  <div class="container">
    <textarea
      v-model="link"
      placeholder="Bitte Youtube-Embed-Link eingeben. (z.B: https://www.youtube.com/embed/2JyW4yAyTl0)"
    ></textarea>
    <button @click="createVideoPost">Post veröffentlichen</button>
    <span v-if="success">Erfolgreich! Ein neuer Post wurde erstellt.</span>
  </div>
</template>

<script>
import { editPostMixin } from "../mixins/editPostMixin";
export default {
  name: "PostEditText",
  mixins: [editPostMixin],
  data: function () {
    return {
      link: "",
      success: null,
    };
  },
  methods: {
    createVideoPost() {
      let authorID = this.$store.getters.getCurrentUser.idusers;
      this.createPostInDB("video", authorID, this.link);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
