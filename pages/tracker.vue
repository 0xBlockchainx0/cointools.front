<template>
  <div class="container py-20 text-center grid-cols-4 grid gap-3">
    <card-market v-for="(item, i) in tracking" :key="i" :object="item"></card-market>
  </div>
</template>

<script>
export default {
  computed: {
    tracking() {
      return this.$store.state.localStorage.list
    }
  }
}
</script>
