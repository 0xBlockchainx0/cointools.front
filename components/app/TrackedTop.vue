<template>
  <div v-show="tracking.length > 0" class="sticky top-0 p-4 border-b bg-white z-50">
    <div class="container grid grid-flow-col auto-cols-auto gap-2">
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
