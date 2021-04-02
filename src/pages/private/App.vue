<template>
  <div id="private">
    <Login v-if="currentUser.idusers === ''"></Login>
    <div v-else id="inside">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from "@/pages/private/components/Login";
import NavBar from "@/pages/private/components/NavBar";
export default {
  name: "App",
  components: { NavBar, Login },
  data: function () {
    return {
      locked: true,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}

#inside {
  position: absolute;
  margin: 6vh;
  top: 0vh;
  bottom: 0vh;
  left: 0vw;
  right: 0vw;
}

#private {
  width: 100vw;
  height: 100vh;
}
html,
body {
  margin: 0;
  font-family: Akzi;
  overflow: hidden;
  font-size: 1vw;
  background: #22515b;
}

.navPos {
  position: absolute;
  top: 10px;
  height: 20px;
}
.inline {
  display: inline;
}
.grey {
  background: #b2b2b2;
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
  background: #22515b;
}
*::-webkit-scrollbar-thumb:hover {
  background: #22515b;
}
.alignRight {
  text-align: right;
}

p {
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
a {
  color: black;
}
@font-face {
  font-family: "Akzi";
  src: url("../../assets/fonts/AkzidGroMed.woff") format("woff");
}
@font-face {
  font-family: "Narr";
  src: url("../../assets/fonts/Arial-Narrow.woff") format("woff");
}

@media all and (max-width: 1000px) {
  html,
  body {
    line-height: 7vw;
    font-size: 3.3vw;
  }
  #laraBIO {
    padding-top: 7rem;
    text-indent: 0;
  }
  #mickeyBIO {
    padding-top: 7rem;
    text-indent: 0;
  }
}
</style>
