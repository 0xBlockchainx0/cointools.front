<template>
  <div v-show="tracking.length > 0" class="sticky top-0 z-10 border-b bg-bg">

        <div class="container flex py-2 overflow-x-auto trackedTop">
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
