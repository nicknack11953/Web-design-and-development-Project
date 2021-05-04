<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
  // data() {
  //   return {
  //     api:
  //       "https://ddragon.leagueoflegends.com/realms/na.json",
  //     ver: {},
  //   };
  // },
  // mounted() {
  //   fetch(this.api)
  //     .then((res) => res.json())
  //     .then((data) => (this.ver = data))
  //     .catch((err) => console.log(err.message));
  // },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
body {
  font-family: "Kanit", sans-serif;
  background-color: #1e1f26;
}
</style>
