<template>
  <div>
    <div v-if="post.category === null" class="newPost">
      NEUEN POST ERSTELLEN
      <select v-model="selectedCategory">
        <option disabled value="">Bitte eine Kategorie auswählen</option>
        <option>Text</option>
        <option>Sound</option>
        <option>Bilder</option>
        <option>Video</option>
      </select>
      <PostEditSound v-if="selectedCategory === 'Sound'"></PostEditSound>
      <PostEditImage v-if="selectedCategory === 'Bilder'"></PostEditImage>
      <PostEditVideo v-if="selectedCategory === 'Video'"></PostEditVideo>
      <PostEditTextLong v-if="selectedCategory === 'Text'"></PostEditTextLong>
    </div>
    <div v-if="post.category !== null" class="editPost">POST BEARBEITEN</div>
  </div>
</template>

<script>
import PostEditTextLong from "./PostEditLongText";
import PostEditVideo from "./PostEditVideo";
import PostEditImage from "./PostEditImage";
import PostEditSound from "./PostEditSound";
export default {
  name: "PostEdit",
  components: {
    PostEditTextLong,
    PostEditVideo,
    PostEditImage,
    PostEditSound,
  },
  data: function () {
    return {
      selectedCategory: null,
    };
  },
  props: {
    post: Object,
  },
};
</script>

<style scoped>
</style>
