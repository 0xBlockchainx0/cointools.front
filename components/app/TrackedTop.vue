<template>
  <div v-show="tracking.length > 0" class="sticky top-0 border-r h-screen z-10 bg-white overflow-y-auto">
    <div class="p-4">
        <card-market variant="top" v-for="item in tracking" :key="item" :object="item"></card-market>
    </div>
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
