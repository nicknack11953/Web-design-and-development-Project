<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-2">
        <img
          class="img-fluid"
          v-bind:src="
            'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/' +
            champion[name].image.full
          "
        />
      </div>

      <div class="col-sm-12 col-lg-10">
        <div>
          <h1>{{ champion[name].name }}</h1>
        </div>
        <div>
          <p>{{ champion[name].lore }}</p>
        </div>
      </div>
    </div>
    <NavDetails />
  </div>
</template>

<script>
import NavDetails from "@/components/NavDetails.vue";
export default {
  components: {NavDetails},
  props: ["name"],
  data() {
    return {
      api:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/champion/" +
        this.name +
        ".json",
      champion: {},
    };
  },
  mounted() {
    fetch(this.api)
      .then((res) => res.json())
      .then((data) => (this.champion = data.data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>