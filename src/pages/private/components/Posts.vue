<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Typ</th>
          <th>Datum</th>
          <th>Autor:in</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <th colspan="6">
          <router-link
            :to="{
              name: 'editPost',
              params: {
                post: {
                  idposts: null,
                  author: $store.getters.getCurrentUser,
                  contentHTML: null,
                  category: null,
                  timestamp: null,
                },
              },
            }"
            >Neuen Post erstellen
          </router-link>
        </th>
        <tr v-for="(post, i) in posts" v-bind:key="i">
          <th>{{ post.idposts }}</th>
          <th>{{ post.category }}</th>
          <th>{{ post.timestamp }}</th>
          <th>{{ $store.getters.getUserNameById(post.author).realname }}</th>
          <th>
            <button @click="deletePost(post.idposts)">Post löschen</button>
          </th>
          <th>
            <button>
              <router-link
                :to="{
                  name: 'connectQuestions',
                  params: { postID: post.idposts },
                }"
              >
                Fragen verknüpfen</router-link
              >
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Posts",
  data: function () {
    return {};
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  methods: {
    deletePost(id) {
      let dataAssets = new FormData();
      dataAssets.append("id", id);
      let urlAssets =
        this.$store.getters.getBaseURL + "deleteAssetsByPostId.php";
      axios.post(urlAssets, dataAssets).then((respAssets) => {
        console.log("assetsdeleted: ", respAssets.data);
        let url = this.$store.getters.getBaseURL + "deletePost.php";
        let data = new FormData();
        data.append("id", id);
        axios.post(url, data).then((resp) => {
          console.log("resp delete: ", resp.data);
          this.$store.dispatch("fetchPosts");
        });
      });
    },
  },
};
</script>

<style scoped>
</style>
