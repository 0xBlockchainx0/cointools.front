<template>
  <nav class="top-0 z-50 w-full py-4 border-b bg">
    <div class="container flex items-center">
      <Logo />
      
      <AppSearch />
      <div class="ml-auto">
        <button v-if="darkMode" @click="toggle" class="mr-3 btn">Light</button>
        <button v-else @click="toggle" class="mr-3 btn">Dark</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      trackers: this.$store.state.list,
      links: [
          ['/', 'Markets'],
          ['/tracker', 'Tracker']
          // ['/trade', 'Trade']
      ],
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'darkToggle'
    })
  },
  computed: {
    trackerCount() {
      return this.trackers.length
    },
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>
