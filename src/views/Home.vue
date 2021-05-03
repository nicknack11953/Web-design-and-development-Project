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
              <div class="card-body"  style="text-align: center">
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
export default {
  name: "home",
  data() {
    return {
      api:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/champion.json",
      details: {},
    };
  },
  mounted() {
    fetch(this.api)
      .then((res) => res.json())
      .then((data) => (this.details = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
a {
  color: #000;
  text-decoration: none;
}

</style>