<template>
  <div id="navDetails">
    <div>
      <ul class="nav nav-tabs nav-fill">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">รูน</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">เคาน์เตอร์</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ไอเทม</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ความสามารถ</a>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "navDetails",
  data() {
    return {
      navList: [
        { title: "รูน", link: "rune" },
        { title: "เคาน์เตอร์", link: "counter" },
        { title: "ไอเทม", link: "jungle" },
        { title: "ความสามารถ", link: "minlane" },
      ],
      class: "navbar-item posit",
    };
  },
};
</script>

<style>
</style>