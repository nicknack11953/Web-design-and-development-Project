<template>
  <div id="home">
    <div class="container" style="padding-top: 4rem">
      <div class="row">
        <div
          class="col-sm-2 col-6"
          style="padding: 1rem"
          v-for="(detail, index) in details.data"
          :key="index"
        >
          <router-link :to="{ name: 'Name', params: { name: detail.id } }">
            <div class="card">
              <img
                class="card-img-top"
                v-bind:src="
                  'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/' +
                  detail.image.full
                "
              />
              <div class="card-body" style="text-align: center">
                <label class="card-text">{{ detail.name }}</label>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "./../data/db.js";
export default {
  name: "home",
  props: ["position"],
  data() {
    return {
      api:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/champion.json",
      details: {},
      documents: {},
      test: "",
    };
  },
  firebase: {
    documents: db.ref("data"),
  },
  computed: {},
  mounted() {
    fetch(this.api)
      .then((res) => res.json())
      .then((data) => (this.details = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
a {
  color: #000;
  text-decoration: none;
}

body {
  font-family: "Kanit", sans-serif;
  background-color: #1e1f26;
}
</style>