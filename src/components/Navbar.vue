<template>
  <div id="nav">
    <nav
      class="navbar navbar-expand-lg d-flex navbar-dark"
      style="background-color: #1e1f26"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">HH.GG</a>
        <button
          class="navbar-toggler"
          data-bs-target="#menu"
          data-bs-toggle="collapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-lg-flex" id="menu">
          <ul
            class="navbar-nav d-lg-flex justify-content-center"
            style="width: 30%"
          >
            <form class="d-flex">
              <input
                type="search"
                class="form-control me-2"
                style="width: 300px"
                placeholder="กรุณาใส่ชื่อตัวละครที่ต้องการ"
                onkeyup="searchChamp()"
                id="myInput"
              />
              <button class="searchbtn btn btn-outline-light" type="submit">
                ค้นหา
              </button>
            </form>
          </ul>
          <ul
            class="Hposit navbar-nav d-lg-flex justify-content-between"
            v-for="(navlist, index) in navList"
            :key="index"
          >
            <li class="navbar-item posit">
              <router-link :to="navlist.link" class="nav-link">{{
                navlist.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      navList: [
        { title: "ทั้งหมด", link: "/" },
        { title: "บน", link: "toplane" },
        { title: "ป่า", link: "jungle" },
        { title: "กลาง", link: "minlane" },
        { title: "ล่าง", link: "botlane" },
        { title: "ซัพพอร์ต", link: "support" },
        { title: "รายการระดับ", link: "list" },
      ],
      class: "navbar-item posit",
    };
  },
};
</script>

<style scoped>
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
</style>