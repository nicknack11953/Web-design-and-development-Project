<template>
  <div id="nav">
    <nav
      class="navbar navbar-expand-lg d-flex navbar-dark"
      style="background-color: #030608"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">HH.GG</a>
        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-lg-flex" id="menu">
          <ul
            class="navbar-nav d-lg-flex justify-content-center"
            style="width: 30%"
          >
            <!-- <form class="d-flex">
              <input
                type="search"
                class="form-control me-2"
                style="width: 300px"
                placeholder="กรุณาใส่ชื่อตัวละครที่ต้องการ"
                onkeyup="searchChamp()"
                id="myInput"
                v-model="message"
              />
              <button class="searchbtn btn btn-outline-light" type="submit">
                ค้นหา
              </button>
            </form> -->
            <Autocomplete :suggestions="cities" :selection.sync="value" />
          </ul>
          <ul class="Hposit navbar-nav d-lg-flex justify-content-between">
            <li class="navbar-item posit">
              <router-link :to="'/'" class="nav-link">ทั้งหมด</router-link>
            </li>
            <li
              class="navbar-item posit"
              v-for="(navlist, index) in navList"
              :key="index"
            >
              <router-link
                :to="{ name: 'Position', params: { position: navlist.link } }"
                class="nav-link"
                >{{ navlist.title }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Autocomplete from "./Autocomplete.vue";

export default {
  name: "nav",
  components: { Autocomplete },
  data() {
    return {
      cities: ["Bangalore", "Chennai", "Cochin", "Delhi", "Kolkata", "Mumbai"],
      Value: "",
      navList: [
        { title: "บน", link: "top" },
        { title: "ป่า", link: "jungle" },
        { title: "กลาง", link: "mid" },
        { title: "ล่าง", link: "bot" },
        { title: "ซัพพอร์ต", link: "sup" },
        { title: "รายการระดับ", link: "list" },
      ],
      class: "navbar-item posit",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
.posit {
  width: 100%;
}

.Hposit {
  width: 100%;
  text-align: center;
}

.searchbtn {
  background-color: brown;
}

nav {
  position: fixed;
  width: 100%;
  top: -1px;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: var(--box-shadow);
  z-index: 999;
  transition: background 1s ease;
}

.navbar-brand {
  font-family: "Kanit", sans-serif;
  color: #d0a85c;
  font-weight: bold;
}
</style>