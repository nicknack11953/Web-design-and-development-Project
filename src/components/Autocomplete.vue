<template>
  <form class="d-flex" v-bind:class="{ open: openSuggestion }">
    <input
      type="search"
      class="form-control me-2"
      style="width: 300px"
      placeholder="กรุณาใส่ชื่อตัวละครที่ต้องการ"
      id="myInput"
      v-model="selection"
    />
    <ul class="dropdown-menu" style="width: 100%">
      <li v-for="suggestion in matches" :key="suggestion">
        <a href="#">{{ suggestion }}</a>
      </li>
    </ul>
    <button class="searchbtn btn btn-outline-light" type="submit">ค้นหา</button>
  </form>
</template>

<script>
export default {
  props: {
    suggestions: {
      type: Array,
      required: true,
    },
    selection: {
      type: String,
      required: true,
      twoWay: true,
    },
  },
  data() {
    return {
      
    }
  },
};
</script>

<style>
</style>