<template>
  <div id="private">
    <Login v-if="currentUser === null" @user-logged-in="userLoggedIn"></Login>
    <div v-if="currentUser != null" id="inside">
      <h1>Hallo {{currentUser.username}}</h1>
    </div>
  </div>
</template>

<script>
import Login from "@/pages/private/components/Login";
export default {
  name: 'App',
  components: {Login},
  data: function () {
    return {
      currentUser: null
    }
  },
  methods: {
    userLoggedIn(e) {
      this.currentUser = e
    }
  }
}
</script>

<style>
h1{
  text-align: center;
}

#inside{
position: absolute;
  top:30vh;
  bottom: 30vh;
  left: 20vw;
  right: 20vw;
  background: #b2b2b2;
  box-shadow:
      4vw 0vw 5vw 5vw blue,
      -4vw 0vw 5vw 5vw blue;
}


#private{
  width: 100vw;
  height: 100vh;
  background: url("../../assets/Logo.png") round;
  background-size: 6%;

}
html,body {
  margin: 0;
  font-family: Akzi;
  line-height: 2.33vw;
  font-size: 1vw;
  background:  #b2b2b2
}

.navPos {
  position: absolute;
  top: 10px;
  height: 20px;
}
.inline{
  display: inline;
}
.grey {
 background:  #b2b2b2
}
.red {
  background: #3c2832;
}
*::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
*::-webkit-scrollbar-track {
  background: #b2b2b2;
}
*::-webkit-scrollbar-thumb {
  background: #22515B;
}
*::-webkit-scrollbar-thumb:hover {
  background: #22515B;
}
.alignRight{
  text-align: right;
}

p{
  margin-top: 0;
  margin-bottom: 0;
}
#mickeyBIO {
  padding-top: 3.6rem;
  text-indent: 14.7vw;
}
#laraBIO {
  padding-top: 3.7rem;
  text-indent: 15vw;
}
a{
  color: black;
}
@font-face {
  font-family: 'Akzi';
  src: url('../../assets/fonts/AkzidGroMed.woff') format("woff");
}
@font-face {
  font-family: 'Narr';
  src: url("../../assets/fonts/Arial-Narrow.woff") format("woff");
}

@media all and (max-width: 1000px) {
  html,body {
    line-height: 7vw;
    font-size: 3.3vw;
  }
  #laraBIO {
    padding-top: 7.0rem;
    text-indent: 0;
  }
  #mickeyBIO {
    padding-top: 7.0rem;
    text-indent: 0;
  }
}

</style>
