<template>
  <div id="home">
    <div class="container" style="padding-top: 4rem">
      <div class="row">
        <div
          class="col-sm-2 col-6"
          style="padding: 1rem"
          v-for="(detail, index) in position == 'top'
            ? top
            : position == 'jungle'
            ? jungle
            : position == 'mid'
            ? mid
            : position == 'bot'
            ? bot
            : position == 'sup'
            ? sup
            : ''"
          :key="index"
        >
          <router-link
            :to="{ name: 'Name', params: { name: details.data[detail].id } }"
          >
            <div class="card">
              <img
                class="card-img-top"
                v-bind:src="
                  'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/' +
                  details.data[detail].image.full
                "
              />
              <div class="card-body" style="text-align: center">
                <label class="card-text">{{ details.data[detail].name }}</label>
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
      top: [
        "Aatrox",
        "Camille",
        "Chogath",
        "Darius",
        "Fiora",
        "Gangplank",
        "Garen",
        "Gnar",
        "Gragas",
        "Gwen",
        "Heimerdinger",
        "Illaoi",
        "Irelia",
        "Jax",
        "Jayce",
        "Kayle",
        "Kennen",
        "Kled",
        "Malphite",
        "MonkeyKing",
        "Mordekaiser",
        "Nasus",
        "Ornn",
        "Quinn",
        "Renekton",
        "Riven",
        "Ryze",
        "Sett",
        "Shen",
        "Singed",
        "Sion",
        "Teemo",
        "Urgot",
        "Yorick",
      ],
      jungle: [
        "Amumu",
        "Diana",
        "DrMundo",
        "Ekko",
        "Elise",
        "Evelynn",
        "Fiddlesticks",
        "Graves",
        "Hecarim",
        "Ivern",
        "JarvanIV",
        "Karthus",
        "Kayn",
        "Khazix",
        "Kindred",
        "LeeSin",
        "Lillia",
        "MasterYi",
        "Nidalee",
        "Nocturne",
        "Nunu",
        "Olaf",
        "Poppy",
        "Rammus",
        "RekSai",
        "Rengar",
        "Rumble",
        "Sejuani",
        "Shaco",
        "Shyvana",
        "Skarner",
        "Taliyah",
        "Trundle",
        "Udyr",
        "Vi",
        "Viego",
        "Volibear",
        "Warwick",
        "XinZhao",
        "Zac",
      ],
      mid: [
        "Ahri",
        "Akali",
        "Anivia",
        "Annie",
        "AurelionSol",
        "Azir",
        "Cassiopeia",
        "Corki",
        "Fizz",
        "Galio",
        "Kassadin",
        "Katarina",
        "Leblanc",
        "Lissandra",
        "Lux",
        "Malzahar",
        "Neeko",
        "Orianna",
        "Qiyana",
        "Seraphine",
        "Sylas",
        "Syndra",
        "Talon",
        "Tryndamere",
        "TwistedFate",
        "Velkoz",
        "Viktor",
        "Vladimir",
        "Xerath",
        "Yone",
        "Zed",
        "Ziggs",
        "Zoe",
        "Zyra",
      ],
      bot: [
        "Aphelios",
        "Ashe",
        "Caitlyn",
        "Draven",
        "Ezreal",
        "Jhin",
        "Jinx",
        "Kaisa",
        "Kalista",
        "KogMaw",
        "Lucian",
        "MissFortune",
        "Samira",
        "Sivir",
        "Swain",
        "TahmKench",
        "Tristana",
        "Twitch",
        "Varus",
        "Vayne",
        "Veigar",
        "Xayah",
        "Yasuo",
      ],
      sup: [
        "Alistar",
        "Bard",
        "Blitzcrank",
        "Brand",
        "Braum",
        "Janna",
        "Karma",
        "Leona",
        "Lulu",
        "Maokai",
        "Morgana",
        "Nami",
        "Nautilus",
        "Pantheon",
        "Pyke",
        "Rakan",
        "Rell",
        "Senna",
        "Sona",
        "Soraka",
        "Taric",
        "Thresh",
        "Yuumi",
        "Zilean",
      ],
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
  updated() {
    Object.filter = (obj, predicate) =>
      Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .reduce((res, key) => ((res[key] = obj[key]), res), {});

    var filtered = Object.filter(
      this.documents,
      (document) => document.Tier == "C"
    );
    console.log(filtered);
  },
};
</script>

<style scoped>
a {
  color: #000;
  text-decoration: none;
}
</style>