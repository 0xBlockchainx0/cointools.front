<template>
  <div class="sticky top-0 p-4 border-b bg-white z-50">
    <div class="container grid grid-flow-col auto-cols-auto">
      <card-market variant="top" v-for="item in tracking" :key="item" :object="item"></card-market>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tracking() {
      return this.$store.state.localStorage.list
    },
    // noTrackers() {
    //   return this.tracking.length == 0
    // }
  }
}
</script>
