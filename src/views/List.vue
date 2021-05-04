<template>
  <div class="container test" style="padding-top: 4rem">
    <h1 style="color: #d0a85c">ตารางระดับ</h1>
    <div class="row detail-header" v-for="(tier, index) in tiers" :key="index">
      <div class="col-1" style="background-color: #d0a85c">
        <h1 style="text-align: center; font-weight: bold">
          {{ tier }}
        </h1>
      </div>
      <div class="col-11">
        <div class="row" style="background-color: #323440">
          <div
            class="col-1 detail-tier"
            v-for="(name, index) in tier == 'S+'
              ? sp
              : tier == 'S'
              ? s
              : tier == 'A'
              ? a
              : tier == 'B'
              ? b
              : tier == 'C'
              ? c
              : tier == 'D'
              ? d
              : ''"
            :key="index"
          >
            <router-link :to="{ name: 'Name', params: { name: name } }">
              <div class="card" style="height: 100%">
                <img
                  class="card-img-top"
                  :src="
                    'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/' +
                    details.data[name].image.full
                  "
                  alt=""
                />
                <div class="card-body" style="text-align: center">
                  <span class="card-text" style="color: #1e1f26">{{
                    details.data[name].name
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "./../data/db.js";
export default {
  data() {
    return {
      api:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/champion.json",
      tiers: ["S+", "S", "A", "B", "C", "D"],
      details: {},
      documents: {},
      sp: [
        "Darius",
        "Elise",
        "Evelynn",
        "Jhin",
        "Jinx",
        "Kassadin",
        "Katarina",
        "Leona",
        "Lulu",
        "Malphite",
        "Morgana",
        "Senna",
        "Shaco",
        "Shen",
        "Talon",
        "Thresh",
        "Tristana",
        "Udyr",
        "Urgot",
        "Vayne",
        "Vladimir",
        "Zed",
      ],
      s: [
        "Aatrox",
        "Anivia",
        "Bard",
        "Blitzcrank",
        "Fiddlesticks",
        "Galio",
        "Garen",
        "Gnar",
        "Jax",
        "Khazix",
        "Malzahar",
        "MonkeyKing",
        "Mordekaiser",
        "Nasus",
        "Nocturne",
        "Nunu",
        "Ornn",
        "Qiyana",
        "Riven",
        "Sett",
        "Sivir",
        "Sylas",
        "XinZhao",
      ],
      a: [
        "Ahri",
        "Annie",
        "Ashe",
        "Caitlyn",
        "Chogath",
        "Corki",
        "Diana",
        "Draven",
        "Fizz",
        "Ivern",
        "Janna",
        "Karthus",
        "Kayn",
        "Kindred",
        "Kled",
        "KogMaw",
        "Leblanc",
        "LeeSin",
        "Maokai",
        "MissFortune",
        "Nautilus",
        "Quinn",
        "RekSai",
        "Samira",
        "Singed",
        "Sion",
        "Sona",
        "Soraka",
        "Swain",
        "TahmKench",
        "Taliyah",
        "Twitch",
        "Veigar",
        "Velkoz",
        "Volibear",
        "Warwick",
        "Xerath",
        "Yasuo",
        "Zac",
        "Zilean",
      ],
      b: [
        "Alistar",
        "Amumu",
        "AurelionSol",
        "Azir",
        "Brand",
        "Braum",
        "Camille",
        "Cassiopeia",
        "DrMundo",
        "Ekko",
        "Fiora",
        "Gragas",
        "Heimerdinger",
        "Illaoi",
        "JarvanIV",
        "Kaisa",
        "Kalista",
        "Kayle",
        "Kennen",
        "Lissandra",
        "Lux",
        "MasterYi",
        "Nami",
        "Neeko",
        "Olaf",
        "Poppy",
        "Pyke",
        "Rakan",
        "Rammus",
        "Rell",
        "Rengar",
        "Ryze",
        "Sejuani",
        "Seraphine",
        "Shyvana",
        "Skarner",
        "Taric",
        "Teemo",
        "Trundle",
        "Tryndamere",
        "Varus",
        "Vi",
        "Viego",
        "Viktor",
        "Yorick",
        "Ziggs",
        "Zoe",
        "Zyra",
      ],
      c: ["Jayce", "Pantheon", "Rumble"],
      d: [
        "Akali",
        "Aphelios",
        "Ezreal",
        "Gangplank",
        "Graves",
        "Gwen",
        "Hecarim",
        "Irelia",
        "Karma",
        "Lillia",
        "Lucian",
        "Nidalee",
        "Orianna",
        "Renekton",
        "Syndra",
        "TwistedFate",
        "Xayah",
        "Yone",
        "Yuumi",
      ],
    };
  },
  firebase: {
    documents: db.ref("data"),
  },
  mounted() {
    fetch(this.api)
      .then((res) => res.json())
      .then((data) => (this.details = data))
      .catch((err) => console.log(err.message));
  },
  updated() {},
};
</script>

<style scoped>
.test {
  color: white;
}
.detail-tier {
  padding: 0;
}

.detail-tier a {
  color: black;
  text-decoration: none;
}
.detail-header {
  padding: 1.5rem 0;
}
</style>