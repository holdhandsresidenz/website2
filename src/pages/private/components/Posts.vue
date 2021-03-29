<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Typ</th>
          <th>Datum</th>
          <th>Autor:in</th>
          <th></th>
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
            <router-link :to="{ name: 'editPost', params: { post: post } }"
              >Bearbeiten</router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
</style>
