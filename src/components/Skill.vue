<template>
  <div>
    <h3>ความสามารถ</h3>
    <p>{{ skill }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    skill() {
      return this.$store.state.champion
    }
  }
}
</script>

<style>

</style>