<template>
  <div>
  <div class="container py-10 text-center grid-cols-4 grid gap-3">
    <card-market v-for="(item, i) in tracking" :key="item" :object="item"></card-market>
  </div>
    <div v-show="noTrackers" class="container-sm py-10 text-center">
      <h2>You're not tracking any coins</h2>
      <p>You can add them on the markets screen or on the token profiles.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tracking() {
      return this.$store.state.list
    },
    noTrackers() {
      return this.tracking.length == 0
    }
  }
}
</script>
