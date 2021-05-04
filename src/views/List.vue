<template>
  <div class="container" style="padding-top: 4rem">
    <h1>รายการระดับ</h1>
    <div class="row" v-for="(tier, index) in tiers" :key="index">
      <div class="col-1">
        <h1>{{ tier }}</h1>
      </div>
      <div class="col-11">
        <div class="row">
          <!-- <img
            :src="'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/' + "
            alt=""
          /> -->
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

<style>
</style>