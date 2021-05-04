<template>
  <div>
    <h2>Debug Mode</h2>

  </div>
</template>

<script>
import {db} from './../../data/db.js'
export default {
  data() {
    return {
      documents: []
    }
  },

  firebase: {
    document: db.ref('data')
  }
}
</script>

<style>

</style>