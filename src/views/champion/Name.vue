<template>
  <div class="container" style="padding-top: 4rem">
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
          <h1 class="champ_name">{{ champion[name].name }}</h1>
        </div>
        <div>
          <p class="champ_title">{{ champion[name].title }}</p>
        </div>
      </div>
    </div>
    <div class="des_box">
      <div>
        <ul class="nav nav-tabs nav-fill detail-nav">
          <li class="nav-item">
            <span
              :class="[classlink, curShow === 'A' ? classActive : null]"
              aria-current="page"
              @click="curShow = 'A'"
              >รูน</span
            >
          </li>
          <li class="nav-item">
            <span
              :class="[classlink, curShow === 'B' ? classActive : null]"
              @click="curShow = 'B'"
              >เคาน์เตอร์</span
            >
          </li>
          <li class="nav-item">
            <span
              :class="[classlink, curShow === 'C' ? classActive : null]"
              @click="curShow = 'C'"
              >ไอเทม</span
            >
          </li>
          <li class="nav-item">
            <span
              :class="[classlink, curShow === 'D' ? classActive : null]"
              @click="curShow = 'D'"
              >ความสามารถ</span
            >
          </li>
        </ul>
      </div>
      <div class="box_detail">
        <div v-if="curShow === 'A'" class="class-detail">
          <div>
            <h2>Spell</h2>
            <div class="row">
              <div class="col-6 card_box">
                <div v-for="(document, index) in documents[name].Spell" :key="index">
                  <img :src="'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/' + summoners[document].image.full" alt="">
                  <span>{{summoners[document].name}}</span>
                </div>
              </div>
              <div class="col-6">

              </div>
            </div>
            <div class="row">
              <div
                class="col-2"
                v-for="(M_Name, index) in documents[name].M_Name"
                :key="index"
              >
                <img src="" style="width: 5rem" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="curShow === 'B'" class="class-detail">
          <div class="row">
            <div class="col-6">
              <h3 class="text-center-card win">
                แชมป์เปียนที่ชนะทาง {{ champion[name].name }}
              </h3>
              <div class="row winbox">
                <div
                  class="col-4 card_box"
                  v-for="(listCounter, index) in documents[name].Counter.win"
                  :key="index"
                >
                  <router-link
                    :to="{
                      name: 'Name',
                      params: { name: counters[listCounter].name },
                    }"
                  >
                    <div class="card">
                      <img
                        class="card-img-top"
                        v-bind:src="
                          'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/' +
                          counters[listCounter].image.full
                        "
                        alt=""
                      />
                    </div>
                    <div class="card-body">
                      <label class="card-text">{{
                        counters[listCounter].name
                      }}</label>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <h3 class="text-center-card lose">
                  แชมป์เปียนที่แพ้ทาง {{ champion[name].name }}
                </h3>
                <div class="row winbox">
                  <div
                    class="col-4 card_box"
                    v-for="(listCounter, index) in documents[name].Counter.lose"
                    :key="index"
                  >
                    <router-link
                      :to="{
                        name: 'Name',
                        params: { name: counters[listCounter].name },
                      }"
                    >
                      <div class="card">
                        <img
                          class="card-img-top"
                          v-bind:src="
                            'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/' +
                            counters[listCounter].image.full
                          "
                          alt=""
                        />
                      </div>
                      <div class="card-body">
                        <label class="card-text">{{
                          counters[listCounter].name
                        }}</label>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="curShow === 'C'" class="class-detail">
          <div>
            <div class="row item_box">
              <div
                class="col-lg-2 col-4 item"
                v-for="(getItem, index) in documents[name].items"
                :key="index"
              >
                <img
                  :src="
                    'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/item/' +
                    item[getItem].image.full
                  "
                  alt=""
                  style="width: 6rem"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="curShow === 'D'" class="class-detail">
          <div class="container">
            <div v-for="(spell, index) in champion[name].spells" :key="index">
              <div class="row" style="padding-top: 1rem">
                <div class="col-1">
                  <img
                    :src="
                      'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/' +
                      spell.image.full
                    "
                    alt=""
                  />
                </div>

                <div class="col-2">
                  <span>
                    {{ spell.name }}
                  </span>
                </div>
                <div class="col-9 head-box">
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                </div>
              </div>
            </div>
            <div class="row" style="padding-top: 1rem">
              <div class="col-1">
                <img
                  :src="
                    'https://ddragon.leagueoflegends.com/cdn/11.9.1/img/passive/' +
                    champion[name].passive.image.full
                  "
                  alt=""
                />
              </div>
              <div class="col-2">
                <span>
                  {{ champion[name].passive.name }}
                </span>
              </div>
              <div class="col-9 head-box">
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  1
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  2
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  3
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  4
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  5
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  6
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  7
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  8
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  9
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  10
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  11
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  12
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  13
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  14
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  15
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  16
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  17
                </div>
                <div
                  class="box"
                  style="
                    background-color: #d0a85c;
                    text-align: center;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                  "
                >
                  18
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { db } from "./../../data/db.js";
export default {
  props: ["name"],
  data() {
    return {
      api:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/champion/" +
        this.name +
        ".json",
      apiItems:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/item.json",
      apiCounters:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/champion.json",
      apiSummoner:
        "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/th_TH/summoner.json",
      champion: {},
      item: {},
      counters: {},
      documents: {},
      summoners: {},
      classlink: "nav-link",
      classActive: "active",
      classDetail: "class-detail",
      curShow: "A",
    };
  },
  computed: {
    getItems() {
      return this.$store.state.item[this.name];
    },
  },
  firebase: {
    documents: db.ref("data"),
  },
  mounted() {
    fetch(this.api)
      .then((res) => res.json())
      .then((data) => (this.champion = data.data))
      .catch((err) => console.log(err.message));
    fetch(this.apiItems)
      .then((res) => res.json())
      .then((data) => (this.item = data.data))
      .catch((err) => console.log(err.message));
    fetch(this.apiCounters)
      .then((res) => res.json())
      .then((data) => (this.counters = data.data))
      .catch((err) => console.log(err.message));
    fetch(this.apiSummoner)
      .then((res) => res.json())
      .then((data) => (this.summoners = data.data))
      .catch((err) => console.log(err.message));
  },
  updated() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
.nav-item span {
  cursor: pointer;
}

.card_box {
  width: 25%;
  margin: 2%;
}

.box_detail {
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}

.card-body {
  padding: 5%;
  margin: 5%;
  text-align: center;
}

.winbox {
  display: flex;
  justify-content: center;
}

.des_box {
  margin-top: 1%;
}

/* .item_box {
  display: flex;
  justify-content: center;
} */

.item {
  margin: 1% 0% 1% 0%;
  display: flex;
  justify-content: center;
}

.box {
  width: 48px;
  height: 48px;
  background: #030608;
  border: 1px solid white;
}

.champ_name {
  color: #ffffff;
  font-size: 50px;
}

.champ_title {
  color: #ffffff;
  font-size: 30px;
}

.head-box {
  display: flex;
}

.detail-nav {
  background: #030608;
  color: white;
}

.active {
  background: #323440 !important;
  color: #d0a85c !important;
}

.nav-tabs .nav-link {
  border-bottom: none;
}

.class-detail {
  background: #323440;
  color: white;
  padding: 1%;
}

.text-center-card {
  text-align: center;
  margin: 1%;
}

.text-center-card.win {
  color: #3cf894;
}

.text-center-card.lose {
  color: #fc393e;
}
.winbox a {
  color: #fff;
  text-decoration: none;
}
</style>