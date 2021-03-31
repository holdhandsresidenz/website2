<template>
  <div class="container">
    <span>Bitte Soundfile hochladen auswählen</span>
    <p>(.mp3, maximale Größe: 8mb)</p>
    <input type="file" accept=".mp3,audio/*" @change="soundfileSelected" />
    <button @click="createSoundPost">Soundfile hochladen</button>
    <span v-if="success"
      >Upload Erfolgreich! Ein neuer Post wurde erstellt.</span
    >
  </div>
</template>

<script>
import { editPostMixin } from "../mixins/editPostMixin";
export default {
  name: "PostEdit",
  mixins: [editPostMixin],
  data: function () {
    return {
      soundfile: [],
      success: null,
    };
  },
  methods: {
    soundfileSelected(event) {
      this.soundfile = [];
      this.soundfile.push(event.target.files[0]);
    },
    createSoundPost() {
      this.createPostWithAssets(this.soundfile, "sound");
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
