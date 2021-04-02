<template>
  <div class="container">
    <span>Bitte Soundfile hochladen auswählen</span>
    <p>(.mp3, maximale Größe: 8mb)</p>
    <input
      v-bind:disabled="isFetching"
      type="file"
      accept=".mp3,audio/*"
      @change="soundfileSelected"
    />
    <button v-bind:disabled="isFetching" @click="createSoundPost">
      Soundfile hochladen
    </button>
    <span>{{ message }}</span>
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
}
</style>
