<template>
  <div v-show="tracking.length > 0" class="sticky top-0 border-b z-10">

        <div class="container py-2 flex overflow-x-auto trackedTop">
          <card-market variant="top" v-for="item in tracking" :key="item" :object="item"></card-market>
        </div>

  </div>
</template>

<style lang="scss">
.trackedTop {
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

<script>
export default {
  computed: {
    tracking() {
      return this.$store.state.list
    }
  }
}
</script>
