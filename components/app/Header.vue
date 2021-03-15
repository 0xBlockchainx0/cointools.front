<template>
  <nav class="w-full border-b py-4 sticky top-0 z-50 bg-white">
    <div class="container flex items-center">
      <Logo />
      <ul class="m-0 p-0 ml-3 flex">
        <li class="list-none font-medium mx-5" v-for="(link, index) in links" :key="index">
          <nuxt-link exact tag="a" :to="link[0]" class="text-header" href="/">{{link[1]}}</nuxt-link>
        </li>
      </ul>
      <p>(Currently tracking: {{trackerCount}})</p>
      <AppSearch class="ml-auto" />
<!--      <div>-->
<!--        <a href="#" class="btn">Sign in</a>-->
<!--        <a href="#" class="btn btn-primary">Register</a>-->
<!--      </div>-->
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      trackers: this.$store.state.localStorage.list,
      links: [
          ['/', 'Markets'],
          ['/tracker', 'Tracker']
          // ['/trade', 'Trade']
      ],
    }
  },
  computed: {
    trackerCount() {
      return this.trackers.length
    }
  }
}
</script>
