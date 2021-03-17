<template>
  <nav class="w-full border-b py-4 top-0 z-50 bg">
    <div class="container flex items-center">
      <Logo />
      <ul class="m-0 p-0 ml-3 flex">
        <li class="list-none font-medium mx-5">
          <nuxt-link exact tag="a" :to="links[0][0]" class="text-header" href="/">{{links[0][1]}}</nuxt-link>
        </li>
        <li class="list-none font-medium mx-5">
          <nuxt-link exact tag="a" :to="links[1][0]" class="text-header" href="/">{{links[1][1]}} <span class="text-gray-400" v-if="trackerCount > 0">({{trackerCount}})</span></nuxt-link>
        </li>
      </ul>
      <div class="ml-auto">
        <button v-if="darkMode" @click="toggle" class="btn mr-3">Light</button>
        <button v-else @click="toggle" class="btn mr-3">Dark</button>
      </div>
      <AppSearch />
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
