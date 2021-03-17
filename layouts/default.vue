<template>
  <div class="min-h-screen bg-bg" :data-theme="dataTheme">
    <div class="w-full">
      <AppHeader/>
      <AppTrackedTop/>
      <Nuxt :keep-alive-props="{ max: 20 }" keep-alive/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    },
    dataTheme() {
      if(this.darkMode) return 'dark'
      else return 'light'
    }
  }
}
</script>
