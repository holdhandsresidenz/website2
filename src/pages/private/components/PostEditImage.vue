<template>
  <div class="container">
    <span>Bitte Bilder zum hochladen auswählen</span>
    <input type="file" accept="image/*" @change="imageSelected" id="1" />
    <input type="file" accept="image/*" @change="imageSelected" id="2" />
    <input type="file" accept="image/*" @change="imageSelected" id="3" />
    <input type="file" accept="image/*" @change="imageSelected" id="4" />
    <input type="file" accept="image/*" @change="imageSelected" id="5" />
    <input type="file" accept="image/*" @change="imageSelected" id="6" />
    <button @click="createPicturePost">Bilder hochladen</button>
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
      selectedImages: [],
      success: null,
    };
  },
  methods: {
    imageSelected(event) {
      this.selectedImages.push(event.target.files[0]);
    },
    createPicturePost() {
      this.createPostWithAssets(this.selectedImages, "picture");
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
