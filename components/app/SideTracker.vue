<template>
  <div class="sticky top-0 flex-shrink-0 w-52">

        <div class="fixed top-0 h-screen p-5 overflow-y-auto bg-dark w-52 left-16">
          <h5>Tracked</h5>
          <card-market variant="left" v-for="item in tracking" :key="item" :object="item"></card-market>
   
        </div>

  </div>
</template>

<script>
export default {
  computed: {
    tracking() {
      return this.$store.state.list
    }
  }
}
</script>
