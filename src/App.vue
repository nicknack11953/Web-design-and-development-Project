<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Test />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Test from "./views/champion/Test";

export default {
  name: "app",
  components: {
    Navbar,
    Test
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
</style>
