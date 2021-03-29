<template>
  <div>
    Bilder
    <input
      type="file"
      accept="image/*"
      @change="uploadImage($event)"
      id="file-input"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostEdit",
  data: function () {
    return {
      author: null,
      idposts: null,
      contentHTML: null,
      category: null,
      timestamp: null,
    };
  },
  props: {
    post: Object,
  },
  methods: {
    uploadImage(event) {
      const URL = "resident1/";

      let data = new FormData();
      data.append("name", "my-picture");
      data.append("file", event.target.files[0]);

      let config = {
        header: {
          "Content-Type": "image/png",
        },
      };

      axios.put(URL, data, config).then((response) => {
        console.log("image upload response > ", response);
      });
    },
  },

  mounted() {
    this.author = this.post.author;
    this.idposts = this.post.idposts;
    this.contentHTML = this.post.contentHTML;
    this.category = this.post.category;
    this.timestamp = this.post.timestamp;
  },
};
</script>

<style scoped>
</style>
