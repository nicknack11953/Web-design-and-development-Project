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
          <h1>{{ champion[name].name }}</h1>
        </div>
        <div>
          <p>{{ champion[name].title }}</p>
        </div>
      </div>
    </div>
    <div style="margin-top: 3rem">
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
      <div>
        <div v-if="curShow === 'A'" class="class-detail">
          <div>
            <h3>รูน</h3>
              <h2>Main Path</h2>
              
              <div class="row">
              <div class="col-2"   
              v-for="(M_Name, index) in documents[name].M_Name"
                  :key="index">
                <img
                  src=""
                  style="width: 5rem"
                  alt=""
                />
              </div>
              </div>
            
              
          </div>
        </div>
        <div v-else-if="curShow === 'B'" class="class-detail">
          <div class="row">
            <div class="col-6">
              <h3 class="text-center-card win">
                แชมป์เปียนที่ชนะทาง {{ name }}
              </h3>
              <div class="row">
                <div
                  class="col-4"
                  v-for="(listCounter, index) in documents[name].Counter.win"
                  :key="index"
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
                    <label class="card-text">{{ counters[listCounter].name }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <h3 class="text-center-card lose">
                  แชมป์เปียนที่แพ้ทาง {{ name }}
                </h3>
                <div
                  class="col-4"
                  v-for="(listCounter, index) in documents[name].Counter.lose"
                  :key="index"
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
                    <label class="card-text">{{ counters[listCounter].name }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="curShow === 'C'" class="class-detail">
          <div>
            <div class="row">
              <div
                class="col-2"
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
        </div>
      </div>
    </div>
    <div>
    </div>
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
      champion: {},
      item: {},
      counters: {},
      documents: {},
      classlink: "nav-link",
      classActive: "active",
      classDetail: "class-detail",
      curShow: "B",
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
  },
  updated() {},
};
</script>

<style>
.nav-item span {
  cursor: pointer;
}
.box {
  width: 48px;
  height: 48px;
  background: #d0e1f9;
  border: 1px solid white;
}

.head-box {
  display: flex;
}

.detail-nav {
  background: #4d648d;
  color: white;
}

.active {
  background: #283655 !important;
  color: white !important;
}

.nav-tabs .nav-link {
  border-bottom: none;
}

.class-detail {
  background: #283655;
  color: white;
  padding: 4rem;
}

.text-center-card {
  text-align: center;
}

.text-center-card.win {
  color: #3cf894;
}
.text-center-card.lose {
  color: #fc393e;
}
</style>