<template>
  <div id="login">
    <div>
      <p></p>
      <input v-model="username" placeholder="username">
      <input v-model="password" placeholder=" password" type="password">
      <button @click="login">login</button>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import store from "@/pages/private/store";

export default {
  name: "Login",
  components: {},
  data: function () {
    return {
      fetchingData: false,
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      let baseURL = this.$store.getters.getBaseURL
      axios.get(baseURL + 'check_credentials.php', {
        params: {
          password: this.password,
          username: this.username
        }
      }).then(resp => {
        let user = {
          username: resp.data[0].loginname,
          realname: resp.data[0].realname,
          idusers: resp.data[0].idusers
        }
        store.dispatch('fetchQuestions')
        store.dispatch('fetchPosts')
        store.commit('setUser', user)

      })
    },
  }
}
</script>

<style scoped>
button {
  font-family: Akzi;
  display: block;
  width: 99%;
  border-radius: 2vw;
  margin: 1vh auto;
}

input {
  width: 99%;
  border-radius: 2vw;
  font-family: Akzi;
  text-align: center;
}

#login {
  padding-top: 12vh;
  padding-left: 5vw;
  padding-right: 5vw;
  margin: 0 auto;
  width: 50vw;
  height: 100vh;
  box-shadow: 10vw 0vw 25vw 15vw blue,
  -10vw 0vw 25vw 15vw blue,
  inset 1vw 0vw 2vw 1vw blue,
  inset -1vw 0vw 2vw 1vw blue;

  box-sizing: border-box;
  background: #b2b2b2;
}
</style>
